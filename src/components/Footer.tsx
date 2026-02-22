import { Link, useLocation } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiPhone, FiMail } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const location = useLocation()

  const scrollToTopIfSamePath = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TV</span>
              </div>
              <span className="font-bold text-lg">TechVision</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transform your ideas into digital reality with our innovative IT solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" onClick={() => scrollToTopIfSamePath('/')} className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" onClick={() => scrollToTopIfSamePath('/services')} className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" onClick={() => scrollToTopIfSamePath('/portfolio')} className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/about" onClick={() => scrollToTopIfSamePath('/about')} className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" onClick={() => scrollToTopIfSamePath('/contact')} className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="tel:+918092580652" className="flex items-center gap-2 hover:text-white transition-colors">
                <FiPhone className="text-blue-400" />
                +91 8092580652
              </a>
              <a href="mailto:anuragkumar88583@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <FiMail className="text-blue-400" />
                anuragkumar88583@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="flex justify-center gap-6 mb-6">
            <a href="#facebook" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl">
              <FiFacebook />
            </a>
            <a href="#twitter" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl">
              <FiTwitter />
            </a>
            <a href="#instagram" className="text-gray-400 hover:text-pink-400 transition-colors text-2xl">
              <FiInstagram />
            </a>
            <a href="#linkedin" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl">
              <FiLinkedin />
            </a>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} TechVision. All rights reserved.</p>
            <p className="mt-2">
              <a href="#privacy" className="hover:text-white">Privacy Policy</a>
              {' '} | {' '}
              <a href="#terms" className="hover:text-white">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
