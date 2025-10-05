import { Mail, MessageSquare, Linkedin } from 'lucide-react'; // Added Linkedin import

// The email state and form handling logic have been removed as they are no longer needed
export default function CallToAction() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-transparent p-12 overflow-hidden shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 animate-pulse" />

          <div className="relative z-10 text-center space-y-8">
            {/* UPDATED: Simplified Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold animate-fade-in">
              Get in Touch!
            </h2>

            {/* NEW: Added interesting line of text */}
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed pt-4">
              Ready to explore the next generation of modular drone technology? We're here to help.
            </p>

            {/* UPDATED: Flex container to hold Contact Us and LinkedIn buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              
              {/* Primary Contact Us button (Mailto) */}
              <a
                href="mailto:contact@rukmer.com"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-110 hover:shadow-2xl hover:shadow-white/30 cursor-pointer"
              >
                <MessageSquare size={20} />
                <span>Contact Us</span>
              </a>

              {/* NEW: LinkedIn Icon/Button */}
              <a
                href="https://www.linkedin.com/company/rukmer/posts/?feedView=all"
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center w-16 h-16 sm:w-auto sm:h-auto px-0 sm:px-4 py-4 bg-transparent border-2 border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all hover:scale-110 hover:border-white hover:shadow-2xl hover:shadow-white/30"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin size={24} />
                <span className="hidden sm:inline ml-2">Follow us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10">
        <div className="text-center text-gray-500">
          <p>&copy; 2025 Rukmer Inc. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}
