import { Card } from '../../ui';
import { services } from '../../../data';
import type { Service } from '../../../types';
import { useState, useEffect } from 'react';

export const Services = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Auto-scroll every 3 seconds - pause when card is expanded
  useEffect(() => {
    // Don't auto-scroll if any card is expanded
    if (expandedId !== null) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const maxScroll = (services.length - 3) * 400; // 400px per card + gap
        return prev >= maxScroll ? 0 : prev + 400;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [expandedId]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Manual scroll controls
  const scrollLeft = () => {
    setScrollPosition((prev) => {
      const newPos = Math.max(0, prev - 400);
      // Expand the card that will be in center view
      const cardIndex = Math.round(newPos / 400);
      setExpandedId(services[cardIndex]?.id || null);
      return newPos;
    });
  };

  const scrollRight = () => {
    const maxScroll = (services.length - 3) * 400;
    setScrollPosition((prev) => {
      const newPos = Math.min(maxScroll, prev + 400);
      // Expand the card that will be in center view
      const cardIndex = Math.round(newPos / 400);
      setExpandedId(services[cardIndex]?.id || null);
      return newPos;
    });
  };

  const getIcon = (iconName: string) => {
    const icons: Record<string, string> = {
      construction: '🏗️',
      insulation: '🧱',
      cleaning: '✨',
      maintenance: '🔧',
      special: '⚙️',
    };
    return icons[iconName] || '🔨';
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            Shërbimet Tona
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shërbime të <span className="text-orange-500">Specializuara</span> për Çdo Nevojë
          </h2>
          <p className="text-lg text-gray-600">
            Zgjidhje të plota për ndërtim, pastrim dhe mirëmbajtje me standarde të larta profesionale
          </p>
        </div>

        {/* Scrolling container */}
        <div className="relative">
          {/* Navigation arrows - only show when a card is expanded */}
          {expandedId !== null && (
            <>
              <button
                onClick={scrollLeft}
                disabled={scrollPosition === 0}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={scrollRight}
                disabled={scrollPosition >= (services.length - 3) * 400}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-x-auto scrollbar-hide">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out pb-4"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {services.map((service: Service) => {
                const isExpanded = expandedId === service.id;
                
                return (
                  <Card
                    key={service.id}
                    className={`flex-shrink-0 w-[380px] p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                      isExpanded ? 'ring-2 ring-orange-500 shadow-xl' : ''
                    }`}
                    onClick={() => toggleExpand(service.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{getIcon(service.icon || 'default')}</div>
                      <button
                        className={`p-2 rounded-full bg-orange-50 text-orange-500 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Expandable content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-3">Përfshin:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-orange-500 mt-0.5">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <a href="/about">
                          <button className="mt-4 w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
                            Shiko më shumë
                          </button>
                        </a>
                      </div>
                    </div>

                    {/* "See more" indicator when collapsed */}
                    {!isExpanded && (
                      <div className="mt-3 text-sm text-orange-500 font-medium flex items-center gap-1">
                        <span>Shiko më shumë</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setScrollPosition(idx * 400)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.round(scrollPosition / 400) === idx
                    ? 'bg-orange-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Nuk e gjetët shërbimin që kërkoni? Na kontaktoni për zgjidhje të personalizuara.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact">
              <button className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold shadow-lg">
                Kontakto
              </button>
            </a>
            <a href="/portfolio">
              <button className="px-8 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                Shiko Portfolio
              </button>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};
