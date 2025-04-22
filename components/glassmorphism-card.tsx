"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, ExternalLink, Quote, Instagram, Github } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import TypingAnimation from "./typing-animation"

export default function GlassmorphismCard() {
  const [activeTab, setActiveTab] = useState("about")
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

          <div className="w-full space-y-4 mt-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">dev@zayedali.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                <Instagram size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Instagram</p>
                <p className="text-white">@zayedalib</p>
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
                  className="object-cover scale-100"
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
              onClick={() => setActiveTab("about")}
              className={`px-3 md:px-4 py-2 text-sm font-medium ${activeTab === "about" ? "text-white border-b-2 border-white" : "text-gray-400"}`}
            >
              About Me
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-3 md:px-4 py-2 text-sm font-medium ${activeTab === "projects" ? "text-white border-b-2 border-white" : "text-gray-400"}`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-3 md:px-4 py-2 text-sm font-medium ${activeTab === "contact" ? "text-white border-b-2 border-white" : "text-gray-400"}`}
            >
              Contact
            </button>
          </div>

          <div className="max-h-[300px] md:max-h-[400px] overflow-y-auto pr-2">
            {activeTab === "about" && (
              <div className="text-gray-300 space-y-4">
                {/* Testimonial */}
                <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/20">
                  <div className="flex items-start">
                    <Quote className="text-cyan-400/60 w-8 h-8 mr-2 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-gray-200 italic">
                        "I love it. Everything about it is amazing and you were the perfect person to do this. Thank you
                        for reaching out. Extremely professional and quickly done."
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent"></div>
                          <p className="text-cyan-300 font-medium text-sm mx-2">Ethan at MYSC</p>
                          <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/20 to-transparent"></div>
                        </div>
                        <Image
                          src="/nuko-thumbs-up.gif"
                          alt="Character approval"
                          width={32}
                          height={32}
                          className="ml-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-white">About Me</h2>
                <p>
                  Currently a Biology student, I like to run ultramarathons, I specialize in creating modern web applications. Originally as a hobby, but I find it quite satisfying when a project comes together.
                </p>
                <p>
                  With expertise in both frontend and backend development, I build complete solutions that deliver
                  exceptional user experiences.
                </p>
                <p>
                  I'm constantly exploring new technologies, my main skills lie in web dev, but currently now trying to branch into Swift, embedded systems with C++, and Godot game dev!
                </p>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="space-y-6">
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/3 aspect-video rounded-md overflow-hidden">
                      <Image
                        src="/wakagotchi-screenshot.jpeg"
                        alt="Wakagotchi website screenshot"
                        width={320}
                        height={180}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-lg font-medium text-white">Wakagotchi.com</h3>
                      <p className="text-gray-300 mt-1">
                        A personal project featuring interactive virtual pets that respond to user activity. Built with
                        React, TypeScript, and Canvas animations.
                      </p>
                      <div className="mt-2">
                        <a
                          href="https://wakagotchi.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:underline"
                        >
                          Visit Site →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/3 aspect-video rounded-md overflow-hidden">
                      <Image
                        src="/mysc-screenshot.jpeg"
                        alt="MYSC website screenshot"
                        width={320}
                        height={180}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-lg font-medium text-white">MYSC.ca</h3>
                      <p className="text-gray-300 mt-1">
                        Modern application platform for talent show. Built with Next.js and Tailwind CSS, featuring
                        responsive design and dynamic content management.
                      </p>
                      <div className="mt-2">
                        <a
                          href="http://mysc.ca"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:underline flex items-center gap-1"
                        >
                          Visit Site <ExternalLink size={14} />
                        </a>
                      </div>

                      {/* Testimonial in projects section */}
                      <div className="mt-3 p-3 rounded-md bg-amber-900/20 border border-amber-500/20">
                        <div className="flex items-start">
                          <p className="text-gray-300 text-sm italic flex-1">
                            "Extremely professional and quickly done. Everything about it is amazing."
                          </p>
                          <Image
                            src="/nuko-thumbs-up.gif"
                            alt="Character approval"
                            width={24}
                            height={24}
                            className="ml-2 flex-shrink-0"
                          />
                        </div>
                        <p className="text-amber-400 text-xs mt-1">— Ethan, Project Manager</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                  <h3 className="text-lg font-medium text-white">Cosmic Portfolio</h3>
                  <p className="text-gray-300 mt-1">
                    This very website! Using React.js, Tailwind CSS, and Three.js
                  </p>
                  <div className="mt-2">
                    <span className="text-sm text-green-400">Current Project</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white">Get In Touch</h2>
                <p className="text-gray-300">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision.
                </p>

                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <input type="text" id="name" className="nintendo-input w-full" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="nintendo-input w-full"
                        placeholder="example@mail.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        className="nintendo-input w-full"
                        placeholder="How can I help you?"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="nintendo-btn w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-medium rounded-md transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <a
              href="#"
              className="nintendo-btn px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm text-white hover:bg-white/20 transition-colors"
            >
              React
            </a>
            <a
              href="#"
              className="nintendo-btn px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm text-white hover:bg-white/20 transition-colors"
            >
              Next.js
            </a>
            <a
              href="#"
              className="nintendo-btn px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm text-white hover:bg-white/20 transition-colors"
            >
              Three.js
            </a>
            <a
              href="#"
              className="nintendo-btn px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm text-white hover:bg-white/20 transition-colors"
            >
              Tailwind
            </a>
            <a
              href="#"
              className="nintendo-btn px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm text-white hover:bg-white/20 transition-colors"
            >
              TypeScript
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
