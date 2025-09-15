import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import bandSilhouette from 'figma:asset/11643d9b5b8887bd6434d1392d025e7cb0468646.png';
import { Music2, ExternalLink, Play, Globe } from 'lucide-react';

export function Music() {
  return (
    <section id="music" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">Creative Expression</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Exploring musical creativity through sound as "Blaschko Alley"
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={bandSilhouette}
                alt="Blaschko Alley band silhouette"
                className="rounded-lg shadow-xl w-full"
              />
            </div>

            <div>
              <h3 className="text-2xl mb-6">Blaschko Alley</h3>
              <p className="text-gray-600 mb-6">
                Music serves as my creative outlet, providing a perfect counterbalance to my analytical work life. 
                Under the artist name "Blaschko Alley," I explore different sounds and musical landscapes, 
                creating compositions that reflect both introspection and energy.
              </p>
              
              <Card className="mb-6 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Music2 className="h-5 w-5 text-green-600" />
                    Musical Portfolio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Discover my musical journey and creative projects. Each composition 
                    represents a unique exploration of sound, blending analytical thinking with artistic expression.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      asChild 
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <a 
                        href="https://blaschkoalley.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Globe className="h-4 w-4" />
                        Visit Official Website
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline"
                      className="border-green-600 text-green-700 hover:bg-green-50"
                    >
                      <a 
                        href="https://music.apple.com/ua/artist/blaschko-alley/1778695921" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Play className="h-4 w-4" />
                        Apple Music
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-white p-6 rounded-lg border border-green-100">
                <h4 className="mb-4 text-gray-900">Creative Philosophy</h4>
                <p className="text-gray-600">
                  "Music serves as the perfect counterbalance to analytical work. It's where structured thinking 
                  transforms into pure creative expression, allowing for exploration beyond traditional boundaries."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}