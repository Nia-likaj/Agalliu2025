import { Button } from "../../ui";
import { companyInfo } from "../../../data";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Shto këtë

export const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Shto këtë

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src="/assets/hero/background.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
          style={{ minHeight: "100vh", height: "100%", maxHeight: "none" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 py-4">
        <div className="container flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-20 h-20">
              <img
                src="/assets/brand/AgalliuLogo_NoBackground.png"
                alt="Agalliu Logo"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <div>
              <div className="font-bold text-lg text-white tracking-tight">
                {companyInfo.name}
              </div>
              <div className="text-xs text-orange-400 font-medium">
                {companyInfo.tagline}
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 text-sm text-white font-medium">
            <a href="#services" className="hover:text-orange-400 transition">
              Shërbime
            </a>
            <a href="/about" className="hover:text-orange-400 transition">
              Rreth Nesh
            </a>
            <button
              type="button"
              className="hover:text-orange-400 transition bg-transparent border-none outline-none p-0 m-0"
              onClick={() => navigate("/portfolio")}
              style={{ background: "none" }}
            >
              Punime
            </button>
          </div>

          {/* Desktop Contact Button */}
          <a href="#contact" className="hidden lg:block">
            <Button variant="primary" size="sm">
              Kontakto
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full
                          bg-gradient-to-b from-gray-900/95 to-gray-800/95
                          backdrop-blur-xl
                          border-t border-white/10
                          shadow-2xl
                          animate-in slide-in-from-top duration-200">
            <div className="container max-w-sm mx-auto py-3 px-4 space-y-1">

              <div className="text-center text-xs text-white pb-2">
                Navigim
              </div>

              <a href="#services"
                 className="block !text-white text-sm font-medium py-2.5 px-3 rounded-lg hover:!text-orange-400 transition-colors"
                 onClick={() => setMobileMenuOpen(false)}>
                Shërbime
              </a>

              <a href="/about"
                 className="block !text-white text-sm font-medium py-2.5 px-3 rounded-lg hover:!text-orange-400 transition-colors"
                 onClick={() => setMobileMenuOpen(false)}>
                Rreth Nesh
              </a>

              <button
                type="button"
                className="block w-full text-left !text-white text-sm font-medium py-2.5 px-3 rounded-lg hover:!text-orange-400 transition-colors bg-transparent border-none outline-none"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/portfolio");
                }}
              >
                Punime
              </button>

              <div className="pt-2">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full text-sm py-2 shadow-md shadow-orange-500/20">
                    Kontakto
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main content - SIMPLIFIED */}
      <div className="relative z-10 container flex-1 flex flex-col justify-center py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - MINIMAL & FOCUSED */}
          <div className="text-white space-y-6 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm text-orange-300 font-medium">Profesionalizëm dhe Cilësi</span>
            </div>

            {/* Main Heading - CLEAR & BOLD */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Ndërtojmë dhe <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Mirëmbajmë
              </span>
              <br />
              Ambientin Tuaj
            </h1>

            {/* Short Description - ONE CLEAR MESSAGE */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
              Kompani profesionale që ofron shërbime të plota në ndërtim, pastrim dhe mirëmbajtje për ambiente rezidenciale dhe biznese.
            </p>

            {/* CTA Buttons - CLEAR ACTION */}
            <div className="flex gap-3 pt-4 flex-wrap">
              <a href="/about">
                <Button
                  size="sm"
                  variant="primary"
                  className="shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 min-w-[130px]"
                >
                  Mëso më shumë
                </Button>
              </a>
              <a href="#services">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white/5 backdrop-blur border-white/20 text-white hover:bg-white/10 transition-all duration-300 min-w-[130px]"
                >
                  Shiko Shërbimet
                </Button>
              </a>
            </div>

            {/* Trust Indicators - MINIMAL */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Licencuar & i Sigurt</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>15+ Vjet Eksperiencë</span>
              </div>
            </div>
          </div>
          {/* Right side - OPTIMIZED MEDIA GRID */}
          <div className="relative flex justify-end items-center w-full">
            {/* Main video - hero focal point */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black
                            h-[320px] sm:h-[380px] md:h-[440px] lg:h-[520px] w-full max-w-[420px] lg:max-w-[520px] ml-auto">
              <video
                src="/assets/portfolio/videos/video_final.mp4"
                className="absolute inset-0 w-full h-full object-cover object-[center_95%]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 
                              bg-gradient-to-t 
                              from-black/25 via-black/5 to-transparent
                              pointer-events-none" />
            </div>
            {/* Mobile video - full width */}
            <div className="lg:hidden mt-4 rounded-xl overflow-hidden shadow-xl bg-black h-[240px] w-full">
              <video
                src="/assets/portfolio/videos/video_final.mp4"
                className="absolute inset-0 w-full h-full object-cover object-[center_95%]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 
                              bg-gradient-to-t 
                              from-black/25 via-black/5 to-transparent
                              pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
