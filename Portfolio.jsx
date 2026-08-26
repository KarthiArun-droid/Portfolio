import React, { useState } from 'react';
import profileImage from './Karthi.jpg';

const profileConfig = {
    name: "Karthikeyan A",
    title: "Frontend & Full-Stack Engineer",
    avatarUrl: profileImage,
    github: "https://github.com/KarthiArun-droid",
    linkedin: "https://www.linkedin.com/in/karthikeyan-a-794649403",
    email: "rk.karthiarun@gmail.com",
    phone: "6369031251"
};

const projects = [
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

    const categories = ["All", "AI & Full-Stack", "Cloud & Backend", "Mobile", "Frontend Tool"];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div style={styles.page}>
            {/* Navigation Bar */}
            <nav style={styles.nav}>
                <div style={styles.logo}>{profileConfig.name}</div>
                <div style={styles.navLinks}>
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
                <div style={styles.badge}>Software Engineer • Open to Opportunities</div>
                <h1 style={styles.heroTitle}>
                    Building scalable <span style={styles.highlightText}>modern web</span>, <br />
                    microservices & mobile applications.
                </h1>
                <p style={styles.heroSubtitle}>
                    Frontend & Full-Stack Engineer specializing in React, Next.js, Go microservices, and AI-driven industrial solutions.
                </p>
                <div style={styles.heroCta}>
                    <a href="#projects" style={styles.btnPrimary}>View Projects</a>
                    <a href={profileConfig.linkedin} target="_blank" rel="noreferrer" style={styles.btnSecondary}>LinkedIn Profile</a>
                    <a href={profileConfig.github} target="_blank" rel="noreferrer" style={styles.btnSecondary}>GitHub Profile</a>
                </div>
            </header>

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
                        <h4 style={styles.skillCategory}>Frontend & Mobile</h4>
                        <p style={styles.skillList}>React 19, Next.js 16, React Native, TypeScript, Tailwind CSS, Framer Motion, HLS.js</p>
                    </div>
                    <div style={styles.skillBox}>
                        <h4 style={styles.skillCategory}>Backend & Microservices</h4>
                        <p style={styles.skillList}>Go (Golang), Python, FastAPI, REST APIs, WebSockets, Redis Cache-Aside, HMAC-SHA256</p>
                    </div>
                    <div style={styles.skillBox}>
                        <h4 style={styles.skillCategory}>Databases & Cloud</h4>
                        <p style={styles.skillList}>PostgreSQL, MongoDB, Docker, Docker Compose, Git, Vercel</p>
                    </div>
                    <div style={styles.skillBox}>
                        <h4 style={styles.skillCategory}>AI & Vision</h4>
                        <p style={styles.skillList}>YOLO Object Detection, Computer Vision Pipelines, LLM Knowledge Agents</p>
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
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '26px' },
    projectCard: { backgroundColor: theme.cardBg, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '28px', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' },
    cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' },
    categoryBadge: { fontSize: '0.75rem', color: theme.accent, background: theme.accentLight, padding: '4px 10px', borderRadius: '4px', fontWeight: '700' },
    cardActions: { display: 'flex', gap: '12px', alignItems: 'center' },
    iconLink: { color: theme.textSub, textDecoration: 'none', fontSize: '0.85rem', fontWeight: '500' },
    iconLinkPrimary: { color: theme.accent, textDecoration: 'none', fontSize: '0.85rem', fontWeight: '700' },
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