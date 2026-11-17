import React, { useState } from 'react';

// --- ALL 6 PROJECTS WITH EXACT FOLDER PATHS & FORMATS ---
const devProjects = [
  { 
    id: 'waterwatch', title: 'Water Watch Dashboard', stack: 'React | Tailwind CSS | Node.js', 
    cover: '/assets/waterwatch/img1.png', 
    images: ['/assets/waterwatch/img1.png', '/assets/waterwatch/img2.png', '/assets/waterwatch/img3.png', '/assets/waterwatch/img4.png'] 
  },
  { 
    id: 'worklink', title: 'WorkLink Platform', stack: 'React | Tailwind CSS | JavaScript', 
    cover: '/assets/worklink/img1.png', 
    images: ['/assets/worklink/img1.png', '/assets/worklink/img2.png', '/assets/worklink/img3.png', '/assets/worklink/img4.png'] 
  },
  { 
    id: 'market', title: 'Community Market', stack: 'React | Express | Node.js', 
    cover: '/assets/markert/img1.png', 
    images: ['/assets/markert/img1.png', '/assets/markert/img2.png', '/assets/markert/img3.png', '/assets/markert/img4.png'] 
  }
];

const designProjects = [
  { 
    id: 'meditrack', title: 'MediTrack Healthcare', stack: 'Figma | UX Research | Prototyping', 
    cover: '/assets/meditrack_figma/img1.jpg', 
    images: ['/assets/meditrack_figma/img1.jpg', '/assets/meditrack_figma/img2.jpg', '/assets/meditrack_figma/img3.jpg', '/assets/meditrack_figma/img4.jpg'] 
  },
  { 
    id: 'urbanedge', title: 'UrbanEdge Web Design', stack: 'Figma | React | Tailwind CSS', 
    cover: '/assets/urban-edge/img1.png', 
    images: ['/assets/urban-edge/img1.png', '/assets/urban-edge/img2.png', '/assets/urban-edge/img3.png', '/assets/urban-edge/img4.png'] 
  },
  { 
    id: 'launchpad', title: 'The Launchpad', stack: 'Adobe CC | Campaign Strategy', 
    cover: '/assets/innovation_week/img1.png', 
    images: ['/assets/innovation_week/img1.png', '/assets/innovation_week/img2.png', '/assets/innovation_week/img3.png', '/assets/innovation_week/img4.png'] 
  }
];

const blogPosts = [
  { id: 1, title: 'PRESENTING WATER WATCH AT CPUT INNOVATION WEEK', meta: "A LOOK BACK AT OUR TEAM'S DASHBOARD SHOWCASE.", cover: '/assets/innovation_week/img1.png' },
  { id: 2, title: 'HOW UI/UX PRINCIPLES IMPROVE REACT COMPONENTS', meta: "EXPLORING THE BRIDGE BETWEEN FIGMA AND CODE.", cover: '/assets/meditrack_figma/img1.jpg' },
  { id: 3, title: 'ACCESSIBILITY IN DARK MODE: A WCAG CASE STUDY', meta: "WHY HIGH CONTRAST TYPOGRAPHY MATTERS.", cover: '/assets/urban-edge/img1.png' }
];

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/600x400/0A4174/48EAE2?text=Image+Found+Soon';
  };

  return (
    <div className="bg-deep-navy min-h-screen text-soft-ice font-sans pb-20">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 flex items-center justify-center rounded">
            <img 
              src="/assets/logo/logo.svg" 
              onError={(e) => e.target.src = '/assets/logo/logo.png'} 
              alt="TM Logo" 
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <span className="text-white font-bold text-lg tracking-widest uppercase">Thapelo Masingi</span>
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-bold text-white tracking-wider">
          <li className="cursor-pointer hover:text-cyber-cyan transition"><a href="#home">HOME</a></li>
          <li className="cursor-pointer hover:text-cyber-cyan transition"><a href="#portfolio">PORTFOLIO</a></li>
          <li className="cursor-pointer hover:text-cyber-cyan transition"><a href="#blog">BLOG</a></li>
          <li className="cursor-pointer hover:text-cyber-cyan transition"><a href="#about">ABOUT</a></li>
        </ul>
        <button className="bg-cyber-cyan text-deep-navy font-bold px-6 py-2 rounded shadow hover:bg-white transition"><a href="#contact">HIRE ME</a></button>
      </nav>

      {/* 2. HERO SECTION */}
      <main id="home" className="max-w-7xl mx-auto px-10 pt-20 pb-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            HI, I AM THAPELO. <br /> A PASSIONATE <span className="text-cyber-cyan underline decoration-cyber-cyan">FULL-STACK DEVELOPER.</span>
          </h1>
          <p className="text-soft-ice text-lg mb-8 max-w-xl leading-relaxed">
            BRIDGING THE GAP BETWEEN MULTIMEDIA DESIGN AND ROBUST SYSTEM ARCHITECTURE TO BUILD SCALABLE WEB APPLICATIONS IN CAPE TOWN.
          </p>
          <div className="flex gap-4 mb-12">
            <button className="bg-cyber-cyan text-deep-navy font-bold px-8 py-3 rounded shadow hover:bg-white transition"><a href="#portfolio">VIEW MY WORK</a></button>
            <button className="border border-cyber-cyan text-cyber-cyan font-bold px-8 py-3 rounded hover:bg-cyber-cyan hover:text-deep-navy transition">DOWNLOAD CV</button>
          </div>
          <div>
            <h3 className="text-white font-bold tracking-widest mb-4">TOOLS USED</h3>
            <div className="flex gap-4 items-center">
               <span className="text-cyber-cyan text-4xl">⚛️</span>
               <span className="text-pink-500 text-4xl">🎨</span>
               <span className="text-cyan-400 text-4xl">🌊</span>
               <span className="text-yellow-400 text-4xl">JS</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full aspect-square bg-core-blue rounded-lg shadow-2xl relative overflow-hidden flex items-center justify-center">
            <img src="/assets/profile.jpg" onError={(e) => e.target.src = '/assets/profile.jpeg'} alt="Thapelo Masingi" className="w-full h-full object-cover opacity-80" />
            <span className="absolute -bottom-6 right-0 bg-gray-200 text-black text-xs px-2 py-1 z-10">
              CAPE TOWN-BASED JUNIOR FULL-STACK DEVELOPER SPECIALIZING IN REACT, UI/UX DESIGN, AND SCALABLE DIGITAL SOLUTIONS.
            </span>
          </div>
        </div>
      </main>

      {/* 3. PORTFOLIO / PROJECT GALLERY SECTION */}
      <section id="portfolio" className="px-10 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-cyber-cyan text-4xl font-bold tracking-widest mb-2 underline decoration-cyber-cyan decoration-4 underline-offset-8">
            PORTFOLIO
          </h2>
        </div>

        {/* Development Row */}
        <div className="mb-16">
          <div className="bg-gray-200 py-3 px-6 rounded-full mb-8 flex justify-between items-center">
            <h2 className="text-black font-bold text-xl tracking-wider">DEVELOPMENT & CODE</h2>
            <button className="text-black font-bold text-sm hover:text-core-blue">VIEW MORE</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {devProjects.map((project) => (
              <div key={project.id} className="bg-core-blue p-6 rounded-lg flex flex-col items-center text-center shadow-lg">
                <h3 className="text-white text-sm mb-4">{project.title}</h3>
                <div 
                  className="w-full aspect-square bg-deep-navy relative mb-4 rounded overflow-hidden cursor-pointer hover:opacity-70 transition border border-cyber-cyan/30"
                  onClick={() => setActiveProject(project)}
                >
                  <img src={project.cover} onError={handleImageError} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-soft-ice text-xs mb-4">{project.stack}</p>
                <button className="bg-cyber-cyan text-deep-navy text-xs font-bold py-2 px-6 rounded-full mt-auto hover:bg-white transition">
                  view live app
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Row */}
        <div>
          <div className="bg-gray-200 py-3 px-6 rounded-full mb-8 flex justify-between items-center">
            <h2 className="text-black font-bold text-xl tracking-wider">CREATIVE SUITE & UI/UX</h2>
            <button className="text-black font-bold text-sm hover:text-core-blue">VIEW MORE</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designProjects.map((project) => (
              <div key={project.id} className="bg-core-blue p-6 rounded-lg flex flex-col items-center text-center shadow-lg">
                <h3 className="text-white text-sm mb-4">{project.title}</h3>
                <div 
                  className="w-full aspect-square bg-deep-navy relative mb-4 rounded overflow-hidden cursor-pointer hover:opacity-70 transition border border-cyber-cyan/30"
                  onClick={() => setActiveProject(project)}
                >
                  <img src={project.cover} onError={handleImageError} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-soft-ice text-xs mb-4">{project.stack}</p>
                <button className="bg-cyber-cyan text-deep-navy text-xs font-bold py-2 px-6 rounded-full mt-auto hover:bg-white transition">
                  view case study
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BLOG / INSIGHTS SECTION */}
      <section id="blog" className="px-10 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-cyber-cyan text-4xl font-bold tracking-widest mb-2 underline decoration-cyber-cyan decoration-4 underline-offset-8">
            INSIGHTS & EVENTS
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-core-blue p-8 rounded-lg shadow-lg flex flex-col">
              <h3 className="text-white font-bold text-sm mb-6 uppercase underline decoration-soft-ice underline-offset-4 leading-relaxed">
                {post.title}
              </h3>
              <div className="w-full aspect-square bg-deep-navy rounded mb-6 overflow-hidden border border-cyber-cyan/20">
                <img src={post.cover} onError={handleImageError} alt="Blog Cover" className="w-full h-full object-cover opacity-80" />
              </div>
              <p className="text-white font-bold text-xs mb-6 uppercase">
                {post.meta}
              </p>
              <button className="border border-white text-white font-bold py-2 px-6 rounded hover:bg-white hover:text-deep-navy transition self-start mt-auto">
                READ ARTICLE →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ABOUT ME SECTION (UPDATED SKILLS GRID) */}
      <section id="about" className="px-10 py-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-cyber-cyan text-4xl font-bold tracking-widest mb-6 underline decoration-cyber-cyan decoration-4 underline-offset-8">ABOUT ME</h2>
          <p className="text-white text-xl leading-relaxed mb-12 max-w-lg">
            I am an ICT Multimedia Applications student at CPUT transitioning into full-stack development. I combine visual UI/UX principles with technical engineering to build platforms that solve real-world problems. Whether I am designing design tokens in Figma or architecting databases for projects like Water Watch and WorkLink, my focus is always on performance, accessibility, and writing clean, scalable code.
          </p>
        </div>
        
        {/* SKILLS GRID - FIXED WITH YOUR EXACT TECH STACK */}
        <div className="flex-1 grid grid-cols-3 gap-6">
          <div className="bg-core-blue rounded-lg aspect-square shadow-lg flex items-center justify-center flex-col text-white font-bold text-center p-2"><span className="text-4xl mb-2">⚛️</span>React</div>
          <div className="bg-core-blue rounded-lg aspect-square shadow-lg flex items-center justify-center flex-col text-white font-bold text-center p-2"><span className="text-4xl mb-2">🌊</span>Tailwind</div>
          <div className="bg-core-blue rounded-lg aspect-square shadow-lg flex items-center justify-center flex-col text-white font-bold text-center p-2"><span className="text-4xl mb-2">🚀</span>Lovable</div>
          <div className="bg-core-blue rounded-lg aspect-square shadow-lg flex items-center justify-center flex-col text-white font-bold text-center p-2"><span className="text-4xl mb-2">🟢</span>Node.js</div>
          <div className="bg-core-blue rounded-lg aspect-square shadow-lg flex items-center justify-center flex-col text-white font-bold text-center p-2"><span className="text-4xl mb-2">🚂</span>Express</div>
          <div className="bg-core-blue rounded-lg aspect-square shadow-lg flex items-center justify-center flex-col text-white font-bold text-center p-2"><span className="text-4xl mb-2">⚡</span>Vite</div>
          <div className="bg-core-blue rounded-lg aspect-square shadow-lg flex items-center justify-center flex-col text-white font-bold text-center p-2"><span className="text-4xl mb-2">🎨</span>Figma</div>
          <div className="bg-core-blue rounded-lg aspect-square shadow-lg flex items-center justify-center flex-col text-white font-bold text-center p-2"><span className="text-4xl mb-2">☁️</span>Adobe CC</div>
          <div className="bg-core-blue rounded-lg aspect-square shadow-lg flex items-center justify-center flex-col text-white font-bold text-center p-2"><span className="text-4xl mb-2">🐙</span>GitHub</div>
        </div>
      </section>

      {/* 5.5 CONTACT SECTION */}
      <section id="contact" className="px-10 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-cyber-cyan text-4xl font-bold tracking-widest mb-6 underline decoration-cyber-cyan decoration-4 underline-offset-8">
          GET IN TOUCH
        </h2>
        <p className="text-soft-ice mb-10">
          Currently open for Work Integrated Learning (WIL) placements, internships, and freelance web development opportunities. Let's build something great.
        </p>
        <form className="flex flex-col gap-6 text-left">
          <div className="flex flex-col gap-2">
            <label className="text-white font-bold text-sm">Name</label>
            <input type="text" className="bg-core-blue text-white p-3 rounded border border-cyber-cyan/30 focus:border-cyber-cyan outline-none" placeholder="Enter your name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white font-bold text-sm">Email</label>
            <input type="email" className="bg-core-blue text-white p-3 rounded border border-cyber-cyan/30 focus:border-cyber-cyan outline-none" placeholder="Enter your email address" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white font-bold text-sm">Message</label>
            <textarea rows="4" className="bg-core-blue text-white p-3 rounded border border-cyber-cyan/30 focus:border-cyber-cyan outline-none" placeholder="Tell me about your project..."></textarea>
          </div>
          <button type="button" className="bg-cyber-cyan text-deep-navy font-bold py-3 rounded shadow hover:bg-white transition mt-4">
            SEND MESSAGE
          </button>
        </form>
      </section>

      {/* 6. FOOTER SECTION */}
      <footer className="bg-core-blue py-12 px-10 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden border-2 border-cyber-cyan">
              <img 
                src="/assets/profile.jpg" 
                onError={(e) => e.target.src = '/assets/profile.jpeg'}
                alt="Thapelo Masingi" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-bold tracking-widest text-lg underline decoration-soft-ice underline-offset-8">
              THAPELO MASINGI
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <span className="text-soft-ice font-bold flex items-center gap-2">📞 +27662206241</span>
            <span className="text-soft-ice font-bold flex items-center gap-2">✉️ 223050717@MYCPUT.AC.ZA</span>
          </div>
          <div className="flex items-center gap-6 text-3xl">
            <span className="text-deep-navy bg-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white text-sm font-bold">GH</span>
            <span className="text-white bg-blue-600 rounded-sm w-10 h-10 flex items-center justify-center font-bold text-xl cursor-pointer hover:bg-white hover:text-blue-600">in</span>
            <span className="text-white bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-80 text-sm font-bold">IG</span>
          </div>
        </div>
        <div className="text-center text-white font-bold tracking-wider underline decoration-soft-ice underline-offset-4 mt-6">
          © 2026 THAPELO MASINGI
        </div>
      </footer>

      {/* ================= 4-PICTURE POPUP MODAL ================= */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-deep-navy border border-core-blue p-8 rounded-lg max-w-5xl w-full relative shadow-2xl">
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-6 text-cyber-cyan hover:text-white text-4xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-cyber-cyan text-3xl font-bold mb-2 uppercase">{activeProject.title}</h2>
            <p className="text-soft-ice mb-8 font-bold">{activeProject.stack}</p>

            <div className="grid grid-cols-2 gap-4">
              {activeProject.images.map((imgSrc, index) => (
                <div key={index} className="aspect-video bg-core-blue rounded overflow-hidden flex items-center justify-center border border-cyber-cyan/30">
                  <img src={imgSrc} onError={handleImageError} alt={`${activeProject.title} image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
      
    </div>
  );
}