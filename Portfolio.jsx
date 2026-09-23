import React, { useState } from 'react';
import profileImage from './Karthi.jpg';

const profileConfig = {
    name: "Karthikeyan A",
    title: "Technical Analyst & Full-Stack Developer",
    avatarUrl: profileImage,
    github: "https://github.com/KarthiArun-droid",
    linkedin: "https://www.linkedin.com/in/karthikeyan-a-794649403",
    email: "rk.karthiarun@gmail.com",
    phone: "6369031251"
};

const projects = [
    {
        title: "Estate Mobile App - Real-Time Real Estate Auction Platform",
        tagline: "Cross-Platform Real-Time Auction Engine & Multi-Role System Architecture",
        description: "Engineered a production-ready mobile platform with Role-Based Access Control (Buyer, Agent, Admin). Designed a real-time bidding pipeline powered by WebSockets with an automatic HTTP polling fallback for web resiliency. Integrated client verification using QR code generation/scanning, geo-location mapping, and automated PDF auction audit logs.",
        tech: ["React Native", "Expo", "WebSockets", "React Navigation", "AsyncStorage", "react-native-maps"],
        category: "Mobile",
        highlights: ["Low-latency WebSocket bidding engine", "Role-based authorization & data isolation", "QR code client inspection tracking"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "SpamTight - Network Security & Telemetry Anomaly Engine",
        tagline: "High-Throughput Traffic Telemetry, Geoblocking & Real-Time Anomaly Filtering",
        description: "Architected a domain-level request classification engine capable of filtering malicious traffic and analyzing anomalies in real time. Implemented rule-based geoblocking policies and optimized database indexing to handle high-frequency request logs without throughput degradation.",
        tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "Anomaly Detection Algorithms", "REST APIs"],
        category: "Backend & Data",
        highlights: ["Automated threat classification & IP reputation filtering", "Sub-millisecond telemetry queries", "Dockerized microservice deployment"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "OTT-FF - Scalable Video Streaming Architecture",
        tagline: "Netflix-Scale Microservices Architecture & Secure CDN Delivery",
        description: "Engineered a distributed microservices platform decoupling Auth, Catalog, and Streaming behind an API Gateway. Implemented Redis Cache-Aside for sub-millisecond catalog lookups, HMAC-SHA256 cryptographically signed CDN manifests to prevent hotlinking, and HLS.js adaptive bitrate streaming.",
        tech: ["Go (Golang)", "React 19", "TypeScript", "Docker Compose", "PostgreSQL", "MongoDB", "Redis", "HLS.js"],
        category: "Cloud Architecture",
        highlights: ["Microservices with centralized API Gateway", "Cache-Aside sub-ms lookup latency", "Cryptographically signed CDN URL generation"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "Textile AI - Industrial Computer Vision & Intelligence Platform",
        tagline: "YOLO Defect Classification & Real-Time Production Telemetry",
        description: "Developed an industrial intelligence system integrating YOLO object detection models for real-time fabric defect identification and classification. Built dynamic operational dashboards to visualize failure patterns, paired with an LLM knowledge assistant for rapid operational troubleshooting.",
        tech: ["Next.js", "React 19", "TypeScript", "YOLO/Python", "Recharts", "Framer Motion"],
        category: "AI & Full-Stack",
        highlights: ["Real-time visual defect detection & severity scoring", "Dynamic production telemetry dashboards", "LLM-assisted operational troubleshooting"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "Dynamic Certificate Studio - High-Performance Batch Rendering Tool",
        tagline: "Client-Side Batch Ingestion & Dynamic Document Rendering",
        description: "Developed a responsive WYSIWYG digital certificate studio supporting dynamic element placement and real-time canvas preview. Built client-side batch CSV parsing and high-resolution PDF/PNG generation pipelines, eliminating server-side rendering bottlenecks.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Canvas API", "jsPDF", "Lucide React"],
        category: "Frontend Tool",
        highlights: ["WYSIWYG layout editor with instant preview", "Bulk CSV schema parsing", "Zero-server overhead client-side rendering"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    }
];

export default function Portfolio() {
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Mobile", "Backend & Data", "Cloud Architecture", "AI & Full-Stack", "Frontend Tool"];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div style={styles.page}>
            <style>{`
                .project-card { transition: all 0.3s ease; position: relative; overflow: hidden; }
                .project-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #2563EB, #4F46E5); transform: scaleX(0); transition: transform 0.3s ease; transform-origin: left; }
                .project-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08) !important; }
                .project-card:hover::before { transform: scaleX(1); }
                .strategy-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .strategy-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08) !important; }
                .btn-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
                .btn-hover:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4) !important; }
                .nav-link { transition: color 0.2s ease; }
                .nav-link:hover { color: #2563EB !important; }
            `}</style>
            {/* Navigation Bar */}
            <nav style={styles.nav}>
                <div style={styles.logo}>{profileConfig.name}</div>
                <div style={styles.navLinks}>
                    <a href="#about" style={styles.navLink} className="nav-link">About</a>
                    <a href="#projects" style={styles.navLink} className="nav-link">Projects</a>
                    <a href="#skills" style={styles.navLink} className="nav-link">Skills</a>
                    <a href={`tel:${profileConfig.phone}`} style={styles.phoneLink} className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 512 512" style={{marginRight: '2px'}}>
                            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" fill="currentColor"/>
                        </svg> 
                        {profileConfig.phone}
                    </a>
                    <a href={`mailto:${profileConfig.email}`} style={styles.contactBtn} className="btn-hover">Email Me</a>
                </div>
            </nav>

            {/* Hero Section */}
            <header style={styles.hero}>
                {/* Background Tech Text */}
                <div style={{ position: 'absolute', top: 0, left: '-20%', right: '-20%', bottom: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
                    <div style={{ position: 'absolute', top: '15%', left: '15%', filter: 'blur(2px)', color: '#CBD5E1', fontSize: '2.5rem', fontWeight: '800', transform: 'rotate(-10deg)', opacity: 0.35 }}>React</div>
                    <div style={{ position: 'absolute', top: '10%', right: '25%', filter: 'blur(3px)', color: '#94A3B8', fontSize: '2.8rem', fontWeight: '900', transform: 'rotate(12deg)', opacity: 0.25 }}>Python</div>
                    <div style={{ position: 'absolute', top: '60%', left: '10%', filter: 'blur(2px)', color: '#CBD5E1', fontSize: '2.6rem', fontWeight: '800', transform: 'rotate(-5deg)', opacity: 0.3 }}>Data</div>
                    <div style={{ position: 'absolute', top: '45%', right: '15%', filter: 'blur(2px)', color: '#94A3B8', fontSize: '2.4rem', fontWeight: '900', transform: 'rotate(20deg)', opacity: 0.35 }}>SQL</div>
                    <div style={{ position: 'absolute', top: '80%', left: '20%', filter: 'blur(3px)', color: '#CBD5E1', fontSize: '3rem', fontWeight: '800', transform: 'rotate(-15deg)', opacity: 0.2 }}>Analytics</div>
                    <div style={{ position: 'absolute', top: '70%', right: '25%', filter: 'blur(3px)', color: '#94A3B8', fontSize: '2.8rem', fontWeight: '900', transform: 'rotate(8deg)', opacity: 0.25 }}>GenAI</div>
                    <div style={{ position: 'absolute', top: '30%', left: '30%', filter: 'blur(2px)', color: '#CBD5E1', fontSize: '2.2rem', fontWeight: '800', transform: 'rotate(15deg)', opacity: 0.3 }}>TypeScript</div>
                    <div style={{ position: 'absolute', top: '50%', left: '25%', filter: 'blur(3px)', color: '#94A3B8', fontSize: '2.5rem', fontWeight: '900', transform: 'rotate(-8deg)', opacity: 0.35 }}>Docker</div>
                    <div style={{ position: 'absolute', top: '20%', right: '10%', filter: 'blur(3px)', color: '#CBD5E1', fontSize: '2.4rem', fontWeight: '800', transform: 'rotate(-12deg)', opacity: 0.2 }}>Node.js</div>
                    <div style={{ position: 'absolute', top: '85%', right: '15%', filter: 'blur(3px)', color: '#94A3B8', fontSize: '2.6rem', fontWeight: '900', transform: 'rotate(-20deg)', opacity: 0.3 }}>AWS</div>
                    <div style={{ position: 'absolute', top: '35%', right: '35%', filter: 'blur(2px)', color: '#CBD5E1', fontSize: '2.4rem', fontWeight: '800', transform: 'rotate(5deg)', opacity: 0.25 }}>PostgreSQL</div>
                    <div style={{ position: 'absolute', top: '75%', left: '40%', filter: 'blur(2px)', color: '#94A3B8', fontSize: '2.2rem', fontWeight: '900', transform: 'rotate(10deg)', opacity: 0.3 }}>Go</div>
                    
                    <div style={{ position: 'absolute', top: '25%', left: '5%', filter: 'blur(3px)', color: '#CBD5E1', fontSize: '2.5rem', fontWeight: '800', transform: 'rotate(25deg)', opacity: 0.2 }}>Next.js</div>
                    <div style={{ position: 'absolute', top: '40%', left: '15%', filter: 'blur(2px)', color: '#94A3B8', fontSize: '2.2rem', fontWeight: '900', transform: 'rotate(-18deg)', opacity: 0.3 }}>Tailwind</div>
                    <div style={{ position: 'absolute', top: '15%', right: '40%', filter: 'blur(3px)', color: '#CBD5E1', fontSize: '2.6rem', fontWeight: '800', transform: 'rotate(-5deg)', opacity: 0.25 }}>MongoDB</div>
                    <div style={{ position: 'absolute', top: '55%', right: '25%', filter: 'blur(2px)', color: '#94A3B8', fontSize: '2.4rem', fontWeight: '900', transform: 'rotate(15deg)', opacity: 0.3 }}>Redis</div>
                    <div style={{ position: 'absolute', top: '65%', right: '5%', filter: 'blur(3px)', color: '#CBD5E1', fontSize: '2.5rem', fontWeight: '800', transform: 'rotate(-22deg)', opacity: 0.2 }}>FastAPI</div>
                    <div style={{ position: 'absolute', top: '85%', left: '5%', filter: 'blur(2px)', color: '#94A3B8', fontSize: '2.2rem', fontWeight: '900', transform: 'rotate(10deg)', opacity: 0.35 }}>Tableau</div>
                    <div style={{ position: 'absolute', top: '90%', right: '45%', filter: 'blur(3px)', color: '#CBD5E1', fontSize: '2.8rem', fontWeight: '800', transform: 'rotate(-8deg)', opacity: 0.2 }}>Power BI</div>
                    <div style={{ position: 'absolute', top: '5%', left: '45%', filter: 'blur(2px)', color: '#94A3B8', fontSize: '2.4rem', fontWeight: '900', transform: 'rotate(14deg)', opacity: 0.3 }}>Framer</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={styles.avatarWrapper}>
                        <img
                            src={profileConfig.avatarUrl}
                            alt={profileConfig.name}
                            style={styles.avatar}
                        />
                    </div>
                </div>
                <div style={{...styles.badge, position: 'relative', zIndex: 1}}>{profileConfig.title}</div>
                <h1 style={{...styles.heroTitle, position: 'relative', zIndex: 1}}>
                    Engineering <span style={styles.highlightText}>Scalable Web, Mobile &</span> <br />
                    Distributed Architectures
                </h1>
                <p style={{...styles.heroSubtitle, position: 'relative', zIndex: 1}}>
                    Translating technical requirements into high-performance full-stack applications, microservices, real-time data pipelines, and GenAI automation workflows.
                </p>
                <div style={{...styles.heroCta, position: 'relative', zIndex: 1}}>
                    <a href="#projects" style={styles.btnPrimary} className="btn-hover">View Projects</a>
                    <a href={profileConfig.linkedin} target="_blank" rel="noreferrer" style={styles.btnSecondary} className="btn-hover">LinkedIn Profile</a>
                    <a href={profileConfig.github} target="_blank" rel="noreferrer" style={styles.btnSecondary} className="btn-hover">GitHub Profile</a>
                </div>
            </header>

            {/* About Me Section */}
            <section id="about" style={styles.section}>
                <div style={styles.sectionHeader}>
                    <h2 style={styles.sectionTitle}>About Me</h2>
                </div>
                <p style={{ ...styles.heroSubtitle, textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
                    Analytical and solutions-driven Technical Analyst & Full-Stack Developer with 1+ years of experience building modern web, mobile, and backend systems. Experienced in end-to-end SDLC, translating technical requirements into scalable system architectures, designing database schemas (SQL/NoSQL), building real-time APIs, and integrating GenAI workflows to optimize performance and automate operations.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects" style={styles.section}>
                <div style={styles.sectionHeader}>
                    <h2 style={styles.sectionTitle}>Featured Engineering Projects</h2>
                    <p style={styles.sectionSubtitle}>Production-grade full-stack, mobile, and AI architectures</p>

                    <div style={styles.filterRow}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={filter === cat ? styles.filterBtnActive : styles.filterBtn}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={styles.grid}>
                    {filteredProjects.map((p, idx) => (
                        <div key={idx} style={styles.projectCard} className="project-card">
                            <div style={styles.cardHeader}>
                                <span style={styles.categoryBadge}>{p.category}</span>
                                <div style={styles.cardActions}>
                                    <a href={p.liveUrl} target="_blank" rel="noreferrer" style={styles.iconLinkPrimary}>
                                        Live Demo ↗
                                    </a>
                                    <a href={p.githubUrl} target="_blank" rel="noreferrer" style={styles.iconLink}>
                                        Source Code ↗
                                    </a>
                                </div>
                            </div>

                            <h3 style={styles.projectTitle}>{p.title}</h3>
                            <div style={styles.projectTagline}>{p.tagline}</div>
                            <p style={styles.projectDesc}>{p.description}</p>

                            <div style={styles.highlightsList}>
                                {p.highlights.map((h, i) => (
                                    <div key={i} style={styles.highlightItem}>
                                        <span style={styles.bullet}>•</span> {h}
                                    </div>
                                ))}
                            </div>

                            <div style={styles.techTags}>
                                {p.tech.map((t, i) => (
                                    <span key={i} style={styles.techTag}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Technical Capabilities Section */}
            <section id="skills" style={styles.section}>
                <h2 style={styles.sectionTitle}>Core Technical Capabilities</h2>
                <div style={styles.skillsGrid}>
                    {[
                        { cat: 'Architecture & Systems Analysis', skills: 'System Design, Technical Requirements Gathering (FRD/TRD), API Architecture, Database Schema Design, Process Flow Modeling (BPMN), Agile/Scrum' },
                        { cat: 'Frontend & Mobile Engineering', skills: 'React 19, Next.js, React Native (Expo), TypeScript, Tailwind CSS, Responsive UI/UX, State Management' },
                        { cat: 'Backend & Data Pipelines', skills: 'Go (Golang), Python, FastAPI, Node.js, REST APIs, WebSockets, PostgreSQL, MongoDB, Redis (Cache-Aside)' },
                        { cat: 'DevOps & Automation', skills: 'Docker, Docker Compose, AWS, Git/GitHub, CI/CD pipelines, GenAI & LLM automation scripts' }
                    ].map((group, idx) => (
                        <div key={idx} style={styles.skillBox}>
                            <h4 style={styles.skillCategory}>{group.cat}</h4>
                            <div style={styles.skillTags}>
                                {group.skills.split(',').map((skill, i) => (
                                    <span key={i} style={styles.techTag}>{skill.trim()}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                <p style={styles.footerText}>© 2026 {profileConfig.name}. All rights reserved.</p>
                <p style={styles.footerSubText}>
                    <a href={profileConfig.github} target="_blank" rel="noreferrer" style={styles.footerLink}>GitHub</a> •
                    <a href={profileConfig.linkedin} target="_blank" rel="noreferrer" style={styles.footerLink}>LinkedIn</a>
                </p>
            </footer>
        </div>
    );
}

const theme = {
    bg: '#FFFFFF',
    cardBg: '#FFFFFF',
    textMain: '#0F172A',
    textSub: '#475569',
    accent: '#2563EB',
    accentLight: '#EFF6FF',
    border: '#E2E8F0',
};

const styles = {
    page: { 
        background: '#FFFFFF', 
        color: theme.textMain, 
        minHeight: '100vh', 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' 
    },
    nav: { 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '8px 24px', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        borderBottom: '1px solid #E2E8F0',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        zIndex: 1000
    },
    logo: { fontSize: '1.05rem', fontWeight: '700', color: theme.textMain },
    navLinks: { display: 'flex', gap: '20px', alignItems: 'center' },
    navLink: { color: '#475569', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '500' },
    phoneLink: { color: '#475569', textDecoration: 'none', fontSize: '0.78rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' },
    contactBtn: { color: '#ffffff', background: 'linear-gradient(135deg, #2563EB, #4F46E5)', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '600', padding: '5px 12px', borderRadius: '50px' },
    hero: { position: 'relative', maxWidth: '850px', margin: '0 auto', textAlign: 'center', padding: '80px 20px 90px' },
    avatarWrapper: { 
        display: 'inline-flex', 
        justifyContent: 'center', 
        marginBottom: '24px',
        padding: '4px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
        boxShadow: '0 8px 24px rgba(37, 99, 235, 0.25)'
    },
    avatar: { 
        width: '165px', 
        height: '165px', 
        borderRadius: '50%', 
        objectFit: 'cover', 
        border: `4px solid #ffffff`
    },
    badge: { display: 'inline-block', backgroundColor: theme.accentLight, color: theme.accent, padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', marginBottom: '18px', fontWeight: '600' },
    heroTitle: { fontSize: '2.75rem', fontWeight: '800', lineHeight: '1.2', color: theme.textMain, marginBottom: '20px' },
    highlightText: { background: 'linear-gradient(90deg, #2563EB, #4F46E5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    heroSubtitle: { fontSize: '1.15rem', color: theme.textSub, lineHeight: '1.6', maxWidth: '680px', margin: '0 auto 32px' },
    heroCta: { display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' },
    btnPrimary: { 
        background: 'linear-gradient(135deg, #2563EB, #4F46E5)', 
        color: '#ffffff', 
        padding: '12px 24px', 
        borderRadius: '8px', 
        fontWeight: '600', 
        textDecoration: 'none', 
        fontSize: '0.95rem',
        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
    },
    btnSecondary: { 
        backgroundColor: '#ffffff', 
        color: theme.textMain, 
        border: `1px solid ${theme.border}`, 
        padding: '12px 24px', 
        borderRadius: '8px', 
        textDecoration: 'none', 
        fontSize: '0.95rem', 
        fontWeight: '600',
        boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
    },
    section: { maxWidth: '1150px', margin: '0 auto', padding: '0 20px 90px' },
    sectionHeader: { textAlign: 'center', marginBottom: '45px' },
    sectionTitle: { fontSize: '2rem', fontWeight: '800', color: theme.textMain, marginBottom: '8px' },
    sectionSubtitle: { color: theme.textSub, fontSize: '1rem' },
    filterRow: { display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '22px', flexWrap: 'wrap' },
    filterBtn: { background: '#ffffff', border: `1px solid ${theme.border}`, color: theme.textSub, padding: '6px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '500' },
    filterBtnActive: { background: theme.accentLight, border: `1px solid ${theme.accent}`, color: theme.accent, fontWeight: '700', padding: '6px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem' },
    strategyGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px',
        alignItems: 'stretch'
    },
    strategyCard: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
    },
    strategyCardTitle: {
        fontSize: '1.15rem',
        fontWeight: '700',
        marginBottom: '12px',
        lineHeight: '1.4'
    },
    strategyCardDesc: {
        fontSize: '0.9rem',
        color: '#475569',
        lineHeight: '1.6',
        marginBottom: '20px',
        flexGrow: 1
    },
    strategyDeliverablesBox: {
        padding: '12px 14px',
        borderRadius: '8px',
        marginTop: 'auto'
    },
    grid: { 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
        gap: '32px',
        alignItems: 'stretch'
    },
    projectCard: { 
        backgroundColor: '#FFFFFF', 
        border: '1px solid #E2E8F0', 
        borderRadius: '16px', 
        padding: '28px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' 
    },
    cardHeader: { 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '18px',
        gap: '12px'
    },
    categoryBadge: { 
        fontSize: '0.78rem', 
        color: '#4F46E5', 
        background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)', 
        border: '1px solid #C7D2FE',
        padding: '4px 12px', 
        borderRadius: '20px', 
        fontWeight: '700',
        whiteSpace: 'nowrap'
    },
    cardActions: { 
        display: 'flex', 
        gap: '14px', 
        alignItems: 'center',
        whiteSpace: 'nowrap' 
    },
    iconLink: { 
        color: '#64748B', 
        textDecoration: 'none', 
        fontSize: '0.85rem',
        fontWeight: '500'
    },
    iconLinkPrimary: { 
        color: '#2563EB', 
        textDecoration: 'none', 
        fontSize: '0.85rem', 
        fontWeight: '600' 
    },
    projectTitle: { fontSize: '1.35rem', fontWeight: '700', color: theme.textMain, margin: '0 0 6px 0' },
    projectTagline: { fontSize: '0.9rem', color: theme.accent, marginBottom: '14px', fontWeight: '600' },
    projectDesc: { fontSize: '0.92rem', color: theme.textSub, lineHeight: '1.6', marginBottom: '18px', flexGrow: 1 },
    highlightsList: { marginBottom: '20px' },
    highlightItem: { fontSize: '0.88rem', color: theme.textMain, marginBottom: '6px', display: 'flex', alignItems: 'center' },
    bullet: { color: theme.accent, marginRight: '8px', fontSize: '1.2rem', lineHeight: 1 },
    techTags: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto', borderTop: `1px solid ${theme.border}`, paddingTop: '16px' },
    techTag: { backgroundColor: '#F1F5F9', border: `1px solid ${theme.border}`, color: '#0F172A', fontSize: '0.75rem', padding: '5px 10px', borderRadius: '20px', fontWeight: '600', whiteSpace: 'nowrap' },
    skillsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '24px' },
    skillBox: { backgroundColor: theme.cardBg, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '22px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' },
    skillCategory: { color: theme.textMain, fontSize: '1.05rem', margin: '0 0 12px 0', fontWeight: '700' },
    skillTags: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
    footer: { textAlign: 'center', padding: '45px 20px', borderTop: `1px solid ${theme.border}`, backgroundColor: '#F8FAFC' },
    footerText: { color: theme.textMain, fontSize: '0.9rem', margin: '0 0 6px 0', fontWeight: '600' },
    footerSubText: { color: theme.textSub, fontSize: '0.85rem', margin: 0 },
    footerLink: { color: theme.accent, textDecoration: 'none', margin: '0 8px' }
};