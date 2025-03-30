"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle, Code, Database, LineChart, Rocket, Server, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const testimonialsRef = useRef(null)

  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 })

  const services = [
    {
      title: "Clarity PPM Tool",
      description: "Expert implementation and support for Clarity PPM to optimize your project portfolio management.",
      icon: <Database className="h-12 w-12 text-teal" />,
    },
    {
      title: "Web Development",
      description:
        "Custom web solutions using cutting-edge technologies to create responsive and scalable applications.",
      icon: <Code className="h-12 w-12 text-teal" />,
    },
    {
      title: "AWS Services",
      description: "Cloud infrastructure setup, management, and optimization using Amazon Web Services.",
      icon: <Server className="h-12 w-12 text-teal" />,
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns to increase your online presence and drive conversions.",
      icon: <Rocket className="h-12 w-12 text-teal" />,
    },
    {
      title: "SEO",
      description: "Search engine optimization to improve your website's visibility and organic traffic.",
      icon: <LineChart className="h-12 w-12 text-teal" />,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content:
        "Upfrontics transformed our project management processes with their Clarity PPM expertise. Their team was professional, knowledgeable, and delivered beyond our expectations.",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthBrand",
      content:
        "The digital marketing strategy developed by Upfrontics increased our conversion rates by 45% in just three months. Their data-driven approach and creativity make them stand out.",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, InnovateSoft",
      content:
        "Working with Upfrontics on our web development project was a seamless experience. They understood our requirements perfectly and delivered a solution that our users love.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-dark">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="heading-xl text-light mb-6">
                Transforming Ideas into <span className="text-teal">Digital Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-light/80 mb-8 max-w-xl mx-auto lg:mx-0">
                Upfrontics provides expert services in Clarity PPM, web development, AWS, digital marketing, and SEO to
                help your business thrive in the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="text-base">
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/cover_img.png?height=500&width=600"
                  alt="Digital Services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-teal p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-light" />
                  <span className="text-light font-bold">Innovative Solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section-padding bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-dark mb-4">Our Services</h2>
            <p className="text-darkGray max-w-3xl mx-auto">
              We offer a comprehensive range of services to help your business succeed in the digital world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-darkGray mb-6">{service.description}</CardDescription>
                    <Link
                      href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center text-teal hover:text-teal/80 font-medium transition-colors"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="section-padding bg-darkGray text-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/about.png?height=400&width=600"
                  alt="About Upfrontics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-light">5+</div>
                <div className="text-light/90">Years of Excellence</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">About Upfrontics</h2>
              <p className="text-light/80 mb-6">
                Upfrontics is a leading service provider agency specializing in Clarity PPM tool, web development, AWS,
                digital marketing, and SEO. With a team of experienced professionals, we deliver innovative solutions
                tailored to meet your business needs.
              </p>
              <ul className="space-y-3 mb-8">
                {["Client-focused approach", "Experienced team", "Innovative solutions", "Proven results"].map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="h-5 w-5 text-teal mr-2" />
                      <span>{item}</span>
                    </motion.li>
                  ),
                )}
              </ul>
              <Button asChild size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="section-padding bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-dark mb-4">What Our Clients Say</h2>
            <p className="text-darkGray max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Upfrontics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-darkGray mb-6">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-darkGray/80">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark text-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-lg mb-6">Ready to Transform Your Business?</h2>
            <p className="text-light/80 text-lg mb-8">
              Contact us today to discuss how Upfrontics can help you achieve your business goals with our expert
              services.
            </p>
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

