// App.jsx
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaRobot, FaMapMarkerAlt, FaGraduationCap, FaCode, FaTrophy, FaPython, FaDatabase, FaDownload, FaBars, FaTimes } from 'react-icons/fa';
import {SiPytorch, SiScikitlearn, SiAmazonwebservices} from "react-icons/si";
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });

      // Scroll reveal animation
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    emailjs.init("xXsMlqtJuru6WDxkC"); // Replace with your EmailJS public key
  }, []);
  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await emailjs.send(
        "service_cr7mg2o",
        "template_7z6yc8a",
        {
          to_name: "Navaneeth", // Your name
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email // This ensures replies go to the sender
        }
      );

      if (response.status === 200) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 3000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <header>
        <div className="logo">
          <span className="logo-text">NS</span>
          <span className="logo-dot">.</span>
        </div>
        <button className="menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
         <nav className={isMenuOpen ? 'active' : ''}>
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => handleNavClick('home')}
                className={activeSection === 'home' ? 'active' : ''}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => handleNavClick('about')}
                className={activeSection === 'about' ? 'active' : ''}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#education"
                onClick={() => handleNavClick('education')}
                className={activeSection === 'education' ? 'active' : ''}
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#experience"
                onClick={() => handleNavClick('experience')}
                className={activeSection === 'experience' ? 'active' : ''}
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => handleNavClick('projects')}
                className={activeSection === 'projects' ? 'active' : ''}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => handleNavClick('skills')}
                className={activeSection === 'skills' ? 'active' : ''}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#achievements"
                onClick={() => handleNavClick('achievements')}
                className={activeSection === 'achievements' ? 'active' : ''}
              >
                Achievements
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={() => handleNavClick('services')}
                className={activeSection === 'services' ? 'active' : ''}
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => handleNavClick('contact')}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Navaneeth S</h1>
          <h2>AI/ML Engineer & Data Scientist</h2>
          <p>Passionate about creating scalable AI systems that solve real-world challenges.</p>
          <div className="social-links">
            <a href="https://github.com/Navaneeth-007" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/navaneeth-s-34694021b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:nsnandanam@gmail.com"><FaEnvelope /></a>
          </div>
          <button className="cta-button" onClick={() => scrollToSection('contact')}>Get In Touch</button>
        </div>
      </section>
      
      <section id="about" className="about">
        <h2 className="section-title reveal">About Me</h2>
        <div className="container">
          <div className="about-wrapper">
            <div className="about-content reveal">
              <p>
              I am an AI/ML Engineer and Data Scientist with experience developing production-grade Generative AI applications, machine learning models, and cloud-based solutions. I completed my Data Science internship at GE Aerospace, where I developed enterprise AI solutions using Retrieval-Augmented Generation (RAG), Large Language Models, and AWS technologies to address real-world business challenges.
              </p>
              <p>
              My interests span Generative AI, Deep Learning, Computer Vision, and Intelligent Automation. Alongside industry experience, I have conducted research in SAR-based urban flood segmentation using a novel dual-encoder deep learning architecture, with my work submitted to IEEE Geoscience and Remote Sensing Letters. I also hold the IBM Generative AI Engineering Professional Certificate. I enjoy transforming research into scalable, impactful AI solutions.
              </p>
              <p>
              I'm always open to opportunities in AI, Machine Learning, Data Science, and Software Engineering. Whether it's building intelligent applications, collaborating on innovative projects, or exploring emerging AI technologies, I'm excited to create solutions that make a meaningful impact.
              </p>
              <div className="about-details">
                <div className="detail-item reveal">
                  <FaMapMarkerAlt />
                  <span>Nandanam, Vishavarsserikkara, Mannar, Kerala, Pin: 689622</span>
                </div>
                <div className="detail-item reveal">
                  <FaPhone />
                  <span>+91 9746744381</span>
                </div>
                <div className="detail-item reveal">
                  <FaEnvelope />
                  <span>nsnandanam@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="profile-image reveal">
              <img src="/assets/profile.jpg" alt="Navaneeth S" />
            </div>
          </div>
        </div>
      </section>
      
      <section id="education" className="education">
        <h2 className="section-title reveal">Education</h2>
        <div className="container">
          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <h3>Master of Technology in CSE with AI and ML</h3>
                <h4>Amrita School of Computing, Amritapuri</h4>
                <p>2024 - 2026</p>
              </div>
            </div>
            
            <div className="timeline-item reveal">
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <h3>Bachelor of Technology in Computer Science and Engineering</h3>
                <h4>College of Engineering, Kallooppara</h4>
                <p>2020 - 2024</p>
              </div>
            </div>
            
            <div className="timeline-item reveal">
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <h3>Senior Secondary Education</h3>
                <h4>Placid Vidya Vihar, Changanassery</h4>
                <p>2020</p>
              </div>
            </div>
            
            <div className="timeline-item reveal">
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <h3>Secondary Education</h3>
                <h4>SBHSS, Mannar</h4>
                <p>2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <h2 className="section-title reveal">Experience</h2>

        <div className="container">
          <div className="experience-card reveal">
            <div className="experience-header">
              <div>
                <h3>Data Science Intern</h3>
                <h4>GE Aerospace</h4>
              </div>
              <span className="experience-duration">Jan 12, 2026 – Jul 31, 2026</span>
            </div>

            <p className="experience-description">
              Contributed to enterprise AI and data science initiatives by developing intelligent automation
              solutions, Generative AI workflows, and forecasting systems for business operations.
            </p>

            <ul className="experience-list">
              <li>Developed enterprise-grade Generative AI solutions using Retrieval-Augmented Generation (RAG) and Large Language Models.</li>
              <li>Built scalable data pipelines and cloud-native AI applications using AWS services.</li>
              <li>Contributed to AI-driven forecasting solutions for corporate finance and business planning.</li>
              <li>Collaborated with cross-functional teams to design intelligent automation and data-driven decision support systems.</li>
              <li>Worked with Python, LangChain, LangGraph, Amazon Bedrock, PostgreSQL (pgvector), AWS Lambda, and Amazon S3.</li>
            </ul>

            <p className="experience-note">
              <strong>Note:</strong> Project implementation details are not publicly available due to company confidentiality and compliance requirements.
            </p>
          </div>
        </div>
      </section>
      
      <section id="projects" className="projects">
        <h2 className="section-title reveal">Projects</h2>
        <div className="container">
          <div className="project-cards">
            <div className="project-card reveal">
              <div className="project-header">
                <h3>AgentIQ – AI Data Analysis Agent</h3>
                <div className="project-tech">Python | LangGraph | FastAPI | Streamlit | Docker</div>
              </div>
              <p>Built an AI agent that plans multi-step analyses, queries databases, and turns natural-language questions into SQL-backed findings, charts, and downloadable reports. Includes execution evidence and a credential-free demo.</p>
              <div className="project-links">
                <a
                  href="https://github.com/Navaneeth-007/AgentIQ"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View AgentIQ project on GitHub"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="project-card reveal">
              <div className="project-header">
                <h3>DocuMind – Enterprise Document RAG</h3>
                <div className="project-tech">Python | LangChain | PostgreSQL / pgvector | FastAPI | Streamlit</div>
              </div>
              <p>Built a document question-answering system combining vector and keyword search with cross-encoder reranking. Answers include source citations, with input guardrails, streaming responses, and an evaluation dashboard.</p>
              <div className="project-links">
                <a
                  href="https://github.com/Navaneeth-007/Documind_RAG"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Documind_RAG project on GitHub"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="project-card reveal">
              <div className="project-header">
                <h3>ForecastOps – Energy Forecasting &amp; MLOps</h3>
                <div className="project-tech">Python | LightGBM | Prophet | MLflow | FastAPI | Docker</div>
              </div>
              <p>Built an end-to-end energy forecasting pipeline that compares Prophet and LightGBM, tracks experiments in MLflow, and serves a versioned champion model through an API and dashboard with drift monitoring.</p>
              <div className="project-links">
                <a
                  href="https://github.com/Navaneeth-007/ForecastOps"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View ForecastOps project on GitHub"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="project-card reveal">
              <div className="project-header">
                <h3>SafeDriveRL – Risk-Aware Autonomous Driving</h3>
                <div className="project-tech">Python | PyTorch | Gymnasium | highway-env</div>
              </div>
              <p>Trained and compared risk-aware and baseline driving agents using Dueling Deep Q-Networks in a highway simulation. Evaluated reward, success rate, and collision rate across traffic conditions with an ATE-inspired analysis.</p>
              <div className="project-links">
                <a
                  href="https://github.com/Navaneeth-007/SafeDriveRL"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View SafeDriveRL project on GitHub"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="project-card reveal">
              <div className="project-header">
                <h3>SignAI – Real-Time Sign Language Recognition</h3>
                <div className="project-tech">Python | Flask | OpenCV | MediaPipe | JavaScript</div>
              </div>
              <p>Built a webcam-based sign language recognition application that translates gestures into text and speech. Supports continuous sentence formation, automatic spell correction, and real-time hand tracking.</p>
              <div className="project-links">
                <a
                  href="https://github.com/Navaneeth-007/SignAI"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View SignAI project on GitHub"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="project-card reveal">
              <div className="project-header">
                <h3>SETU – GenAI Stadium Operations Assistant</h3>
                <div className="project-tech">React | TypeScript | Gemini API | Firebase</div>
              </div>
              <p>Built a stadium operations prototype with AI-assisted incident triage, multilingual spectator guidance, and live crowd telemetry. Connects fan reports with an operator dashboard and Gemini-generated operational briefs.</p>
              <div className="project-links">
                <a
                  href="https://github.com/Navaneeth-007/Setu-Assistant"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View SETU project on GitHub"
                >
                  View Project
                </a>
              </div>
            </div>

          </div>
          <div className="view-more-container">
            <a
              href="https://github.com/Navaneeth-007?tab=repositories"
              className="view-more-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More Projects
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2 className="section-title reveal">Skills</h2>
        <div className="container">
          <div className="skills-container">
            <div className="technical-skills reveal">
              <div className="technical-skills-heading">
                <div>
                  <p className="skills-eyebrow">MY TOOLKIT</p>
                  <h3>Technical Skills</h3>
                </div>
                <p className="skills-intro">The tools I use to build, evaluate, and ship AI applications.</p>
              </div>
              <div className="skill-groups">
                {[
                  { title: 'Generative AI', description: 'From questions to grounded answers', icon: FaRobot, skills: ['Generative AI & LLMs', 'LangChain', 'LangGraph', 'RAG & Hybrid Retrieval'] },
                  { title: 'Machine Learning', description: 'Models, forecasting & intelligent agents', icon: SiPytorch, skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Reinforcement Learning'] },
                  { title: 'Languages & Applications', description: 'Interfaces and services built around AI', icon: FaCode, skills: ['Python', 'Java', 'React', 'FastAPI'] },
                  { title: 'Data & Retrieval', description: 'Structured data and semantic search', icon: FaDatabase, skills: ['PostgreSQL & pgvector', 'SQL', 'MongoDB', 'Firebase'] },
                  { title: 'Cloud & MLOps', description: 'Deploy, track and monitor', icon: SiAmazonwebservices, skills: ['AWS', 'Amazon Bedrock', 'Docker', 'MLflow'] },
                  { title: 'Applied AI', description: 'From experiments to useful tools', icon: SiScikitlearn, skills: ['LightGBM & Prophet', 'OpenCV & MediaPipe', 'Streamlit', 'Git'] },
                ].map(({ title, description, icon: Icon, skills }) => (
                  <div className="skill-group" key={title}>
                    <div className="skill-group-heading">
                      <span className="skill-group-icon"><Icon aria-hidden="true" /></span>
                      <div>
                        <h4>{title}</h4>
                        <p>{description}</p>
                      </div>
                    </div>
                    <ul className="skill-badges" aria-label={title}>
                      {skills.map(skill => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bottom-row">
              <div className="soft-skills-container reveal">
                <h3>Soft Skills</h3>
                <div className="soft-skills">
                  <div className="soft-skill">Leadership</div>
                  <div className="soft-skill">Adaptability</div>
                  <div className="soft-skill">Time Management</div>
                  <div className="soft-skill">Self Assessment</div>
                  <div className="soft-skill">Team Management</div>
                  <div className="soft-skill">Problem Solving</div>
                  <div className="soft-skill">Collaboration</div>
                </div>
              </div>
              
              <div className="languages-container reveal">
                <h3>Languages</h3>
                <div className="languages">
                  <div className="language">
                    <h4>Malayalam</h4>
                    <p>Native or Bilingual Proficiency</p>
                  </div>
                  <div className="language">
                    <h4>English</h4>
                    <p>Full Professional Proficiency</p>
                  </div>
                  <div className="language">
                    <h4>Hindi</h4>
                    <p>Professional Working Proficiency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="achievements" className="achievements">
        <h2 className="section-title reveal">Certifications &amp; Achievements</h2>
        <div className="container">
          <div className="achievement-item reveal">
            <div className="achievement-icon">
              <FaGraduationCap />
            </div>
            <div className="achievement-content">
              <h3>IBM Generative AI Engineering Professional Certificate</h3>
              <p>Issued by IBM through Coursera.</p>
              <a
                href="https://www.coursera.org/account/accomplishments/specialization/Q3TIVX55DUQU"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Credential
              </a>
            </div>
          </div>

          <div className="achievement-item reveal">
            <div className="achievement-icon">
              <FaTrophy />
            </div>
            <div className="achievement-content">
              <h3>Research Paper Submitted to IEEE GRSL (2026)</h3>
              <p>
                Submitted a research paper on SAR-based urban flood segmentation using a novel dual-encoder deep learning architecture to IEEE Geoscience and Remote Sensing Letters.
              </p>
            </div>
          </div>

          <div className="achievement-item reveal">
            <div className="achievement-icon">
              <FaTrophy />
            </div>
            <div className="achievement-content">
              <h3>Finalist – Kochi Hackathon '25</h3>
              <p>
                Built Voxel Web Reader, an AI-powered Chrome extension featuring voice-controlled navigation and YOLO-based image descriptions to improve web accessibility.
              </p>
            </div>
          </div>

          <div className="achievement-item reveal">
            <div className="achievement-icon">
              <FaTrophy />
            </div>
            <div className="achievement-content">
              <h3>Finalist – Tredence Infinity AI Hackathon 2025</h3>
              <p>
                Developed SignAI, a real-time AI-powered sign language interpretation system for gesture-to-text and gesture-to-speech communication.
              </p>
            </div>
          </div>

          <div className="achievement-item reveal">
            <div className="achievement-icon">
              <FaTrophy />
            </div>
            <div className="achievement-content">
              <h3>Google Build with AI Bootcamp</h3>
              <p>
                Gained hands-on experience building AI agents, designing intelligent workflows, and integrating Generative AI into production-ready applications.
              </p>
            </div>
          </div>
        </div>
        
        <div className="interests">
          <h3 className="reveal">Interests</h3>
          <div className="interest-items">
            <div className="interest-item reveal">Travelling</div>
            <div className="interest-item reveal">Philately</div>
            <div className="interest-item reveal">Numismatics</div>
            <div className="interest-item reveal">Web Development</div>
            <div className="interest-item reveal">App Development</div>
          </div>
        </div>
      </section>
      
      <section id="services" className="services">
      <h2 className="section-title reveal">Services</h2>
      <div className="container">
        <div className="services-grid">

          <div className="service-card reveal">
            <div className="service-icon">
              <FaCode />
            </div>
            <h3>Web Development</h3>
            <p>
              Develop responsive, scalable web applications using React, Firebase, and modern web technologies with clean UI, seamless user experiences, and backend integration.
            </p>
          </div>

          <div className="service-card reveal">
            <div className="service-icon">
              <FaRobot />
            </div>
            <h3>Generative AI Solutions</h3>
            <p>
              Build intelligent AI applications powered by Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI agents, and cloud-based AI services for enterprise and real-world use cases.
            </p>
          </div>

          <div className="service-card reveal">
            <div className="service-icon">
              <FaPython />
            </div>
            <h3>Machine Learning & Data Science</h3>
            <p>
              Design and deploy machine learning models for computer vision, predictive analytics, deep learning, and intelligent automation using Python and modern AI frameworks.
            </p>
          </div>

        </div>
      </div>
    </section>
      
      <section id="contact" className="contact">
        <h2 className="section-title">Contact Me</h2>
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope />
                <p>nsnandanam@gmail.com</p>
              </div>
              <div className="contact-item">
                <FaPhone />
                <p>+91 9746744381</p>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <p>Nandanam, Vishavarsserikkara, Mannar, Kerala, Pin: 689622</p>
              </div>
              <div className="social-links">
                <a href="https://github.com/Navaneeth-007" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/navaneeth-s-34694021b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
              <a href="/assets/Navaneeth.pdf" download className="download-resume">
                <FaDownload /> Download Resume
              </a>
            </div>
            
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && (
                  <p className="form-status success">Message sent successfully!</p>
                )}
                {formStatus === 'error' && (
                  <p className="form-status error">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Navaneeth S. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;