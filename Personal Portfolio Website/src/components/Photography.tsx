import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import photographyImage from 'figma:asset/0eec71e6963fffdef206d9e36b1e46ccd1e3c58f.png';
import { Camera, ExternalLink, Eye, Award } from 'lucide-react';

export function Photography() {
  const photographyHighlights = [
    {
      icon: <Eye className="h-6 w-6 text-green-600" />,
      title: 'Artistic Vision',
      description: 'Works with analogue cameras and B&W film, creating abstract still lifes that reveal hidden worlds through the interplay of light and shadow'
    },
    {
      icon: <Camera className="h-6 w-6 text-green-700" />,
      title: 'Master Printer',
      description: 'Trained by fine-arts photographer Jeff Cowen, specializes in traditional silver B&W printing and conducts workshops in her Berlin darkroom'
    },
    {
      icon: <Award className="h-6 w-6 text-gray-700" />,
      title: 'International Recognition',
      description: 'Works featured in international exhibitions and publications, with pieces in collections from NYC to Hong Kong, including Ritz Carlton Budapest'
    }
  ];

  return (
    <section id="photography" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">Creative Collaborations</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Celebrating the artistic talent and creative vision of Csilla Szabo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={photographyImage}
                alt="Csilla Szabo working on photography exhibition"
                className="rounded-lg shadow-xl w-full"
              />
            </div>

            <div>
              <h3 className="text-2xl mb-6">Csilla Szabo Photography</h3>
              <p className="text-gray-600 mb-6">
                My wife Csilla is a talented photographer whose work captures the essence of her subjects 
                with remarkable sensitivity and artistic flair. She finds herself taking pictures of light itself, 
                using objects to capture the play of light and shadow and the visual rhythm between these two siblings, 
                the sometimes faded border between them, their reflections, opacities.
              </p>

              <div className="grid gap-4 mb-6">
                {photographyHighlights.map((highlight, index) => (
                  <Card key={index} className="border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        {highlight.icon}
                        <h4 className="font-medium">{highlight.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{highlight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-green-50 to-white border border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5 text-green-600" />
                    Portfolio & Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Explore Csilla's fine art photography portfolio and discover her professional printing services. 
                    She offers darkroom workshops, portfolio printing for international artists, and traditional silver gelatin printing services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      asChild 
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <a 
                        href="https://www.csillaszabo.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Camera className="h-4 w-4" />
                        Visit Portfolio
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50"
                    >
                      <a 
                        href="https://csibellow.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Camera className="h-4 w-4" />
                        Printing Services
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center bg-gray-50 p-8 rounded-lg">
            <h4 className="text-xl mb-4">Supporting Each Other's Passions</h4>
            <p className="text-gray-600 max-w-3xl mx-auto">
              "In our relationship, we celebrate and support each other's creative pursuits. 
              While I explore music and operations excellence, Csilla captures the world through her lens. 
              Together, we create a life filled with both structure and artistry."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}