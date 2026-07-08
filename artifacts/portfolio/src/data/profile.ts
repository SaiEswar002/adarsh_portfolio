import nidhiSutharLetter from "@assets/WhatsApp_Image_2026-07-05_at_1.44.04_PM_1783494311645.jpeg";
import melissaNamchuLetter from "@assets/WhatsApp_Image_2026-07-05_at_1.44.05_PM_(1)_1783494311645.jpeg";

export const profile = {
  resumeUrl: `${import.meta.env.BASE_URL}documents/Annapareddy_Adarsh_Reddy_Resume.pdf`,

  name: "Annapareddy Adarsh Reddy",
  roleLine: "Business Administration Graduate — Entrepreneurship Development",
  aspirationLine: "Aspiring Business Analyst & Management Consultant",
  heroSummary: "BBA graduate specializing in Entrepreneurship Development, with coursework in business strategy, entrepreneurial finance, research methodology, and CSR & sustainability. Experienced in class leadership, cross-functional coordination, and applied business research through capstone and dissertation work.",
  
  quickStats: [
    { label: "CGPA", value: 8.40, suffix: "", decimals: 2 },
    { label: "Semesters Completed", value: 6, suffix: "", decimals: 0 },
    { label: "Internship", value: 1, suffix: "", decimals: 0 },
    { label: "Recommendation Letters", value: 2, suffix: "", decimals: 0 },
    { label: "Certifications", value: 9, suffix: "", decimals: 0 },
    { label: "Leadership Role", value: 1, suffix: "", decimals: 0 }
  ],
  
  education: [
    {
      institution: "Nalanda Vidya Niketan School, Vijayawada",
      degree: "Class X, then Intermediate",
      period: "2008-2020 (Class X), 2020-2022 (Intermediate)",
      note: null
    },
    {
      institution: "Woxsen University, Hyderabad",
      degree: "BBA, Entrepreneurship Development",
      period: "2023-2026",
      cgpa: "CGPA 8.40/10",
      note: "Corporate Internship Program and Dissertation (Phase I + Thesis Submission & Defence) were completed as part of the Woxsen curriculum."
    }
  ],
  
  academicPerformance: {
    caption: "Consistent upward academic trajectory — SGPA rose from 7.31 to 9.48 across six semesters.",
    data: [
      { semester: "Sem I", sgpa: 7.31 },
      { semester: "Sem II", sgpa: 7.37 },
      { semester: "Sem III", sgpa: 8.04 },
      { semester: "Sem IV", sgpa: 8.77 },
      { semester: "Sem V", sgpa: 9.48 },
      { semester: "Sem VI", sgpa: 9.43 }
    ]
  },
  
  experience: {
    title: "Summer Internship",
    organization: "Z.P. High School, Revendrapadu, Diggirala Mandal, Guntur Dt.",
    period: "15 May to 5 Jun 2024",
    responsibilities: [
      "Teaching assistance",
      "Attendance and documentation support",
      "Sports coordination",
      "Health & hygiene awareness",
      "Reading encouragement",
      "Remedial coaching",
      "Career counseling sessions"
    ]
  },
  
  leadership: {
    role: "Class Representative",
    organization: "School of Business, Woxsen University",
    responsibilities: [
      "Coordinated between students and faculty",
      "Managed class administration",
      "Ensured timely execution of activities/deliverables",
      "Communication",
      "Project/deliverable tracking",
      "Time management",
      "Organization"
    ]
  },
  
  recommendations: [
    {
      name: "Dr. Nidhi Suthar",
      title: "Assistant Professor, School of Business (Business Plan Implementation course)",
      summary: "Highlights strong aptitude for business strategy and practical problem-solving, confident and well-organized presentations, and the analytical thinking to weigh multiple perspectives before reaching well-reasoned decisions.",
      letterImage: nidhiSutharLetter,
      letterDate: "22 June 2026"
    },
    {
      name: "Dr. Melissa Zermit Namchu, Ph.D.",
      title: "Professor, Woxsen University (CSR & Sustainability course)",
      summary: "Commends reliable, proactive class leadership as Class Representative alongside strong analytical thinking and research skills demonstrated through a CSR & Sustainability capstone project.",
      letterImage: melissaNamchuLetter,
      letterDate: "1 July 2026"
    }
  ],
  
  certifications: [
    { name: "Bloomberg Market Concepts (BMC)", year: "2025", issuer: "Bloomberg" },
    { name: "Fundamentals of International Business", year: "2025", issuer: "Online Certification" },
    { name: "Managing Social and Human Capital", year: "2025", issuer: "Online Certification" },
    { name: "Organizational Behavior: How to Manage People", year: "2024", issuer: "Online Certification" },
    { name: "Macroeconomics for Business Management", year: "2024", issuer: "Online Certification" },
    { name: "Cost Accounting: Decision Making", year: "2024", issuer: "Online Certification" },
    { name: "An Intuitive Introduction to Probability", year: "2024", issuer: "Online Certification" },
    { name: "The Power of Markets II: Market Structure and Firm Behavior", year: "2023", issuer: "Online Certification" },
    { name: "Fundamentals of Management", year: "2023", issuer: "Online Certification" }
  ],
  
  skills: [
    {
      category: "Business & Analytical",
      items: ["Business Strategy", "Entrepreneurship", "Market Analysis", "Financial Accounting", "Cost Accounting", "Statistical Techniques for Analytics", "AI in Business"]
    },
    {
      category: "Tools",
      items: ["Microsoft Office", "Google Workspace", "Bloomberg Terminal"]
    },
    {
      category: "Interpersonal",
      items: ["Leadership", "Public Relations", "Teamwork", "Customer Relations"]
    },
    {
      category: "Languages",
      items: ["English", "Telugu", "Tamil"]
    }
  ],
  
  achievements: [
    { title: "Winner", context: "Punjab Golden Cup (national level)" },
    { title: "Champion", context: "Under-19 Reddy's Academy (Tamil Nadu)" },
    { title: "Top Bowler of the Tournament", context: "Andhra Cricket Association" },
    { title: "NCC A Certificate holder", context: "National Cadet Corps" }
  ],
  
  aboutTags: ["Business Strategy", "Entrepreneurship", "Leadership", "Research", "CSR & Sustainability", "Analytics"],
  
  contact: {
    address: "Mangalagiri, Andhra Pradesh 522503",
    phone: "+91 7075379979",
    email: "adarsh.reddy_2026@woxsen.edu.in",
    linkedin: "linkedin.com/in/adarshreddy07",
    invite: "I am actively seeking opportunities in business analysis, management consulting, or postgraduate management programs. I welcome connections for collaboration and research."
  }
};
