const Portfolio = () => {
  const portfolioItems = [
    {
      category: "Fashion Modeling",
      title: "Brand Campaign",
      description: "Luxury fashion editorial",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=600&h=800&fit=crop&crop=face",
      type: "image"
    },
    {
      category: "Video Editing",
      title: "Commercial Production",
      description: "Brand storytelling video",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      type: "video"
    },
    {
      category: "Brand Collaboration",
      title: "Lifestyle Campaign",
      description: "Social media content series",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop",
      type: "image"
    },
    {
      category: "Web Development",
      title: "E-commerce Platform",
      description: "Modern React application",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      type: "web"
    },
    {
      category: "Photo Editing",
      title: "Fashion Editorial",
      description: "High-end retouching work",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop&crop=face",
      type: "image"
    },
    {
      category: "Acting",
      title: "Commercial Work",
      description: "Brand advertisement",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
      type: "video"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section text-charcoal mb-6">Selected Work</h2>
          <div className="w-16 h-0.5 bg-charcoal mx-auto mb-8" />
          <p className="text-body-lg text-soft-gray max-w-2xl mx-auto">
            A curated collection of projects spanning fashion, digital media, 
            and creative development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item group">
              <div className="relative aspect-[4/5] mb-6 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-luxury group-hover:scale-110"
                />
                <div className="portfolio-overlay" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs tracking-wider text-charcoal">
                  {item.category.toUpperCase()}
                </div>
                
                {/* Type Indicator */}
                <div className="absolute top-4 right-4">
                  {item.type === 'video' && (
                    <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-charcoal border-y-2 border-y-transparent ml-0.5" />
                    </div>
                  )}
                  {item.type === 'web' && (
                    <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border border-charcoal rounded-sm" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <h3 className="text-lg font-medium text-charcoal mb-2">{item.title}</h3>
                <p className="text-body text-soft-gray">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;