import { image } from "framer-motion/client";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const skills = [
  { name: "React", level: 70, color: "#61DAFB" },
  { name: "JavaScript", level: 50, color: "#F7DF1E" },
  { name: "Tailwind CSS", level: 65, color: "#38BDF8" },
  { name: "HTML", level: 80, color: "#68A063" },
  { name: "CSS", level: 80, color: "#3776AB" },
  { name: "Flutter", level: 75, color: "#54C5F8" },
  { name: "Laravel", level: 70, color: "#FF2D20" },
];

export const education = [
  {
    year: "2015 – 2021",
    degree: "Sekolah Dasar",
    school: "SDN Pajajaran Bogor",
    desc: "Menyelesaikan pendidikan dasar dengan fondasi akademik yang kuat.",
    logo: "/logo1.png",
  },
  {
    year: "2021 – 2024",
    degree: "Sekolah Menengah Pertama",
    school: "SMP Negeri 2 Bogor (SPENDA)",
    desc: "Mengembangkan kemampuan akademik dan mulai mengenal dunia teknologi.",
    logo: "/logo2.png",
  },
  {
    year: "2024 – Sekarang",
    degree: "SMK Jurusan RPL",
    school: "SMK Wikrama Bogor",
    desc: "Mempelajari pemrograman, pengembangan web, dan jaringan komputer.",
    logo: "/logo.3.png",
  },
];

export const certificates = [
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Nama Lembaga / Platform",
    date: "06-Januari-2025",
    category: "#",
    image: "/serti_java.png", // isi dengan path gambar sertifikat, contoh: '/cert1.png'
    link: "/serti_java.png",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Nama Lembaga / Platform",
    date: "11-November-2024",
    category: "#",
    image: "/serti_pemrograman.png",
    link: "/serti_pemrograman.png",
  },
  {
    title: "Nama Sertifikat 3",
    issuer: "Nama Lembaga / Platform",
    date: "2023",
    category: "Programing",
    image: "",
    link: "",
  },
];

export const projects = [
  {
    title: "Web TixID",
    desc: "Web untuk memesan tiket bioskop",
    tech: ["Laravel", "MySql", "php", "JavaScript"],
    color: "from-violet-500 to-purple-600",
    image: "/laravel.png",
    target: "_blank",
    repo: "https://github.com/Bagassakhi/project-laravel-tixId-lite",
  },
  {
    title: "Web Daerah",
    desc: "Web ini di bikin untuk mencari kelurahan,kecamatan,provinsi, dan kota/kabupaten",
    tech: ["React", "Tailwind", "Vite"],
    color: "from-sky-500 to-blue-600",
    image: "/react-daerah.png",
    target: "_blank",
    repo: "https://github.com/Bagassakhi/Nusantara",
  },
  {
    title: "Web Flatze-Fake-Store",
    desc: "Web pertama Belajar react",
    tech: ["Next.js", "React", "Tailwind", "Vite"],
    color: "from-emerald-500 to-teal-600",
    image: "/flatze.png",
    demo: "#",
    repo: "#",
  },
  {
    title: "Web Menejemen Keuangan",
    desc: "Web untuk mengelola keuangan anda",
    tech: ["React", "Chart.js", "REST API"],
    color: "from-orange-500 to-amber-600",
    image: "/mart_duit.png",
    demo: "/mart_duit.png",
    repo: "#",
  },
];
