import { useNavigate } from "react-router-dom";

export const InsightsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold">Punime të Realizuara</h3>
          <p className="text-gray-600 mt-2">
            Disa shembuj nga projektet tona – punë e pastër, përfundim cilësor dhe
            respektim afatesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1) Vendosje Parketi */}
          <div
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:border-orange-400 border border-orange-100 transition-all duration-300 p-4 cursor-pointer hover:-translate-y-1"
            onClick={() => navigate("/portfolio")}
            tabIndex={0}
            role="button"
            aria-label="Shiko portfolio"
          >
            <img
              src="/assets/portfolio/images/work-parquet.jpg"
              alt="Vendosje parketi"
              className="rounded-lg mb-3 w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="font-semibold mb-1 group-hover:text-orange-600 transition-colors">
              Vendosje Parketi
            </div>
            <div className="text-gray-600 text-sm">
              Montim profesional, nivelim dhe përfundime të sakta për një dysheme të
              qëndrueshme dhe estetike.
            </div>
          </div>

          {/* 2) Tavan druri / strukturë */}
          <div
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:border-orange-400 border border-orange-100 transition-all duration-300 p-4 cursor-pointer hover:-translate-y-1"
            onClick={() => navigate("/portfolio")}
            tabIndex={0}
            role="button"
            aria-label="Shiko portfolio"
          >
            <img
              src="/assets/portfolio/images/work-wood-ceiling.jpg"
              alt="Tavan druri dhe punime strukturore"
              className="rounded-lg mb-3 w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="font-semibold mb-1 group-hover:text-orange-600 transition-colors">
              Tavan Druri & Punime Strukturore
            </div>
            <div className="text-gray-600 text-sm">
              Vendosje tavani druri dhe punime mbështetëse (sipas projektit), me
              fokus në siguri dhe rezultat final të pastër.
            </div>
          </div>

          {/* 3) Restaurim & Lyerje */}
          <div
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:border-orange-400 border border-orange-100 transition-all duration-300 p-4 cursor-pointer hover:-translate-y-1"
            onClick={() => navigate("/portfolio")}
            tabIndex={0}
            role="button"
            aria-label="Shiko portfolio"
          >
            <img
              src="/assets/portfolio/images/work-painting.jpg"
              alt="Restaurim dhe lyerje"
              className="rounded-lg mb-3 w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="font-semibold mb-1 group-hover:text-orange-600 transition-colors">
              Restaurim & Lyerje
            </div>
            <div className="text-gray-600 text-sm">
              Riparime, stuko/finishtim dhe lyerje profesionale për ambiente
              rezidenciale dhe biznesi.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
