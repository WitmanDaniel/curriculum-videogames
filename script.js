// ====================================================================
// WINDOWS 95 RETRO PORTFOLIO - SCRIPT & I18N
// Witman Daniel Saldaña Vargas - Roblox Game Developer
// ====================================================================

// --- Translations Dictionary (EN / ES) ---
const translations = {
  en: {
    menu_file: "ile",
    menu_view: "iew",
    menu_projects: "rojects",
    menu_systems: "ystems",
    menu_help: "elp",
    lang_label: "Language:",
    title_about: "about_me.txt - Notepad",
    role_title: "Game Developer • Roblox Systems & Gameplay Programmer (Lua / Luau)",
    about_p1: "I am a gameplay and systems programmer specializing in <strong>Roblox Studio</strong> and <strong>Lua / Luau</strong>. I have deep knowledge in designing and building scalable game systems: secure client-server architectures, low-latency network replication, match state management, and reliable data persistence.",
    about_p2: "I specialize in developing <strong>asymmetric multiplayer games</strong> (1vs9 formats with differentiated roles), having engineered complete mechanics for hunter tracking, survivor stealth, active/passive abilities, interactive skill-check minigames, and real-time network synchronization.",
    title_systems: "roblox_systems.exe",
    sys_legend_1: "Architecture & Networking",
    sys_li_1_1: "Secure Client-Server communication via RemoteEvents and RemoteFunctions",
    sys_li_1_2: "Server-side validation and exploit mitigation",
    sys_li_1_3: "Network replication optimization and packet bandwidth management",
    sys_li_1_4: "Modular frameworks (Knit, OOP with Lua Metatables, Component design)",
    sys_legend_2: "Gameplay Mechanics & Physics",
    sys_li_2_1: "Combat systems, spatial raycast hitboxes and hurtboxes",
    sys_li_2_2: "Asymmetric role systems (Survivor abilities vs. Killer mechanics)",
    sys_li_2_3: "Finite State Machines (FSM) for character states and animations",
    sys_li_2_4: "Physics manipulation using RunService and PhysicsService (Collision Groups)",
    sys_legend_3: "Data, UI & Tooling",
    sys_li_3_1: "Reliable persistence with ProfileService (session locking, anti-rollback)",
    sys_li_3_2: "Synchronized inventory, shop, and cosmetic frameworks",
    sys_li_3_3: "Dynamic interfaces and animations using TweenService",
    sys_li_3_4: "Professional developer workflow with Rojo, Git, and Visual Studio Code",
    sys_legend_4: "3D Modeling & Assets",
    sys_li_4_1: "3D asset and prop modeling using Blender",
    sys_li_4_2: "Low-poly mesh optimization, clean topology, and collision hulls",
    sys_li_4_3: "UV unwrapping, material texturing, and Roblox Studio import pipeline",
    sys_li_4_4: "Modular level environment assets and character equipment",
    title_games: "asymmetric_games.bmp - Projects Gallery",
    games_intro: "Asymmetric multiplayer game projects developed in Roblox:",
    suitn_badge: "Alpha Phase • Canceled due to budget",
    suitn_desc: "Asymmetric 1vs9 multiplayer game built on Roblox. One player takes on the role of the Killer tasked with hunting down and eliminating 9 survivors across the map. Programmed interactive skill-check minigames for survivors to interact with generators and escape objectives, round lifecycle systems, active survivor stealth perks, and raycast impact physics. The project concluded in alpha stage due to budget constraints.",
    agwntdas_badge: "Alpha Phase • In Development",
    agwntdas_desc: "Spiritual successor 1vs9 asymmetric game currently in active alpha production. Expands upon previous systems with refined Killer pursuit logic, complex survivor minigames, advanced stealth mechanics, modular architecture (Knit/OOP), optimized client-server replication, and robust profile save systems using ProfileService.",
    title_models: "3d_models.bmp - 3D Art & Assets",
    models_intro: "3D models and assets created in Blender for game environments and props:",
    model_1_title: "Props & Interactive Assets",
    model_1_desc: "Optimized 3D props and gameplay objects modeled for in-game mechanics.",
    model_2_title: "Environment & Architecture",
    model_2_desc: "Modular structure pieces and atmospheric map elements.",
    model_3_title: "Character Gear & Items",
    model_3_desc: "Accessories, equipment, and handheld items prepared for character rigs.",
    title_video: "media_player.exe - System Showcase",
    video_intro: "Gameplay systems showcase currently in development:",
    video_panel_header: "Asymmetric Game System Showcase",
    video_caption: "Showcase of the asymmetric game currently in development: Killer mechanics, survivor interaction minigames, and 1vs9 match state logic in Roblox.",
    title_contact: "contact.exe",
    contact_email: "Email: saldanawitman7@gmail.com",
    contact_roblox: "Roblox Profile: Ramsowar3",
    taskbar_start: "Start",
    taskbar_portfolio: "Portfolio - Witman Daniel"
  },
  es: {
    menu_file: "rchivo",
    menu_view: "er",
    menu_projects: "royectos",
    menu_systems: "istemas",
    menu_help: "yuda",
    lang_label: "Idioma:",
    title_about: "sobre_mi.txt - Bloc de notas",
    role_title: "Programador de Videojuegos • Especialista en Sistemas de Roblox (Lua / Luau)",
    about_p1: "Soy programador de videojuegos especializado en <strong>Roblox Studio</strong> y <strong>Lua / Luau</strong>. Domino a fondo el diseño e implementación de sistemas de juego complejos: arquitectura cliente-servidor robusta, replicación en red sin latencia innecesaria, gestión de estados de partida y persistencia segura de datos.",
    about_p2: "Cuento con amplia experiencia en el desarrollo de <strong>juegos multijugador asimétricos</strong> (1vs9 con roles diferenciados), habiendo diseñado mecánicas avanzadas de cacería, sigilo, habilidades activas/pasivas, minijuegos de interacción y sincronización en tiempo real.",
    title_systems: "sistemas_roblox.exe",
    sys_legend_1: "Arquitectura & Networking",
    sys_li_1_1: "Comunicación Cliente-Servidor segura con RemoteEvents y RemoteFunctions",
    sys_li_1_2: "Mitigación y validación server-side contra exploits",
    sys_li_1_3: "Optimización de replicación de red y compresión de paquetes",
    sys_li_1_4: "Frameworks modulares (Knit, POO con Metatables, Componentes)",
    sys_legend_2: "Mecánicas & Físicas",
    sys_li_2_1: "Sistemas de combate, hurtboxes/hitboxes con Raycasting espacial",
    sys_li_2_2: "Gestión de roles asimétricos (habilidades de supervivientes vs cazador)",
    sys_li_2_3: "Máquinas de estados finitas (FSM) para movimiento y acciones",
    sys_li_2_4: "Manipulación de físicas con RunService y PhysicsService (Collision Groups)",
    sys_legend_3: "Datos, UI & Flujo",
    sys_li_3_1: "Guardado seguro con ProfileService (prevención de pérdida y rollback)",
    sys_li_3_2: "Sincronización de inventarios, tiendas y cosméticos",
    sys_li_3_3: "Interfaces dinámicas con animaciones en TweenService",
    sys_li_3_4: "Flujo de trabajo profesional con Rojo, Git y Visual Studio Code",
    sys_legend_4: "Modelado 3D & Assets",
    sys_li_4_1: "Modelado de props y assets 3D en Blender",
    sys_li_4_2: "Optimización low-poly, topología limpia y mallas de colisión",
    sys_li_4_3: "Mapeo UV, texturizado e importación a Roblox Studio",
    sys_li_4_4: "Assets modulares para escenarios y accesorios para personajes",
    title_games: "juegos_asimetricos.bmp - Galería de Proyectos",
    games_intro: "Proyectos de juegos multijugador asimétricos desarrollados en Roblox:",
    suitn_badge: "Fase Alpha • Cancelado por presupuesto",
    suitn_desc: "Videojuego multijugador asimétrico formato 1vs9 en Roblox. Un jugador toma el rol del Killer con la misión de cazar y eliminar a los 9 supervivientes en el mapa. Incluyó programación de minijuegos interactivos de habilidad para que los supervivientes pudieran interactuar con el entorno y sobrevivir, sistema de rondas, habilidades activas y físicas de impacto por Raycast. El proyecto concluyó en fase alpha debido a límites de presupuesto.",
    agwntdas_badge: "Fase Alpha • En desarrollo",
    agwntdas_desc: "Sucesor espiritual asimétrico formato 1vs9 actualmente en fase alpha de desarrollo activo. Profundiza la jugabilidad del Killer contra los 9 supervivientes incorporando minijuegos dinámicos más pulidos, mecánicas de sigilo avanzadas, arquitectura modular escalable (Knit/OOP), sincronización optimizada cliente-servidor y guardado de perfil seguro con ProfileService.",
    title_models: "modelos_3d.bmp - Arte y Modelos 3D",
    models_intro: "Modelos 3D y assets creados en Blender para escenarios y props de juego:",
    model_1_title: "Props & Objetos Interactivos",
    model_1_desc: "Props 3D y objetos optimizados para mecánicas y jugabilidad.",
    model_2_title: "Escenarios & Estructuras",
    model_2_desc: "Piezas modulares de arquitectura y elementos de ambientación.",
    model_3_title: "Accesorios & Equipamiento",
    model_3_desc: "Cosméticos, armas y accesorios adaptados para rigs de personajes.",
    title_video: "reproductor_videos.exe - Pruebas de Sistemas",
    video_intro: "Showcase del sistema de juego asimétrico en desarrollo:",
    video_panel_header: "Sistema de juego asimétrico",
    video_caption: "Showcase del juego asimétrico que ando desarrollando en Roblox: mecánicas del killer, minijuegos de interacción para supervivientes y lógica de partidas 1vs9.",
    title_contact: "contacto.exe",
    contact_email: "Correo: saldanawitman7@gmail.com",
    contact_roblox: "Perfil de Roblox: Ramsowar3",
    taskbar_start: "Inicio",
    taskbar_portfolio: "Portafolio - Witman Daniel"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update button active state
  const btnEn = document.getElementById('btn-en');
  const btnEs = document.getElementById('btn-es');
  if (btnEn && btnEs) {
    if (lang === 'en') {
      btnEn.classList.add('active');
      btnEs.classList.remove('active');
    } else {
      btnEs.classList.add('active');
      btnEn.classList.remove('active');
    }
  }

  // Persist preference
  try {
    localStorage.setItem('portfolio_lang', lang);
  } catch (e) {
    // Local storage not accessible
  }
}

// Clock for the retro Windows 95 taskbar footer
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const timeString = `${hours}:${minutes} ${ampm}`;
  const clockEl = document.getElementById('clock');
  if (clockEl) {
    clockEl.innerText = timeString;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  setInterval(updateClock, 1000);

  // Initialize with saved language or English by default
  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem('portfolio_lang') || 'en';
  } catch (e) {
    savedLang = 'en';
  }
  setLanguage(savedLang);
});
