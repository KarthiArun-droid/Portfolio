import React, { useState } from 'react';
import profileImage from './Karthi.jpg';

const profileConfig = {
    name: "Karthikeyan A",
    title: "Technical Business Analyst | Data & Insights | GenAI & Automation",
    avatarUrl: profileImage,
    github: "https://github.com/KarthiArun-droid",
    linkedin: "https://www.linkedin.com/in/karthikeyan-a-794649403",
    email: "rk.karthiarun@gmail.com",
    phone: "6369031251"
};

const projects = [
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
        title: "AI Industrial & Healthcare Decision Pipeline",
        tagline: "Computer Vision Diagnostics & Sensor Analytics",
        description: "Focus on computer vision defect/sensor classification, automated diagnostic recommendations, and comprehensive analytics dashboards for operational insights.",
        tech: ["Generative AI", "Computer Vision", "Python", "Interactive Dashboards"],
        category: "AI & Automation",
        highlights: ["Automated diagnostic recommendations", "Sensor classification", "KPI analytics dashboards"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "Multi-Role Real Estate Auction Platform",
        tagline: "Data Architecture & Conversion Funnel Optimization",
        description: "Focus on multi-user conversion funnel modeling, real-time event logs, database schema architecture, and inspection verification processes.",
        tech: ["PostgreSQL", "Database Architecture", "Event Logs", "Process Mapping"],
        category: "Cloud & Development",
        highlights: ["Conversion funnel modeling", "Database schema architecture", "Real-time event logging"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "Dynamic Digital Report & Certificate Studio",
        tagline: "Automated Reporting Pipelines & Workflow Integration",
        description: "Focus on business workflow automation, bulk data integration (CSV/JSON), and high-resolution automated reporting systems for enterprise use.",
        tech: ["Workflow Automation", "Data Integration", "Reporting", "Process Automation"],
        category: "BI & Visualization",
        highlights: ["Business workflow automation", "Bulk data integration", "High-resolution automated reporting"],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    }
];

export default function Portfolio() {
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Data & Analytics", "BI & Visualization", "AI & Automation", "Cloud & Development"];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div style={styles.page}>
            {/* Navigation Bar */}
            <nav style={styles.nav}>
                <div style={styles.logo}>{profileConfig.name}</div>
                <div style={styles.navLinks}>
                    <a href="#about" style={styles.navLink}>About</a>
                    <a href="#projects" style={styles.navLink}>Projects</a>
                    <a href="#skills" style={styles.navLink}>Skills</a>
                    <a href={`tel:${profileConfig.phone}`} style={styles.navLink}>📞 {profileConfig.phone}</a>
                    <a href={`mailto:${profileConfig.email}`} style={styles.contactBtn}>✉️ Email Me</a>
                </div>
            </nav>

            {/* Hero Section */}
            <header style={styles.hero}>
                <div style={styles.avatarWrapper}>
                    <img
                        src={profileConfig.avatarUrl}
                        alt={profileConfig.name}
                        style={styles.avatar}
                    />
                </div>
                <div style={styles.badge}>{profileConfig.title}</div>
                <h1 style={styles.heroTitle}>
                    Bridging <span style={styles.highlightText}>Technical Architecture</span> and <br />
                    Strategic Business Decision-Making
                </h1>
                <p style={styles.heroSubtitle}>
                    Translating multi-channel data, database schemas, and GenAI workflows into actionable executive insights and automated reporting pipelines.
                </p>
                <div style={styles.heroCta}>
                    <a href="#projects" style={styles.btnPrimary}>View Projects</a>
                    <a href={profileConfig.linkedin} target="_blank" rel="noreferrer" style={styles.btnSecondary}>LinkedIn Profile</a>
                    <a href={profileConfig.github} target="_blank" rel="noreferrer" style={styles.btnSecondary}>GitHub Profile</a>
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
                        <div key={idx} style={styles.projectCard}>
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
                    <div style={styles.skillBox}>
                        <h4 style={styles.skillCategory}>Data & Analytics</h4>
                        <p style={styles.skillList}>SQL, Data Modeling, Multi-Channel Analytics, Funnel Analysis, Requirements Gathering (BRD/FRD), Process Mapping (BPMN)</p>
                    </div>
                    <div style={styles.skillBox}>
                        <h4 style={styles.skillCategory}>BI & Visualization</h4>
                        <p style={styles.skillList}>Power BI, Tableau, Interactive Dashboards, Web Analytics, Data Storytelling, KPI Tracking</p>
                    </div>
                    <div style={styles.skillBox}>
                        <h4 style={styles.skillCategory}>AI & Automation</h4>
                        <p style={styles.skillList}>Generative AI, LLM Automation Workflows, Process Automation, Python, Predictive Analytics</p>
                    </div>
                    <div style={styles.skillBox}>
                        <h4 style={styles.skillCategory}>Cloud & Development</h4>
                        <p style={styles.skillList}>AWS, REST APIs, Database Architecture (PostgreSQL, MongoDB, Redis), Git, Agile/Scrum</p>
                    </div>
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
    accent: '#0284C7',
    accentLight: '#E0F2FE',
    border: '#E2E8F0',
};

const styles = {
    page: { backgroundColor: theme.bg, color: theme.textMain, minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 40px', maxWidth: '1200px', margin: '0 auto', borderBottom: `1px solid ${theme.border}` },
    logo: { fontSize: '1.25rem', fontWeight: '800', color: theme.textMain },
    navLinks: { display: 'flex', gap: '24px', alignItems: 'center' },
    navLink: { color: theme.textSub, textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' },
    contactBtn: { color: '#ffffff', backgroundColor: theme.textMain, textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', padding: '8px 18px', borderRadius: '6px' },
    hero: { maxWidth: '850px', margin: '0 auto', textAlign: 'center', padding: '80px 20px 90px' },
    avatarWrapper: { display: 'flex', justifyContent: 'center', marginBottom: '24px' },
    avatar: { width: '130px', height: '130px', borderRadius: '50%', objectFit: 'cover', border: `3px solid #ffffff`, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' },
    badge: { display: 'inline-block', backgroundColor: theme.accentLight, color: theme.accent, padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', marginBottom: '18px', fontWeight: '600' },
    heroTitle: { fontSize: '2.75rem', fontWeight: '800', lineHeight: '1.2', color: theme.textMain, marginBottom: '20px' },
    highlightText: { color: theme.accent },
    heroSubtitle: { fontSize: '1.15rem', color: theme.textSub, lineHeight: '1.6', maxWidth: '680px', margin: '0 auto 32px' },
    heroCta: { display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' },
    btnPrimary: { backgroundColor: theme.accent, color: '#ffffff', padding: '12px 24px', borderRadius: '6px', fontWeight: '600', textDecoration: 'none', fontSize: '0.95rem' },
    btnSecondary: { backgroundColor: '#ffffff', color: theme.textMain, border: `1px solid ${theme.border}`, padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '600' },
    section: { maxWidth: '1150px', margin: '0 auto', padding: '0 20px 90px' },
    sectionHeader: { textAlign: 'center', marginBottom: '45px' },
    sectionTitle: { fontSize: '2rem', fontWeight: '800', color: theme.textMain, marginBottom: '8px' },
    sectionSubtitle: { color: theme.textSub, fontSize: '1rem' },
    filterRow: { display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '22px', flexWrap: 'wrap' },
    filterBtn: { background: '#ffffff', border: `1px solid ${theme.border}`, color: theme.textSub, padding: '6px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '500' },
    filterBtnActive: { background: theme.accentLight, border: `1px solid ${theme.accent}`, color: theme.accent, fontWeight: '700', padding: '6px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' },
    grid: { 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
        gap: '32px',
        alignItems: 'stretch'
    },
    projectCard: { 
        backgroundColor: '#FFFFFF', 
        border: '1px solid #E2E8F0', 
        borderRadius: '14px', 
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
        color: '#2563EB', 
        background: '#EFF6FF', 
        padding: '5px 12px', 
        borderRadius: '6px', 
        fontWeight: '600',
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
    projectTitle: { fontSize: '1.35rem', fontWeight: '700', color: theme.textMain, margin: '0 0 4px 0' },
    projectTagline: { fontSize: '0.88rem', color: theme.accent, marginBottom: '14px', fontWeight: '600' },
    projectDesc: { fontSize: '0.92rem', color: theme.textSub, lineHeight: '1.6', marginBottom: '18px', flexGrow: 1 },
    highlightsList: { marginBottom: '20px' },
    highlightItem: { fontSize: '0.88rem', color: theme.textMain, marginBottom: '6px', display: 'flex', alignItems: 'center' },
    bullet: { color: theme.accent, marginRight: '8px', fontSize: '1.2rem', lineHeight: 1 },
    techTags: { display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto', borderTop: `1px solid ${theme.border}`, paddingTop: '14px' },
    techTag: { backgroundColor: '#F8FAFC', border: `1px solid ${theme.border}`, color: '#334155', fontSize: '0.75rem', padding: '4px 8px', borderRadius: '4px', fontWeight: '500' },
    skillsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '24px' },
    skillBox: { backgroundColor: theme.cardBg, border: `1px solid ${theme.border}`, borderRadius: '10px', padding: '22px' },
    skillCategory: { color: theme.textMain, fontSize: '1.05rem', margin: '0 0 8px 0', fontWeight: '700' },
    skillList: { color: theme.textSub, fontSize: '0.9rem', lineHeight: '1.6', margin: 0 },
    footer: { textAlign: 'center', padding: '45px 20px', borderTop: `1px solid ${theme.border}`, backgroundColor: '#F8FAFC' },
    footerText: { color: theme.textMain, fontSize: '0.9rem', margin: '0 0 6px 0', fontWeight: '600' },
    footerSubText: { color: theme.textSub, fontSize: '0.85rem', margin: 0 },
    footerLink: { color: theme.accent, textDecoration: 'none', margin: '0 8px' }
};