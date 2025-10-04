'use client';

import Image from 'next/image';
import { useState } from 'react';

const Gancho = () => {
  const [showHawkinsInfo, setShowHawkinsInfo] = useState(false);

  const cards = [
    {
      title: 'Horóscopos Semanales',
      description: 'Suscríbete y recibe tu horóscopo semanal personalizado.',
      image: '/brand/horoscope.png', // reemplaza con tu imagen
      cta: 'Suscribirme',
      link: '#horoscopos',
    },
    {
      title: 'Carta Astral',
      description: 'Descubre tu carta astral y numerología como gancho para explorar más.',
      image: '/brand/astrology.png', // reemplaza con tu imagen
      cta: 'Ver mi carta',
      link: '#carta-astral',
    },
    {
      title: 'Niveles de Vibración',
      description: 'Explora tu nivel de conciencia según la Escala de Hawkins.',
      image: '/brand/hawkins.png', // reemplaza con tu imagen
      cta: 'Aprender más',
      action: () => setShowHawkinsInfo(true),
    },
  ];

  return (
    <section className="bg-[#1F0E2D] py-16 px-6 md:px-12 relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Explora tu energía y crecimiento personal
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#2A1B3D] rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform shadow-lg"
          >
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-[#CCCCCC] mb-4">{card.description}</p>
            {card.link && (
              <a
                href={card.link}
                className="px-6 py-2 rounded-full bg-[#9434EC] text-white font-semibold hover:bg-[#B158FF] transition"
              >
                {card.cta}
              </a>
            )}
            {card.action && (
              <button
                onClick={card.action}
                className="px-6 py-2 rounded-full bg-[#9434EC] text-white font-semibold hover:bg-[#B158FF] transition"
              >
                {card.cta}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Modal Escala Hawkins */}
      {showHawkinsInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-[#2A1B3D] rounded-2xl p-8 max-w-lg mx-4 relative">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={() => setShowHawkinsInfo(false)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-4">Escala de Conciencia de Hawkins</h3>
            <p className="text-[#CCCCCC]">
              La Escala de Conciencia de Hawkins mide los niveles de energía y vibración del ser humano.
              Cada nivel refleja emociones, pensamientos y actitudes que impactan tu vida diaria.
              Explora tu nivel y aprende cómo elevar tu vibración.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gancho;
