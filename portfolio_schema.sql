-- Portfolio MySQL Schema and Initial Data
-- Generated based on Backend ERD

CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- 1. Profiles
CREATE TABLE IF NOT EXISTS profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    job_title VARCHAR(100),
    availability VARCHAR(100),
    email VARCHAR(255),
    phone VARCHAR(50),
    location VARCHAR(255),
    website_info VARCHAR(255),
    about_text TEXT,
    github_url VARCHAR(255),
    linkedin_url VARCHAR(255),
    twitter_url VARCHAR(255),
    use_profile_pic BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. Skill Categories
CREATE TABLE IF NOT EXISTS skill_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT,
    name VARCHAR(100) NOT NULL,
    sort_order INT DEFAULT 0,
    FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);

-- 3. Skills
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    name VARCHAR(100) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES skill_categories(id) ON DELETE CASCADE
);

-- 4. Work Experience
CREATE TABLE IF NOT EXISTS experience (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT,
    role VARCHAR(100) NOT NULL,
    company VARCHAR(150),
    period VARCHAR(100),
    sort_order INT DEFAULT 0,
    FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);

-- 5. Experience Bullets
CREATE TABLE IF NOT EXISTS experience_bullets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    experience_id INT,
    content TEXT NOT NULL,
    sort_order INT DEFAULT 0,
    FOREIGN KEY (experience_id) REFERENCES experience(id) ON DELETE CASCADE
);

-- 6. Education
CREATE TABLE IF NOT EXISTS education (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT,
    role_degree VARCHAR(150),
    institution VARCHAR(150),
    period VARCHAR(100),
    sort_order INT DEFAULT 0,
    FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);

-- 7. Projects
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    project_type ENUM('web_system', 'static', 'general') DEFAULT 'general',
    link VARCHAR(255),
    sort_order INT DEFAULT 0,
    FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);

-- 8. Project Tags
CREATE TABLE IF NOT EXISTS project_tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    name VARCHAR(50),
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

-- 9. Languages
CREATE TABLE IF NOT EXISTS languages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT,
    name VARCHAR(50),
    proficiency_level VARCHAR(50),
    FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);

-- 10. Certifications
CREATE TABLE IF NOT EXISTS certifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT,
    name VARCHAR(150),
    issuer VARCHAR(150),
    year VARCHAR(10),
    icon_emoji VARCHAR(10),
    FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);

-- 11. AI Skills
CREATE TABLE IF NOT EXISTS ai_skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT,
    name VARCHAR(100),
    FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);

-- 12. AI Tools
CREATE TABLE IF NOT EXISTS ai_tools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT,
    title VARCHAR(150),
    icon_emoji VARCHAR(10),
    badge_label VARCHAR(50),
    description TEXT,
    workflow_link VARCHAR(255),
    sort_order INT DEFAULT 0,
    FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);

-- 13. AI Tool Tags
CREATE TABLE IF NOT EXISTS ai_tool_tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ai_tool_id INT,
    name VARCHAR(50),
    FOREIGN KEY (ai_tool_id) REFERENCES ai_tools(id) ON DELETE CASCADE
);

-- ==========================================
--  INITIAL DATA POPULATION
-- ==========================================

-- Insert Profile
INSERT INTO profiles (id, full_name, job_title, availability, email, phone, location, website_info, about_text, github_url, linkedin_url, twitter_url)
VALUES (1, 'Immanuel Mahusay', 'Software Engineer', 'Open to opportunities', 'immanuel@qstrike.com | immanuelmahusay@mcgi.org', '+63 976 036 0023', 'P2-B2-L35 Highview, Apalit, Philippines', 'Filipino  •  Dec 24, 1991', 'Experienced in developing seamless user interfaces using HTML, CSS, and JavaScript. Utilizes modern frameworks and libraries to enhance functionality and improve the user experience. Solid grasp of responsive design principles and excels in effective collaboration within a team environment.', 'https://github.com/immanuelmm', 'https://linkedin.com/in/', 'https://twitter.com/');

-- Skill Categories
INSERT INTO skill_categories (id, profile_id, name, sort_order) VALUES (1, 1, 'Frontend', 1);
INSERT INTO skill_categories (id, profile_id, name, sort_order) VALUES (2, 1, 'Backend & DB', 2);
INSERT INTO skill_categories (id, profile_id, name, sort_order) VALUES (3, 1, 'Tools & Others', 3);
INSERT INTO skill_categories (id, profile_id, name, sort_order) VALUES (4, 1, 'Main Skills Pool', 4);

-- Skills
INSERT INTO skills (category_id, name) VALUES 
(1, 'Vue.js'), (1, 'TypeScript'), (1, 'Angular'), (1, 'Pixi.js'), (1, 'HTML'), (1, 'CSS'),
(2, 'Node.js'), (2, 'Ruby on Rails'), (2, '.NET'), (2, 'PHP'), (2, 'MySQL'),
(3, 'Git'), (3, 'GitLab'), (3, 'Heroku'), (3, 'Agile'), (3, 'OOP'),
(4, 'Problem-Solving'), (4, 'Teamwork'), (4, 'Adaptability'), (4, 'Time Management'), (4, 'Design Patterns'), (4, 'Testing'), (4, 'Debugging'), (4, 'Algorithms'), (4, 'Leadership'), (4, 'Interpersonal Skills'), (4, 'Work Ethic'), (4, 'Creativity');

-- Languages
INSERT INTO languages (profile_id, name, proficiency_level) VALUES (1, 'Filipino', 'Native'), (1, 'English', 'Proficient');

-- Experience
INSERT INTO experience (id, profile_id, role, company, period, sort_order) VALUES 
(1, 1, 'Software Engineer Lead', 'QuickStrike Innovation Phil. · Telebastagan', 'March 2021 – Present', 1),
(2, 1, 'Front-End Developer', 'MCGI IT · Apalit, Pampanga', 'September 2024 – Present', 2),
(3, 1, 'Volunteer Web Designer', 'Laverdad Christian College · Pampanga, Philippines', 'November 2014 – December 2015', 3),
(4, 1, 'Data Encoder', 'Fashion Rack Designer Inc. · Mandaluyong City, Philippines', 'April 2013 – August 2014', 4);

-- Experience Bullets
INSERT INTO experience_bullets (experience_id, content, sort_order) VALUES 
(1, 'Solution Analysis', 1),
(1, 'Developed and maintained interactive web applications using Vue.js and JavaScript.', 2),
(1, 'Implemented responsive UI/UX designs to enhance user experience and accessibility.', 3),
(1, 'Collaborated with designers and backend developers to deliver scalable, maintainable solutions.', 4),
(1, 'Managed state handling using Vuex/Pinia for efficient data flow.', 5),
(1, 'Conducted code reviews and implemented best practices to improve application stability.', 6),
(2, 'Built dynamic, reusable components for a modular and maintainable codebase (MCGI Hub).', 1),
(2, 'Worked on improving performance and security.', 2),
(2, 'Integrated third-party libraries and tools to enhance project functionality.', 3),
(2, 'Debugged and resolved front-end issues, improving system reliability.', 4),
(3, 'Redesigned Laverdad\'s information system using Bootstrap.', 1),
(3, 'Fetched data from an API middleware through AJAX for frontend consumption.', 2),
(3, 'Validated all forms using jQuery.', 3),
(4, 'Forecasted monthly sales data per branch using Excel to generate reports for the CEO.', 1),
(4, 'Encoded newly arrived products into the internal system and generated management data records.', 2);

-- Education
INSERT INTO education (profile_id, role_degree, institution, period, sort_order) VALUES 
(1, 'Vocational – Full Stack Web Development', 'Avion School', 'February 2020', 1),
(1, 'Bachelor of Science in Information Systems', 'Laverdad Christian College', 'January 2018', 2),
(1, 'TESDA – Computer Programming Course', 'Laverdad Christian College', 'January 2013', 3);

-- Web Systems
INSERT INTO projects (id, profile_id, title, description, project_type, link, sort_order) VALUES 
(1, 1, 'LoanPro – Loan Management System', 'A full-featured loan management web app with borrower tracking, loan lifecycle management, amortization schedules, payment recording, PDF receipts, and a KPI dashboard.', 'web_system', 'https://loanpro-ui.onrender.com/#dashboard', 1),
(2, 1, 'MCGI Hub', 'Contributed to the MCGI Hub – a large-scale internal web application for MCGI. Built dynamic, reusable Vue.js components with a focus on performance, security, and scalability.', 'web_system', 'https://hub.mcgi.org/calendar', 2),
(3, 1, 'Axe Uniforms – E-Commerce System', 'Professional uniform and apparel e-commerce system with responsive product listings, shopping cart, and checkout flow for a Philippine-based uniform supplier.', 'web_system', 'https://axeuniforms.com/', 3),
(4, 1, 'PG Uniforms – Corporate System', 'Corporate web system for PG Uniforms, a Philippine uniform manufacturer. Clean, responsive design showcasing product catalog and company information.', 'web_system', 'https://www.pguniforms.com/', 4);

-- Project Tags (Web Systems)
INSERT INTO project_tags (project_id, name) VALUES 
(1, 'JavaScript'), (1, 'Node.js'), (1, 'MySQL'), (1, 'HTML'), (1, 'CSS'), (1, 'PDF'),
(2, 'Vue.js'), (2, 'TypeScript'), (2, 'JavaScript'), (2, 'CSS'),
(3, 'HTML'), (3, 'CSS'), (3, 'JavaScript'), (3, 'E-Commerce'),
(4, 'HTML'), (4, 'CSS'), (4, 'JavaScript'), (4, 'Responsive');

-- Static Projects
INSERT INTO projects (id, profile_id, title, description, project_type, link, sort_order) VALUES 
(5, 1, 'Survivor Game – Interactive Web App', 'An interactive browser-based Survivor-themed game with dynamic game logic, player management, voting mechanics, and engaging UI built entirely with vanilla JavaScript.', 'static', 'https://immanuelmm.github.io/Survivor_2/', 5),
(6, 1, 'OneKnowledge CLLC – Company Profile', 'Company profile website for OneKnowledge CLLC with smooth navigation, responsive layout, and professional multi-page design.', 'static', 'https://immanuelmm.github.io/OneKnowledgeCLLC/', 6),
(7, 1, 'KR – Landing Page', 'A sleek landing page with modern UI design, smooth scroll effects, and a fully responsive layout optimized for all screen sizes.', 'static', 'https://immanuelmm.github.io/KR/', 7),
(8, 1, 'Kirstin Regalado – Artist Portfolio', 'A personal portfolio fan site for artist Kirstin Regalado with a music-themed aesthetic, photo gallery, and smooth animations.', 'static', 'https://immanuelmm.github.io/kirstin-regalado/', 8),
(9, 1, 'Personal Portfolio v1 (Student)', 'My original portfolio website built as a student – a milestone project showcasing early web dev skills with HTML, CSS, and JavaScript.', 'static', 'https://immanuelmm.github.io/My-portfolio/', 9);

-- Project Tags (Static)
INSERT INTO project_tags (project_id, name) VALUES 
(5, 'JavaScript'), (5, 'HTML'), (5, 'CSS'), (5, 'Game Logic'),
(6, 'HTML'), (6, 'CSS'), (6, 'JavaScript'), (6, 'Bootstrap'),
(7, 'HTML'), (7, 'CSS'), (7, 'JavaScript'), (7, 'Responsive'),
(8, 'HTML'), (8, 'CSS'), (8, 'JavaScript'), (8, 'Bootstrap'),
(9, 'HTML'), (9, 'CSS'), (9, 'JavaScript'), (9, 'Bootstrap');

-- AI Skills
INSERT INTO ai_skills (profile_id, name) VALUES 
(1, 'n8n Automation'), (1, 'AI Workflow Design'), (1, 'Antigravity AI'),
(1, 'Prompt Engineering'), (1, 'AI Integration'), (1, 'LLM Orchestration'),
(1, 'Agentic Coding'), (1, 'REST AI APIs');

-- AI Tools
INSERT INTO ai_tools (id, profile_id, title, icon_emoji, badge_label, description, workflow_link, sort_order) VALUES 
(1, 1, 'n8n Workflow Automation', '⚡', 'Live', 'Built automated workflows using n8n to orchestrate multi-step processes, API integrations, and data pipelines — reducing manual effort and enabling AI-driven task automation.', 'https://n8n-immanuel.onrender.com/workflow/KQtNoYGqnGs19BWA/executions/2', 1),
(2, 1, 'Antigravity AI – Agentic Coding', '🤖', 'Active', 'Leverages Google DeepMind\'s Antigravity AI assistant for agentic pair programming — using AI to plan, scaffold, debug, and ship full-stack features with intelligent code generation.', '', 2),
(3, 1, 'Prompt Engineering & LLM Integration', '🧠', 'Skill', 'Designs structured prompts for LLMs (Large Language Models), integrates AI APIs into web applications, and builds intelligent automation pipelines using modern AI tools.', '', 3);

-- AI Tool Tags
INSERT INTO ai_tool_tags (ai_tool_id, name) VALUES 
(1, 'n8n'), (1, 'Workflow Automation'), (1, 'REST API'), (1, 'JSON'), (1, 'Webhooks'),
(2, 'Antigravity AI'), (2, 'Google DeepMind'), (2, 'Agentic Coding'), (2, 'AI Pair Programming'),
(3, 'Prompt Engineering'), (3, 'LLM'), (3, 'AI APIs'), (3, 'OpenAI'), (3, 'Automation');

-- Certifications
INSERT INTO certifications (profile_id, name, issuer, year, icon_emoji) VALUES 
(1, 'Full Stack Web Development', 'Avion School', '2020', '🎓'),
(1, 'TESDA NC II – Computer Programming', 'TESDA / Laverdad Christian College', '2013', '📜');
