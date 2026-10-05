const portfolio = {
    owner: {
        name: "Patrick Ruan",
        title: "Student at UC Berkeley School of Information",
        email: "patrick.ruan@berkeley.edu",
        location: "Berkeley, CA",
        bio: "Hi, I'm Patrick. I'm a student at the UC Berkeley School of Information. Outside of class, I enjoy building small side projects, exploring new tools, and learning about product design and user experience."
    },

    skills: [
        { name: "HTML5 & Semantic Markup", level: 75 },
        { name: "CSS3 & Responsive Design", level: 70 },
        { name: "JavaScript Fundamentals", level: 50 },
        { name: "Python & Data Analysis", level: 60 },
        { name: "Git & GitHub", level: 65 }
    ],

    projects: [
        {
            title: "Personal Portfolio",
            category: "frontend",
            description: "A responsive portfolio site built with semantic HTML, Flexbox, and CSS Grid.",
            technologies: ["HTML", "CSS", "Flexbox", "Grid"],
            completionDate: "2025-09-15",
            featured: true
        },
        {
            title: "Data Explorer",
            category: "data",
            description: "A Python notebook project analyzing public datasets with pandas.",
            technologies: ["Python", "pandas"],
            completionDate: "2025-06-01",
            featured: false
        },
        {
            title: "Contact Form",
            category: "frontend",
            description: "An accessible contact form with labeled inputs and validation.",
            technologies: ["HTML", "Forms"],
            completionDate: "2025-03-01",
            featured: false
        },
        {
            title: "UX Case Study",
            category: "design",
            description: "A design exploration focused on product usability and user research.",
            technologies: ["UX", "Design"],
            completionDate: "2024-12-01",
            featured: false
        }
    ],

    availability: {
        freelance: false,
        fullTime: false,
        partTime: true
    }
};
