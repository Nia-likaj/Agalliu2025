
import React, { useState } from "react";
import { Card, Button } from '../ui';
import { companyInfo } from '../../data';

  // Netlify form status
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Helper to encode form data for Netlify
  function encode(data: Record<string, string>) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  // Netlify-friendly submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {
      "form-name": "sherbime-footer",
    };
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        if (data[key]) data[key] = `${data[key]}, ${value}`;
        else data[key] = value;
      }
    }
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left - Company Info */}
          <div className="space-y-6">
            {/* Logo and Name */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20">
                <img 
                  src="/assets/brand/AgalliuLogo_NoBackground.png" 
                  alt="Agalliu Logo" 
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{companyInfo.name}</h3>
                <p className="text-orange-400">{companyInfo.tagline}</p>
              </div>
            </div>

            <p className="text-gray-300">
              Kompani profesionale që ofron shërbime të plota në ndërtim, pastrim dhe mirëmbajtje për ambiente rezidenciale dhe biznese.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
              
              <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="font-medium">{companyInfo.phone}</div>
                </div>
              </a>

              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="font-medium">{companyInfo.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Address</div>
                  <div className="font-medium">{companyInfo.address}</div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="pt-6 border-t border-gray-700">
              <h4 className="font-semibold mb-3">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
                <p className="text-orange-400 mt-2">Emergency services available 24/7 for existing clients</p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <Card className="p-6 bg-white/95 backdrop-blur shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-14 h-14">
                <img 
                  src="/assets/brand/AgalliuLogo_NoBackground.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Shërbime</h3>
                <p className="text-xs text-orange-600">Agalliu 2025</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">Kërkoni shërbimet, tarifat ose konsultë falas</p>
            
            <form
              name="sherbime-footer"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-3"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="sherbime-footer" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>
              <div className="grid grid-cols-2 gap-3">
                <input 
                  name="emri"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-900 text-gray-900" 
                  placeholder="Emri" 
                  required
                />
                <input 
                  name="mbiemri"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-900 text-gray-900" 
                  placeholder="Mbiemri" 
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input 
                  name="email"
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-900 text-gray-900" 
                  placeholder="Email" 
                  required
                />
                <input 
                  name="telefoni"
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-900 text-gray-900" 
                  placeholder="Telefoni" 
                  required
                />
              </div>
              
              {/* Service Type Selection */}
              <div className="border border-gray-300 rounded-lg p-3">
                <label className="block text-xs font-semibold text-gray-700 mb-2">Lloji i shërbimit</label>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="lloji_sherbimit" value="Punime ndërtimi & rifinitura" className="w-3.5 h-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                    <span className="text-xs text-gray-700">Punime ndërtimi & rifinitura</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="lloji_sherbimit" value="Izolime & termoizolime" className="w-3.5 h-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                    <span className="text-xs text-gray-700">Izolime & termoizolime</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="lloji_sherbimit" value="Pastrim & dezinfektim" className="w-3.5 h-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                    <span className="text-xs text-gray-700">Pastrim & dezinfektim</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="lloji_sherbimit" value="Mirëmbajtje & shërbime të tjera" className="w-3.5 h-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                    <span className="text-xs text-gray-700">Mirëmbajtje & shërbime të tjera</span>
                  </label>
                </div>
              </div>

              <input 
                name="qyteti"
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-900 text-gray-900" 
                placeholder="Qyteti" 
                required
              />

              <input 
                name="data"
                type="date"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-900 text-gray-900" 
                placeholder="Data e dëshiruar"
                required
              />

              <textarea 
                name="detaje"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-900 text-gray-900" 
                placeholder="Detaje shtesë (opsionale)"
              />
              <Button type="submit" className="w-full" variant="primary" size="md" disabled={status === 'sending'}>
                {status === 'sending' ? 'Duke dërguar...' : 'Dërgo kërkesën'}
              </Button>
              {status === "success" && (
                <p className="mt-3 text-sm text-green-600">Kërkesa u dërgua me sukses ✅</p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm text-red-600">Gabim gjatë dërgimit. Provo përsëri.</p>
              )}
            </form>
            
            <div className="mt-4 pt-4 border-t border-gray-200 text-center text-xs text-gray-600">
              <p>Koordinim i shpejtë • Mbështetje 24/7</p>
            </div>
          </Card>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-gray-400 text-sm">
                © {companyInfo.name}. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Powered by Elthra Tech
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href={companyInfo.social.facebook} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href={companyInfo.social.instagram} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href={companyInfo.social.linkedin} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
