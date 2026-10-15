import React, { useState, useEffect } from 'react';
import profileImage from './Karthi.jpg';

const profileConfig = {
    name: "Karthikeyan A",
    title: "Technical Analyst & Full-Stack Developer",
    securityTitle: "Cloud & Cyber Security Specialist",
    avatarUrl: profileImage,
    github: "https://github.com/KarthiArun-droid",
    linkedin: "https://www.linkedin.com/in/karthikeyan-a-794649403",
    email: "rk.karthiarun@gmail.com",
    phone: "6369031251"
};

const certifications = [
    {
        id: "cisco-cybersecurity",
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        issuerOrg: "Cisco",
        recipient: "Karthi arun",
        date: "October 15, 2026",
        certId: "ee761ba5-1b7b-4b2a-bbb2-28da6d41c80c",
        badgeUrl: "/certificates/cisco-cybersecurity-badge.png",
        certImageUrl: "/certificates/cisco-cybersecurity-cert.png",
        pdfUrl: "/certificates/cisco-cybersecurity-cert.pdf",
        badgeType: "Cisco Verified Digital Badge",
        badgeHighlight: "Official Cisco Verified Credential",
        description: "Official Cisco Networking Academy certification validating core expertise in modern cyber defense, threat intelligence, CIA Triad principles (Confidentiality, Integrity, Availability), malware countermeasures, network vulnerability assessment, cryptography fundamentals, and legal/ethical security governance.",
        topics: [
            "Threat Landscape & Attack Vectors",
            "Malware & Ransomware Defense",
            "CIA Triad Security Principles",
            "Network Vulnerability Mitigation",
            "Cryptographic Protection & SSL",
            "Privacy, Compliance & Ethics"
        ],
        accentColor: "#059669",
        bgLight: "#ECFDF5",
        borderColor: "#A7F3D0"
    },
    {
        id: "tech-mahindra-cybersecurity",
        title: "Cybersecurity (Online Skilling Course)",
        issuer: "Tech Mahindra Foundation × Skill India Digital Hub",
        issuerOrg: "Tech Mahindra Foundation / NSDC",
        recipient: "Karthikeyan",
        date: "October 15, 2026",
        certId: "Skill India Digital Hub • 10 Hours Skilling",
        badgeUrl: null,
        certImageUrl: "/certificates/tech-mahindra-cybersecurity-cert.png",
        pdfUrl: "/certificates/tech-mahindra-cybersecurity-cert.pdf",
        badgeType: "Skill India NSDC Certification",
        badgeHighlight: "Certified Skilling Program (10 Hours)",
        description: "Comprehensive 10-hour cybersecurity skilling course offered by Tech Mahindra Foundation through the Govt. of India's Skill India Digital Hub (National Skill Development Corporation - NSDC), certified by Chetan Kapoor (CEO, Tech Mahindra Foundation). Validates practical cyber defense, endpoint threat hygiene, and security best practices.",
        topics: [
            "Cyber Defense & Security Principles",
            "Endpoint & Workstation Threat Hygiene",
            "Phishing, Spoofing & Social Engineering Defense",
            "Authentication & Credential Protection",
            "NSDC Verified Digital Skilling Standards",
            "Enterprise Security Policies"
        ],
        accentColor: "#2563EB",
        bgLight: "#EFF6FF",
        borderColor: "#BFDBFE"
    }
];

const cyberDefensePillars = [
    {
        title: "Cloud & Network Perimeter Security",
        tag: "AWS VPC & Subnet Isolation",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
        ),
        desc: "Architected segregated AWS VPC infrastructure with isolated private subnet groups for RDS PostgreSQL, enforcing fine-grained security groups that restrict database ingress strictly to authorized EC2/ECS compute tasks.",
        tags: ["AWS VPC", "Security Groups", "Subnet Isolation", "Zero Trust Perimeter"]
    },
    {
        title: "Data Protection & In-Transit Encryption",
        tag: "SSL/TLS & Cryptography",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
        ),
        desc: "Diagnosed and resolved cross-VPC networking boundaries to enforce mandatory SSL/TLS encryption in transit across application-to-database pipelines. Eliminated hardcoded keys through secure environment secret injection.",
        tags: ["SSL/TLS In-Transit", "PostgreSQL SSL", "HMAC-SHA256 Manifests", "Credential Hygiene"]
    },
    {
        title: "Email Security & Anti-Spoofing Protocols",
        tag: "SPF • DKIM • DMARC",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
        ),
        desc: "Configured full cryptographic email authentication (SPF, DKIM, DMARC) on AWS SES to safeguard production domain integrity. Actively monitored IP blacklist status and reputation health, successfully lifting SES sandbox constraints.",
        tags: ["SPF", "DKIM", "DMARC", "AWS SES", "Blacklist Monitoring"]
    },
    {
        title: "Threat Telemetry & Access Governance",
        tag: "Anomaly Detection & RBAC",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
        ),
        desc: "Engineered SpamTight's real-time threat classification algorithms with dynamic IP blocking and geoblocking rules. Designed multi-tenant architecture with strict data boundary separation and Role-Based Access Control (RBAC).",
        tags: ["SpamTight Anomaly Engine", "Granular RBAC", "Multi-Tenant Isolation", "Threat Telemetry"]
    }
];

const projects = [
    {
        title: "SpamTight - Network Security & Threat Telemetry Engine",
        tagline: "High-Throughput Threat Telemetry, Geoblocking & Real-Time Anomaly Filtering",
        description: "Architected a domain-level threat classification and telemetry engine capable of filtering malicious traffic, inspecting sender abuse vectors, and analyzing anomalies in real time. Implemented rule-based geoblocking policies, SPF/DKIM/DMARC domain protections on AWS SES, and SSL-encrypted database connections across segregated VPC subnets.",
        tech: ["Python", "FastAPI", "AWS (VPC & SES)", "PostgreSQL (SSL)", "Docker", "SPF / DKIM / DMARC", "Threat Detection"],
        category: "Cybersecurity",
        isSecurityRelated: true,
        highlights: [
            "Automated threat classification, IP reputation filtering & DNS blacklist checks",
            "AWS VPC private subnet isolation with SSL-encrypted PostgreSQL connections (encryption in transit)",
            "SPF, DKIM, and DMARC deployment on AWS SES to neutralize email spoofing & phishing misuse"
        ],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "Estate Mobile App - Real-Time Real Estate Auction Platform",
        tagline: "Cross-Platform Real-Time Auction Engine & Multi-Role System Architecture",
        description: "Engineered a production-ready mobile platform with Role-Based Access Control (Buyer, Agent, Admin). Designed a real-time bidding pipeline powered by WebSockets with an automatic HTTP polling fallback for web resiliency. Integrated client verification using QR code generation/scanning, geo-location mapping, and automated PDF auction audit logs.",
        tech: ["React Native", "Expo", "WebSockets", "React Navigation", "AsyncStorage", "react-native-maps"],
        category: "Mobile",
        isSecurityRelated: true,
        highlights: [
            "Low-latency WebSocket bidding engine with fallback resiliency",
            "Role-Based Access Control (RBAC) & cryptographic tenant data isolation",
            "Client verification via QR code scanning & tamper-resistant PDF audit logs"
        ],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "OTT-FF - Scalable Video Streaming Architecture",
        tagline: "Netflix-Scale Microservices Architecture & Secure CDN Delivery",
        description: "Engineered a distributed microservices platform decoupling Auth, Catalog, and Streaming behind an API Gateway. Implemented Redis Cache-Aside for sub-millisecond catalog lookups, HMAC-SHA256 cryptographically signed CDN manifests to prevent hotlinking, and HLS.js adaptive bitrate streaming.",
        tech: ["Go (Golang)", "React 19", "TypeScript", "Docker Compose", "PostgreSQL", "MongoDB", "Redis", "HLS.js"],
        category: "Cloud Architecture",
        isSecurityRelated: true,
        highlights: [
            "Microservices architecture with centralized API Gateway security layer",
            "Cache-Aside sub-ms lookup latency with Redis caching",
            "HMAC-SHA256 cryptographically signed CDN tokens eliminating media theft & hotlinking"
        ],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "Textile AI - Industrial Computer Vision & Intelligence Platform",
        tagline: "YOLO Defect Classification & Real-Time Production Telemetry",
        description: "Developed an industrial intelligence system integrating YOLO object detection models for real-time fabric defect identification and classification. Built dynamic operational dashboards to visualize failure patterns, paired with an LLM knowledge assistant for rapid operational troubleshooting.",
        tech: ["Next.js", "React 19", "TypeScript", "YOLO/Python", "Recharts", "Framer Motion"],
        category: "AI & Full-Stack",
        isSecurityRelated: false,
        highlights: [
            "Real-time visual defect detection & severity scoring",
            "Dynamic production telemetry dashboards",
            "LLM-assisted operational troubleshooting"
        ],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    },
    {
        title: "Dynamic Certificate Studio - High-Performance Batch Rendering Tool",
        tagline: "Client-Side Batch Ingestion & Dynamic Document Rendering",
        description: "Developed a responsive WYSIWYG digital certificate studio supporting dynamic element placement and real-time canvas preview. Built client-side batch CSV parsing and high-resolution PDF/PNG generation pipelines, eliminating server-side rendering bottlenecks.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Canvas API", "jsPDF", "Lucide React"],
        category: "Frontend Tool",
        isSecurityRelated: false,
        highlights: [
            "WYSIWYG layout editor with instant preview",
            "Bulk CSV schema parsing",
            "Zero-server overhead client-side rendering"
        ],
        liveUrl: "https://github.com/KarthiArun-droid",
        githubUrl: "https://github.com/KarthiArun-droid"
    }
];

export default function Portfolio() {
    const [filter, setFilter] = useState("All");
    const [selectedCert, setSelectedCert] = useState(null);

    const categories = ["All", "Cybersecurity", "Mobile", "Backend & Data", "Cloud Architecture", "AI & Full-Stack", "Frontend Tool"];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter || (filter === "Cybersecurity" && p.isSecurityRelated));

    // Handle ESC key to close modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedCert(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div style={styles.page}>
            <style>{`
                .project-card { transition: all 0.3s ease; position: relative; overflow: hidden; }
                .project-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #2563EB, #4F46E5); transform: scaleX(0); transition: transform 0.3s ease; transform-origin: left; }
                .project-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08) !important; }
                .project-card:hover::before { transform: scaleX(1); }
                .strategy-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .strategy-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08) !important; }
                .cert-card { transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
                .cert-card:hover { transform: translateY(-4px); box-shadow: 0 14px 28px rgba(37, 99, 235, 0.1) !important; }
                .cert-badge-pulse { animation: badgeGlow 3s ease-in-out infinite; }
                @keyframes badgeGlow {
                    0%, 100% { filter: drop-shadow(0 4px 10px rgba(5, 150, 105, 0.25)); }
                    50% { filter: drop-shadow(0 8px 20px rgba(5, 150, 105, 0.45)); }
                }
                .btn-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
                .btn-hover:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37, 99, 235, 0.35) !important; }
                .nav-link { transition: color 0.2s ease; }
                .nav-link:hover { color: #2563EB !important; }
                .cert-preview-hover { transition: transform 0.3s ease; }
                .cert-preview-hover:hover { transform: scale(1.02); }
                @media (max-width: 860px) {
                    .cert-card-grid { flex-direction: column !important; }
                    .cert-badge-col { width: 100% !important; border-right: none !important; border-bottom: 1px solid #E2E8F0 !important; }
                }
            `}</style>

            {/* Navigation Bar */}
            <nav style={styles.nav}>
                <div style={styles.logo}>{profileConfig.name}</div>
                <div style={styles.navLinks}>
                    <a href="#about" style={styles.navLink} className="nav-link">About</a>
                    <a href="#cybersecurity" style={styles.navLink} className="nav-link">Cybersecurity</a>
                    <a href="#projects" style={styles.navLink} className="nav-link">Projects</a>
                    <a href="#certifications" style={styles.navLink} className="nav-link">Certifications</a>
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
                    <div style={{ position: 'absolute', top: '12%', left: '12%', filter: 'blur(2px)', color: '#CBD5E1', fontSize: '2.5rem', fontWeight: '800', transform: 'rotate(-10deg)', opacity: 0.35 }}>Cybersecurity</div>
                    <div style={{ position: 'absolute', top: '8%', right: '22%', filter: 'blur(3px)', color: '#94A3B8', fontSize: '2.8rem', fontWeight: '900', transform: 'rotate(12deg)', opacity: 0.25 }}>Zero Trust</div>
                    <div style={{ position: 'absolute', top: '55%', left: '8%', filter: 'blur(2px)', color: '#CBD5E1', fontSize: '2.6rem', fontWeight: '800', transform: 'rotate(-5deg)', opacity: 0.3 }}>AWS VPC</div>
                    <div style={{ position: 'absolute', top: '40%', right: '12%', filter: 'blur(2px)', color: '#94A3B8', fontSize: '2.4rem', fontWeight: '900', transform: 'rotate(20deg)', opacity: 0.35 }}>SSL/TLS</div>
                    <div style={{ position: 'absolute', top: '78%', left: '18%', filter: 'blur(3px)', color: '#CBD5E1', fontSize: '3rem', fontWeight: '800', transform: 'rotate(-15deg)', opacity: 0.2 }}>Network Security</div>
                    <div style={{ position: 'absolute', top: '68%', right: '22%', filter: 'blur(3px)', color: '#94A3B8', fontSize: '2.8rem', fontWeight: '900', transform: 'rotate(8deg)', opacity: 0.25 }}>SPF / DKIM / DMARC</div>
                    <div style={{ position: 'absolute', top: '28%', left: '28%', filter: 'blur(2px)', color: '#CBD5E1', fontSize: '2.2rem', fontWeight: '800', transform: 'rotate(15deg)', opacity: 0.3 }}>Threat Intel</div>
                    <div style={{ position: 'absolute', top: '48%', left: '22%', filter: 'blur(3px)', color: '#94A3B8', fontSize: '2.5rem', fontWeight: '900', transform: 'rotate(-8deg)', opacity: 0.35 }}>Python</div>
                    <div style={{ position: 'absolute', top: '18%', right: '8%', filter: 'blur(3px)', color: '#CBD5E1', fontSize: '2.4rem', fontWeight: '800', transform: 'rotate(-12deg)', opacity: 0.2 }}>Docker</div>
                    <div style={{ position: 'absolute', top: '82%', right: '12%', filter: 'blur(3px)', color: '#94A3B8', fontSize: '2.6rem', fontWeight: '900', transform: 'rotate(-20deg)', opacity: 0.3 }}>AWS</div>
                    <div style={{ position: 'absolute', top: '32%', right: '32%', filter: 'blur(2px)', color: '#CBD5E1', fontSize: '2.4rem', fontWeight: '800', transform: 'rotate(5deg)', opacity: 0.25 }}>PostgreSQL</div>
                    <div style={{ position: 'absolute', top: '72%', left: '38%', filter: 'blur(2px)', color: '#94A3B8', fontSize: '2.2rem', fontWeight: '900', transform: 'rotate(10deg)', opacity: 0.3 }}>Go</div>
                    
                    <div style={{ position: 'absolute', top: '22%', left: '4%', filter: 'blur(3px)', color: '#CBD5E1', fontSize: '2.5rem', fontWeight: '800', transform: 'rotate(25deg)', opacity: 0.2 }}>React 19</div>
                    <div style={{ position: 'absolute', top: '38%', left: '12%', filter: 'blur(2px)', color: '#94A3B8', fontSize: '2.2rem', fontWeight: '900', transform: 'rotate(-18deg)', opacity: 0.3 }}>FastAPI</div>
                    <div style={{ position: 'absolute', top: '14%', right: '38%', filter: 'blur(3px)', color: '#CBD5E1', fontSize: '2.6rem', fontWeight: '800', transform: 'rotate(-5deg)', opacity: 0.25 }}>Cryptography</div>
                    <div style={{ position: 'absolute', top: '52%', right: '22%', filter: 'blur(2px)', color: '#94A3B8', fontSize: '2.4rem', fontWeight: '900', transform: 'rotate(15deg)', opacity: 0.3 }}>Redis</div>
                    <div style={{ position: 'absolute', top: '62%', right: '4%', filter: 'blur(3px)', color: '#CBD5E1', fontSize: '2.5rem', fontWeight: '800', transform: 'rotate(-22deg)', opacity: 0.2 }}>SpamTight</div>
                    <div style={{ position: 'absolute', top: '88%', left: '4%', filter: 'blur(2px)', color: '#94A3B8', fontSize: '2.2rem', fontWeight: '900', transform: 'rotate(10deg)', opacity: 0.35 }}>RBAC</div>
                    <div style={{ position: 'absolute', top: '92%', right: '42%', filter: 'blur(3px)', color: '#CBD5E1', fontSize: '2.8rem', fontWeight: '800', transform: 'rotate(-8deg)', opacity: 0.2 }}>Next.js</div>
                    <div style={{ position: 'absolute', top: '4%', left: '42%', filter: 'blur(2px)', color: '#94A3B8', fontSize: '2.4rem', fontWeight: '900', transform: 'rotate(14deg)', opacity: 0.3 }}>TypeScript</div>
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
                
                {/* Hero Role Badges */}
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '18px', position: 'relative', zIndex: 1 }}>
                    <div style={styles.badge}>{profileConfig.title}</div>
                    <div style={styles.securityBadge}>🛡️ Cloud & Cyber Security</div>
                </div>

                <h1 style={{...styles.heroTitle, position: 'relative', zIndex: 1}}>
                    Engineering <span style={styles.highlightText}>Scalable Web, Mobile &</span> <br />
                    Secure Distributed Architectures
                </h1>
                <p style={{...styles.heroSubtitle, position: 'relative', zIndex: 1}}>
                    Translating technical requirements into high-performance full-stack applications, secure cloud architectures (VPC, SSL/TLS, Zero Trust), real-time data pipelines, and GenAI automation workflows.
                </p>
                <div style={{...styles.heroCta, position: 'relative', zIndex: 1}}>
                    <a href="#projects" style={styles.btnPrimary} className="btn-hover">View Projects</a>
                    <a href="#certifications" style={styles.btnSecondary} className="btn-hover">
                        <span style={{ marginRight: '6px' }}>📜</span> View Certificates & Badges
                    </a>
                    <a href={profileConfig.linkedin} target="_blank" rel="noreferrer" style={styles.btnSecondary} className="btn-hover">LinkedIn Profile</a>
                    <a href={profileConfig.github} target="_blank" rel="noreferrer" style={styles.btnSecondary} className="btn-hover">GitHub Profile</a>
                </div>
            </header>

            {/* About Me Section */}
            <section id="about" style={styles.section}>
                <div style={styles.sectionHeader}>
                    <h2 style={styles.sectionTitle}>About Me</h2>
                </div>
                <div style={styles.aboutCard}>
                    <p style={{ ...styles.heroSubtitle, textAlign: 'left', maxWidth: '850px', margin: '0 auto', lineHeight: '1.8' }}>
                        Analytical and solutions-driven <strong>Technical Analyst & Full-Stack Developer</strong> with hands-on expertise in <strong>cybersecurity, secure cloud infrastructure, and distributed systems</strong>. Experienced across the complete SDLC—architecting AWS environments (VPC subnet isolation, fine-grained security groups, SSL-encrypted database communication), configuring cryptographic email authentication protocols (SPF, DKIM, DMARC) with domain reputation monitoring, and designing role-based access control (RBAC). Proven track record developing automated threat telemetry engines, scalable microservices, and AI-powered operational pipelines.
                    </p>
                </div>
            </section>

            {/* Dedicated Cybersecurity Section */}
            <section id="cybersecurity" style={styles.section}>
                <div style={styles.sectionHeader}>
                    <div style={styles.sectionEyebrow}>SECURITY DEFENSE ARCHITECTURE</div>
                    <h2 style={styles.sectionTitle}>Cybersecurity & Cloud Defense</h2>
                    <p style={styles.sectionSubtitle}>Production-proven network hardening, in-transit encryption, email authentication, and threat telemetry</p>
                </div>

                <div style={styles.cyberGrid} className="cyber-grid">
                    {cyberDefensePillars.map((pillar, idx) => (
                        <div key={idx} style={styles.cyberCard} className="strategy-card">
                            <div style={styles.cyberCardHeader}>
                                <div style={styles.cyberIconBox}>{pillar.icon}</div>
                                <span style={styles.cyberTagPill}>{pillar.tag}</span>
                            </div>
                            <h3 style={styles.cyberCardTitle}>{pillar.title}</h3>
                            <p style={styles.cyberCardDesc}>{pillar.desc}</p>
                            <div style={styles.cyberTagsList}>
                                {pillar.tags.map((t, i) => (
                                    <span key={i} style={styles.cyberPillTag}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Engineering Projects Section */}
            <section id="projects" style={styles.section}>
                <div style={styles.sectionHeader}>
                    <h2 style={styles.sectionTitle}>Featured Engineering Projects</h2>
                    <p style={styles.sectionSubtitle}>Production-grade cybersecurity, full-stack, mobile, and AI architectures</p>

                    <div style={styles.filterRow}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={filter === cat ? styles.filterBtnActive : styles.filterBtn}
                            >
                                {cat === "Cybersecurity" ? "🛡️ Cybersecurity" : cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={styles.grid}>
                    {filteredProjects.map((p, idx) => (
                        <div key={idx} style={styles.projectCard} className="project-card">
                            <div style={styles.cardHeader}>
                                <span style={p.category === "Cybersecurity" ? styles.cyberCategoryBadge : styles.categoryBadge}>
                                    {p.category}
                                </span>
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

            {/* Certifications & Verified Badges Section */}
            <section id="certifications" style={styles.section}>
                <div style={styles.sectionHeader}>
                    <div style={styles.sectionEyebrow}>CREDENTIALS & VALIDATION</div>
                    <h2 style={styles.sectionTitle}>Certifications & Verified Badges</h2>
                    <p style={styles.sectionSubtitle}>Official industry-recognized digital credentials and cybersecurity certifications</p>
                </div>

                <div style={styles.certList}>
                    {certifications.map((cert) => (
                        <div key={cert.id} style={styles.certCard} className="cert-card">
                            <div style={styles.certCardFlex} className="cert-card-grid">
                                {/* Left Column: Badge or Certificate Thumbnail */}
                                <div style={styles.certBadgeCol} className="cert-badge-col">
                                    {cert.badgeUrl ? (
                                        <div style={styles.badgeWrapper}>
                                            <div style={styles.badgeImageContainer}>
                                                <img 
                                                    src={cert.badgeUrl} 
                                                    alt={`${cert.title} Badge`} 
                                                    style={styles.badgeImage} 
                                                    className="cert-badge-pulse"
                                                />
                                            </div>
                                            <div style={styles.verifiedBadgePill}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#059669" style={{ marginRight: '4px' }}>
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                                </svg>
                                                Verified by Cisco
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={styles.certThumbWrapper}>
                                            <img 
                                                src={cert.certImageUrl} 
                                                alt={`${cert.title} Certificate`} 
                                                style={styles.certThumbImage} 
                                                className="cert-preview-hover"
                                                onClick={() => setSelectedCert(cert)}
                                            />
                                            <div style={styles.certThumbTag}>
                                                <span>✓ Verified Skilling Course</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Right Column: Details & Verification Meta */}
                                <div style={styles.certDetailsCol}>
                                    <div style={styles.certTopRow}>
                                        <span style={{ ...styles.certIssuerTag, backgroundColor: cert.bgLight, color: cert.accentColor, borderColor: cert.borderColor }}>
                                            {cert.badgeHighlight}
                                        </span>
                                        <span style={styles.certDatePill}>
                                            📅 {cert.date}
                                        </span>
                                    </div>

                                    <h3 style={styles.certCardTitle}>{cert.title}</h3>
                                    
                                    <div style={styles.certIssuerRow}>
                                        <span style={styles.certIssuerText}>
                                            <strong>Issuer:</strong> {cert.issuer}
                                        </span>
                                        <span style={styles.certDotDivider}>•</span>
                                        <span style={styles.certRecipientText}>
                                            <strong>Awarded To:</strong> {cert.recipient}
                                        </span>
                                    </div>

                                    <div style={styles.certIdBadge}>
                                        <span style={{ fontWeight: '600', color: '#64748B' }}>Credential ID:</span>
                                        <code style={styles.certIdCode}>{cert.certId}</code>
                                    </div>

                                    <p style={styles.certDescription}>{cert.description}</p>

                                    {/* Skills / Topics */}
                                    <div style={styles.certTopicsContainer}>
                                        <div style={styles.certTopicsLabel}>Key Competencies Validated:</div>
                                        <div style={styles.certTopicsList}>
                                            {cert.topics.map((topic, i) => (
                                                <span key={i} style={styles.certTopicTag}>
                                                    <span style={{ color: cert.accentColor, marginRight: '4px' }}>✓</span> {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div style={styles.certActionsRow}>
                                        <button 
                                            onClick={() => setSelectedCert(cert)}
                                            style={styles.btnCertPreview}
                                            className="btn-hover"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            Preview Certificate
                                        </button>
                                        <a 
                                            href={cert.pdfUrl} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            style={styles.btnCertPdf}
                                            className="btn-hover"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <polyline points="10 9 9 9 8 9"></polyline>
                                            </svg>
                                            View Official PDF ↗
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Technical Capabilities Section */}
            <section id="skills" style={styles.section}>
                <div style={styles.sectionHeader}>
                    <h2 style={styles.sectionTitle}>Core Technical Capabilities</h2>
                    <p style={styles.sectionSubtitle}>Architectural proficiencies across full-stack systems, cloud security, and distributed environments</p>
                </div>
                <div style={styles.skillsGrid}>
                    {[
                        { cat: 'Architecture & Systems Analysis', skills: 'System Design, Technical Requirements Gathering (FRD/TRD), API Architecture, Database Schema Design, Process Flow Modeling (BPMN), Agile/Scrum' },
                        { cat: 'Cybersecurity & Cloud Defense', skills: 'Network Security, AWS VPC & Security Groups, Subnet Isolation, SSL/TLS Encryption in Transit, Email Security (SPF/DKIM/DMARC), RBAC & Multi-Tenant Boundaries, Threat Telemetry, SpamTight Anomaly Detection, Blacklist Monitoring, Credential Protection' },
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

            {/* Certificate Preview Modal */}
            {selectedCert && (
                <div 
                    style={styles.modalOverlay} 
                    onClick={() => setSelectedCert(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div 
                        style={styles.modalContent} 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={styles.modalHeader}>
                            <div>
                                <span style={{ ...styles.modalBadge, backgroundColor: selectedCert.bgLight, color: selectedCert.accentColor }}>
                                    {selectedCert.issuer}
                                </span>
                                <h3 style={styles.modalTitle}>{selectedCert.title}</h3>
                                <p style={styles.modalSubtitle}>Awarded to {selectedCert.recipient} • {selectedCert.date}</p>
                            </div>
                            <button 
                                onClick={() => setSelectedCert(null)} 
                                style={styles.modalCloseBtn}
                                aria-label="Close certificate preview"
                            >
                                ✕
                            </button>
                        </div>

                        <div style={styles.modalBody}>
                            <img 
                                src={selectedCert.certImageUrl} 
                                alt={`${selectedCert.title} Certificate`} 
                                style={styles.modalImage} 
                            />
                        </div>

                        <div style={styles.modalFooter}>
                            <span style={styles.modalCertId}>
                                <strong>ID:</strong> {selectedCert.certId}
                            </span>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <a 
                                    href={selectedCert.pdfUrl} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    style={styles.modalPdfBtn}
                                    className="btn-hover"
                                >
                                    Open Official PDF ↗
                                </a>
                                <button 
                                    onClick={() => setSelectedCert(null)} 
                                    style={styles.modalDismissBtn}
                                >
                                    Close Preview
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer style={styles.footer}>
                <p style={styles.footerText}>© 2026 {profileConfig.name}. All rights reserved.</p>
                <p style={styles.footerSubText}>
                    <a href={profileConfig.github} target="_blank" rel="noreferrer" style={styles.footerLink}>GitHub</a> •
                    <a href={profileConfig.linkedin} target="_blank" rel="noreferrer" style={styles.footerLink}>LinkedIn</a> •
                    <a href="#certifications" style={styles.footerLink}>Certifications & Badges</a>
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
        padding: '10px 24px', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        borderBottom: '1px solid #E2E8F0',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        zIndex: 1000
    },
    logo: { fontSize: '1.05rem', fontWeight: '700', color: theme.textMain },
    navLinks: { display: 'flex', gap: '20px', alignItems: 'center' },
    navLink: { color: '#475569', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '500' },
    phoneLink: { color: '#475569', textDecoration: 'none', fontSize: '0.78rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' },
    contactBtn: { color: '#ffffff', background: 'linear-gradient(135deg, #2563EB, #4F46E5)', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '600', padding: '6px 14px', borderRadius: '50px' },
    hero: { position: 'relative', maxWidth: '880px', margin: '0 auto', textAlign: 'center', padding: '75px 20px 85px' },
    avatarWrapper: { 
        display: 'inline-flex', 
        justifyContent: 'center', 
        marginBottom: '22px',
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
    badge: { display: 'inline-block', backgroundColor: theme.accentLight, color: theme.accent, padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' },
    securityBadge: { display: 'inline-block', backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', color: '#047857', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700' },
    heroTitle: { fontSize: '2.75rem', fontWeight: '800', lineHeight: '1.2', color: theme.textMain, marginBottom: '20px' },
    highlightText: { background: 'linear-gradient(90deg, #2563EB, #4F46E5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    heroSubtitle: { fontSize: '1.15rem', color: theme.textSub, lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 32px' },
    heroCta: { display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' },
    btnPrimary: { 
        background: 'linear-gradient(135deg, #2563EB, #4F46E5)', 
        color: '#ffffff', 
        padding: '12px 22px', 
        borderRadius: '8px', 
        fontWeight: '600', 
        textDecoration: 'none', 
        fontSize: '0.92rem',
        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
    },
    btnSecondary: { 
        backgroundColor: '#ffffff', 
        color: theme.textMain, 
        border: `1px solid ${theme.border}`, 
        padding: '12px 22px', 
        borderRadius: '8px', 
        textDecoration: 'none', 
        fontSize: '0.92rem', 
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center',
        boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
    },
    section: { maxWidth: '1150px', margin: '0 auto', padding: '0 20px 85px' },
    sectionHeader: { textAlign: 'center', marginBottom: '40px' },
    sectionEyebrow: { fontSize: '0.78rem', fontWeight: '800', letterSpacing: '1.5px', color: '#2563EB', marginBottom: '8px', textTransform: 'uppercase' },
    sectionTitle: { fontSize: '2rem', fontWeight: '800', color: theme.textMain, marginBottom: '8px' },
    sectionSubtitle: { color: theme.textSub, fontSize: '1rem', maxWidth: '640px', margin: '0 auto' },
    aboutCard: { backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '32px 28px', maxWidth: '850px', margin: '0 auto' },
    filterRow: { display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '22px', flexWrap: 'wrap' },
    filterBtn: { background: '#ffffff', border: `1px solid ${theme.border}`, color: theme.textSub, padding: '7px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '500' },
    filterBtnActive: { background: theme.accentLight, border: `1px solid ${theme.accent}`, color: theme.accent, fontWeight: '700', padding: '7px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem' },
    
    // Cybersecurity section styling
    cyberGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '22px',
        alignItems: 'stretch'
    },
    cyberCard: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '14px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
    },
    cyberCardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px'
    },
    cyberIconBox: {
        width: '44px',
        height: '44px',
        borderRadius: '10px',
        backgroundColor: '#EFF6FF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #DBEAFE'
    },
    cyberTagPill: {
        fontSize: '0.75rem',
        fontWeight: '700',
        color: '#2563EB',
        backgroundColor: '#EFF6FF',
        padding: '4px 10px',
        borderRadius: '20px'
    },
    cyberCardTitle: {
        fontSize: '1.15rem',
        fontWeight: '700',
        color: theme.textMain,
        marginBottom: '10px',
        lineHeight: '1.4'
    },
    cyberCardDesc: {
        fontSize: '0.88rem',
        color: theme.textSub,
        lineHeight: '1.6',
        marginBottom: '18px',
        flexGrow: 1
    },
    cyberTagsList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        borderTop: '1px solid #F1F5F9',
        paddingTop: '14px'
    },
    cyberPillTag: {
        fontSize: '0.72rem',
        backgroundColor: '#F8FAFC',
        border: '1px solid #E2E8F0',
        color: '#334155',
        padding: '3px 8px',
        borderRadius: '6px',
        fontWeight: '600'
    },

    // Projects Grid styling
    grid: { 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
        gap: '28px',
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
    cyberCategoryBadge: {
        fontSize: '0.78rem',
        color: '#047857',
        background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
        border: '1px solid #A7F3D0',
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
    projectTitle: { fontSize: '1.3rem', fontWeight: '700', color: theme.textMain, margin: '0 0 6px 0' },
    projectTagline: { fontSize: '0.88rem', color: theme.accent, marginBottom: '14px', fontWeight: '600' },
    projectDesc: { fontSize: '0.9rem', color: theme.textSub, lineHeight: '1.6', marginBottom: '18px', flexGrow: 1 },
    highlightsList: { marginBottom: '20px' },
    highlightItem: { fontSize: '0.86rem', color: theme.textMain, marginBottom: '6px', display: 'flex', alignItems: 'flex-start' },
    bullet: { color: theme.accent, marginRight: '8px', fontSize: '1.1rem', lineHeight: 1 },
    techTags: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto', borderTop: `1px solid ${theme.border}`, paddingTop: '16px' },
    techTag: { backgroundColor: '#F1F5F9', border: `1px solid ${theme.border}`, color: '#0F172A', fontSize: '0.75rem', padding: '5px 10px', borderRadius: '20px', fontWeight: '600', whiteSpace: 'nowrap' },

    // Certifications styling
    certList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
    },
    certCard: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
        overflow: 'hidden'
    },
    certCardFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    certBadgeCol: {
        width: '260px',
        flexShrink: 0,
        backgroundColor: '#F8FAFC',
        borderRight: '1px solid #E2E8F0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px 20px',
        textAlign: 'center'
    },
    badgeWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px'
    },
    badgeImageContainer: {
        width: '135px',
        height: '135px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    badgeImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
    verifiedBadgePill: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.78rem',
        fontWeight: '700',
        color: '#065F46',
        backgroundColor: '#D1FAE5',
        border: '1px solid #A7F3D0',
        padding: '4px 12px',
        borderRadius: '50px'
    },
    certThumbWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer'
    },
    certThumbImage: {
        width: '190px',
        height: 'auto',
        borderRadius: '8px',
        border: '2px solid #E2E8F0',
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
    },
    certThumbTag: {
        fontSize: '0.75rem',
        fontWeight: '700',
        color: '#1D4ED8',
        backgroundColor: '#EFF6FF',
        border: '1px solid #BFDBFE',
        padding: '4px 10px',
        borderRadius: '20px'
    },
    certDetailsCol: {
        flexGrow: 1,
        padding: '28px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    certTopRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '10px'
    },
    certIssuerTag: {
        fontSize: '0.78rem',
        fontWeight: '700',
        padding: '4px 12px',
        borderRadius: '20px',
        border: '1px solid'
    },
    certDatePill: {
        fontSize: '0.8rem',
        color: '#64748B',
        fontWeight: '600'
    },
    certCardTitle: {
        fontSize: '1.45rem',
        fontWeight: '800',
        color: theme.textMain,
        margin: '0 0 8px 0',
        lineHeight: '1.3'
    },
    certIssuerRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '0.88rem',
        color: '#475569',
        marginBottom: '10px',
        flexWrap: 'wrap'
    },
    certIssuerText: {},
    certRecipientText: {},
    certDotDivider: { color: '#94A3B8' },
    certIdBadge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.8rem',
        backgroundColor: '#F1F5F9',
        padding: '4px 12px',
        borderRadius: '6px',
        marginBottom: '14px',
        width: 'fit-content'
    },
    certIdCode: {
        fontFamily: 'monospace',
        fontWeight: '600',
        color: '#0F172A',
        fontSize: '0.82rem'
    },
    certDescription: {
        fontSize: '0.9rem',
        color: '#334155',
        lineHeight: '1.6',
        marginBottom: '16px'
    },
    certTopicsContainer: {
        marginBottom: '20px'
    },
    certTopicsLabel: {
        fontSize: '0.78rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        color: '#64748B',
        marginBottom: '8px'
    },
    certTopicsList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px'
    },
    certTopicTag: {
        fontSize: '0.78rem',
        backgroundColor: '#F8FAFC',
        border: '1px solid #E2E8F0',
        color: '#1E293B',
        padding: '4px 10px',
        borderRadius: '6px',
        fontWeight: '500'
    },
    certActionsRow: {
        display: 'flex',
        gap: '12px',
        marginTop: 'auto',
        paddingTop: '16px',
        borderTop: '1px solid #F1F5F9',
        flexWrap: 'wrap'
    },
    btnCertPreview: {
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: '#2563EB',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '8px',
        padding: '9px 18px',
        fontSize: '0.86rem',
        fontWeight: '600',
        cursor: 'pointer'
    },
    btnCertPdf: {
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        color: '#0F172A',
        border: '1px solid #CBD5E1',
        borderRadius: '8px',
        padding: '9px 18px',
        fontSize: '0.86rem',
        fontWeight: '600',
        textDecoration: 'none'
    },

    // Modal styling
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(6px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '880px',
        maxHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
        overflow: 'hidden'
    },
    modalHeader: {
        padding: '20px 24px',
        borderBottom: '1px solid #E2E8F0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF'
    },
    modalBadge: {
        fontSize: '0.75rem',
        fontWeight: '700',
        padding: '3px 10px',
        borderRadius: '20px',
        display: 'inline-block',
        marginBottom: '6px'
    },
    modalTitle: {
        fontSize: '1.25rem',
        fontWeight: '800',
        color: '#0F172A',
        margin: '0 0 4px 0'
    },
    modalSubtitle: {
        fontSize: '0.85rem',
        color: '#64748B',
        margin: 0
    },
    modalCloseBtn: {
        backgroundColor: '#F1F5F9',
        border: 'none',
        borderRadius: '50%',
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        color: '#475569',
        cursor: 'pointer',
        fontWeight: '700'
    },
    modalBody: {
        padding: '20px',
        overflowY: 'auto',
        backgroundColor: '#F8FAFC',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalImage: {
        maxWidth: '100%',
        maxHeight: '62vh',
        objectFit: 'contain',
        borderRadius: '8px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
    },
    modalFooter: {
        padding: '16px 24px',
        borderTop: '1px solid #E2E8F0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flexWrap: 'wrap',
        gap: '12px'
    },
    modalCertId: {
        fontSize: '0.82rem',
        color: '#475569'
    },
    modalPdfBtn: {
        backgroundColor: '#2563EB',
        color: '#FFFFFF',
        textDecoration: 'none',
        padding: '8px 18px',
        borderRadius: '8px',
        fontSize: '0.86rem',
        fontWeight: '600'
    },
    modalDismissBtn: {
        backgroundColor: '#F1F5F9',
        color: '#334155',
        border: '1px solid #CBD5E1',
        padding: '8px 16px',
        borderRadius: '8px',
        fontSize: '0.86rem',
        fontWeight: '600',
        cursor: 'pointer'
    },

    // Skills section
    skillsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '24px' },
    skillBox: { backgroundColor: theme.cardBg, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '22px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' },
    skillCategory: { color: theme.textMain, fontSize: '1.05rem', margin: '0 0 12px 0', fontWeight: '700' },
    skillTags: { display: 'flex', flexWrap: 'wrap', gap: '8px' },

    // Footer
    footer: { textAlign: 'center', padding: '45px 20px', borderTop: `1px solid ${theme.border}`, backgroundColor: '#F8FAFC' },
    footerText: { color: theme.textMain, fontSize: '0.9rem', margin: '0 0 6px 0', fontWeight: '600' },
    footerSubText: { color: theme.textSub, fontSize: '0.85rem', margin: 0 },
    footerLink: { color: theme.accent, textDecoration: 'none', margin: '0 8px' }
};