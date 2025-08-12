import aboutPortrait from '@/assets/about-portrait.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 luxury-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden">
              <img 
                src={aboutPortrait}
                alt="Mitesh Walke - About Portrait"
                className="w-full h-full object-cover transition-luxury hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-charcoal/10 -z-10" />
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-section text-charcoal mb-6">
                Crafting Visual Stories
              </h2>
              <div className="w-16 h-0.5 bg-charcoal mb-8" />
            </div>
            
            <div className="space-y-6 text-body-lg text-soft-gray leading-relaxed">
              <p>
                I'm Mitesh Walke, a multidisciplinary creative professional specializing in 
                acting, digital influence, development, and editorial work. With a passion 
                for storytelling across multiple mediums, I bring a unique perspective to 
                every project.
              </p>
              
              <p>
                My work spans fashion modeling and brand collaborations, where I've partnered 
                with emerging and established brands to create compelling visual narratives. 
                As a developer and editor, I combine technical expertise with creative vision 
                to deliver exceptional digital experiences.
              </p>
              
              <p>
                Working collaboratively with a talented team, we transform ideas into 
                impactful content that resonates with audiences and drives meaningful 
                engagement for brands and individuals alike.
              </p>
            </div>
            
            <div className="pt-6">
              <div className="flex items-center space-x-4 text-sm text-charcoal tracking-wider">
                <span>Mumbai, India</span>
                <span>•</span>
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;