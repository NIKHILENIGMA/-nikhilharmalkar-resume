import chalk from "chalk";
import boxen, { Options } from "boxen";

const options: Options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "blue",
};

export const resume = `
${chalk.blue.bold("=============================================")}
${chalk.green.bold("         NIKHIL HARMALKAR - SOFTWARE DEVELOPER         ")}
${chalk.blue.bold("=============================================")}

${chalk.bold("Summary:")}
Passionate software developer with a strong foundation in full-stack development. Experienced in building responsive web applications and implementing modern technologies. Committed to delivering high-quality solutions and continuously improving skills.

${chalk.bold("Contact Information:")}
${chalk.bold("Name:")} Nikhil Harmalkar
${chalk.bold("Location:")} Mumbai, India
${chalk.bold("Email:")} nickharmalkar18@gmail.com
${chalk.bold("GitHub:")} [GitHub Profile](https://github.com/NIKHILENIGMA)
${chalk.bold("LinkedIn:")} [LinkedIn Profile](https://www.linkedin.com/in/nikhil-harmalkar-0b1a4a1b6/)
${chalk.bold("Portfolio:")} [Portfolio Website](https://nikhilharmalkar.com)

${chalk.blue.bold("=============================================")}

${chalk.bold("Technical Skills:")}
• Languages: JavaScript, TypeScript, HTML, CSS, SQL, Python 
• Frameworks & Libraries: React, Node.js, Express, Tailwind CSS, shadcn/ui, Material UI
• State Management: Redux, Context API
• Testing tools: Jest (backend), Vitest (frontend)
• Databases: MongoDB, PostgreSQL
• Tools & Technologies: Git, Docker, Prisma, vite, postman, Figma
• Cloud Platforms: DigitalOcean and Heroku

${chalk.blue.bold("=============================================")}

${chalk.bold("Professional Experience:")}
${chalk.yellow("Frontend Developer Intern")} | Waayuvega | 2024
• Developed responsive web applications using modern frontend technologies
• Collaborated with cross-functional teams to deliver high-quality solutions

${chalk.blue.bold("=============================================")}

${chalk.bold("Education:")}
${chalk.yellow("Master of Science in Computer Science")}
Woolf University | 2024 - Present

${chalk.blue.bold("=============================================")}

${chalk.bold("Notable Projects:")}

${chalk.yellow("Nodedrafts")} - Full Stack Content Management Platform
• Built WYSIWYG editor with AI integration for enhanced writing experience
• Implemented seamless workflow for blog, marketing, and academic content creation

${chalk.yellow("Recipe Finder")} - Global Recipe Discovery Application  
• Developed search functionality for international cuisine exploration
• Created intuitive user interface for recipe browsing and filtering

${chalk.yellow("DevNotes")} - Chrome Extension for Developers
• Built systematic code snippet management tool for Chrome browser
• Streamlined developer workflow with organized code storage solution

${chalk.yellow("Portfolio Website")} - Personal Professional Showcase
• Designed responsive portfolio highlighting technical skills and projects
• Implemented modern web development best practices

${chalk.blue.bold("=============================================")}
`;

export const formattedResume = boxen(resume, options);

 