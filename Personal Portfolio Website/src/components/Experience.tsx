import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Building2, Users, TrendingUp, Award, Linkedin, ExternalLink, Palette } from 'lucide-react';

export function Experience() {


  const skills = [
    'Operations Management',
    'UX Design (CareerFoundry)',
    'Process Optimization',
    'AI & Prompt Engineering',
    'Workflow Automation',
    'Strategic Planning',
    'Data Analysis',
    'Project Management',
    'Quality Assurance',
    'Budget Management',
    'Vendor Relations'
  ];

  const achievements = [
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: 'Process Efficiency',
      description: 'Improved operational efficiency by 35% through strategic process redesign'
    },
    {
      icon: <Palette className="h-6 w-6 text-blue-600" />,
      title: 'UX-Driven Operations',
      description: 'Applied UX design principles to internal processes, reducing user friction and improving stakeholder satisfaction'
    },
    {
      icon: <Users className="h-6 w-6 text-green-700" />,
      title: 'Workflow Automation',
      description: 'Implemented AI-driven process automation improving team productivity by 40%'
    },
    {
      icon: <Award className="h-6 w-6 text-gray-700" />,
      title: 'Cost Reduction',
      description: 'Achieved 250k+ cost savings through operational improvements'
    },
    {
      icon: <Building2 className="h-6 w-6 text-green-800" />,
      title: 'Cross-functional Leadership',
      description: 'Successfully managed multi-departmental initiatives and stakeholder relations'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">Professional Experience</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Driving operational excellence through strategic leadership and innovative process optimization.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {achievement.icon}
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-6">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6">Professional Background</h3>
              <p className="text-gray-600 mb-6">
                With extensive experience in operations management and UX Design certification from CareerFoundry, I specialize in transforming business processes 
                through user-centered design principles and AI integration. My approach combines traditional operations expertise with UX research methodologies, 
                design thinking, and cutting-edge AI tools to create solutions that work for both business goals and user needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Button 
                  asChild 
                  className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                >
                  <a 
                    href="https://www.linkedin.com/in/johnnyearlie" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn Profile
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </div>
              
              <p className="text-sm text-gray-500">
                Connect with me professionally on LinkedIn for detailed experience and references
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}