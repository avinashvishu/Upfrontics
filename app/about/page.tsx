"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Award, CheckCircle, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const missionRef = useRef(null)
  const teamRef = useRef(null)
  const valuesRef = useRef(null)

  const missionInView = useInView(missionRef, { once: true, amount: 0.2 })
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 })
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 })

  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Johnson",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "Head of Marketing",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Williams",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
      icon: <Zap className="h-10 w-10 text-teal" />,
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, ensuring the highest quality in our deliverables.",
      icon: <Award className="h-10 w-10 text-teal" />,
    },
    {
      title: "Client-Centric",
      description:
        "Our clients' success is our priority. We work closely with them to understand their needs and exceed expectations.",
      icon: <Users className="h-10 w-10 text-teal" />,
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
            <h1 className="heading-xl mb-6">About Upfrontics</h1>
            <p className="text-lg text-light/80">
              We are a team of passionate professionals dedicated to delivering exceptional services in Clarity PPM, web
              development, AWS, digital marketing, and SEO.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-darkGray mb-4">
                Founded in 2018, Upfrontics began with a simple mission: to help businesses leverage technology to
                achieve their goals. What started as a small team of tech enthusiasts has grown into a full-service
                agency with expertise across multiple domains.
              </p>
              <p className="text-darkGray mb-6">
                Over the years, we've worked with clients ranging from startups to enterprise organizations, helping
                them navigate the complex digital landscape and implement solutions that drive growth and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-teal mb-2">100+</div>
                  <div className="text-darkGray">Projects Completed</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-teal mb-2">50+</div>
                  <div className="text-darkGray">Happy Clients</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Our Story" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="section-padding bg-darkGray text-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-dark p-8 rounded-lg"
            >
              <h3 className="heading-md mb-4">Our Mission</h3>
              <p className="text-light/80 mb-4">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and
                competitive advantage in the digital age.
              </p>
              <ul className="space-y-3">
                {["Client success focus", "Innovative solutions", "Quality delivery"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dark p-8 rounded-lg"
            >
              <h3 className="heading-md mb-4">Our Vision</h3>
              <p className="text-light/80 mb-4">
                To be the leading technology service provider known for excellence, innovation, and transformative
                impact on our clients' businesses.
              </p>
              <ul className="space-y-3">
                {["Industry leadership", "Continuous innovation", "Global impact"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section ref={teamRef} className="section-padding bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-dark mb-4">Meet Our Team</h2>
            <p className="text-darkGray max-w-3xl mx-auto">
              Our team of experts is passionate about technology and committed to delivering exceptional results for our
              clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-darkGray">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="section-padding bg-dark text-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Our Core Values</h2>
            <p className="text-light/80 max-w-3xl mx-auto">
              These values guide everything we do and shape our approach to serving our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-darkGray p-8 rounded-lg text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-light/80">{value.description}</p>
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
            <h2 className="heading-lg mb-6">Ready to Work With Us?</h2>
            <p className="text-light/90 text-lg mb-8">
              Let's discuss how Upfrontics can help you achieve your business goals with our expert services.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base border-light text-light hover:bg-light hover:text-teal"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

