import { Heart, Music, Camera, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg mb-4">About This Site</h3>
              <p className="text-gray-400 text-sm">
                A personal portfolio showcasing the intersection of professional excellence, 
                creative passion, and the things that matter most in life.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <a href="https://music.apple.com/ua/artist/blaschko-alley/1778695921" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Music className="h-4 w-4" />
                  Blaschko Alley on Apple Music
                </a>
                <a href="https://www.csillaszabo.com/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Camera className="h-4 w-4" />
                  Csilla Szabo Photography
                </a>
                <a href="https://instagram.com/mudi_planet" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-4 w-4" />
                  @mudi_planet
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg mb-4">Connect</h3>
              <p className="text-gray-400 text-sm mb-4">
                Always open to new connections and conversations.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                Get in touch →
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Personal Portfolio. Built with care and creativity.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-4 sm:mt-0">
              Made with <Heart className="h-4 w-4 text-red-500" /> and lots of coffee
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}