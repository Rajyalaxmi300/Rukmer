import { Zap, Radio, Feather, Box, DollarSign } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Zap,
    title: 'Hot-Swappable Modules',
    description: 'Change cameras in seconds without powering down.',
  },
  {
    icon: Radio,
    title: 'Stable Flight & Live Streaming',
    description: 'Reliable flight control, real-time video feed.',
  },
  {
    icon: Feather,
    title: 'Lightweight Design',
    description: 'Easier to carry, deploy, and maintain.',
  },
  {
    icon: Box,
    title: 'Scalable Hardware Model',
    description: 'Start small, expand with industry-specific modules.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Efficient',
    description: 'Reduce hardware spend by up to 70%.',
  },
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse-glow"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: `${Math.random() * 3}s`,
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">Product Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technology designed for adaptability and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`
                  relative h-full p-8 rounded-2xl border transition-all duration-700
                  ${
                    hoveredIndex === index
                      ? 'border-white bg-white/10 scale-110 shadow-2xl shadow-white/20 -translate-y-2'
                      : 'border-white/20 bg-white/[0.02]'
                  }
                `}
              >
                <div
                  className={`
                    w-16 h-16 mb-6 rounded-full bg-white/10 flex items-center justify-center
                    transition-all duration-700
                    ${hoveredIndex === index ? 'bg-white scale-125 rotate-12' : ''}
                  `}
                >
                  <feature.icon
                    size={32}
                    className={`transition-colors duration-500 ${
                      hoveredIndex === index ? 'text-black' : 'text-white'
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                {hoveredIndex === index && (
                  <>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none animate-pulse" />
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-rotate-slow pointer-events-none" style={{ clipPath: 'inset(0 round 1rem)' }} />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
