
        import React, { useState } from 'react';
import { 
  Menu, X, ChevronRight, Users, Zap, Shield, 
  BarChart, Layers, MessageSquare, Monitor, 
  ArrowRight, Facebook, Twitter, Instagram, Linkedin 
} from 'lucide-react';

// --- Reusable Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-200 text-sm md:text-base w-full md:w-auto";
  const variants = {
    primary: "bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg shadow-cyan-500/30",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-cyan-500 hover:text-cyan-500 bg-white",
    text: "text-cyan-600 hover:text-cyan-700 p-0 flex items-center gap-1 bg-transparent shadow-none"
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, center = false }) => (
  <div className={`mb-10 md:mb-16 ${center ? 'text-center' : ''} px-4`}>
    {subtitle && (
      <span className="text-cyan-600 font-semibold tracking-wide uppercase text-xs md:text-sm mb-3 block">
        {subtitle}
      </span>
    )}
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
      {title}
    </h2>
  </div>
);

// --- Navbar (Fully Responsive) ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              C
            </div>
            <span className="text-lg md:text-xl font-bold text-gray-900">Circle</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {['Features', 'Pricing', 'Resources', 'Company'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-600 hover:text-cyan-600 font-medium text-sm md:text-base transition-colors"
              >
                {item}
              </a>
            ))}
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-gray-600 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg">
          {['Features', 'Pricing', 'Resources', 'Company'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="block text-gray-600 font-medium py-2 hover:text-cyan-600"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="w-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

// --- Hero Section (Responsive) ---

const Hero = () => (
  <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-cyan-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
      {/* Badge */}
      <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white border border-cyan-100 rounded-full text-cyan-600 text-xs md:text-sm font-semibold mb-4 md:mb-6 shadow-sm">
        ✨ New Feature: AI Integration 2.0
      </div>
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight max-w-4xl mx-auto px-2">
        A powerful online engagement tool that's intuitive and simple to use.
      </h1>
      
      {/* Subheading */}
      <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-10 max-w-2xl mx-auto px-4">
        Connect with your audience, build communities, and scale your business with our all-in-one platform.
      </p>
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4">
        <Button className="w-full sm:w-auto">Start Free Trial</Button>
        <Button variant="outline" className="w-full sm:w-auto">View Demo</Button>
      </div>

      {/* Hero Images - Responsive Grid */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" 
            className="rounded-xl md:rounded-2xl shadow-lg md:shadow-xl transform md:translate-y-4 lg:translate-y-8 w-full h-32 sm:h-40 md:h-48 object-cover" 
            alt="Team 1" 
          />
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400" 
            className="rounded-xl md:rounded-2xl shadow-lg md:shadow-xl w-full h-32 sm:h-40 md:h-48 object-cover" 
            alt="Team 2" 
          />
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
            className="hidden md:block rounded-xl md:rounded-2xl shadow-lg md:shadow-xl transform md:translate-y-4 lg:translate-y-8 w-full h-32 sm:h-40 md:h-48 object-cover" 
            alt="Team 3" 
          />
        </div>
      </div>

      {/* Logos */}
      <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-gray-100 px-4">
        <p className="text-xs md:text-sm text-gray-400 font-medium mb-4 md:mb-6">
          TRUSTED BY INNOVATIVE TEAMS AT
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16 opacity-50 grayscale">
          {['Google', 'Amazon', 'Spotify', 'Slack', 'Netflix'].map(logo => (
            <span key={logo} className="text-sm md:text-lg lg:text-xl font-bold text-gray-800">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- Feature Split Section (Responsive) ---

const FeatureSplit = ({ reverse = false, title, desc, image, icon: Icon }) => (
  <section className="py-12 md:py-16 lg:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 md:gap-12 lg:gap-16`}>
        {/* Content */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-cyan-100 text-cyan-600 mb-4 md:mb-6">
            <Icon size={20} className="md:size-6" />
          </div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            {title}
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
            {desc}
          </p>
          <Button variant="text">
            Learn more <ArrowRight size={14} className="md:size-4" />
          </Button>
        </div>
        
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src={image} 
            alt={title} 
            className="rounded-xl md:rounded-2xl shadow-xl w-full max-w-full h-auto object-cover" 
          />
        </div>
      </div>
    </div>
  </section>
);

// --- Grid Features (Responsive) ---

const GridFeatures = () => {
  const features = [
    { icon: Users, title: "Community Building", desc: "Engage users with real-time chat and forums." },
    { icon: Zap, title: "Fast Performance", desc: "Optimized for speed with global CDN delivery." },
    { icon: Shield, title: "Secure by Default", desc: "Enterprise-grade security for your data." },
    { icon: BarChart, title: "Advanced Analytics", desc: "Track growth with detailed insights." },
    { icon: Layers, title: "Integrations", desc: "Connect with your favorite tools easily." },
    { icon: MessageSquare, title: "Direct Messaging", desc: "1-on-1 communication with members." },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="Everything you need to scale your business" 
          center 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="bg-white p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600 mb-4 md:mb-6">
                <f.icon size={20} className="md:size-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                {f.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Blue Section (Responsive) ---

const BlueSection = () => (
  <section className="py-12 md:py-16 lg:py-24 bg-cyan-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* Image */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
            alt="Coding" 
            className="rounded-xl md:rounded-2xl shadow-xl w-full max-w-full h-auto" 
          />
        </div>
        
        {/* Content */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
            Easy to integrate. Powerful to use.
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8">
            Our API is designed for developers. Get up and running in minutes.
          </p>
          <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            {['RESTful API', 'Webhooks support', 'SDKs for React, Vue, Angular'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                <div className="w-5 h-5 rounded-full bg-cyan-200 flex items-center justify-center text-cyan-700 text-xs flex-shrink-0">
                  ✓
                </div>
                {item}
              </li>
            ))}
          </ul>
          <Button>Read Documentation</Button>
        </div>
      </div>
    </div>
  </section>
);

// --- Blog Section (Responsive) ---

const BlogSection = () => (
  <section className="py-12 md:py-16 lg:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 md:mb-12">
        <div>
          <span className="text-cyan-600 font-semibold uppercase text-xs md:text-sm">Latest News</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">From our blog</h2>
        </div>
        <a 
          href="#" 
          className="hidden sm:flex items-center text-cyan-600 font-medium hover:text-cyan-700 text-sm md:text-base"
        >
          View all posts <ArrowRight size={16} className="ml-2" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-4">
              <img 
                src={`https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600`} 
                alt="Blog" 
                className="w-full h-40 sm:h-48 md:h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-xs font-bold text-cyan-600 uppercase">Product Update</span>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-cyan-600 transition-colors">
              How to build a better community in 2024
            </h3>
            <p className="text-gray-500 text-sm line-clamp-2">
              Discover the latest trends in community management and how to engage your users effectively.
            </p>
          </div>
        ))}
      </div>
      
      {/* Mobile View All Button */}
      <div className="mt-8 text-center sm:hidden">
        <Button variant="outline" className="w-full">View all posts</Button>
      </div>
    </div>
  </section>
);

// --- Footer (Responsive) ---

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
              C
            </div>
            <span className="text-lg md:text-xl font-bold">Circle</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Making the world more connected, one community at a time.
          </p>
        </div>
        
        {/* Links */}
        {[
          { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog"] },
          { title: "Resources", links: ["Documentation", "API Reference", "Community", "Blog"] },
          { title: "Company", links: ["About", "Careers", "Legal", "Contact"] }
        ].map((col, i) => (
          <div key={i}>
            <h4 className="font-bold mb-4 md:mb-6 text-sm md:text-base">{col.title}</h4>
            <ul className="space-y-3 md:space-y-4">
              {col.links.map(link => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white text-sm transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs md:text-sm text-center sm:text-left">
          © 2024 Circle Inc. All rights reserved.
        </p>
        <div className="flex space-x-4 md:space-x-6">
          <Facebook size={18} className="md:size-20 text-gray-400 hover:text-white cursor-pointer" />
          <Twitter size={18} className="md:size-20 text-gray-400 hover:text-white cursor-pointer" />
          <Instagram size={18} className="md:size-20 text-gray-400 hover:text-white cursor-pointer" />
          <Linkedin size={18} className="md:size-20 text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
      <Navbar />
      <Hero />
      
      <FeatureSplit 
        title="Tools built for people" 
        desc="We believe software should adapt to you, not the other way around. Our intuitive interface ensures everyone on your team can hit the ground running."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
        icon={Users}
      />
      
      <GridFeatures />
      
      <BlueSection />

      <FeatureSplit 
        reverse
        title="Optimize your workflow" 
        desc="Stop switching between tabs. Manage your projects, communicate with your team, and track progress all in one unified dashboard."
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
        icon={Zap}
      />

      <FeatureSplit 
        title="Low-code customization" 
        desc="Customize every aspect of your workspace without writing a single line of code. Drag, drop, and deploy in seconds."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        icon={Monitor}
      />

      <BlogSection />
      <Footer />
    </div>
  );
}