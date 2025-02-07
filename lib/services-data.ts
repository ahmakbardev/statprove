const services: Record<string, { [key: string]: { title: string; description: string; shortDesc: string; image: string; features: string[]; process: { title: string; description: string }[]; pricing: { name: string; price: string; features: string[] }[] } }> = {
  "web-development": {
    en: {
      title: "Web Development",
      description: "Custom websites built with modern technologies and best practices.",
      shortDesc: "Build fast, responsive, and modern websites",
      image: "/images/services/web-development.jpg",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Modern Technologies",
        "Custom Functionality",
        "Content Management",
      ],
      process: [
        {
          title: "Discovery",
          description: "Understanding your business needs and goals",
        },
        {
          title: "Design",
          description: "Creating the perfect look and feel for your brand",
        },
        {
          title: "Development",
          description: "Building your website with modern technologies",
        },
        {
          title: "Testing",
          description: "Ensuring everything works perfectly",
        },
        {
          title: "Launch",
          description: "Going live with your new website",
        },
      ],
      pricing: [
        {
          name: "Basic",
          price: "$999",
          features: ["5 Pages", "Responsive Design", "Basic SEO", "Contact Form", "1 Month Support"],
        },
        {
          name: "Professional",
          price: "$2,499",
          features: [
            "10 Pages",
            "Responsive Design",
            "Advanced SEO",
            "Custom Forms",
            "3 Months Support",
            "Analytics Integration",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Unlimited Pages",
            "Custom Design",
            "Full SEO Package",
            "Custom Features",
            "1 Year Support",
            "Priority Support",
          ],
        },
      ],
    },
    id: {
      title: "Pengembangan Web",
      description: "Situs web kustom dibangun dengan teknologi modern dan praktik terbaik.",
      shortDesc: "Bangun situs web yang cepat, responsif, dan modern",
      image: "/images/services/web-development.jpg",
      features: [
        "Desain Responsif",
        "Optimasi SEO",
        "Optimasi Kinerja",
        "Teknologi Modern",
        "Fungsionalitas Kustom",
        "Manajemen Konten",
      ],
      process: [
        {
          title: "Penemuan",
          description: "Memahami kebutuhan dan tujuan bisnis Anda",
        },
        {
          title: "Desain",
          description: "Menciptakan tampilan dan nuansa yang sempurna untuk merek Anda",
        },
        {
          title: "Pengembangan",
          description: "Membangun situs web Anda dengan teknologi modern",
        },
        {
          title: "Pengujian",
          description: "Memastikan semuanya berfungsi dengan sempurna",
        },
        {
          title: "Peluncuran",
          description: "Meluncurkan situs web baru Anda",
        },
      ],
      pricing: [
        {
          name: "Dasar",
          price: "$999",
          features: ["5 Halaman", "Desain Responsif", "SEO Dasar", "Formulir Kontak", "1 Bulan Dukungan"],
        },
        {
          name: "Profesional",
          price: "$2,499",
          features: [
            "10 Halaman",
            "Desain Responsif",
            "SEO Lanjutan",
            "Formulir Kustom",
            "3 Bulan Dukungan",
            "Integrasi Analitik",
          ],
        },
        {
          name: "Perusahaan",
          price: "Kustom",
          features: [
            "Halaman Tak Terbatas",
            "Desain Kustom",
            "Paket SEO Lengkap",
            "Fitur Kustom",
            "1 Tahun Dukungan",
            "Dukungan Prioritas",
          ],
        },
      ],
    },
  },
  ecommerce: {
    en: {
      title: "E-commerce Solutions",
      description: "Build and scale your online store with our comprehensive e-commerce solutions.",
      shortDesc: "Launch your online store with powerful features",
      image: "/images/services/ecommerce.jpg",
      features: [
        "Secure Payment Processing",
        "Inventory Management",
        "Order Tracking",
        "Customer Accounts",
        "Product Reviews",
        "Analytics Dashboard",
      ],
      process: [
        {
          title: "Planning",
          description: "Defining your e-commerce strategy",
        },
        {
          title: "Design",
          description: "Creating an engaging shopping experience",
        },
        {
          title: "Development",
          description: "Building your online store",
        },
        {
          title: "Integration",
          description: "Setting up payments and shipping",
        },
        {
          title: "Launch",
          description: "Opening your store to customers",
        },
      ],
      pricing: [
        {
          name: "Starter",
          price: "$1,499",
          features: [
            "Up to 100 Products",
            "Basic Payment Gateway",
            "Order Management",
            "Basic Analytics",
            "1 Month Support",
          ],
        },
        {
          name: "Business",
          price: "$2,999",
          features: [
            "Unlimited Products",
            "Multiple Payment Gateways",
            "Inventory Management",
            "Advanced Analytics",
            "3 Months Support",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: ["Custom Features", "Multiple Currencies", "API Integration", "Priority Support", "1 Year Support"],
        },
      ],
    },
    id: {
      title: "Solusi E-niaga",
      description: "Bangun dan kembangkan toko online Anda dengan solusi e-niaga komprehensif kami.",
      shortDesc: "Luncurkan toko online Anda dengan fitur-fitur yang ampuh",
      image: "/images/services/ecommerce.jpg",
      features: [
        "Pemrosesan Pembayaran yang Aman",
        "Manajemen Inventaris",
        "Pelacakan Pesanan",
        "Akun Pelanggan",
        "Ulasan Produk",
        "Dasbor Analitik",
      ],
      process: [
        {
          title: "Perencanaan",
          description: "Mendefinisikan strategi e-niaga Anda",
        },
        {
          title: "Desain",
          description: "Menciptakan pengalaman belanja yang menarik",
        },
        {
          title: "Pengembangan",
          description: "Membangun toko online Anda",
        },
        {
          title: "Integrasi",
          description: "Menetapkan pembayaran dan pengiriman",
        },
        {
          title: "Peluncuran",
          description: "Membuka toko Anda untuk pelanggan",
        },
      ],
      pricing: [
        {
          name: "Pemula",
          price: "$1,499",
          features: [
            "Hingga 100 Produk",
            "Gerbang Pembayaran Dasar",
            "Manajemen Pesanan",
            "Analitik Dasar",
            "1 Bulan Dukungan",
          ],
        },
        {
          name: "Bisnis",
          price: "$2,999",
          features: [
            "Produk Tak Terbatas",
            "Beberapa Gerbang Pembayaran",
            "Manajemen Inventaris",
            "Analitik Lanjutan",
            "3 Bulan Dukungan",
          ],
        },
        {
          name: "Perusahaan",
          price: "Kustom",
          features: ["Fitur Kustom", "Beberapa Mata Uang", "Integrasi API", "Dukungan Prioritas", "1 Tahun Dukungan"],
        },
      ],
    },
  },
  "web-apps": {
    en: {
      title: "Web Applications",
      description: "Custom web applications that solve complex business problems.",
      shortDesc: "Transform your business with custom web apps",
      image: "/images/services/web-apps.jpg",
      features: [
        "Custom Development",
        "Real-time Features",
        "User Authentication",
        "Data Security",
        "API Integration",
        "Scalable Architecture",
      ],
      process: [
        {
          title: "Analysis",
          description: "Understanding your requirements",
        },
        {
          title: "Architecture",
          description: "Planning the technical structure",
        },
        {
          title: "Development",
          description: "Building your application",
        },
        {
          title: "Testing",
          description: "Ensuring quality and performance",
        },
        {
          title: "Deployment",
          description: "Launching your application",
        },
      ],
      pricing: [
        {
          name: "Basic",
          price: "$4,999",
          features: [
            "Basic Features",
            "User Authentication",
            "Basic API Integration",
            "Basic Support",
            "1 Month Support",
          ],
        },
        {
          name: "Advanced",
          price: "$9,999",
          features: ["Advanced Features", "Complex Workflows", "Multiple APIs", "Priority Support", "3 Months Support"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: ["Custom Features", "Scalable Architecture", "Full Integration", "24/7 Support", "1 Year Support"],
        },
      ],
    },
    id: {
      title: "Aplikasi Web",
      description: "Aplikasi web kustom yang memecahkan masalah bisnis yang kompleks.",
      shortDesc: "Transformasikan bisnis Anda dengan aplikasi web kustom",
      image: "/images/services/web-apps.jpg",
      features: [
        "Pengembangan Kustom",
        "Fitur Real-time",
        "Otentikasi Pengguna",
        "Keamanan Data",
        "Integrasi API",
        "Arsitektur yang Skalabel",
      ],
      process: [
        {
          title: "Analisis",
          description: "Memahami kebutuhan Anda",
        },
        {
          title: "Arsitektur",
          description: "Merencanakan struktur teknis",
        },
        {
          title: "Pengembangan",
          description: "Membangun aplikasi Anda",
        },
        {
          title: "Pengujian",
          description: "Memastikan kualitas dan kinerja",
        },
        {
          title: "Penerapan",
          description: "Meluncurkan aplikasi Anda",
        },
      ],
      pricing: [
        {
          name: "Dasar",
          price: "$4,999",
          features: ["Fitur Dasar", "Otentikasi Pengguna", "Integrasi API Dasar", "Dukungan Dasar", "1 Bulan Dukungan"],
        },
        {
          name: "Lanjutan",
          price: "$9,999",
          features: ["Fitur Lanjutan", "Alur Kerja Kompleks", "Beberapa API", "Dukungan Prioritas", "3 Bulan Dukungan"],
        },
        {
          name: "Perusahaan",
          price: "Kustom",
          features: [
            "Fitur Kustom",
            "Arsitektur yang Skalabel",
            "Integrasi Lengkap",
            "Dukungan 24/7",
            "1 Tahun Dukungan",
          ],
        },
      ],
    },
  },
  design: {
    en: {
      title: "UI/UX Design",
      description: "Create beautiful and intuitive user interfaces that convert.",
      shortDesc: "Design that delights your users",
      image: "/images/services/design.jpg",
      features: ["User Research", "Wireframing", "Visual Design", "Prototyping", "Usability Testing", "Design Systems"],
      process: [
        {
          title: "Research",
          description: "Understanding your users",
        },
        {
          title: "Wireframes",
          description: "Planning the user experience",
        },
        {
          title: "Design",
          description: "Creating the visual interface",
        },
        {
          title: "Prototype",
          description: "Testing the interaction",
        },
        {
          title: "Handoff",
          description: "Delivering the final designs",
        },
      ],
      pricing: [
        {
          name: "Basic",
          price: "$1,999",
          features: ["Basic UI Design", "5 Pages", "Basic Animations", "Design Files", "1 Round of Revisions"],
        },
        {
          name: "Professional",
          price: "$3,999",
          features: ["Full UI/UX Design", "10 Pages", "Custom Animations", "Design System", "3 Rounds of Revisions"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Complete Design",
            "Unlimited Pages",
            "Advanced Animations",
            "Design Library",
            "Unlimited Revisions",
          ],
        },
      ],
    },
    id: {
      title: "Desain UI/UX",
      description: "Buat antarmuka pengguna yang indah dan intuitif yang dapat dikonversi.",
      shortDesc: "Desain yang menyenangkan pengguna Anda",
      image: "/images/services/design.jpg",
      features: [
        "Riset Pengguna",
        "Wireframing",
        "Desain Visual",
        "Prototyping",
        "Pengujian Kegunaan",
        "Sistem Desain",
      ],
      process: [
        {
          title: "Riset",
          description: "Memahami pengguna Anda",
        },
        {
          title: "Wireframes",
          description: "Merencanakan pengalaman pengguna",
        },
        {
          title: "Desain",
          description: "Membuat antarmuka visual",
        },
        {
          title: "Prototipe",
          description: "Menguji interaksi",
        },
        {
          title: "Serah Terima",
          description: "Mengirim desain akhir",
        },
      ],
      pricing: [
        {
          name: "Dasar",
          price: "$1,999",
          features: ["Desain UI Dasar", "5 Halaman", "Animasi Dasar", "File Desain", "1 Putaran Revisi"],
        },
        {
          name: "Profesional",
          price: "$3,999",
          features: ["Desain UI/UX Lengkap", "10 Halaman", "Animasi Kustom", "Sistem Desain", "3 Putaran Revisi"],
        },
        {
          name: "Perusahaan",
          price: "Kustom",
          features: [
            "Desain Lengkap",
            "Halaman Tak Terbatas",
            "Animasi Lanjutan",
            "Perpustakaan Desain",
            "Revisi Tak Terbatas",
          ],
        },
      ],
    },
  },
  maintenance: {
    en: {
      title: "Website Maintenance",
      description: "Keep your website running smoothly with our maintenance services.",
      shortDesc: "Ensure your website stays up-to-date and secure",
      image: "/images/services/maintenance.jpg",
      features: [
        "Regular Updates",
        "Security Monitoring",
        "Performance Optimization",
        "Backup Management",
        "Technical Support",
        "Content Updates",
      ],
      process: [
        {
          title: "Audit",
          description: "Reviewing your current setup",
        },
        {
          title: "Plan",
          description: "Creating a maintenance schedule",
        },
        {
          title: "Monitor",
          description: "Tracking performance and security",
        },
        {
          title: "Update",
          description: "Implementing improvements",
        },
        {
          title: "Report",
          description: "Regular status updates",
        },
      ],
      pricing: [
        {
          name: "Basic",
          price: "$99/mo",
          features: ["Monthly Updates", "Basic Security", "Basic Backup", "Email Support", "48h Response Time"],
        },
        {
          name: "Professional",
          price: "$199/mo",
          features: ["Weekly Updates", "Advanced Security", "Daily Backup", "Priority Support", "24h Response Time"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: ["Custom Schedule", "Premium Security", "Real-time Backup", "24/7 Support", "1h Response Time"],
        },
      ],
    },
    id: {
      title: "Pemeliharaan Situs Web",
      description: "Jaga agar situs web Anda tetap berjalan lancar dengan layanan pemeliharaan kami.",
      shortDesc: "Pastikan situs web Anda tetap mutakhir dan aman",
      image: "/images/services/maintenance.jpg",
      features: [
        "Pembaruan Berkala",
        "Pemantauan Keamanan",
        "Optimasi Kinerja",
        "Manajemen Cadangan",
        "Dukungan Teknis",
        "Pembaruan Konten",
      ],
      process: [
        {
          title: "Audit",
          description: "Meninjau pengaturan Anda saat ini",
        },
        {
          title: "Rencana",
          description: "Membuat jadwal pemeliharaan",
        },
        {
          title: "Pantau",
          description: "Melacak kinerja dan keamanan",
        },
        {
          title: "Perbarui",
          description: "Menerapkan peningkatan",
        },
        {
          title: "Laporan",
          description: "Pembaruan status berkala",
        },
      ],
      pricing: [
        {
          name: "Dasar",
          price: "$99/bulan",
          features: ["Pembaruan Bulanan", "Keamanan Dasar", "Cadangan Dasar", "Dukungan Email", "Waktu Respons 48 jam"],
        },
        {
          name: "Profesional",
          price: "$199/bulan",
          features: [
            "Pembaruan Mingguan",
            "Keamanan Lanjutan",
            "Cadangan Harian",
            "Dukungan Prioritas",
            "Waktu Respons 24 jam",
          ],
        },
        {
          name: "Perusahaan",
          price: "Kustom",
          features: ["Jadwal Kustom", "Keamanan Premium", "Cadangan Real-time", "Dukungan 24/7", "Waktu Respons 1 jam"],
        },
      ],
    },
  },
  seo: {
    en: {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and online visibility.",
      shortDesc: "Get found by more customers online",
      image: "/images/services/seo.jpg",
      features: [
        "Keyword Research",
        "On-page SEO",
        "Technical SEO",
        "Content Strategy",
        "Link Building",
        "Performance Analysis",
      ],
      process: [
        {
          title: "Audit",
          description: "Analyzing your current SEO",
        },
        {
          title: "Strategy",
          description: "Developing an SEO plan",
        },
        {
          title: "Optimize",
          description: "Implementing improvements",
        },
        {
          title: "Monitor",
          description: "Tracking results",
        },
        {
          title: "Report",
          description: "Regular performance updates",
        },
      ],
      pricing: [
        {
          name: "Basic",
          price: "$499/mo",
          features: ["Basic Keywords", "On-page SEO", "Monthly Report", "Basic Support", "3 Month Contract"],
        },
        {
          name: "Professional",
          price: "$999/mo",
          features: ["Advanced Keywords", "Technical SEO", "Weekly Reports", "Priority Support", "6 Month Contract"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: ["Custom Strategy", "Full SEO Suite", "Custom Reports", "Dedicated Manager", "Custom Contract"],
        },
      ],
    },
    id: {
      title: "Optimasi SEO",
      description: "Tingkatkan peringkat mesin pencari dan visibilitas online Anda.",
      shortDesc: "Ditemukan oleh lebih banyak pelanggan online",
      image: "/images/services/seo.jpg",
      features: [
        "Riset Kata Kunci",
        "SEO On-page",
        "SEO Teknis",
        "Strategi Konten",
        "Pembuatan Link",
        "Analisis Kinerja",
      ],
      process: [
        {
          title: "Audit",
          description: "Menganalisis SEO Anda saat ini",
        },
        {
          title: "Strategi",
          description: "Mengembangkan rencana SEO",
        },
        {
          title: "Optimalkan",
          description: "Menerapkan peningkatan",
        },
        {
          title: "Pantau",
          description: "Melacak hasil",
        },
        {
          title: "Laporan",
          description: "Pembaruan kinerja berkala",
        },
      ],
      pricing: [
        {
          name: "Dasar",
          price: "$499/bulan",
          features: ["Kata Kunci Dasar", "SEO On-page", "Laporan Bulanan", "Dukungan Dasar", "Kontrak 3 Bulan"],
        },
        {
          name: "Profesional",
          price: "$999/bulan",
          features: ["Kata Kunci Lanjutan", "SEO Teknis", "Laporan Mingguan", "Dukungan Prioritas", "Kontrak 6 Bulan"],
        },
        {
          name: "Perusahaan",
          price: "Kustom",
          features: ["Strategi Kustom", "Paket SEO Lengkap", "Laporan Kustom", "Manajer Khusus", "Kontrak Kustom"],
        },
      ],
    },
  },
}

export type ServiceKey = keyof typeof services

export { services };