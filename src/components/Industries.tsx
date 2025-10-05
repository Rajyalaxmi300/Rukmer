import { Shield, Building2, Zap, FileText, Video } from 'lucide-react';
import { useState } from 'react';

const industries = [
  {
    icon: Shield,
    title: 'Security & Surveillance',
    description: 'Zoom, low-light, and thermal imaging for real-time awareness.',
    features: ['Thermal Imaging', 'Night Vision', 'Real-time Monitoring'],
  },
  {
    icon: Building2,
    title: 'Construction & Real Estate',
    description: 'Progress monitoring, 3D mapping, and inspections.',
    features: ['3D Mapping', 'Progress Tracking', 'Site Inspections'],
  },
  {
    icon: Zap,
    title: 'Energy & Utilities',
    description: 'Solar, wind, and grid inspections with thermal and LiDAR.',
    features: ['Infrastructure Inspection', 'Thermal Analysis', 'LiDAR Scanning'],
  },
  {
    icon: FileText,
    title: 'Insurance & Logistics',
    description: 'Fast, flexible imaging for claims and delivery.',
    features: ['Claims Assessment', 'Route Planning', 'Asset Tracking'],
  },
  {
    icon: Video,
    title: 'Entertainment & Media',
    description: 'Creative flexibility with swappable imaging setups.',
    features: ['Cinematic Shots', 'Live Broadcasting', 'Multi-angle Coverage'],
  },
];

export default function Industries() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">Services We Offer</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tailored solutions for every industry's unique challenges
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div
                className={`
                  relative p-8 rounded-2xl border transition-all duration-700
                  ${
                    expandedIndex === index
                      ? 'border-white bg-white/10 shadow-2xl shadow-white/20 scale-105'
                      : 'border-white/20 bg-white/[0.02] hover:border-white/50 hover:bg-white/[0.05]'
                  }
                `}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`
                      w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0
                      transition-all duration-700
                      ${expandedIndex === index ? 'bg-white scale-125 rotate-12 animate-pulse-glow' : 'group-hover:scale-110'}
                    `}
                  >
                    <industry.icon
                      size={32}
                      className={`transition-colors duration-500 ${
                        expandedIndex === index ? 'text-black' : 'text-white'
                      }`}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{industry.description}</p>

                    <div
                      className={`
                        overflow-hidden transition-all duration-700
                        ${expandedIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                      `}
                    >
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-sm font-semibold mb-3 text-gray-300">Key Capabilities:</p>
                        <ul className="space-y-2">
                          {industry.features.map((feature, fIndex) => (
                            <li
                              key={fIndex}
                              className="flex items-center gap-2 text-gray-400 animate-fade-in"
                              style={{ animationDelay: `${fIndex * 0.1}s` }}
                            >
                              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`
                    absolute bottom-4 right-4 transition-all duration-700
                    ${expandedIndex === index ? 'rotate-180 scale-125' : 'rotate-0 group-hover:scale-110'}
                  `}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
