import  { useEffect, useRef } from "react";

export default function App() {
  const auroraRef = useRef(null);

  // Subtle mouse interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      if (auroraRef.current) {
        auroraRef.current.style.transform = `
          translate3d(${x}px, ${y}px, 0)
          scale(1.05)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          width: 100%;
          min-height: 100%;
        }

        body {
          overflow: hidden;
          background: #050505;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          color: white;
        }

        /* =========================================
           MAIN
        ========================================= */

        .page {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #050505;
        }

        /* =========================================
           AURORA CONTAINER
        ========================================= */

        .aurora-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        /* =========================================
           AURORA
        ========================================= */

        .aurora {
          position: absolute;
          inset: -10px;

          --aurora:
            repeating-linear-gradient(
              100deg,
              #3b82f6 10%,
              #a5b4fc 15%,
              #93c5fd 20%,
              #ddd6fe 25%,
              #60a5fa 30%
            );

          --white-gradient:
            repeating-linear-gradient(
              100deg,
              #fff 0%,
              #fff 7%,
              transparent 10%,
              transparent 12%,
              #fff 16%
            );

          background-image:
            var(--white-gradient),
            var(--aurora);

          background-size:
            300% 200%,
            300% 200%;

          background-position:
            50% 50%,
            50% 50%;

          opacity: 0.42;

          filter: blur(25px) saturate(0.7);

          will-change: transform;

          mask-image:
            radial-gradient(
              ellipse at 100% 0%,
              black 5%,
              rgba(0, 0, 0, 0.75) 20%,
              transparent 72%
            );

          -webkit-mask-image:
            radial-gradient(
              ellipse at 100% 0%,
              black 5%,
              rgba(0, 0, 0, 0.75) 20%,
              transparent 72%
            );

          animation: auroraMove 35s linear infinite;
        }

        /* Second layer */
        .aurora::after {
          content: "";

          position: absolute;
          inset: 0;

          background-image:
            var(--white-gradient),
            var(--aurora);

          background-size:
            200% 100%,
            200% 100%;

          background-attachment: fixed;

          mix-blend-mode: difference;

          opacity: 0.35;

          animation:
            auroraMove 40s linear infinite reverse;
        }

        /* =========================================
           SOFT DARK OVERLAY
        ========================================= */

        .dark-overlay {
          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              ellipse at 85% 0%,
              rgba(30, 40, 55, 0.22),
              transparent 45%
            ),
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.05),
              rgba(0, 0, 0, 0.42)
            );

          pointer-events: none;
        }

        /* =========================================
           SUBTLE VIGNETTE
        ========================================= */

        .vignette {
          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              ellipse at center,
              transparent 25%,
              rgba(0, 0, 0, 0.32) 100%
            );

          pointer-events: none;
        }

        /* =========================================
           NAVBAR
        ========================================= */

        .navbar {
          position: absolute;
          z-index: 20;

          top: 0;
          left: 0;

          width: 100%;

          padding: 30px 45px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 14px;
          font-weight: 600;

          letter-spacing: 0.08em;

          color: rgba(255,255,255,0.85);
        }

        .nav-links {
          display: flex;
          gap: 35px;
        }

        .nav-links a {
          position: relative;

          text-decoration: none;

          font-size: 10px;

          letter-spacing: 0.18em;

          color: rgba(255,255,255,0.45);

          transition:
            color 0.3s ease;
        }

        .nav-links a::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -6px;

          width: 0;
          height: 1px;

          background: white;

          transition: width 0.3s ease;
        }

        .nav-links a:hover {
          color: white;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        /* =========================================
           HERO
        ========================================= */

        .hero {
          position: relative;
          z-index: 10;

          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;

          padding-left: 13vw;
        }

        .hero-content {
          max-width: 800px;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;

          margin-bottom: 25px;

          font-size: 10px;

          letter-spacing: 0.35em;

          color: rgba(255,255,255,0.42);

          animation: fadeUp 1s ease forwards;
        }

        .eyebrow-line {
          width: 30px;
          height: 1px;

          background: rgba(255,255,255,0.35);
        }

        /* =========================================
           TITLE
        ========================================= */

        .title {
          margin: 0;

          font-size: clamp(
            55px,
            8vw,
            115px
          );

          line-height: 0.9;

          letter-spacing: -0.065em;

          font-weight: 450;

          color: #f3f5f7;

          animation:
            titleReveal 1.4s
            cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .title span {
          display: block;

          color: rgba(255,255,255,0.72);
        }

        /* =========================================
           DESCRIPTION
        ========================================= */

        .description {
          width: 400px;
          max-width: 75vw;

          margin-top: 35px;

          font-size: 14px;

          line-height: 1.8;

          font-weight: 400;

          color: rgba(255,255,255,0.38);

          animation:
            fadeUp 1s 0.3s
            ease forwards;

          opacity: 0;
        }

        /* =========================================
           BUTTON
        ========================================= */

        .button {
          position: relative;

          display: inline-flex;
          align-items: center;
          gap: 18px;

          margin-top: 32px;

          padding: 13px 18px;

          border:
            1px solid
            rgba(255,255,255,0.15);

          border-radius: 100px;

          background:
            rgba(255,255,255,0.025);

          color: rgba(255,255,255,0.75);

          font-size: 10px;

          letter-spacing: 0.15em;

          cursor: pointer;

          backdrop-filter: blur(15px);

          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease;

          animation:
            fadeUp 1s 0.5s
            ease forwards;

          opacity: 0;
        }

        .button:hover {
          transform: translateY(-3px);

          border-color:
            rgba(255,255,255,0.35);

          background:
            rgba(255,255,255,0.07);
        }

        .button-arrow {
          font-size: 14px;

          transition:
            transform 0.3s ease;
        }

        .button:hover .button-arrow {
          transform:
            translate(3px,-3px);
        }

        /* =========================================
           SOCIAL BAR
        ========================================= */

        .social {
          position: absolute;

          z-index: 20;

          left: 42px;
          bottom: 80px;

          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 22px;
        }

        .social-line {
          position: absolute;

          left: 50%;
          bottom: -80px;

          transform:
            translateX(-50%);

          width: 1px;
          height: 260px;

          background:
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.22),
              rgba(255,255,255,0.05),
              transparent
            );
        }

        .social a {
          position: relative;
          z-index: 2;

          width: 30px;
          height: 30px;

          display: grid;
          place-items: center;

          text-decoration: none;

          color:
            rgba(255,255,255,0.42);

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .social a:hover {
          color: white;

          transform:
            translateY(-3px);
        }

        .social svg {
          width: 17px;
          height: 17px;

          stroke: currentColor;

          fill: none;

          stroke-width: 1.3;

          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* =========================================
           BOTTOM INFO
        ========================================= */

        .bottom-info {
          position: absolute;

          z-index: 20;

          left: 42px;
          bottom: 25px;

          display: flex;
          gap: 25px;

          font-size: 8px;

          letter-spacing: 0.25em;

          color:
            rgba(255,255,255,0.22);
        }

        /* =========================================
           SCROLL
        ========================================= */

        .scroll {
          position: absolute;

          z-index: 20;

          right: 42px;
          bottom: 28px;

          display: flex;
          align-items: center;

          gap: 15px;

          font-size: 8px;

          letter-spacing: 0.3em;

          color:
            rgba(255,255,255,0.22);
        }

        .scroll-line {
          position: relative;

          width: 55px;
          height: 1px;

          overflow: hidden;

          background:
            rgba(255,255,255,0.1);
        }

        .scroll-line::after {
          content: "";

          position: absolute;

          left: 0;
          top: 0;

          width: 20px;
          height: 1px;

          background:
            rgba(255,255,255,0.6);

          animation:
            scrollMove 2s
            ease-in-out
            infinite;
        }

        /* =========================================
           ANIMATIONS
        ========================================= */

        @keyframes auroraMove {

          0% {
            background-position:
              50% 50%,
              50% 50%;
          }

          20% {
            background-position:
              100% 0%,
              100% 0%;
          }

          40% {
            background-position:
              80% 100%,
              80% 100%;
          }

          60% {
            background-position:
              0% 70%,
              0% 70%;
          }

          80% {
            background-position:
              20% 10%,
              20% 10%;
          }

          100% {
            background-position:
              50% 50%,
              50% 50%;
          }
        }

        @keyframes titleReveal {

          0% {
            opacity: 0;

            transform:
              translateY(45px);

            filter:
              blur(15px);
          }

          100% {
            opacity: 1;

            transform:
              translateY(0);

            filter:
              blur(0);
          }
        }

        @keyframes fadeUp {

          0% {
            opacity: 0;

            transform:
              translateY(20px);
          }

          100% {
            opacity: 1;

            transform:
              translateY(0);
          }
        }

        @keyframes scrollMove {

          0% {
            transform:
              translateX(-25px);
          }

          50% {
            transform:
              translateX(45px);
          }

          100% {
            transform:
              translateX(-25px);
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {

          .navbar {
            padding: 25px 22px;
          }

          .nav-links {
            gap: 15px;
          }

          .nav-links a {
            font-size: 8px;
          }

          .hero {
            padding-left: 65px;
            padding-right: 25px;
          }

          .title {
            font-size:
              clamp(48px, 15vw, 80px);
          }

          .description {
            font-size: 13px;
          }

          .social {
            left: 18px;
          }

          .bottom-info {
            left: 18px;
          }

          .scroll {
            display: none;
          }
        }
      `}</style>

      <div className="page">

        {/* =====================================
            AURORA BACKGROUND
        ====================================== */}

        <div className="aurora-container">

          <div
            ref={auroraRef}
            className="aurora"
          />

          <div className="dark-overlay" />

          <div className="vignette" />

        </div>


        {/* =====================================
            NAVBAR
        ====================================== */}

        <nav className="navbar">

          <div className="logo">
            MN.
          </div>

          <div className="nav-links">

            <a href="#home">
              HOME
            </a>

            <a href="#work">
              WORK
            </a>

            <a href="#about">
              ABOUT
            </a>

            <a href="#contact">
              CONTACT
            </a>

          </div>

        </nav>


        {/* =====================================
            HERO
        ====================================== */}

        <section
          className="hero"
          id="home"
        >

          <div className="hero-content">

            <div className="eyebrow">

              <span className="eyebrow-line" />

              CREATIVE DEVELOPER

            </div>


            <h1 className="title">

              Building digital

              <span>
                experiences.
              </span>

            </h1>


            <p className="description">

              I design and build modern digital
              experiences with React, JavaScript
              and thoughtful interaction.

            </p>


            <button
              className="button"
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({
                    behavior: "smooth"
                  })
              }
            >

              EXPLORE MY WORK

              <span className="button-arrow">
                ↗
              </span>

            </button>

          </div>

        </section>


        {/* =====================================
            SOCIAL ICONS
        ====================================== */}

        <div className="social">

          <div className="social-line" />


          {/* Cube */}

          <a href="#work">

            <svg viewBox="0 0 24 24">

              <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" />

              <path d="M4 7.5L12 12L20 7.5" />

              <path d="M12 12V21" />

            </svg>

          </a>


          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >

            <svg viewBox="0 0 24 24">

              <path d="M7 9V17" />

              <path d="M7 6.5V6.6" />

              <path d="M11 17V9" />

              <path d="M11 12.5C11.8 10.2 16 9.8 16 13.2V17" />

            </svg>

          </a>


          {/* Mail */}

          <a href="mailto:hello@example.com">

            <svg viewBox="0 0 24 24">

              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="1.5"
              />

              <path d="M4 7L12 13L20 7" />

            </svg>

          </a>

        </div>


        {/* =====================================
            BOTTOM
        ====================================== */}

        <div className="bottom-info">

          <span>
            © 2026
          </span>

          <span>
            INDIA
          </span>

        </div>


        {/* =====================================
            SCROLL
        ====================================== */}

        <div className="scroll">

          <span>
            SCROLL
          </span>

          <div className="scroll-line" />

        </div>

      </div>
    </>
  );
}
