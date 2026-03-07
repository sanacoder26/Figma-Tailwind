import { useState } from "react";

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
// Teal accent: #0EBFA1  |  Deep navy text: #0D1F2D  |  Soft sky bg: #EAF8F6
// Font: "Plus Jakarta Sans" (display) + "DM Sans" (body)

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --teal: #0EBFA1;
    --teal-dark: #0AA08A;
    --teal-light: #E6FAF7;
    --sky: #EAF8FF;
    --navy: #0D1F2D;
    --gray: #6B7C93;
    --light: #F5FAFD;
    --white: #FFFFFF;
  }

  body { font-family: 'DM Sans', sans-serif; color: var(--navy); overflow-x: hidden; }
  h1,h2,h3,h4,h5 { font-family: 'Plus Jakarta Sans', sans-serif; }

  .teal-btn {
    background: var(--teal);
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 11px 26px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    box-shadow: 0 4px 14px rgba(14,191,161,0.25);
    white-space: nowrap;
  }
  .teal-btn:hover { background: var(--teal-dark); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(14,191,161,0.35); }

  .outline-btn {
    background: transparent;
    color: var(--teal);
    border: 1.5px solid var(--teal);
    border-radius: 6px;
    padding: 10px 24px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .outline-btn:hover { background: var(--teal-light); }

  .section-label {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 14px;
  }

  /* Navbar */
  .navbar {
    position: sticky; top: 0; z-index: 100;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(0,0,0,0.06);
    padding: 0 40px;
    height: 64px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .nav-logo { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 22px; color: var(--navy); letter-spacing: -0.5px; }
  .nav-logo span { color: var(--teal); }
  .nav-links { display: flex; gap: 32px; list-style: none; }
  .nav-links a { font-size: 14px; font-weight: 500; color: var(--gray); text-decoration: none; transition: color 0.2s; }
  .nav-links a:hover { color: var(--navy); }
  .nav-right { display: flex; align-items: center; gap: 16px; }
  .login-btn { background: none; border: 1.5px solid #D1D9E0; border-radius: 6px; padding: 8px 20px; font-size: 14px; font-weight: 600; color: var(--navy); cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif; transition: border-color 0.2s; }
  .login-btn:hover { border-color: var(--teal); color: var(--teal); }
  .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; }
  .hamburger span { width: 22px; height: 2px; background: var(--navy); border-radius: 2px; display: block; transition: all 0.3s; }
  .mobile-menu { display: none; position: absolute; top: 64px; left: 0; right: 0; background: #fff; padding: 20px 24px 28px; border-bottom: 1px solid #eee; box-shadow: 0 8px 24px rgba(0,0,0,0.08); flex-direction: column; gap: 4px; }
  .mobile-menu a { display: block; padding: 10px 0; font-size: 15px; font-weight: 500; color: var(--navy); text-decoration: none; border-bottom: 1px solid #f0f0f0; }

  /* Hero */
  .hero { background: linear-gradient(160deg, #EAF8FF 0%, #F0FBF8 60%, #fff 100%); padding: 80px 40px 60px; text-align: center; }
  .hero h1 { font-size: clamp(32px, 5vw, 58px); font-weight: 800; line-height: 1.12; letter-spacing: -1.5px; max-width: 760px; margin: 0 auto 20px; color: var(--navy); }
  .hero p { font-size: 16px; color: var(--gray); max-width: 480px; margin: 0 auto 32px; line-height: 1.65; }
  .hero-images { display: flex; justify-content: center; margin-top: 52px; position: relative; height: 140px; }
  .hero-circle { width: 110px; height: 110px; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 8px 28px rgba(0,0,0,0.12); overflow: hidden; position: absolute; top: 0; }
  .hero-circle img { width: 100%; height: 100%; object-fit: cover; }

  /* Trust Section */
  .trust { padding: 56px 40px 48px; text-align: center; border-bottom: 1px solid #EEF1F4; }
  .trust-subtitle { font-size: 15px; color: var(--gray); margin-bottom: 6px; }
  .trust-title { font-size: 20px; font-weight: 700; margin-bottom: 32px; }
  .trust-title strong { color: var(--navy); }
  .logos-row { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 32px 48px; margin-bottom: 28px; }
  .logo-item { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 18px; color: #A0ADB8; letter-spacing: -0.5px; transition: color 0.2s; cursor: default; }
  .logo-item:hover { color: var(--navy); }
  .stats-row { display: flex; justify-content: center; gap: 32px; flex-wrap: wrap; }
  .stat-item { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--gray); }
  .stat-item svg { color: var(--teal); }
  .checkmark { display: inline-block; width: 16px; height: 16px; background: var(--teal); border-radius: 50%; color: #fff; font-size: 10px; line-height: 16px; text-align: center; margin-right: 4px; }

  /* Features */
  .features { padding: 96px 40px; display: flex; align-items: center; gap: 72px; max-width: 1100px; margin: 0 auto; }
  .features-text { flex: 1; }
  .features-text h2 { font-size: clamp(28px, 3.5vw, 40px); font-weight: 800; line-height: 1.18; letter-spacing: -0.8px; margin-bottom: 20px; }
  .features-text p { font-size: 15px; color: var(--gray); line-height: 1.75; margin-bottom: 32px; }
  .features-img { flex: 1; border-radius: 16px; overflow: hidden; box-shadow: 0 24px 64px rgba(0,0,0,0.1); }
  .features-img-placeholder { width: 100%; height: 340px; background: linear-gradient(135deg, #1A3A4A 0%, #0D2535 100%); display: flex; align-items: center; justify-content: center; border-radius: 16px; position: relative; overflow: hidden; }
  .features-img-placeholder::before { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }

  /* People avatars for features image */
  .people-group { display: flex; gap: 12px; align-items: center; justify-content: center; flex-wrap: wrap; padding: 20px; }
  .avatar { width: 72px; height: 72px; border-radius: 50%; background: linear-gradient(135deg, #0EBFA1, #0D8C7A); display: flex; align-items: center; justify-content: center; font-size: 28px; color: white; font-weight: bold; border: 3px solid rgba(255,255,255,0.2); }

  /* Awards */
  .awards { padding: 80px 40px; background: #FAFCFE; text-align: center; }
  .awards h2 { font-size: clamp(24px, 3vw, 36px); font-weight: 800; letter-spacing: -0.6px; margin-bottom: 48px; }
  .awards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 860px; margin: 0 auto; }
  .award-card { background: #fff; border: 1px solid #EEF1F4; border-radius: 14px; padding: 28px 20px; text-align: center; transition: box-shadow 0.2s, transform 0.2s; }
  .award-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.08); transform: translateY(-3px); }
  .award-badge { width: 64px; height: 64px; margin: 0 auto 14px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 28px; }
  .award-card h4 { font-size: 13px; font-weight: 700; color: var(--navy); line-height: 1.4; }
  .award-card p { font-size: 12px; color: var(--gray); margin-top: 4px; }

  /* Workflow */
  .workflow { padding: 80px 40px; background: linear-gradient(160deg, #EAF8FF 0%, #F0FBF8 100%); }
  .workflow-inner { max-width: 1060px; margin: 0 auto; }
  .workflow h2 { font-size: clamp(24px, 3vw, 36px); font-weight: 800; text-align: center; letter-spacing: -0.6px; margin-bottom: 40px; }
  .workflow h2 em { font-style: normal; color: var(--teal); }
  .workflow-tabs { display: flex; gap: 0; border-bottom: 2px solid #D8E8F0; margin-bottom: 48px; justify-content: center; }
  .tab-btn { background: none; border: none; padding: 12px 28px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 14px; color: var(--gray); cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; transition: all 0.2s; }
  .tab-btn.active { color: var(--teal); border-bottom-color: var(--teal); }
  .tab-content { display: flex; align-items: center; gap: 60px; }
  .tab-text { flex: 1; }
  .tab-text h3 { font-size: 28px; font-weight: 800; margin-bottom: 16px; letter-spacing: -0.5px; }
  .tab-text p { font-size: 15px; color: var(--gray); line-height: 1.75; margin-bottom: 28px; }
  .tab-image { flex: 1; border-radius: 14px; overflow: hidden; box-shadow: 0 20px 56px rgba(0,0,0,0.12); }
  .tab-img-placeholder { height: 280px; background: linear-gradient(135deg, #0D2535 0%, #1A3A4A 100%); display: flex; align-items: center; justify-content: center; font-size: 64px; }

  /* Testimonial */
  .testimonial-section { padding: 80px 40px; }
  .testimonial-inner { max-width: 1060px; margin: 0 auto; display: flex; align-items: center; gap: 56px; }
  .video-block { flex: 1; border-radius: 16px; overflow: hidden; position: relative; cursor: pointer; }
  .video-placeholder { height: 320px; background: linear-gradient(135deg, #E8830A, #C96A08); display: flex; align-items: center; justify-content: center; position: relative; }
  .play-btn { width: 68px; height: 68px; border-radius: 50%; background: rgba(255,255,255,0.95); display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 28px rgba(0,0,0,0.25); transition: transform 0.2s; }
  .play-btn:hover { transform: scale(1.08); }
  .play-icon { width: 0; height: 0; border-top: 12px solid transparent; border-bottom: 12px solid transparent; border-left: 18px solid #E8830A; margin-left: 4px; }
  .video-label { position: absolute; bottom: 20px; left: 20px; color: white; font-size: 13px; font-weight: 600; }
  .testimonial-card { flex: 1; background: #fff; border: 1px solid #EEF1F4; border-radius: 16px; padding: 36px; box-shadow: 0 16px 48px rgba(0,0,0,0.07); }
  .testimonial-company { font-size: 22px; font-weight: 800; color: #009cde; margin-bottom: 18px; letter-spacing: -0.5px; }
  .testimonial-quote { font-size: 15px; color: var(--gray); line-height: 1.75; margin-bottom: 24px; font-style: italic; }
  .testimonial-author { display: flex; align-items: center; gap: 12px; }
  .author-avatar { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 16px; }
  .author-name { font-size: 14px; font-weight: 700; color: var(--navy); }
  .author-role { font-size: 12px; color: var(--gray); }

  /* CTA Section */
  .cta-section { padding: 80px 40px; background: #FAFCFE; }
  .cta-inner { max-width: 1060px; margin: 0 auto; display: flex; align-items: center; gap: 64px; }
  .cta-text { flex: 1; }
  .cta-text h2 { font-size: clamp(26px, 3vw, 38px); font-weight: 800; line-height: 1.2; letter-spacing: -0.8px; margin-bottom: 20px; }
  .cta-text h2 em { font-style: normal; color: var(--teal); }
  .cta-text p { font-size: 15px; color: var(--gray); line-height: 1.7; margin-bottom: 32px; }
  .cta-buttons { display: flex; gap: 14px; flex-wrap: wrap; }
  .cta-img { flex: 1; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 56px rgba(0,0,0,0.1); }
  .cta-img-placeholder { height: 300px; background: linear-gradient(135deg, #F5F0E8 0%, #EDE4D0 100%); display: flex; align-items: center; justify-content: center; font-size: 80px; }

  /* Blog */
  .blog { padding: 80px 40px; }
  .blog-inner { max-width: 1060px; margin: 0 auto; }
  .blog h2 { font-size: clamp(24px, 3vw, 36px); font-weight: 800; text-align: center; letter-spacing: -0.6px; margin-bottom: 48px; }
  .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .blog-card { background: #fff; border: 1px solid #EEF1F4; border-radius: 16px; overflow: hidden; transition: box-shadow 0.2s, transform 0.2s; }
  .blog-card:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.09); transform: translateY(-4px); }
  .blog-img { height: 190px; display: flex; align-items: center; justify-content: center; font-size: 56px; }
  .blog-body { padding: 24px; }
  .blog-tag { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--teal); margin-bottom: 10px; }
  .blog-body h3 { font-size: 16px; font-weight: 700; line-height: 1.45; margin-bottom: 10px; color: var(--navy); }
  .blog-body p { font-size: 13.5px; color: var(--gray); line-height: 1.65; margin-bottom: 18px; }
  .read-more { background: none; border: none; color: var(--teal); font-weight: 700; font-size: 13px; cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif; display: flex; align-items: center; gap: 5px; transition: gap 0.2s; }
  .read-more:hover { gap: 10px; }

  /* Footer */
  .footer { background: #0D1F2D; color: #8A9EB0; padding: 64px 40px 32px; }
  .footer-top { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 52px; }
  .footer-brand p { font-size: 14px; line-height: 1.7; margin-top: 14px; max-width: 220px; }
  .footer-logo { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 22px; color: #fff; }
  .footer-logo span { color: var(--teal); }
  .footer-col h5 { color: #fff; font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px; }
  .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .footer-col ul li a { font-size: 14px; color: #8A9EB0; text-decoration: none; transition: color 0.2s; }
  .footer-col ul li a:hover { color: var(--teal); }
  .footer-bottom { border-top: 1px solid rgba(255,255,255,0.07); padding-top: 28px; display: flex; justify-content: space-between; align-items: center; flex-wrap: gap; }
  .footer-copy { font-size: 13px; }
  .social-links { display: flex; gap: 12px; }
  .social-icon { width: 36px; height: 36px; border-radius: 8px; background: rgba(255,255,255,0.07); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s; color: #8A9EB0; text-decoration: none; font-size: 15px; }
  .social-icon:hover { background: var(--teal); color: #fff; }
  .footer-links { display: flex; gap: 24px; }
  .footer-links a { font-size: 13px; color: #8A9EB0; text-decoration: none; }
  .footer-links a:hover { color: #fff; }

  /* Responsive */
  @media (max-width: 900px) {
    .navbar { padding: 0 20px; }
    .nav-links, .nav-right { display: none; }
    .hamburger { display: flex; }
    .mobile-menu { display: flex; }
    .hero { padding: 60px 24px 40px; }
    .features { flex-direction: column; padding: 64px 24px; gap: 40px; }
    .awards-grid { grid-template-columns: repeat(2, 1fr); }
    .tab-content { flex-direction: column; }
    .testimonial-inner { flex-direction: column; }
    .cta-inner { flex-direction: column; }
    .blog-grid { grid-template-columns: 1fr; }
    .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
    .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
    .trust { padding: 40px 24px; }
    .awards { padding: 60px 24px; }
    .workflow { padding: 60px 24px; }
    .testimonial-section { padding: 60px 24px; }
    .cta-section { padding: 60px 24px; }
    .blog { padding: 60px 24px; }
    .footer { padding: 48px 24px 28px; }
  }

  @media (max-width: 560px) {
    .awards-grid { grid-template-columns: 1fr; }
    .footer-top { grid-template-columns: 1fr; }
    .workflow-tabs { gap: 0; }
    .tab-btn { padding: 10px 16px; font-size: 13px; }
    .logos-row { gap: 20px 32px; }
    .hero-images { height: 110px; }
    .hero-circle { width: 84px; height: 84px; }
  }
`;

// ─── HERO CIRCLES ─────────────────────────────────────────────────────────────
const heroCircles = [
  { left: "calc(50% - 260px)", bg: "#2A5F7A", emoji: "👩‍💼", zIndex: 1 },
  { left: "calc(50% - 170px)", bg: "#1A4A5E", emoji: "💻", zIndex: 2 },
  { left: "calc(50% - 60px)",  bg: "#0D3347", emoji: "📊", zIndex: 3 },
  { left: "calc(50% + 50px)",  bg: "#1A4A5E", emoji: "🤝", zIndex: 2 },
  { left: "calc(50% + 150px)", bg: "#2A5F7A", emoji: "👨‍💻", zIndex: 1 },
];

// ─── AWARD DATA ───────────────────────────────────────────────────────────────
const awards = [
  { emoji: "🏆", bg: "#FFF4E6", color: "#E8830A", title: "Market Leader", sub: "across 18 categories" },
  { emoji: "⭐", bg: "#FFF0F0", color: "#E84A4A", title: "Most Loved SaaS Tool", sub: "in 2022" },
  { emoji: "🥇", bg: "#E8FBF7", color: "#0EBFA1", title: "Category Leader", sub: "in 2022" },
  { emoji: "💎", bg: "#EEF0FF", color: "#5C6FE8", title: "Most Recommended", sub: "tool in 2021" },
  { emoji: "🎯", bg: "#FFF4E6", color: "#E8830A", title: "Champion in Survey", sub: "tool 2022" },
  { emoji: "🔥", bg: "#FFF0F0", color: "#E84A4A", title: "Top Performer Spring", sub: "2021" },
];

// ─── BLOG DATA ────────────────────────────────────────────────────────────────
const blogs = [
  { bg: "#E8F4FB", emoji: "📸", tag: "Research", title: "Eiusmod occaecat cupidatat non proident", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam." },
  { bg: "#E8F7F0", emoji: "🌿", tag: "Survey", title: "Quis nostrum exercitationem ullam corporis suscipit", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. Temporibus autem quibusdam." },
  { bg: "#F7E8FF", emoji: "💡", tag: "Insights", title: "Lorem ipsum dolor sit amet, consectetur adipiscing", desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat." },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Features", "Pricing", "Testimonials", "Resources", "Company", "Contact"];
  return (
    <nav className="navbar" style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "0 40px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 22, color: "#0D1F2D", letterSpacing: -0.5 }}>
        ○ circle
      </div>
      <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">
        {links.map(l => (
          <li key={l}><a href="#" style={{ fontSize: 14, fontWeight: 500, color: "#6B7C93", textDecoration: "none" }}>{l}</a></li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }} className="desktop-nav">
        <button className="login-btn">Login</button>
        <button className="teal-btn">Get started free →</button>
      </div>
      <button onClick={() => setOpen(!open)} style={{ display: "none", flexDirection: "column", gap: 5, cursor: "pointer", background: "none", border: "none", padding: 4 }} className="hamburger-btn">
        <span style={{ width: 22, height: 2, background: "#0D1F2D", display: "block" }} />
        <span style={{ width: 22, height: 2, background: "#0D1F2D", display: "block" }} />
        <span style={{ width: 22, height: 2, background: "#0D1F2D", display: "block" }} />
      </button>
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ background: "linear-gradient(160deg, #EAF8FF 0%, #F0FBF8 60%, #fff 100%)", padding: "80px 40px 60px", textAlign: "center" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#0EBFA1", marginBottom: 18, background: "rgba(14,191,161,0.1)", padding: "5px 14px", borderRadius: 20 }}>
          ONLINE ENGAGEMENT PLATFORM
        </span>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: -2, maxWidth: 740, margin: "0 auto 22px", color: "#0D1F2D", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          A powerful online engagement tool that's intuitive and simple to use.
        </h1>
        <p style={{ fontSize: 16, color: "#6B7C93", maxWidth: 460, margin: "0 auto 32px", lineHeight: 1.7 }}>
          With Circle, all your experiences come built to last. See how you will make a difference in your business.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 14 }}>
          <button className="teal-btn" style={{ fontSize: 15, padding: "13px 30px" }}>Get started free →</button>
        </div>
      </div>

      {/* Circular overlapping images */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 56, position: "relative", height: 140 }}>
        {heroCircles.map((c, i) => (
          <div key={i} style={{ position: "absolute", left: c.left, top: 0, width: 110, height: 110, borderRadius: "50%", border: "3px solid #fff", boxShadow: "0 8px 28px rgba(0,0,0,0.12)", background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, zIndex: c.zIndex, transition: "transform 0.2s", cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.07) translateY(-4px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
            {c.emoji}
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustedLogos() {
  const logos = ["Capgemini", "YAMAHA", "Biocon", "DELL", "CK Birla Group", "Shell"];
  const stats = ["B2B reporting tool worth", "100% 5-star ready", "Leader G2 Survey"];
  return (
    <section style={{ padding: "52px 40px 44px", textAlign: "center", borderBottom: "1px solid #EEF1F4" }}>
      <p style={{ fontSize: 13, color: "#6B7C93", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1, fontWeight: 600 }}>TRUSTED BY</p>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0D1F2D", marginBottom: 36, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Trusted by <strong style={{ color: "#0EBFA1" }}>100,000+</strong> customers in <strong>90+ countries</strong>
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "20px 44px", marginBottom: 28 }}>
        {logos.map(l => (
          <span key={l} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 17, color: "#B0BDC8", letterSpacing: -0.5, cursor: "default" }}>{l}</span>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
        {stats.map(s => (
          <span key={s} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6B7C93" }}>
            <span style={{ display: "inline-block", width: 16, height: 16, background: "#0EBFA1", borderRadius: "50%", color: "#fff", fontSize: 10, lineHeight: "16px", textAlign: "center" }}>✓</span>
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section style={{ padding: "96px 40px", maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 72 }}>
      <div style={{ flex: 1 }}>
        <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#0EBFA1", marginBottom: 14 }}>PLATFORM</span>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: -0.8, marginBottom: 20, fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#0D1F2D" }}>
          Tool built<br />for people.
        </h2>
        <p style={{ fontSize: 15, color: "#6B7C93", lineHeight: 1.78, marginBottom: 32, maxWidth: 380 }}>
          Whether you want to work with Google Docs, receive bonuses, or collaborate over Zoom. Connect 700+ integrations with tools you already use and more.
        </p>
        <button className="teal-btn">Get started free</button>
      </div>
      <div style={{ flex: 1, borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.1)" }}>
        <div style={{ height: 360, background: "linear-gradient(135deg, #1A3A4A 0%, #0D2535 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          {/* People group illustration */}
          <div style={{ display: "flex", gap: 0, alignItems: "flex-end", padding: "0 30px", justifyContent: "center" }}>
            {[
              { emoji: "👩‍💻", bg: "#0EBFA1", size: 72 },
              { emoji: "👨‍💼", bg: "#2A5F7A", size: 84 },
              { emoji: "👩‍🎤", bg: "#3D7A9A", size: 76 },
              { emoji: "🧑‍🔬", bg: "#1A4A5E", size: 68 },
            ].map((p, i) => (
              <div key={i} style={{ width: p.size, height: p.size, borderRadius: "50%", background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: p.size * 0.44, border: "3px solid rgba(255,255,255,0.15)", marginLeft: i > 0 ? -12 : 0 }}>
                {p.emoji}
              </div>
            ))}
          </div>
          <div style={{ position: "absolute", bottom: 24, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8 }}>
            {["Zoom", "Google", "Slack"].map(t => (
              <span key={t} style={{ background: "rgba(255,255,255,0.12)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section style={{ padding: "80px 40px", background: "#FAFCFE", textAlign: "center" }}>
      <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#0EBFA1", marginBottom: 14 }}>RECOGNITION</span>
      <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: -0.6, marginBottom: 48, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        An <em style={{ fontStyle: "normal", color: "#0EBFA1" }}>award winning</em> platform, loved by customers.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 860, margin: "0 auto" }}>
        {awards.map((a, i) => (
          <div key={i} className="award-card" style={{ background: "#fff", border: "1px solid #EEF1F4", borderRadius: 14, padding: "28px 20px", textAlign: "center", cursor: "default", transition: "box-shadow 0.2s, transform 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = ""; e.currentTarget.style.transform = ""; }}>
            <div style={{ width: 64, height: 64, margin: "0 auto 14px", borderRadius: 12, background: a.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>{a.emoji}</div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#0D1F2D", lineHeight: 1.4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{a.title}</h4>
            <p style={{ fontSize: 12, color: "#6B7C93", marginTop: 4 }}>{a.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Workflow() {
  const [activeTab, setActiveTab] = useState("Create");
  const tabs = ["Create", "Distribute", "Collect", "Analyze"];
  return (
    <section style={{ padding: "80px 40px", background: "linear-gradient(160deg, #EAF8FF 0%, #F0FBF8 100%)" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <span style={{ display: "block", textAlign: "center", fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#0EBFA1", marginBottom: 14 }}>WORKFLOW</span>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, textAlign: "center", letterSpacing: -0.6, marginBottom: 40, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          <em style={{ fontStyle: "normal", color: "#0EBFA1" }}>Easy</em> for beginners. <em style={{ fontStyle: "normal" }}>Powerful</em> for experts.
        </h2>
        <div style={{ display: "flex", borderBottom: "2px solid #D8E8F0", marginBottom: 48, justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: "none", border: "none", padding: "12px 28px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 14, color: activeTab === t ? "#0EBFA1" : "#6B7C93", cursor: "pointer", borderBottom: `2px solid ${activeTab === t ? "#0EBFA1" : "transparent"}`, marginBottom: -2, transition: "all 0.2s" }}>
              {t}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16, letterSpacing: -0.5, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{activeTab}</h3>
            <p style={{ fontSize: 15, color: "#6B7C93", lineHeight: 1.75, marginBottom: 28, maxWidth: 380 }}>
              Advanced research software. For the best questions and the best answers to help you build the most advanced and comprehensive survey platform on the market featuring powerful, sophisticated analytics and built-in advanced experimentation.
            </p>
            <button className="teal-btn">Get started for free</button>
          </div>
          <div style={{ flex: 1, borderRadius: 14, overflow: "hidden", boxShadow: "0 20px 56px rgba(0,0,0,0.12)" }}>
            <div style={{ height: 280, background: "linear-gradient(135deg, #0D2535 0%, #1A3A4A 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72 }}>
              {activeTab === "Create" ? "✏️" : activeTab === "Distribute" ? "📤" : activeTab === "Collect" ? "📊" : "🔍"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section style={{ padding: "80px 40px" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", alignItems: "center", gap: 56 }}>
        <div style={{ flex: 1, borderRadius: 16, overflow: "hidden", position: "relative", cursor: "pointer" }}>
          <div style={{ height: 320, background: "linear-gradient(135deg, #E8830A, #C96A08)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.15)" }} />
            <div style={{ width: 68, height: 68, borderRadius: "50%", background: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 28px rgba(0,0,0,0.25)", position: "relative", zIndex: 1 }}>
              <div style={{ width: 0, height: 0, borderTop: "12px solid transparent", borderBottom: "12px solid transparent", borderLeft: "18px solid #E8830A", marginLeft: 5 }} />
            </div>
            <div style={{ position: "absolute", bottom: 20, left: 20, color: "white", fontSize: 13, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Watch customer story →</div>
          </div>
        </div>

        <div style={{ flex: 1, background: "#fff", border: "1px solid #EEF1F4", borderRadius: 16, padding: 36, boxShadow: "0 16px 48px rgba(0,0,0,0.07)" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#009cde", marginBottom: 18, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: -0.5 }}>
            P PayPal
          </div>
          <p style={{ fontSize: 15, color: "#6B7C93", lineHeight: 1.78, marginBottom: 24, fontStyle: "italic" }}>
            "Circle has made it so effortless for our team to connect with, understand, and delight our customers — with actionable insights across the board."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #667eea, #764ba2)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 16 }}>M</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0D1F2D", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Michelle DeStick</div>
              <div style={{ fontSize: 12, color: "#6B7C93" }}>Senior Consumer Experience Optimizer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ padding: "80px 40px", background: "#FAFCFE" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", alignItems: "center", gap: 64 }}>
        <div style={{ flex: 1 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#0EBFA1", marginBottom: 14 }}>FOR ENTERPRISE</span>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: -0.8, marginBottom: 20, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Looking for a <em style={{ fontStyle: "normal", color: "#0EBFA1" }}>solution</em><br />for your business?
          </h2>
          <p style={{ fontSize: 15, color: "#6B7C93", lineHeight: 1.75, marginBottom: 32, maxWidth: 380 }}>
            Contact our Sales team for feedback and expertise on managing a participant journey.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button className="teal-btn">Learn more</button>
            <button className="outline-btn">Schedule a consultation</button>
          </div>
        </div>
        <div style={{ flex: 1, borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 56px rgba(0,0,0,0.1)" }}>
          <div style={{ height: 300, background: "linear-gradient(135deg, #F5F0E8 0%, #EDE4D0 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80 }}>
            💼
          </div>
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section style={{ padding: "80px 40px" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <span style={{ display: "block", textAlign: "center", fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#0EBFA1", marginBottom: 14 }}>BLOG</span>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, textAlign: "center", letterSpacing: -0.6, marginBottom: 48, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Stay in the know</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {blogs.map((b, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #EEF1F4", borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "box-shadow 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.09)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = ""; e.currentTarget.style.transform = ""; }}>
              <div style={{ height: 180, background: b.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56 }}>{b.emoji}</div>
              <div style={{ padding: 24 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#0EBFA1", marginBottom: 10 }}>{b.tag}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.45, marginBottom: 10, color: "#0D1F2D", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{b.title}</h3>
                <p style={{ fontSize: 13.5, color: "#6B7C93", lineHeight: 1.65, marginBottom: 18 }}>{b.desc}</p>
                <button style={{ background: "none", border: "none", color: "#0EBFA1", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", display: "flex", alignItems: "center", gap: 5 }}>
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = {
    Products: ["Survey", "Forms", "CX", "Workforce", "Pricing", "Integrations"],
    Resources: ["Blog", "Help Center", "Documentation", "API Docs", "Status", "Community"],
    Company: ["About", "Careers", "Press", "Partners", "Legal", "Contact"],
  };
  return (
    <footer style={{ background: "#0D1F2D", color: "#8A9EB0", padding: "64px 40px 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 48, marginBottom: 52, maxWidth: 1060, margin: "0 auto 52px" }}>
        <div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 22, color: "#fff" }}>○ circle</div>
          <p style={{ fontSize: 14, lineHeight: 1.7, marginTop: 14, maxWidth: 220, color: "#8A9EB0" }}>
            The most advanced online engagement platform trusted by 100,000+ customers worldwide.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
            {["𝕏", "in", "f", "▶"].map((s, i) => (
              <a key={i} href="#" style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", color: "#8A9EB0", textDecoration: "none", fontSize: 13, fontWeight: 700, transition: "background 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#0EBFA1"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "#8A9EB0"; }}>
                {s}
              </a>
            ))}
          </div>
        </div>
        {Object.entries(cols).map(([title, links]) => (
          <div key={title}>
            <h5 style={{ color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 20, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{title}</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {links.map(l => (
                <li key={l}><a href="#" style={{ fontSize: 14, color: "#8A9EB0", textDecoration: "none" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#0EBFA1"}
                  onMouseLeave={e => e.currentTarget.style.color = "#8A9EB0"}>{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 28, maxWidth: 1060, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <span style={{ fontSize: 13 }}>© 2024 Circle. All rights reserved.</span>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(l => (
            <a key={l} href="#" style={{ fontSize: 13, color: "#8A9EB0", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{style}</style>
      <Navbar />
      <main>
        <Hero />
        <TrustedLogos />
        <Features />
        <Awards />
        <Workflow />
        <Testimonials />
        <CTA />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
