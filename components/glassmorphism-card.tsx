"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, ExternalLink, Quote, Instagram, Github } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import TypingAnimation from "./typing-animation"

export default function GlassmorphismCard() {
  const [activeTab, setActiveTab] = useState("projects")
  const isMobile = useMobile()

  return (
    <div className="w-full max-w-4xl bg-black/30 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-white/10">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent flex items-center">
              <TypingAnimation text="Hi, I'm Zayed" speed={80} />
            </h1>
            <p className="text-gray-300 mb-6">
              I'm a Full-stack developer passionate about creating beautiful and functional web experiences and apps.
            </p>
          </div>

          {/* Client Testimonial - Moved to left section for prominence */}
          <div className="w-full mb-6 p-4 rounded-lg bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/20">
            <div className="flex items-start">
              <Quote className="text-cyan-400/60 w-6 h-6 mr-2 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="text-gray-200 italic text-sm">
                  "I love it. Everything about it is amazing and you were the perfect person to do this. Thank you for
                  reaching out. Extremely professional and quickly done."
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-cyan-300 font-medium text-xs">— Ethan at MYSC</p>
                  <Image src="/nuko-thumbs-up.gif" alt="Character approval" width={24} height={24} className="ml-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:info@zayedali.com" className="text-white hover:text-pink-300 transition-colors">
                  info@zayedali.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                <Instagram size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Instagram</p>
                <a
                  href="https://www.instagram.com/zayedalib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-300 transition-colors"
                >
                  @zayedalib
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <Github size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">GitHub</p>
                <a
                  href="https://github.com/zayedalib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  @zayedalib
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-3/5 p-6 md:p-8">
          {/* Pinned Project - Wakagotchi */}
          <div className="w-full mb-6 p-4 rounded-xl border border-white/10 bg-black/40">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-purple-900/30 flex items-center justify-center border-2 border-purple-500/30">
                <Image
                  src="/wakagotchi-mascot.gif"
                  alt="Wakagotchi mascot"
                  width={96}
                  height={96}
                  className="object-cover scale-125"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h2 className="text-xl font-bold text-white">Wakagotchi</h2>
                  <span className="hidden md:inline text-gray-400">•</span>
                  <span className="text-sm text-purple-300 font-medium">Featured Project</span>
                </div>
                <p className="text-gray-300 text-sm md:text-base mb-3">
                  The alarm app that makes sure you actually get out of bed. Take care of your virtual pet by waking up
                  on time.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full">React Native</span>
                  <span className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full">TypeScript</span>
                  <span className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full">Pixel Art</span>
                </div>
              </div>

              <a
                href="https://wakagotchi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nintendo-btn flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-sm font-medium hover:from-purple-700 hover:to-pink-600 transition-all"
              >
                Visit <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="flex mb-6 border-b border-white/10">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-3 md:px-4 py-2 text-sm font-medium ${activeTab === "projects" ? "text-white border-b-2 border-white" : "text-gray-400"}`}
            >
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-3 md:px-4 py-2 text-sm font-medium ${activeTab === "contact" ? "text-white border-b-2 border-white" : "text-gray-400"}`}
            >
              Contact
            </button>
          </div>

          <div className="max-h-[300px] md:max-h-[400px] overflow-y-auto pr-2">
            {activeTab === "projects" && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">My Work</h2>
                  <p className="text-gray-300">Professional websites and applications I've built for clients</p>
                </div>

                {/* Crescent Elevators */}
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex flex-col md:flex-row gap-4">
                    <a
                      href="https://crescentelevator.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-1/3 aspect-video rounded-md overflow-hidden hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src="/crescentelevator-screenshot.jpeg"
                        alt="Crescent Elevators website screenshot"
                        width={320}
                        height={180}
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-lg font-medium text-white">Crescent Elevators Co.</h3>
                      <p className="text-gray-300 mt-1">
                        Professional elevator services website featuring modern design, service listings, and contact
                        forms. Built with responsive design principles.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-900/30 text-gray-300 text-xs rounded-full">Next.js</span>
                        <span className="px-2 py-1 bg-gray-900/30 text-gray-300 text-xs rounded-full">
                          Tailwind CSS
                        </span>
                        <span className="px-2 py-1 bg-gray-900/30 text-gray-300 text-xs rounded-full">
                          Professional Services
                        </span>
                      </div>
                      <div className="mt-3">
                        <a
                          href="https://crescentelevator.ca"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:underline flex items-center gap-1"
                        >
                          Visit Site <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MYSC */}
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex flex-col md:flex-row gap-4">
                    <a
                      href="https://mysc.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-1/3 aspect-video rounded-md overflow-hidden hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src="/mysc-screenshot.jpeg"
                        alt="MYSC website screenshot"
                        width={320}
                        height={180}
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-lg font-medium text-white">MYSC - Markham Youth Spotlight</h3>
                      <p className="text-gray-300 mt-1">
                        Modern talent show platform featuring participant registration, episode listings, and
                        competition management. Built with premium design and user experience.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-amber-900/30 text-amber-300 text-xs rounded-full">Next.js</span>
                        <span className="px-2 py-1 bg-amber-900/30 text-amber-300 text-xs rounded-full">
                          Tailwind CSS
                        </span>
                        <span className="px-2 py-1 bg-amber-900/30 text-amber-300 text-xs rounded-full">
                          Competition Platform
                        </span>
                      </div>
                      <div className="mt-3">
                        <a
                          href="https://mysc.ca"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:underline flex items-center gap-1"
                        >
                          Visit Site <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* LoteTree Yard Care */}
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex flex-col md:flex-row gap-4">
                    <a
                      href="https://lotetreeyard.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-1/3 aspect-video rounded-md overflow-hidden hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src="/lotetreeyard-screenshot.jpeg"
                        alt="LoteTree Yard Care website screenshot"
                        width={320}
                        height={180}
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-lg font-medium text-white">LoteTree Yard Care</h3>
                      <p className="text-gray-300 mt-1">
                        Professional landscaping and yard care website with service showcases, quote requests, and
                        portfolio galleries. Features beautiful outdoor imagery and green design theme.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full">Next.js</span>
                        <span className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full">
                          Tailwind CSS
                        </span>
                        <span className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full">
                          Landscaping
                        </span>
                      </div>
                      <div className="mt-3">
                        <a
                          href="https://lotetreeyard.ca"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:underline flex items-center gap-1"
                        >
                          Visit Site <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SFL Youth */}
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex flex-col md:flex-row gap-4">
                    <a
                      href="https://sfl-youth.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-1/3 aspect-video rounded-md overflow-hidden hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src="/sfl-youth-screenshot.jpeg"
                        alt="SFL Youth website screenshot"
                        width={320}
                        height={180}
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-lg font-medium text-white">Shaping Future Leaders</h3>
                      <p className="text-gray-300 mt-1">
                        Youth leadership development organization website featuring program showcases, testimonials, and
                        community impact statistics. Built with modern design and engaging user experience.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full">Next.js</span>
                        <span className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full">
                          Tailwind CSS
                        </span>
                        <span className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full">
                          Youth Leadership
                        </span>
                      </div>
                      <div className="mt-3">
                        <a
                          href="https://sfl-youth.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:underline flex items-center gap-1"
                        >
                          Visit Site <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-white mb-4">Get In Touch</h2>
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/nuko-car.gif"
                      alt="Character in car animation"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-gray-300 text-lg">
                    Get in touch by sending me an{" "}
                    <a
                      href="mailto:info@zayedali.com"
                      className="text-pink-400 hover:text-pink-300 underline transition-colors"
                    >
                      email
                    </a>
                    , or, DM me on{" "}
                    <a
                      href="https://www.instagram.com/zayedalib/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline transition-colors"
                    >
                      Instagram
                    </a>
                    !
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
