import { Button } from './ui/button';
import { ArrowDown, Building2, Music2, Mountain, Image, User, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-green-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(22, 163, 74, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, rgba(21, 128, 61, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)
          `
        }}></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-100/40 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-50/60 rounded-full blur-lg"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Professional Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-green-200 text-gray-800 mb-8 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <User className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium">Professional Portfolio</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 text-gray-900">
              <span className="block mb-2">Operations Manager</span>
              <span className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent">
                & Creative Professional
              </span>
            </h1>
          </motion.div>

          {/* Professional Summary */}
          <motion.div 
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Experienced operations professional with expertise in AI integration, prompt engineering, 
              workflow automation, and process optimization to drive organizational excellence.
            </p>
            <p className="text-lg text-gray-500">
              Beyond my professional role, I'm a musician, Mudi dog parent, and supporter of visual arts.
            </p>
          </motion.div>

          {/* Professional Highlights Grid */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              { 
                icon: Building2, 
                title: "Operations Leadership", 
                subtitle: "Strategic Management",
                color: "bg-green-50 border-green-200 text-green-800"
              },
              { 
                icon: Music2, 
                title: "Creative Expression", 
                subtitle: "Blaschko Alley",
                color: "bg-gray-50 border-gray-200 text-gray-800"
              },
              { 
                icon: Mountain, 
                title: "Outdoor Adventures", 
                subtitle: "Cycling & Hiking",
                color: "bg-white border-gray-200 text-gray-700"
              },
              { 
                icon: Image, 
                title: "Visual Arts Support", 
                subtitle: "Creative Collaboration",
                color: "bg-green-100 border-green-300 text-green-800"
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className={`p-6 ${item.color} rounded-xl border-2 shadow-sm hover:shadow-md transition-all duration-200`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs opacity-80">{item.subtitle}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button 
              onClick={() => scrollToSection('experience')} 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Building2 className="h-5 w-5 mr-2" />
              View Professional Experience
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-green-600 text-green-700 hover:bg-green-50 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <a href="mailto:johnnyearlie@gmail.com" className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Get In Touch
              </a>
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button 
              onClick={() => scrollToSection('experience')}
              className="hover:text-green-600 transition-colors"
            >
              Professional Background
            </button>
            <span>•</span>
            <button 
              onClick={() => scrollToSection('music')}
              className="hover:text-green-600 transition-colors"
            >
              Music Projects
            </button>
            <span>•</span>
            <button 
              onClick={() => scrollToSection('photography')}
              className="hover:text-green-600 transition-colors"
            >
              Creative Collaborations
            </button>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-gray-400 hover:text-gray-600 transition-colors group"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}