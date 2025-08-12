import { Users, Camera, Film, Code, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Brand Collaborations",
      description: "Strategic partnerships with brands to create authentic, engaging content that resonates with target audiences.",
      features: ["Social Media Campaigns", "Product Endorsements", "Lifestyle Content", "Brand Storytelling"]
    },
    {
      icon: Users,
      title: "Fashion Modeling",
      description: "Professional modeling services for fashion brands, lifestyle products, and commercial campaigns.",
      features: ["Fashion Editorials", "Commercial Shoots", "Lifestyle Photography", "Brand Campaigns"]
    },
    {
      icon: Film,
      title: "Video Editing",
      description: "Professional video editing and post-production services for brands, content creators, and businesses.",
      features: ["Commercial Editing", "Social Media Content", "Motion Graphics", "Color Grading"]
    },
    {
      icon: Palette,
      title: "Photo Editing",
      description: "High-end photo retouching and enhancement services for fashion, portrait, and commercial photography.",
      features: ["Fashion Retouching", "Color Correction", "Skin Retouching", "Background Editing"]
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      features: ["React Development", "E-commerce Sites", "Portfolio Websites", "Custom Applications"]
    }
  ];

  return (
    <section id="services" className="py-24 luxury-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section text-charcoal mb-6">Services</h2>
          <div className="w-16 h-0.5 bg-charcoal mx-auto mb-8" />
          <p className="text-body-lg text-soft-gray max-w-3xl mx-auto mb-8">
            We offer comprehensive creative services, combining individual expertise with 
            collaborative teamwork to deliver exceptional results for our clients.
          </p>
          <div className="inline-flex items-center space-x-2 text-sm text-charcoal bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
            <Users size={16} />
            <span>Collaborative Team Approach</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 transition-luxury hover:shadow-luxury hover:-translate-y-2">
              <div className="mb-6">
                <div className="w-12 h-12 bg-charcoal/5 rounded-full flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-charcoal" />
                </div>
                <h3 className="text-xl font-medium text-charcoal mb-3">{service.title}</h3>
                <p className="text-body text-soft-gray leading-relaxed">{service.description}</p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-charcoal/30 rounded-full" />
                    <span className="text-sm text-soft-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-medium text-charcoal mb-4">Ready to collaborate?</h3>
            <p className="text-body text-soft-gray mb-6">
              Let's discuss how we can bring your vision to life with our comprehensive 
              creative services and collaborative approach.
            </p>
            <a 
              href="mailto:miteshwalkebussiness@gmail.com"
              className="inline-block bg-charcoal text-white px-8 py-3 text-sm tracking-wider hover:bg-charcoal/90 transition-luxury"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;