import { Button } from "../components/ui/Button";
import { company } from "../data/company";
import { useNavigate } from "react-router-dom"; // Shto për navigim

export const About = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="border-b border-gray-200 bg-black sticky top-0 z-50 shadow-sm">
        <div className="container py-3 md:py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 md:gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16">
              <img
                src="/assets/brand/AgalliuLogo_NoBackground.png"
                alt="Agalliu Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-bold text-base md:text-xl text-white">
                {company.name}
              </div>
              <div className="hidden md:block text-sm text-orange-500 font-medium">
                {company.tagline}
              </div>
            </div>
          </a>

          <div className="flex gap-2">
            <a href="/">
              <Button variant="outline" size="sm" className="text-xs md:text-sm px-2 py-1.5 md:px-4 md:py-2">
                Kthehu te Home
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-8 md:py-16 relative overflow-hidden">
        {/* Background image + orange gradient edges */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/brand/bg.jpg"
            alt="Punëtorë ndërtimi"
            className="w-full h-full object-cover object-center blur-[2px] brightness-95"
            style={{ minHeight: 320 }}
          />
          {/* Orange gradient edges for mobile and desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-white/60 to-orange-100 opacity-80" />
          {/* Optional: stronger orange on very small screens */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-r from-orange-200/70 via-transparent to-orange-200/70" />
        </div>
        <div className="container max-w-5xl relative z-10 px-2 sm:px-6">

          {/* TITULLI + TEKSTI */}
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4 mt-2">
            Rreth Nesh
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 drop-shadow-sm">
            Agalliu 2025 – Shërbime
            <span className="text-orange-500"> profesionale</span> në ndërtim,
            pastrim dhe mirëmbajtje
          </h1>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 bg-white/70 rounded-xl px-2 py-2 shadow-sm">
            Ne ofrojmë shërbime të plota për ambiente rezidenciale dhe biznese,
            me fokus në cilësi, siguri, korrektësi dhe respektim të afateve.
            Qëllimi ynë është të dorëzojmë punë të pastër, të qëndrueshme dhe të
            standardizuar, nga punimet e brendshme deri tek mirëmbajtja e objekteve.
          </p>

          {/* SERVICE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">

            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Punime ndërtimi & rifinitura
              </h3>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>Veshje dyshemeve dhe mureve</li>
                <li>Vendosje parketi</li>
                <li>Lyerje muri dhe hekurishte</li>
                <li>Patinime dhe punime dekorative</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Izolime & termoizolime
              </h3>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>Izolime të ndryshme ndërtimore</li>
                <li>Termoizolime për kursim energjie</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Pastrim, dezinfektim & mirëmbajtje
              </h3>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>Pastrim profesional ambientesh dhe godinash</li>
                <li>Dezinfektim rezidencial dhe biznesi</li>
                <li>Larje fasadash xhami</li>
                <li>Aromatizim ambientesh</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Shërbime të tjera & pajisje
              </h3>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>Peshkim selektiv</li>
                <li>Dhënie me qira e vinçit</li>
              </ul>
            </div>

          </div>

          {/* GALERIA E PUNIMEVE – POSHT TEKSTIT */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">
              Disa nga punimet tona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div
                className="group rounded-2xl overflow-hidden shadow-lg border border-orange-100 bg-white cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-orange-400 hover:-translate-y-1"
                onClick={() => navigate("/portfolio")}
                tabIndex={0}
                role="button"
                aria-label="Shiko portfolio"
              >
                <img
                  src="/assets/portfolio/images/work-parquet.jpg"
                  alt="Vendosje parketi"
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-orange-600 transition-colors">
                    Vendosje Parketi
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Montim profesional dhe përfundime të sakta për dysheme cilësore.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div
                className="group rounded-2xl overflow-hidden shadow-lg border border-orange-100 bg-white cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-orange-400 hover:-translate-y-1"
                onClick={() => navigate("/portfolio")}
                tabIndex={0}
                role="button"
                aria-label="Shiko portfolio"
              >
                <img
                  src="/assets/portfolio/images/work-wood-ceiling.jpg"
                  alt="Tavan druri"
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-orange-600 transition-colors">
                    Tavan Druri & Struktura
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Punime tavani dhe struktura mbështetëse me precizion.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div
                className="group rounded-2xl overflow-hidden shadow-lg border border-orange-100 bg-white cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-orange-400 hover:-translate-y-1"
                onClick={() => navigate("/portfolio")}
                tabIndex={0}
                role="button"
                aria-label="Shiko portfolio"
              >
                <img
                  src="/assets/portfolio/images/work-painting.jpg"
                  alt="Lyerje dhe restaurim"
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-orange-600 transition-colors">
                    Restaurim & Lyerje
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Riparime, stuko dhe lyerje profesionale për ambiente moderne.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Keni një projekt në mendje?</h3>
            <p className="text-gray-600 mb-6">
              Na kontaktoni për ofertë dhe konsultim profesional.
            </p>
            <a href="/#contact">
              <Button variant="primary" size="lg">Kontakto</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/hero/work-stairs.jpg"
            alt="Background"
            className="w-full h-full object-cover brightness-75 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-gray-900/70 to-black/85" />
        </div>
        <div className="container text-center relative z-10">
          <p className="text-white text-lg font-medium drop-shadow-lg">
            © {company.name}. Të gjitha të drejtat e rezervuara.
          </p>
          <p className="text-white/80 text-sm mt-2 drop-shadow-lg">
            Powered by Elthra Tech
          </p>
        </div>
      </footer>
    </main>
  );
};
