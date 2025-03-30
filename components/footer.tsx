import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-teal mb-4">Upfrontics</h3>
            <p className="mb-4 text-light/80">
              Professional services in Clarity PPM tool, web development, AWS, digital marketing and SEO.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-light/70 hover:text-teal transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-light/70 hover:text-teal transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-light/70 hover:text-teal transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-light/70 hover:text-teal transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-light/70 hover:text-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-light/70 hover:text-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-light/70 hover:text-teal transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-light/70 hover:text-teal transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#clarity-ppm" className="text-light/70 hover:text-teal transition-colors">
                  Clarity PPM Tool
                </Link>
              </li>
              <li>
                <Link href="/services#web-development" className="text-light/70 hover:text-teal transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#aws" className="text-light/70 hover:text-teal transition-colors">
                  AWS Services
                </Link>
              </li>
              <li>
                <Link href="/services#digital-marketing" className="text-light/70 hover:text-teal transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="text-light/70 hover:text-teal transition-colors">
                  SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-teal" />
                <span className="text-light/70">123 Business Avenue, Tech City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-teal" />
                <a href="tel:+1234567890" className="text-light/70 hover:text-teal transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-teal" />
                <a href="mailto:info@upfrontics.com" className="text-light/70 hover:text-teal transition-colors">
                  info@upfrontics.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-darkGray mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/60 text-sm">&copy; {currentYear} Upfrontics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-light/60 text-sm hover:text-teal transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-light/60 text-sm hover:text-teal transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

