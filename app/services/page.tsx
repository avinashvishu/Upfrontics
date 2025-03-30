"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Code, Database, LineChart, Rocket, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  const introRef = useRef(null)
  const servicesRef = useRef(null)

  const introInView = useInView(introRef, { once: true, amount: 0.2 })
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 })

  const services = [
    {
      id: "clarity-ppm",
      title: "Clarity PPM Tool",
      description: "Expert implementation and support for Clarity PPM to optimize your project portfolio management.",
      icon: <Database className="h-12 w-12 text-teal" />,
      features: [
        "Implementation and configuration",
        "Custom report development",
        "Integration with other systems",
        "User training and support",
        "Performance optimization",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Custom web solutions using cutting-edge technologies to create responsive and scalable applications.",
      icon: <Code className="h-12 w-12 text-teal" />,
      features: [
        "Responsive website design",
        "Web application development",
        "E-commerce solutions",
        "Content management systems",
        "API development and integration",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "aws",
      title: "AWS Services",
      description: "Cloud infrastructure setup, management, and optimization using Amazon Web Services.",
      icon: <Server className="h-12 w-12 text-teal" />,
      features: [
        "Cloud architecture design",
        "Migration to AWS",
        "Infrastructure as Code (IaC)",
        "DevOps implementation",
        "Security and compliance",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns to increase your online presence and drive conversions.",
      icon: <Rocket className="h-12 w-12 text-teal" />,
      features: [
        "Social media marketing",
        "Email marketing campaigns",
        "Content marketing strategy",
        "PPC advertising",
        "Analytics and reporting",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "seo",
      title: "SEO",
      description: "Search engine optimization to improve your website's visibility and organic traffic.",
      icon: <LineChart className="h-12 w-12 text-teal" />,
      features: ["Technical SEO audits", "On-page optimization", "Content strategy", "Link building", "Local SEO"],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark text-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-lg text-light/80">
              Comprehensive solutions tailored to meet your business needs and drive digital success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">Tailored Solutions for Your Business</h2>
              <p className="text-darkGray mb-6">
                At Upfrontics, we offer a comprehensive range of services designed to help your business thrive in the
                digital landscape. Our team of experts works closely with you to understand your unique needs and
                deliver customized solutions that drive results.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Expert team with specialized knowledge",
                  "Customized solutions for your specific needs",
                  "End-to-end implementation and support",
                  "Data-driven approach for measurable results",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={introInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-teal mr-2" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Our Services" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section ref={servicesRef} className="section-padding bg-darkGray text-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Explore Our Services</h2>
            <p className="text-light/80 max-w-3xl mx-auto">
              Learn more about our specialized services and how they can benefit your business.
            </p>
          </motion.div>

          <Tabs defaultValue={services[0].id} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center mb-8 bg-transparent">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:bg-teal data-[state=active]:text-light"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {services.map((service, index) => (
              <TabsContent key={service.id} value={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="heading-md ml-4">{service.title}</h3>
                    </div>
                    <p className="text-light/80 mb-6">{service.description}</p>
                    <div className="bg-dark p-6 rounded-lg mb-6">
                      <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-teal mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild>
                      <Link href="/contact">Request a Consultation</Link>
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-dark mb-4">Our Process</h2>
            <p className="text-darkGray max-w-3xl mx-auto">
              We follow a structured approach to ensure successful delivery of our services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Discovery", description: "We start by understanding your business needs and objectives." },
              {
                title: "Planning",
                description: "We develop a detailed plan and strategy tailored to your requirements.",
              },
              {
                title: "Implementation",
                description: "Our team executes the plan with precision and attention to detail.",
              },
              {
                title: "Support",
                description: "We provide ongoing support and optimization to ensure long-term success.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-teal text-light flex items-center justify-center font-bold text-lg mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-darkGray">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal text-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
            <p className="text-light/90 text-lg mb-8">
              Contact us today to discuss your project and discover how our services can help you achieve your business
              goals.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base border-light text-light hover:bg-light hover:text-teal"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

