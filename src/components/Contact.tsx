import { Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "miteshwalkebussiness@gmail.com",
      href: "mailto:miteshwalkebussiness@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8668387983",
      href: "tel:+918668387983"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/miteshwalke",
      username: "@miteshwalke"
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@MiteshWalke14",
      username: "Mitesh Walke"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section text-white mb-6">Let's Connect</h2>
          <div className="w-16 h-0.5 bg-white mx-auto mb-8" />
          <p className="text-body-lg text-warm-beige max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project 
            and explore how we can create something extraordinary together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium text-white mb-6">Get In Touch</h3>
            
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-4 text-warm-beige hover:text-white transition-luxury group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-luxury">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-soft-gray">{item.label}</p>
                  <p className="text-lg">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium text-white mb-6">Follow Me</h3>
            
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-warm-beige hover:text-white transition-luxury group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-luxury">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-soft-gray">{item.label}</p>
                  <p className="text-lg">{item.username}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 pt-16 border-t border-white/10">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-white mb-6">
              Ready to start your project?
            </h3>
            <p className="text-body text-warm-beige mb-8">
              Whether you need creative content, technical development, or strategic 
              collaboration, our team is here to help bring your ideas to life.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-block bg-white text-charcoal px-8 py-3 text-sm tracking-wider hover:bg-warm-beige transition-luxury"
            >
              START A CONVERSATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;