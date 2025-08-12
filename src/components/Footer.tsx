import { Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Instagram,
      href: "#",
      label: "Instagram"
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube"
    },
    {
      icon: Mail,
      href: "mailto:miteshwalkebussiness@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium tracking-wider mb-2">MITESH WALKE</h3>
            <p className="text-sm text-soft-gray">
              Creative Professional • Mumbai, India
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-luxury"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-soft-gray">
            © {currentYear} Mitesh Walke. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;