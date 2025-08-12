// Morphing Text Logic
(function(){
  const texts = ["Computer Science Undergraduate", "Tech Enthusiastic", "Aspiring DSA and MERN Stack"];  
  const el1 = document.querySelector('#morphing-text .text1');
  const el2 = document.querySelector('#morphing-text .text2');
  let textIndex = 0;
  let morph = 0;
  let cooldown = 1.5;
  const morphTime = 1;
  const cooldownTime = 1.5;
  let lastTime = new Date();

  function setStyles(fraction){
    el2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    el2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    const inverted = 1 - fraction;
    el1.style.filter = `blur(${Math.min(8 / inverted - 8, 100)}px)`;
    el1.style.opacity = `${Math.pow(inverted, 0.4) * 100}%`;
    el1.textContent = texts[textIndex % texts.length];
    el2.textContent = texts[(textIndex + 1) % texts.length];
  }
  function doMorph(){
    morph -= cooldown; cooldown = 0; let fraction = morph / morphTime; if(fraction > 1){ cooldown = cooldownTime; fraction = 1; } setStyles(fraction); if(fraction === 1) textIndex++; }
  function doCooldown(){ morph = 0; el2.style.filter = 'none'; el2.style.opacity='100%'; el1.style.filter='none'; el1.style.opacity='0%'; }
  function animate(){ const now = new Date(); const dt = (now - lastTime)/1000; lastTime = now; cooldown -= dt; if(cooldown <= 0) { doMorph(); } else { doCooldown(); } requestAnimationFrame(animate); }
  if(el1 && el2) animate();
})();

// Skills Badges
(function(){
  const skills = [
    { name:'React', color:'#06b6d4', icon:'fab fa-react'},
    { name:'Next.js', color:'#10b981', icon:'fas fa-code'},
    { name:'JavaScript', color:'#eab308', icon:'fab fa-js'},
    { name:'Typescript', color:'#2563eb', icon:'fas fa-file-code'},
    { name:'Express.js', color:'#6366f1', icon:'fas fa-server'},
    { name:'Node.js', color:'#22c55e', icon:'fab fa-node-js'},
  { name:'MySQL', color:'#f59e0b', icon:'fas fa-database'},
    { name:'Tailwind CSS', color:'#34d399', icon:'fas fa-wind'},
    { name:'PostgreSQL', color:'#0ea5e9', icon:'fas fa-database'},
    { name:'Prisma', color:'#db2777', icon:'fas fa-gem'},
    { name:'MongoDB', color:'#16a34a', icon:'fas fa-leaf'},
  { name:'Firebase', color:'#fbbf24', icon:'fas fa-fire'},
  { name:'SQLite', color:'#3b82f6', icon:'fas fa-database'},
    { name:'C', color:'#8b5cf6', icon:'fas fa-code'},
    { name:'C++', color:'#ef4444', icon:'fas fa-code'},
    { name:'Python', color:'#0891b2', icon:'fab fa-python'},
  { name:'Streamlit', color:'#f472b6', icon:'fas fa-stream'},
  { name:'Pygame', color:'#3b82f6', icon:'fas fa-gamepad'},
    { name:'Framer Motion', color:'#a855f7', icon:'fas fa-film'},
    { name:'shadcn/ui', color:'#9ca3af', icon:'fas fa-layer-group'},
    { name:'Git', color:'#f59e0b', icon:'fab fa-git-alt'},
  { name:'GitHub', color:'#ffffff', icon:'fab fa-github'},
  { name:'Docker', color:'#2563eb', icon:'fab fa-docker'},
  { name:'Figma', color:'#a855f7', icon:'fab fa-figma'},
  { name:'Postman', color:'#fb923c', icon:'fas fa-paper-plane'}
  ];
  const container = document.getElementById('skill-badges');
  if(!container) return;
  skills.forEach(s=>{
    const badge = document.createElement('div');
    badge.className='skill-badge';
    badge.innerHTML = `<span class=\"dot\" style=\"background:${s.color}\"></span><i class=\"${s.icon}\" aria-hidden=\"true\"></i><span>${s.name}</span>`;
    container.appendChild(badge);
  });
})();

// Rotating Icon Circle (replaces old canvas cloud)
(function(){
  const circle = document.getElementById('icon-circle');
  if(!circle) return;
  const techs = [
    { label:'C', icon:'', color:'#8b5cf6' },
    { label:'C++', icon:'', color:'#ef4444' },
    { label:'Python', icon:'fab fa-python', color:'#0891b2' },
    { label:'JavaScript', icon:'fab fa-js', color:'#eab308' },
    { label:'MySQL', icon:'fas fa-database', color:'#f59e0b' },
    { label:'Node.js', icon:'fab fa-node-js', color:'#22c55e' },
    { label:'React', icon:'fab fa-react', color:'#06b6d4' },
    { label:'Next.js', icon:'fas fa-code', color:'#10b981' },
    { label:'Pygame', icon:'fas fa-gamepad', color:'#3b82f6' },
    { label:'PostgreSQL', icon:'fas fa-database', color:'#0ea5e9' },
    { label:'Firebase', icon:'fas fa-fire', color:'#fbbf24' },
    { label:'SQLite', icon:'fas fa-database', color:'#3b82f6' },
    { label:'Git', icon:'fab fa-git-alt', color:'#f59e0b' },
    { label:'GitHub', icon:'fab fa-github', color:'#ffffff' },
    { label:'Docker', icon:'fab fa-docker', color:'#2563eb' },
    { label:'Figma', icon:'fab fa-figma', color:'#a855f7' },
    { label:'Postman', icon:'fas fa-paper-plane', color:'#fb923c' }
  ];
  const radius = 140; // px
  const center = { x: circle.clientWidth/2, y: circle.clientHeight/2 };
  techs.forEach((t,i)=>{
    const angle = (Math.PI * 2 / techs.length) * i;
    const x = center.x + Math.cos(angle) * radius;
    const y = center.y + Math.sin(angle) * radius * 0.65; // ellipse for perspective
    const wrapper = document.createElement('div');
    wrapper.className = 'icon-item';
    wrapper.style.left = x + 'px';
    wrapper.style.top = y + 'px';
  // Color removed for monochrome aesthetic; CSS handles grayscale and hover reveal.
    if(t.icon){
      const iEl = document.createElement('i');
      iEl.className = t.icon;
      iEl.setAttribute('title', t.label);
      wrapper.appendChild(iEl);
    } else {
      const span = document.createElement('span');
      span.textContent = t.label;
      span.style.fontSize = '0.8rem';
      span.style.fontWeight = '700';
      wrapper.appendChild(span);
    }
    circle.appendChild(wrapper);
  });
  // Wrap in a rotating container
  circle.classList.add('rotate');
})();

// Experience
(function(){
  const data = [
    { company:'Headstarter AI', position:'Software Engineering Fellow', duration:'Jul 2024 - Sep 2024', location:'Remote', description:'Developed AI-driven applications within 7 weeks, securing a top 1% rank on the fellowship leaderboard. Followed agile methodology with weekly sprints and CI/CD practices for efficient delivery. Built a dynamic flashcard SaaS product using Gemini LLM, integrated Clerk, and gained 100+ views.'},
    { company:'GirlScript Summer of Code 2024', position:'Contributor', duration:'Apr 2024 - Aug 2024', location:'Remote', description:'Selected as a Contributor from among 30,000 registrations, placing in the top 300 on the leaderboard. Contributed to open-source projects and gained hands-on experience with collaborative development.'},
    { company:'Dailyhunt', position:'Content Writer', duration:'May 2020 - Mar 2021', location:'Remote', description:'Produced quality and engaging tech content for Dailyhunt platform. Gained over 7,000 followers in less than four months. Created content focused on technology trends and innovations.'},
    { company:'TechBire', position:'Founder', duration:'Nov 2017 - May 2020', location:'Punjab, India', description:'Founded TechBire, a tech blog, and grew it into a monetized platform with 123 posts. Implemented SEO strategies and secured Google AdSense approval. Built 10K+ meaningful connections on LinkedIn through consistent engagement and valuable content.'}
  ];
  const list = document.getElementById('experience-list');
  data.forEach(exp=>{
    const card = document.createElement('div');
  card.className='experience-card';
  card.setAttribute('data-wobble','');
    card.innerHTML = `<div class='experience-top'><div><div class='experience-company'>${exp.company}</div><div class='experience-position'>${exp.position}</div></div><div><div class='experience-duration'>${exp.duration}</div><div class='experience-location'>${exp.location}</div></div></div><p class='experience-desc'>${exp.description}</p>`;
    list.appendChild(card);
  });
})();

// Projects
(function(){
  const projects = [
    { title:'FlavorShare Recipe Platform', description:'Developed a full-stack recipe-sharing web application with secure user authentication, allowing users to create accounts, upload their own recipes with images, and browse community submissions. Implemented dynamic recipe discovery with category filtering, Get Featured, and a 5-star rating for user feedback.', image:'assets/images/flavorshare.png', liveLink:'https://flavorshare.rf.gd/', githubLink:'https://github.com/techbire/flavorshare', tags:['PHP','JavaScript','MySQL','TailwindCSS','Authentication','File Upload'] },
    { title:'AI Flashcard Wizard SaaS', description:'Built a full-stack AI-driven flashcard platform that converts any text into smart study cards using Google Gemini and integrated payment method using Razorpay gateway with Basic and Pro subscription tiers. Implemented comprehensive flashcard management system with CRUD operations.', image:'assets/images/flashcard.png', liveLink:'https://ai-flashcard-wizard-saas.vercel.app/', githubLink:'https://github.com/techbire/ai-flashcard-wizard', tags:['Next.js','TypeScript','Clerk','Razorpay','Google Gemini','Firebase Firestore','Tailwind CSS'] },
    { title:'Personal Library Tracker', description:'Built a comprehensive full-stack book management platform using MongoDB, Express.js, React with TypeScript, and Node.js, featuring user authentication with JWT tokens and secure file upload capabilities for book covers and user avatars.', image:'assets/images/personallibrarytracker.png', liveLink:'https://plt-delta.vercel.app/', githubLink:'https://github.com/techbire/plt', tags:['MERN Stack','TypeScript','JWT','MongoDB','Material-UI','Google Books API','File Upload'] },
    { title:'CPU Scheduling Simulator', description:'Developed a graphical simulator for CPU scheduling algorithms with Gantt chart visualization using Python Tkinter and Matplotlib. Supports six scheduling algorithms: FCFS, SJF, Priority Scheduling, Round Robin, and SRTF. Includes interactive GUI for task input, real-time Gantt chart visualization, and performance metrics calculation.', image:'assets/images/cpu.png', liveLink:'https://github.com/techbire/CPU-Scheduling-Simulator', githubLink:'https://github.com/techbire/CPU-Scheduling-Simulator', tags:['Python','Tkinter','Matplotlib','CPU Scheduling Algorithms','Gantt Chart','Performance Metrics','Export Functionality'] },
    { title:'Travel Packing Calculator', description:'Built a personalized travel packing list generator that tailors recommendations based on destination, travel dates, and planned activities. Integrates real-time weather data and top tourist attractions for informed packing decisions. Includes a trip details form, packing tips, and a curated list of essential items.', image:'assets/images/travelpackingcalc.png', liveLink:'https://calcdiverse.netlify.app/calculators/travel-packing-calculator/', githubLink:'https://github.com/Rakesh9100/CalcDiverse/tree/main/Calculators/Travel-Packing-Calculator', tags:['JavaScript','HTML','CSS','Weather API','Dynamic List Generation','Tourist Places API','Packing Tips Algorithm'] },
    { title:'AI Travel Language Translator', description:'Created a web-based real-time language translation tool for travelers, supporting 20+ global and Indian languages with cultural context notes and pronunciation guides powered by Google Gemini LLM API. Features speech recognition and voice translation via Web Speech API, Firebase integration for real-time data management.', image:'assets/images/aitranslator.png', liveLink:'https://techbire.github.io/AI-Travel-Language-Translator/', githubLink:'https://github.com/techbire/AI-Travel-Language-Translator/', tags:['HTML','CSS','JavaScript','Google Gemini API','Web Speech API','Firebase','LocalStorage','AOS Animations','Font Awesome'] },
    { title:'Pantry Tracker', description:'Built a full-featured web application for efficient pantry management, including expiration alerts, inventory control, and automated shopping list generation. Integrated Firebase Firestore for real-time data sync and deployed on Vercel for speed and reliability. Designed with responsive UI for seamless usage across desktop and mobile devices.', image:'assets/images/pantry.png', liveLink:'https://techbire-pantry-tracker.vercel.app/', githubLink:'https://github.com/techbire/PantryTracker', tags:['React','Next.js','Firebase Firestore','Vercel','CSS','Responsive Design','Inventory Management'] },
    { title:'TechBire AI', description:'Created an AI-powered Streamlit application using Google Gemini AI for intelligent, context-aware responses. Features an interactive chat interface, formatted multi-language code snippets, and complete conversation history tracking. Built for ease of use and rapid deployment, ensuring a smooth, interactive AI experience.', image:'assets/images/techbireai.png', liveLink:'https://techbire-ai.streamlit.app/', githubLink:'https://github.com/techbire/techbire-AI', tags:['Python','Streamlit','Google Gemini AI API','Code Formatting','Chat History','.env Configuration'] },
    { title:'Bharat Trade', description:'Developed a simple command-line stock trading simulator in C and Python, enabling users to add money, invest, withdraw, and view their account balance. Integrated real-time stock data retrieval for any given stock symbol using Python\'s yfinance library. Supports smooth operation for basic financial actions in a lightweight terminal-based environment.', image:'assets/images/bharattrade.png', liveLink:'https://www.youtube.com/watch?v=1R9IS1HSJWQ', githubLink:'https://github.com/techbire/bharat-trade', tags:['C','Python','yfinance','Command-Line Interface','Stock Data API'] },
    { title:'Agriculture Website', description:'The Sustainable Agriculture Planner is a website using HTML, CSS and JS. It is designed to support sustainable farming practices. It provides a comprehensive set of features to assist farmers and stakeholders in planning, managing resources efficiently.', image:'assets/images/agricultre.png', liveLink:'https://techbire.github.io/agriculture-project', githubLink:'https://github.com/techbire/agriculture-html', tags:['HTML','CSS','JavaScript','Responsive Design','Sustainability'] },
    { title:'KBC: The Quiz Game', description:"Successfully completed the KBC: The Quiz Game project, infused with Amitabh Bachchan Sir's voice. This project showcases a wide range of Python's topics, including lists, conditionals, functions, and the Pygame library.", image:'assets/images/kbc.png', liveLink:'https://www.youtube.com/watch?v=Ji4NlDG2mfY', githubLink:'https://github.com/techbire/kbc', tags:['Python','Pygame','Game Development','Audio Integration','Quiz System'] }
  ];
  const grid = document.getElementById('projects-grid');
  projects.forEach(p=>{
    const card = document.createElement('div');
    card.className='project-card';
    card.innerHTML = `<div class='project-image-wrapper'><a href='${p.liveLink}' target='_blank'><img src='${p.image}' alt='${p.title}' /></a></div><div class='project-header'><a class='title-link' href='${p.liveLink}' target='_blank'>${p.title}</a><a class='github' href='${p.githubLink}' target='_blank' aria-label='GitHub repository'><i class='fab fa-github' aria-hidden='true'></i><span class='sr-only'>GitHub</span></a></div><div class='project-desc'>${p.description}</div><div class='project-tags'>${p.tags.map(t=>`<span class='project-tag'>${t}</span>`).join('')}</div>`;
    grid.appendChild(card);
  });
})();// Footer Links
(function(){
  const links = [
  { name:'Github', href:'https://github.com/techbire', displayText:'techbire', icon:'fab fa-github' },
  { name:'Twitter', href:'https://x.com/techbire', displayText:'@techbire', icon:'fab fa-x-twitter' },
  { name:'Blog', href:'https://www.techbire.blogspot.com', displayText:'TechBire Blog', icon:'fas fa-link' },
  { name:'Email', href:'mailto:anshtechnical@gmail.com', displayText:'anshtechnical@gmail.com', icon:'fas fa-envelope' },
  { name:'LinkedIn', href:'https://www.linkedin.com/in/techbire/', displayText:'Ansh Gupta', icon:'fab fa-linkedin' },
  ];
  const ul = document.getElementById('footer-links');
  links.forEach(l=>{
    const li = document.createElement('li');
  li.innerHTML = `<a href='${l.href}' target='_blank'><i class='${l.icon}' style='width:20px;'></i><span>${l.displayText}</span></a>`;
    ul.appendChild(li);
  });
})();

// Lightweight Icon Cloud (simple rotation effect on badges canvas)
(function(){
  const canvas = document.getElementById('icon-cloud');
  if(!canvas) return; const ctx = canvas.getContext('2d');
  const icons = ['C','C++','Py','JS','SQL','Node','React','Next','ML','DB'];
  const radius = 120; let angle = 0;
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const step = (Math.PI * 2)/icons.length;
    icons.forEach((ic,i)=>{
      const a = angle + i*step; const x = canvas.width/2 + Math.cos(a)*radius; const y = canvas.height/2 + Math.sin(a)*radius * 0.5; const scale = (Math.sin(a)+1)/2 * 0.5 + 0.5; ctx.save(); ctx.globalAlpha = scale; ctx.fillStyle='#fff'; ctx.font = `${14 + scale*10}px DM Sans`; ctx.textAlign='center'; ctx.fillText(ic,x,y); ctx.restore();
    });
    angle += 0.008; requestAnimationFrame(draw);
  }
  draw();
})();

// Interactive wobble (parallax-like) for cards similar to framer-motion effect
(function(){
  function handleMove(e){
    const rect = this.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width/2)) / 30; // dampen
    const y = (e.clientY - (rect.top + rect.height/2)) / 30;
    this.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
  function reset(){ this.style.transform = 'translate3d(0,0,0)'; }
  document.querySelectorAll('[data-wobble]').forEach(el=>{
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', reset);
  });
})();

// Certifications
(function(){
  const certifications = [
    { 
      title: 'Software Development Processes and Methodologies', 
      issuer: 'University of Minnesota', 
      link: 'https://www.coursera.org/account/accomplishments/verify/HNFFLD5P2ZVF' 
    },
    { 
      title: 'Flipkart GRiD 6.0 - Software Development Track', 
      issuer: 'Unstop & Flipkart', 
      link: 'https://unstop.com/certificate-preview/8b95ec58-bf11-4ed7-996a-e3ab2030d937?utm_campaign=' 
    },
    { 
      title: 'The Complete Full-Stack Web Development Bootcamp', 
      issuer: 'Udemy', 
      link: 'https://www.udemy.com/certificate/UC-689dfc8f-b3bb-49c4-9189-60ce0933f7fc/' 
    },
    { 
      title: 'Postman API Fundamentals Student Expert', 
      issuer: 'Postman', 
      link: 'https://badgr.com/public/assertions/FYLLcM86QRiih7ld41kEiQ?identity__email=anshg470@gmail.com' 
    },
    { 
      title: 'Decode DSA with C++', 
      issuer: 'PW Skills', 
      link: 'https://pwskills.com/learn/certificate/8c5bddcf-fa9e-4785-9735-2de3bd2e9d30/' 
    }
  ];
  
  const certList = document.getElementById('certifications-list');
  certifications.forEach(cert => {
    const certItem = document.createElement('div');
    certItem.className = 'certification-item';
    certItem.innerHTML = `
      <div class="certification-title">${cert.title}</div>
      <div class="certification-issuer">${cert.issuer}</div>
      <a href="${cert.link}" target="_blank" class="certification-link">
        <i class="fas fa-external-link-alt"></i>
        View Certificate
      </a>
    `;
    certList.appendChild(certItem);
  });
})();

// Publications
(function(){
  const publications = [
    { 
      title: 'Memory Management Technique in Operating System', 
      description: 'Explores modern memory management techniques in operating systems, including paging, segmentation, and virtual memory. Compares page replacement algorithms and examines advanced topics like dynamic allocation, fragmentation, and hybrid models. Highlights solutions for improving efficiency, security, and scalability.',
      type: 'Research Paper',
      date: 'Nov 12, 2024',
      link: 'https://www.researchgate.net/publication/385738258_Memory_Management_Technique_in_Operating_System' 
    }
  ];
  
  const pubList = document.getElementById('publications-list');
  publications.forEach(pub => {
    const pubItem = document.createElement('div');
    pubItem.className = 'publication-item';
    pubItem.innerHTML = `
      <div class="publication-title">${pub.title}</div>
      <div class="publication-description">${pub.description}</div>
      <div class="publication-meta">
        <span class="publication-type">${pub.type}</span>
        <span class="publication-date">${pub.date}</span>
      </div>
      <a href="${pub.link}" target="_blank" class="publication-link">
        <i class="fas fa-external-link-alt"></i>
        View Publication
      </a>
    `;
    pubList.appendChild(pubItem);
  });
})();

// Hackathons & Contributions
(function(){
  const hackathons = [
    { 
      title: 'GearUp Season Hackathon', 
      role: 'Participant • Team Size: 4',
      description: 'Engineered Water Wise, a knowledge-sharing app for water conservation, optimizing UI to boost content discovery and engagement by 25%.',
      organization: 'Government of India',
      achievement: 'Ranked in top 40 teams among 400+ teams',
      link: 'https://github.com/menotnandan/WaterWise' 
    },
    { 
      title: 'GirlScript Summer of Code', 
      role: 'Open Source Contributor',
      description: 'Contributed to open-source projects, resolving 10+ bugs, implementing 5 features, merge 3 PRs and collaborating globally to enhance project functionality.',
      organization: 'GirlScript Foundation',
      achievement: 'Ranked under Top 300 among 30,000 registrations',
      link: 'https://www.linkedin.com/posts/techbire_ranked-under-top-300-among-30000-registrations-activity-7228989489681997827-F8pa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXr_0gBqGffRf76ccosj8VORqf2ACmrxiE' 
    }
  ];
  
  const hackathonList = document.getElementById('hackathons-list');
  hackathons.forEach(hack => {
    const hackItem = document.createElement('div');
    hackItem.className = 'hackathon-item';
    hackItem.innerHTML = `
      <div class="hackathon-title">${hack.title}</div>
      <div class="hackathon-role">${hack.role}</div>
      <div class="hackathon-description">${hack.description}</div>
      <div class="hackathon-meta">
        <span class="hackathon-organization">${hack.organization}</span>
        <span class="hackathon-achievement">${hack.achievement}</span>
      </div>
      <a href="${hack.link}" target="_blank" class="hackathon-link">
        <i class="fas fa-external-link-alt"></i>
        ${hack.link.includes('github') ? 'View Project' : 'View Post'}
      </a>
    `;
    hackathonList.appendChild(hackItem);
  });
})();

// Liquid Crystal Navigation
(function(){
  const navItems = document.querySelectorAll('.nav-item');
  const indicator = document.querySelector('.nav-indicator');
  const navToggle = document.querySelector('.nav-toggle');
  const navContainer = document.querySelector('.nav-container');

  // Mobile toggle
  if(navToggle && navContainer){
    navToggle.addEventListener('click', ()=>{
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navContainer.classList.toggle('open');
    });
    // Close on item click (mobile)
    navItems.forEach(item=> item.addEventListener('click', ()=>{
      if(window.innerWidth <= 786){
        navContainer.classList.remove('open');
        navToggle.setAttribute('aria-expanded','false');
      }
    }));
    // Close on outside click
    document.addEventListener('click', (e)=>{
      if(window.innerWidth <= 786){
        if(!navContainer.contains(e.target) && !navToggle.contains(e.target)){
          navContainer.classList.remove('open');
          navToggle.setAttribute('aria-expanded','false');
        }
      }
    });
    // On resize restore state
    window.addEventListener('resize', ()=>{
      if(window.innerWidth > 786){
        navContainer.classList.remove('open');
        navToggle.setAttribute('aria-expanded','false');
      }
    });
  }
  
  function updateIndicator(activeItem) {
    if (!activeItem) return;
    
    const rect = activeItem.getBoundingClientRect();
    const containerRect = activeItem.parentElement.getBoundingClientRect();
    
    indicator.style.width = rect.width + 'px';
    indicator.style.left = (rect.left - containerRect.left) + 'px';
    indicator.classList.add('active');
  }
  
  // Set default to Home on page load
  window.addEventListener('load', () => {
    const homeItem = document.querySelector('a[href="#hero"]');
    if (homeItem) {
      homeItem.classList.add('active');
      updateIndicator(homeItem);
    }
  });
  
  // Smooth scroll and active state
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all items
      navItems.forEach(nav => nav.classList.remove('active'));
      
      // Add active class to clicked item
      item.classList.add('active');
      updateIndicator(item);
      
      // Smooth scroll to section
      const targetId = item.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
    
    // Hover effects
    item.addEventListener('mouseenter', () => updateIndicator(item));
  });
  
  // Reset indicator on container mouse leave
  document.querySelector('.nav-container').addEventListener('mouseleave', () => {
    const activeItem = document.querySelector('.nav-item.active');
    if (activeItem) {
      updateIndicator(activeItem);
    } else {
      indicator.classList.remove('active');
    }
  });
  
  // Intersection Observer for active states
  const sections = document.querySelectorAll('section[id], header[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        let correspondingNav = document.querySelector(`a[href="#${id}"]`);
        
        // Keep Home active for hero, about, skills sections
        if (id === 'hero' || id === 'about' || id === 'skills') {
          correspondingNav = document.querySelector('a[href="#hero"]');
        }
        
        if (correspondingNav) {
          navItems.forEach(nav => nav.classList.remove('active'));
          correspondingNav.classList.add('active');
          updateIndicator(correspondingNav);
        }
      }
    });
  }, { threshold: 0.3 });
  
  sections.forEach(section => observer.observe(section));
})();
