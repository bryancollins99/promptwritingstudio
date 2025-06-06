import Link from 'next/link'
import Script from 'next/script'
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-xl font-bold">
              Prompt Writing Studio
            </Link>
            <p className="mt-2 text-gray-400">Create better AI prompts for more effective results</p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              <li><Link href="/best-ai-tools" className="text-gray-400 hover:text-white transition">Best AI Tools</Link></li>
              <li><Link href="/chatgpt-prompt-templates" className="text-gray-400 hover:text-white transition">Prompt Templates</Link></li>
              <li><Link href="/ai-prompt-examples" className="text-gray-400 hover:text-white transition">AI Prompt Examples</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</Link></li>
            </ul>
          </div>
          
          {/* Connect With Us */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com/bryanjcollins" className="text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer"><FaTwitter size={20} /></a>
              <a href="https://www.linkedin.com/in/bryancollinswriter/" className="text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
              <a href="https://www.instagram.com/bryancollinswriter/" className="text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
              <a href="https://www.youtube.com/c/BryanCollins" className="text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer"><FaYoutube size={20} /></a>
              <a href="https://www.facebook.com/becomeawritertoday/" className="text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></a>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2">Follow Us</h4>
              <p className="text-gray-400">Stay updated with our latest prompt techniques and AI tips</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Prompt Writing Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
