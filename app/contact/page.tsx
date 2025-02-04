"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, FieldErrors } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        Contact Us
      </motion.h1>
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border rounded"
          />
          {errors.name?.message && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.email?.message && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className="w-full p-2 border rounded"
            rows={4}
          ></textarea>
          {errors.message?.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground py-2 rounded-full hover:bg-primary/90 transition-colors"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </div>
  );
}
