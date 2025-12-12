// Portfolio data extracted from resume
// Source: 16_10_2025

export const resumeData = {
  // Personal Information
  name: "Kesava Sushanth",
  title: "Computer Science Student — Full-Stack & ML | MongoDB, Node.js",
  tagline: "Research-driven student passionate about AI, IoT, and sustainable innovation",
  email: "2300030795cseird@gmail.com",
  phone: "+91 7013296469",
  location: "Krishna Lanka, Vijayawada, Andhra Pradesh, India 520013",
  github: "https://github.com/sushanth-kesava",
  linkedin: "https://linkedin.com/in/kesava-sushanth-59819b2a7",
  
  // Profile Summary
  summary: "Research-driven and detail-oriented student at Koneru Lakshmaiah University with expertise in IoT, AI, and renewable energy forecasting. Skilled in applying machine learning and data analysis to develop innovative, sustainable solutions. Demonstrated leadership as Vice president & Treasurer at VEDA, Co-Lead of KL Researchers Club, effectively managing projects and financial resources. Recognised for driving innovation through impactful projects and fostering collaborations across communities. Committed to blending technical knowledge with strategic planning to support sustainability and organisational growth.",
  
  // Education
  education: [
    {
      id: 1,
      degree: "B.Tech | Computer Science and Engineering, Minor in Bachelor of Business Administration - Digital Marketing and Automation",
      institution: "KL University",
      location: "Vijayawada",
      duration: "Jun 2023 - Present",
      gpa: "9.12",
      status: "Current"
    },
    {
      id: 2,
      degree: "Senior Secondary | MPC",
      institution: "Board of Intermediate Education (BIEAP), Sri Sarada Educational Institutions",
      location: "Sri Locations",
      duration: "Jan 2023",
      percentage: "84.2"
    },
    {
      id: 3,
      degree: "Secondary | 10th",
      institution: "Board Of Secondary Education Andhra Pradesh, Ravindra Bharathi Public School",
      location: "Andhra Pradesh",
      duration: "Jan 2021",
      percentage: "98"
    }
  ],
  
  // Experience (Leadership roles from Employment section)
  experience: [
    {
      id: 1,
      role: "Vice President & Treasurer",
      organization: "KL University, Vijayawada",
      duration: "Jan 2025 - Present",
      type: "leadership",
      achievements: [
        "Oversee financial planning, budgeting, and resource allocation for all club activities and events as Treasurer of VEDA",
        "Ensuring transparency and accountability in transactions",
        "Managing organizational finances and event budgets with precision"
      ]
    },
    {
      id: 2,
      role: "Volunteer",
      organization: "KL University, Vijayawada",
      duration: "Oct 2024 - Oct 2025",
      type: "volunteer",
      achievements: [
        "Supported event coordination at IoT Tech Expo 2023 organized by BES-II Department, KL University",
        "Enhancing participant support and showcasing innovative IoT projects",
        "Driving success of major tech exhibition"
      ]
    },
    {
      id: 3,
      role: "Co-lead",
      organization: "KL Researchers Club, KL University, Vijayawada",
      duration: "Jul 2024 - Jan 2025",
      type: "leadership",
      achievements: [
        "Coordinate cross-functional teams to ensure seamless execution of research projects and events",
        "Lead KL Researchers Club initiatives and strategic planning",
        "Foster collaboration between researchers and student community"
      ]
    }
  ],
  
  // Internships
  internships: [
    {
      id: 1,
      role: "AI/ML Research Intern on Wind Energy",
      company: "Ministry of New and Renewable Energy",
      location: "Chennai",
      duration: "Aug 2025 - Oct 2025",
      type: "research",
      achievements: [
        "Developed machine learning models to predict wind energy output using historical weather data and turbine performance metrics",
        "Implemented data preprocessing pipelines to clean and normalise large datasets collected from wind turbines",
        "Analyzed data from wind farms to identify patterns affecting turbine efficiency and maintenance schedules"
      ]
    },
    {
      id: 2,
      role: "Software Developer Intern",
      company: "Bluestock Fintech",
      location: "Remote",
      duration: "May 2025 - Jul 2025",
      type: "fullstack",
      achievements: [
        "Developed and tested web applications using JavaScript, HTML, and CSS, improving user interface functionality and responsiveness",
        "Collaborated with a team of developers to design and implement RESTful APIs using Node.js and Express, enhancing backend services efficiency",
        "Participated in code reviews and debugging sessions to maintain code quality and improve software performance"
      ]
    },
    {
      id: 3,
      role: "Web Developer Intern",
      company: "Eduskills",
      location: "Remote",
      duration: "Apr 2025 - Jun 2025",
      type: "frontend",
      achievements: [
        "Developed and maintained responsive websites using HTML, CSS, and JavaScript to enhance user experience and engagement",
        "Optimized website performance by identifying and fixing bugs, resulting in a 20% faster page load time"
      ]
    }
  ],
  
  // Projects
  projects: [
    {
      id: 1,
      title: "Wind Power Forecasting using ML&DL Techniques",
      subtitle: "IoT & DL Model used to improve Wind Power Forecasting",
      description: "Developed predictive models (ARIMA, XGBoost, CNN-LSTM) for accurate wind energy forecasting. Improved grid scheduling efficiency and renewable energy utilization through data-driven insights.",
      duration: "Aug 2025 - Oct 2025",
      tags: ["ML", "Research", "Backend"],
      techStack: ["Python", "TensorFlow", "ARIMA", "XGBoost", "CNN-LSTM", "IoT"],
      type: ["ml", "research", "backend"],
      badge: "MNRE Internship Project",
      links: {
        demo: null,
        github: null
      }
    },
    {
      id: 2,
      title: "SmartBreeze",
      subtitle: "AI-Based Cooler Stand",
      description: "SmartBreeze is an AI-powered air cooling solution that adapts in real time to occupants' positions, ensuring efficient and consistent airflow for optimal comfort. Protected under Intellectual Property India with design patent number 415552-001.",
      duration: "Aug 2023 - Jul 2024",
      tags: ["ML", "IoT", "Hardware"],
      techStack: ["AI/ML", "IoT", "Arduino", "Sensors"],
      type: ["ml", "research"],
      badge: "Patented",
      patentNumber: "415552-001",
      links: {
        demo: null,
        github: null
      }
    },
    {
      id: 3,
      title: "AgriGrow",
      subtitle: "Agriculture-based E-commerce Website",
      description: "AgriGrow is an agriculture-based e-commerce website that connects farmers, agricultural students, industries, and consumers on a single platform. Built using HTML5, CSS, and JavaScript with Canva UI design.",
      duration: "Jun 2023 - Feb 2024",
      tags: ["Frontend", "Web", "UI/UX"],
      techStack: ["HTML5", "CSS", "JavaScript", "Canva"],
      type: ["frontend"],
      badge: null,
      links: {
        demo: null,
        github: null
      }
    }
  ],
  
  // Skills grouped by category
  skills: {
    languages: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "C", level: 75 },
      { name: "C++", level: 75 },
      { name: "HTML5", level: 95 },
      { name: "CSS", level: 90 }
    ],
    web: [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express", level: 80 },
      { name: "RESTful APIs", level: 85 },
      { name: "Full-stack Development", level: 85 },
      { name: "Web Design & UI/UX", level: 80 }
    ],
    databases: [
      { name: "MongoDB", level: 85 },
      { name: "Database Management", level: 80 }
    ],
    tools: [
      { name: "Git/GitHub", level: 90 },
      { name: "Visual Studio Code", level: 95 },
      { name: "AWS Cloud", level: 70 },
      { name: "Arduino IDE", level: 75 },
      { name: "Canva", level: 85 },
      { name: "MacOS, Windows, Linux", level: 85 }
    ],
    ml: [
      { name: "Machine Learning", level: 80 },
      { name: "TensorFlow", level: 75 },
      { name: "Data Analytics", level: 85 },
      { name: "Data Visualization", level: 80 },
      { name: "Hadoop Framework", level: 65 }
    ],
    other: [
      { name: "Project Management", level: 85 },
      { name: "Team Leadership", level: 90 },
      { name: "Event Management", level: 85 },
      { name: "Financial Analysis", level: 80 },
      { name: "Salesforce AI Associate", level: 70 }
    ]
  },
  
  // Languages spoken
  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Telugu", proficiency: "Native" },
    { name: "Hindi", proficiency: "Proficient" },
    { name: "Tamil", proficiency: "Intermediate" }
  ],
  
  // Leadership roles (can combine with experience)
  leadership: [
    {
      id: 1,
      role: "Vice President & Treasurer",
      organization: "VEDA, KL University",
      duration: "Jan 2025 - Present",
      description: "Oversee financial planning, budgeting, and resource allocation for all club activities and events, ensuring transparency and accountability in transactions."
    },
    {
      id: 2,
      role: "Co-Lead",
      organization: "KL Researchers Club",
      duration: "Jul 2024 - Jan 2025",
      description: "Coordinate cross-functional teams to ensure seamless execution of research projects and events as Co-Lead of KL Researchers Club."
    }
  ],
  
  // Achievements
  achievements: [
    {
      id: 1,
      title: "SmartBreeze Design Patent",
      description: "AI-Based Cooler Stand, Design Patented Secured with 415552-001 certificate",
      date: "2024",
      type: "patent"
    },
    {
      id: 2,
      title: "AIC ALEAP WEHUB - Hackathon Finalist",
      description: "AgriGrow is selected for final round of hackathon conducted by Atal Incubation center & ALEAP WEHUB certificate",
      date: "2024",
      type: "hackathon"
    },
    {
      id: 3,
      title: "Hackmol 5.0 - National Level Hackathon",
      description: "36 hours Technical Hackathon, NIT, Jalandhar, Punjab, India certificate",
      date: "2024",
      type: "hackathon"
    },
    {
      id: 4,
      title: "ICANEA-2024 Conference",
      description: "An International conference ICANEA-2024 conducted by INSER & DST PURSE & dept of physics, KL University, Vijayawada certificate",
      date: "2024",
      type: "conference"
    }
  ]
};
