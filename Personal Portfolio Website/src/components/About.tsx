import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Building2, Music2, Users, Camera, Heart, MapPin, Clock, Lightbulb } from 'lucide-react';

export function About() {
  const professionalSkills = [
    'Operations Management',
    'UX Design (CareerFoundry)',
    'AI & Prompt Engineering', 
    'Workflow Automation',
    'Process Optimization',
    'Strategic Planning',
    'Data Analysis',
    'Project Management'
  ];

  const creativeSkills = [
    'Music Production',
    'Sound Design',
    'Creative Direction',
    'Artistic Collaboration',
    'Content Creation',
    'Brand Development'
  ];

  const lifeAspects = [
    {
      icon: <Building2 className="h-6 w-6 text-green-600" />,
      title: "Operations Professional",
      description: "Streamlining processes and optimizing workflows to achieve operational excellence",
      highlight: "€250,000 cost savings & 35% efficiency improvements"
    },
    {
      icon: <Music2 className="h-6 w-6 text-green-700" />,
      title: (
        <>
          Band Member - <a 
            href="https://blaschkoalley.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 transition-colors underline decoration-green-300 hover:decoration-green-500"
          >
            Blaschko Alley
          </a>
        </>
      ),
      description: "Collaborating on original compositions and exploring the intersection of technology and sound",
      highlight: "Active recording band with growing digital presence"
    },
    {
      icon: <Heart className="h-6 w-6 text-gray-700" />,
      title: (
        <>
          Parent to <a 
            href="https://instagram.com/mudi_planet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 transition-colors underline decoration-green-300 hover:decoration-green-500"
          >
            Csipke
          </a> (Mudi)
        </>
      ),
      description: "Dedicated to proper training, care, and sharing the joy of this amazing breed",
      highlight: "Advocate for responsible pet ownership and breed awareness"
    },
    {
      icon: <Camera className="h-6 w-6 text-green-800" />,
      title: (
        <>
          Creative Partner - <a 
            href="https://www.csillaszabo.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 transition-colors underline decoration-green-300 hover:decoration-green-500"
          >
            Csilla Szabó Photography
          </a>
        </>
      ),
      description: "Supporting and collaborating with my wife Csilla's professional photography career",
      highlight: "Behind-the-scenes contributor to artistic projects"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">About Me</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Where analytical thinking meets creative expression - balancing operational excellence 
              with musical artistry and personal passions.
            </p>
          </div>

          {/* Personal Story */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-green-600" />
                    My Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Originally from Glasgow, Scotland, and now based in Berlin, I'm someone who believes that the best solutions come from thinking both analytically 
                    and creatively. By day, I'm deep in operations management - optimizing processes, 
                    automating workflows, and solving complex business challenges. My UX Design qualification from CareerFoundry 
                    perfectly complements my operations background, bringing user-centered thinking to process optimization 
                    and applying design research methods to understand stakeholder needs and pain points.
                  </p>
                  <p className="text-gray-600">
                    As a member of <a 
                      href="https://blaschkoalley.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors underline decoration-green-300 hover:decoration-green-500"
                    >
                      Blaschko Alley
                    </a>, I collaborate 
                    on music that explores the intersection between structured thinking and artistic expression. 
                    The same attention to detail that helps me streamline business operations also shapes how I 
                    approach composition and sound design within the band.
                  </p>
                  <p className="text-gray-600">
                    At home, I'm a devoted parent to <a 
                      href="https://instagram.com/mudi_planet" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors underline decoration-green-300 hover:decoration-green-500"
                    >
                      Csipke
                    </a>, my Mudi (they're incredible dogs!) and the supportive partner 
                    of a talented photographer. These different aspects of my life aren't separate - they 
                    inform and enhance each other in ways that make me a more effective operations professional and creative.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="bg-green-50 border-green-200 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    Current Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-700">
                    🎯 Leading operational transformation initiatives
                  </p>
                  <p className="text-sm text-gray-700">
                    🎨 Applying UX design principles to operations workflows
                  </p>
                  <p className="text-sm text-gray-700">
                    🤖 Exploring AI integration in operations workflows
                  </p>
                  <p className="text-sm text-gray-700">
                    🎵 Recording new material with Blaschko Alley
                  </p>
                  <p className="text-sm text-gray-700">
                    📸 Supporting csillaszabo.com photography works
                  </p>
                  <p className="text-sm text-gray-700">
                    🐕 Training and enjoying time with our Mudi
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Life Aspects */}
          <div className="mb-12">
            <h3 className="text-2xl mb-6 text-gray-900">The Four Sides of My Life</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {lifeAspects.map((aspect, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-50 p-3 rounded-full flex-shrink-0">
                        {aspect.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-2">{aspect.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{aspect.description}</p>
                        <div className="bg-gray-50 p-2 rounded text-xs text-gray-700">
                          <strong>Highlight:</strong> {aspect.highlight}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Balance */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl mb-6 text-gray-900">Professional Skills</h3>
              <p className="text-gray-600 mb-4">
                The analytical side that drives business results and team success.
              </p>
              <div className="flex flex-wrap gap-2">
                {professionalSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="py-2 px-3 bg-green-50 text-green-800 border border-green-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6 text-gray-900">Creative Skills</h3>
              <p className="text-gray-600 mb-4">
                The artistic side that fuels innovation and brings fresh perspectives.
              </p>
              <div className="flex flex-wrap gap-2">
                {creativeSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="py-2 px-3 bg-gray-50 text-gray-800 border border-gray-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-r from-green-50 to-white p-8 rounded-lg border border-green-100">
            <h3 className="text-2xl mb-6 text-gray-900 text-center">My Philosophy</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-gray-900 mb-2">Professional Excellence</h4>
                <p className="text-gray-600 text-sm">
                  "Great operations management isn't just about efficiency - it's about creating 
                  environments where people and processes can thrive together."
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Music2 className="h-8 w-8 text-gray-600" />
                </div>
                <h4 className="text-gray-900 mb-2">Creative Balance</h4>
                <p className="text-gray-600 text-sm">
                  "Music and creativity aren't distractions from 'serious' work - they're what 
                  make me a more innovative problem-solver and well-rounded professional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}