"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Calendar,
  PhoneIcon as WhatsApp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "./language-provider";
import { useToast } from "@/contexts/toast-context";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const planNames = [
  "Basic",
  "Professional",
  "Business",
  "Enterprise",
  "Custom",
] as const;
type PlanName = (typeof planNames)[number];

// Plan-specific time slots
const planTimesSlots: Record<PlanName, string[]> = {
  Basic: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
  Professional: [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ],
  Business: [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ],
  Enterprise: [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ],
  Custom: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
};

const planDurations: Record<PlanName, string> = {
  Basic: "30 minutes",
  Professional: "45 minutes",
  Business: "1 hour",
  Enterprise: "1.5 hours",
  Custom: "1 hour",
};

const selectedPlan: PlanName = "Basic"; // Gantilah ini dengan state yang didapat dari UI

export default function GetStartedModal({
  isOpen,
  onClose,
  selectedPlan = "Basic",
}: GetStartedModalProps) {
  const { t } = useLanguage();
  const { showToast } = useToast();
  const [step, setStep] = useState<"form" | "date" | "time">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [customTime, setCustomTime] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Get time slots based on selected plan
  const timeSlots =
    planTimesSlots[selectedPlan as PlanName] || planTimesSlots.Basic;
  const meetingDuration =
    planDurations[selectedPlan as PlanName] || "30 minutes";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", formData);
      showToast("success", "Message sent successfully!");
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      showToast("error", "Failed to send message. Please try again.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in your ${
        selectedPlan || ""
      } plan. Can we discuss further?`
    );
    window.open(`https://wa.me/+628973968416?text=${message}`, "_blank");
  };

  const handleScheduleMeeting = () => {
    if (selectedDate && (selectedTime || customTime)) {
      console.log("Meeting scheduled:", {
        plan: selectedPlan,
        date: selectedDate,
        time: selectedTime || customTime,
        duration: meetingDuration,
      });
      try {
        showToast("success", "Meeting scheduled successfully!");
        onClose();
      } catch (error) {
        console.error("Error scheduling meeting:", error);
        showToast("error", "Failed to schedule meeting. Please try again.");
      }
    } else {
      showToast("error", "Please select a date and time for the meeting.");
    }
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Array(35);
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    for (let i = 0; i < firstDay.getDay(); i++) {
      days[i] = new Date(year, month, i - firstDay.getDay() + 1);
    }

    for (let i = firstDay.getDay(); i < days.length; i++) {
      const day = i - firstDay.getDay() + 1;
      if (day <= lastDay.getDate()) {
        days[i] = new Date(year, month, day);
      } else {
        days[i] = new Date(year, month + 1, day - lastDay.getDate());
      }
    }

    return days;
  };

  const changeMonth = (increment: number) => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + increment,
        1
      )
    );
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left side - Form */}
              <div className="flex-1 p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">
                    {selectedPlan
                      ? `Get Started with ${selectedPlan}`
                      : "Get Started"}
                  </h2>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-2 border rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      type="submit"
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
                    >
                      <WhatsApp className="w-5 h-5 mr-2" />
                      WhatsApp
                    </button>
                  </div>
                </form>
              </div>

              {/* Right side - Meeting scheduling */}
              <div className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Schedule a Meeting
                </h3>
                {step === "form" && (
                  <div>
                    <p className="mb-4">
                      Would you like to schedule a {meetingDuration}{" "}
                      consultation with our team to discuss your {selectedPlan}{" "}
                      plan?
                    </p>
                    <button
                      onClick={() => setStep("date")}
                      className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md flex items-center"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Meeting
                    </button>
                  </div>
                )}
                {step === "date" && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <button onClick={() => changeMonth(-1)} className="p-2">
                        <ChevronLeft size={24} />
                      </button>
                      <h4 className="text-lg font-semibold">
                        {currentMonth.toLocaleString("default", {
                          month: "long",
                          year: "numeric",
                        })}
                      </h4>
                      <button onClick={() => changeMonth(1)} className="p-2">
                        <ChevronRight size={24} />
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {weekDays.map((day) => (
                        <div
                          key={day}
                          className="text-center font-medium text-sm py-2"
                        >
                          {day}
                        </div>
                      ))}
                      {getDaysInMonth(currentMonth).map((date, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedDate(date);
                            setStep("time");
                          }}
                          disabled={isPastDate(date)}
                          className={`p-2 rounded-full text-sm ${
                            isToday(date)
                              ? "bg-primary text-primary-foreground"
                              : isPastDate(date)
                              ? "text-gray-400 cursor-not-allowed"
                              : "hover:bg-secondary"
                          }`}
                        >
                          {date.getDate()}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {step === "time" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => setStep("date")}
                        className="flex items-center text-primary hover:text-primary/90"
                      >
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        Back
                      </button>
                      <h4 className="text-lg font-semibold">
                        Select a time for {selectedDate?.toLocaleDateString()}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Meeting duration: {meetingDuration}
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => {
                            setSelectedTime(time);
                            setCustomTime("");
                          }}
                          className={`p-2 rounded-md text-sm ${
                            selectedTime === time
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-secondary"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    <div>
                      <label
                        htmlFor="custom-time"
                        className="block text-sm font-medium mb-1"
                      >
                        Custom Time
                      </label>
                      <input
                        type="time"
                        id="custom-time"
                        value={customTime}
                        onChange={(e) => {
                          setCustomTime(e.target.value);
                          setSelectedTime(null);
                        }}
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <button
                      onClick={handleScheduleMeeting}
                      disabled={!selectedTime && !customTime}
                      className={`w-full bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center justify-center ${
                        !selectedTime &&
                        !customTime &&
                        "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Confirm Meeting
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
