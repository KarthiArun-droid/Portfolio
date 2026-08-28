import React, { useState } from 'react';
import profileImage from './Karthi.jpg';

const profileConfig = {
    name: "Karthikeyan A",
    title: "Business Analytics & Full-Stack Engineer",
    avatarUrl: profileImage,
    github: "https://github.com/KarthiArun-droid",
    linkedin: "https://www.linkedin.com/in/karthikeyan-a-794649403",
    email: "rk.karthiarun@gmail.com",
    phone: "6369031251"
};

const strategyCards = [
    {
        title: "Requirements Engineering & Process Modeling",
        description: "Authoring comprehensive Business Requirements Documents (BRD), Functional Requirements (FRD), and User Stories with strict acceptance criteria.",
        deliverables: "BPMN 2.0 Process Flows, As-Is vs. To-Be Workflows, Gap Analysis, Stakeholder Matrix.",
        color: "#2563EB",
        bg: "#EFF6FF",
        border: "#BFDBFE"
    },
    {
        title: "Data Modeling & Analytics Architecture",
        description: "Designing relational database schemas, multi-touch attribution models, and event tracking pipelines to support business reporting.",
        deliverables: "Entity-Relationship Diagrams (ERD), Data Dictionaries, Conversion Funnel Modeling, Cohort & Retention Tracking.",
        color: "#059669",
        bg: "#ECFDF5",
        border: "#A7F3D0"
    },
    {
        title: "Business Intelligence & KPI Storytelling",
        description: "Transforming raw multi-channel data into executive scorecards, interactive operational dashboards, and actionable strategic insights.",
        deliverables: "Power BI & Tableau Dashboards, Executive KPI Trees, Metric Tracking, Real-Time Telemetry.",
        color: "#7C3AED",
        bg: "#F5F3FF",
        border: "#DDD6FE"
    },
    {
        title: "GenAI & Process Automation",
        description: "Leveraging LLM pipelines and Python automation to replace manual data entry, streamline report generation, and optimize operational velocity.",
        deliverables: "Automated Reporting Pipelines, LLM Knowledge Bots, Batch ETL Scripts, Anomaly Detection.",
        color: "#D97706",
        bg: "#FFFBEB",
        border: "#FDE68A"
    }
];

const projects = [
    {
        title: "Multi-Role Real Estate Auction Platform (BA)",
        tagline: "Data Architecture & Conversion Funnel Optimization",
        description: "Focus on multi-user conversion funnel modeling, real-time event logs, database schema architecture, and inspection verification processes.",
        tech: ["PostgreSQL", "Database Architecture", "Event Logs", "Process Mapping"],
        category: "Cloud & Development",
        highlights: ["Conversion funnel modeling", "Database schema architecture", "Real-time event logging"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "Dynamic Digital Report & Certificate Studio (BA)",
        tagline: "Automated Reporting Pipelines & Workflow Integration",
        description: "Focus on business workflow automation, bulk data integration (CSV/JSON), and high-resolution automated reporting systems for enterprise use.",
        tech: ["Workflow Automation", "Data Integration", "Reporting", "Process Automation"],
        category: "BI & Visualization",
        highlights: ["Business workflow automation", "Bulk data integration", "High-resolution automated reporting"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "SpamTight Web Security & Anomaly Engine",
        tagline: "High-Volume Traffic Classification & Threat Detection",
        description: "Focus on high-volume traffic classification, pattern detection, real-time anomaly filtering, and geoblocking rules to secure web infrastructure.",
        tech: ["Python", "Data Modeling", "Anomaly Detection", "REST APIs"],
        category: "Data & Analytics",
        highlights: ["Real-time anomaly filtering", "Traffic classification", "Geoblocking rules"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "Textile AI - Smart Manufacturing Intelligence",
        tagline: "Industrial Computer Vision & Factory Operations Platform",
        description: "Enterprise manufacturing platform leveraging YOLO computer vision for real-time fabric defect detection and classification, paired with dynamic KPI analytics dashboards and an LLM-powered textile knowledge assistant.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "YOLO / Python", "Recharts", "Framer Motion"],
        category: "AI & Full-Stack",
        highlights: ["Real-time visual defect detection", "Production & logistics optimization", "Integrated LLM chat assistant"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "OTT-FF - Video Streaming Platform",
        tagline: "Netflix-Scale Microservices Video Delivery Architecture",
        description: "Distributed video streaming ecosystem with independent microservices (Auth, Catalog, Streaming) behind an API Gateway. Implements Redis Cache-Aside for sub-millisecond catalog lookups and HMAC-SHA256 cryptographically signed CDN URLs.",
        tech: ["Go (Golang)", "React", "TypeScript", "Docker Compose", "PostgreSQL", "MongoDB", "Redis", "HLS.js"],
        category: "Cloud & Backend",
        highlights: ["Cache-aside sub-ms latency", "Signed CDN playback security", "Docker multi-service orchestration"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "Estate Mobile App - Real Estate Auctions",
        tagline: "Cross-Platform Real-Time Property & Auction System",
        description: "Multi-role real estate application for buyers, agents, and admins. Features real-time bidding via WebSockets with HTTP polling fallback, QR code inspection verification, and comprehensive audit logs.",
        tech: ["React Native", "Expo 54", "WebSockets", "React Navigation", "AsyncStorage", "react-native-maps"],
        category: "Mobile",
        highlights: ["WebSocket live bidding engine", "QR code verification", "Role-based dashboards (Buyer/Agent/Admin)"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "Dynamic Digital Certificate Generator",
        tagline: "WYSIWYG Certificate Studio & Batch Generation Tool",
        description: "Browser-based certificate editor enabling custom element placement, instant live preview, batch recipient data import, and client-side high-resolution PDF/PNG rendering.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Canvas API", "jspdf", "Lucide React"],
        category: "Frontend Tool",
        highlights: ["WYSIWYG drag-and-drop editor", "Bulk CSV recipient generation", "High-res PDF/PNG export"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    }
];

export default function Portfolio() {
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Data & Analytics", "BI & Visualization", "Cloud & Development", "AI & Full-Stack", "Cloud & Backend", "Mobile", "Frontend Tool"];

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
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={styles.avatarWrapper}>
                        <img
                            src={profileConfig.avatarUrl}
                            alt={profileConfig.name}
                            style={styles.avatar}
                        />
                    </div>
                </div>
                <div style={styles.badge}>{profileConfig.title}</div>
                <h1 style={styles.heroTitle}>
                    Bridging <span style={styles.highlightText}>Technical Architecture</span> and <br />
                    Strategic Business Decision-Making
                </h1>
                <p style={styles.heroSubtitle}>
                    Translating multi-channel data, database schemas, and GenAI workflows into actionable executive insights and automated pipelines.
                </p>
                <div style={styles.heroCta}>
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
                    Analytical and solutions-oriented Technical Analyst with a foundation in full-stack development, Python, SQL, and cloud infrastructure. Specialized in translating complex business requirements into data-driven solutions, designing database schemas, automating reporting workflows with GenAI, and uncovering actionable business insights.
                </p>
            </section>

            {/* Business Analysis & Data Strategy Section */}
            <section id="strategy" style={styles.section}>
                <div style={styles.sectionHeader}>
                    <h2 style={styles.sectionTitle}>Business Analysis & Strategic Capabilities</h2>
                    <p style={styles.sectionSubtitle}>Translating complex operational workflows into data-driven architectures, automated pipelines, and measurable ROI</p>
                </div>
                
                <div style={styles.strategyGrid}>
                    {strategyCards.map((card, idx) => (
                        <div key={idx} style={{...styles.strategyCard, borderTop: `4px solid ${card.color}`}} className="strategy-card">
                            <h3 style={{...styles.strategyCardTitle, color: card.color}}>{card.title}</h3>
                            <p style={styles.strategyCardDesc}>{card.description}</p>
                            <div style={{...styles.strategyDeliverablesBox, backgroundColor: card.bg, border: `1px solid ${card.border}`}}>
                                <strong style={{color: card.color, fontSize: '0.82rem', display: 'block', marginBottom: '6px'}}>Key Deliverables:</strong>
                                <span style={{fontSize: '0.85rem', color: '#334155', fontWeight: '500', lineHeight: '1.5'}}>{card.deliverables}</span>
                            </div>
                        </div>
                    ))}
                </div>
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

            {/* Skills Matrix */}
            <section id="skills" style={styles.section}>
                <h2 style={styles.sectionTitle}>Skills & Architecture</h2>
                <div style={styles.skillsGrid}>
                    {[
                        { cat: 'Data & Analytics', skills: 'SQL, Data Modeling, Multi-Channel Analytics, Funnel Analysis, BRD/FRD, BPMN' },
                        { cat: 'BI & Visualization', skills: 'Power BI, Tableau, Interactive Dashboards, Web Analytics, Data Storytelling, KPI Tracking' },
                        { cat: 'Cloud & Development', skills: 'AWS, Database Architecture (PostgreSQL, MongoDB), Git, Agile/Scrum, Docker' },
                        { cat: 'AI & Automation', skills: 'Generative AI, LLM Automation Workflows, Process Automation, Python, Predictive Analytics' },
                        { cat: 'Frontend & Mobile', skills: 'React 19, Next.js 16, React Native, TypeScript, Tailwind CSS, Framer Motion' },
                        { cat: 'Backend & Microservices', skills: 'Go (Golang), Python, FastAPI, REST APIs, WebSockets, Redis' }
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
    hero: { maxWidth: '850px', margin: '0 auto', textAlign: 'center', padding: '80px 20px 90px' },
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
    techTag: { backgroundColor: '#F1F5F9', border: `1px solid ${theme.border}`, color: '#0F172A', fontSize: '0.75rem', padding: '5px 10px', borderRadius: '20px', fontWeight: '600' },
    skillsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '24px' },
    skillBox: { backgroundColor: theme.cardBg, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '22px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' },
    skillCategory: { color: theme.textMain, fontSize: '1.05rem', margin: '0 0 12px 0', fontWeight: '700' },
    skillTags: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
    footer: { textAlign: 'center', padding: '45px 20px', borderTop: `1px solid ${theme.border}`, backgroundColor: '#F8FAFC' },
    footerText: { color: theme.textMain, fontSize: '0.9rem', margin: '0 0 6px 0', fontWeight: '600' },
    footerSubText: { color: theme.textSub, fontSize: '0.85rem', margin: 0 },
    footerLink: { color: theme.accent, textDecoration: 'none', margin: '0 8px' }
};