import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Heart, Instagram, ExternalLink, Camera } from 'lucide-react';
import csipkeImage from 'figma:asset/03542296cf1d0ffcc093a040a175ff26973e5e76.png';

export function Dog() {
  const dogFacts = [
    { fact: 'Breed', detail: 'Mudi - a rare Hungarian herding breed' },
    { fact: 'Personality', detail: 'Intelligent, energetic, and incredibly loyal' },
    { fact: 'Favorite Activity', detail: 'Exploring new places and meeting new friends' },
    { fact: 'Special Talent', detail: 'Can sense when someone needs comfort' }
  ];

  return (
    <section id="dog" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">Meet My Best Friend</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Life is better with a four-legged companion who brings joy to every day
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl mb-6 flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-500" />
                Csipke - My Mudi Companion
              </h3>
              <p className="text-gray-600 mb-6">
                Csipke is more than just a pet - she's family. This rare Hungarian breed brings 
                intelligence, loyalty, and endless energy to our household. Whether we're exploring 
                new hiking trails or just relaxing at home, her presence makes every moment better.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {dogFacts.map((item, index) => (
                  <Card key={index} className="bg-white/80">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-green-700 mb-1">{item.fact}</h4>
                      <p className="text-sm text-gray-600">{item.detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-white/90">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Instagram className="h-5 w-5 text-pink-600" />
                    Follow Our Adventures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Follow Csipke's adventures on @mudi_planet for daily doses of cuteness and our latest explorations together!
                  </p>
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  >
                    <a 
                      href="https://instagram.com/mudi_planet" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Camera className="h-4 w-4" />
                      @mudi_planet
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <img
                src={csipkeImage}
                alt="Csipke, a beautiful Mudi dog with expressive eyes in a natural setting"
                className="rounded-lg shadow-xl w-full object-cover aspect-[4/5] max-w-md mx-auto lg:mx-0"
              />
              
              <div className="mt-6 bg-white/80 p-6 rounded-lg shadow-md">
                <h4 className="mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  A Daily Dose of Joy
                </h4>
                <p className="text-gray-600 text-sm">
                  "Dogs teach us about unconditional love, living in the moment, and finding joy in the simplest things. 
                  Csipke reminds me every day that the best things in life aren't things at all."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}