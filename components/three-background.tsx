"use client"

import { useEffect, useState, useRef } from "react"

// Enhanced CSS-only animated background with correctly oriented shooting stars
export default function ThreeBackground() {
  const [mounted, setMounted] = useState(false)
  const shootingStarsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)

    // Add the CSS for the animated background to the document
    const style = document.createElement("style")
    style.textContent = `
      .stars-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
      }
      
      .stars, .stars2, .stars3 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: block;
        background-image: 
          radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
        background-repeat: repeat;
        background-size: 200px 200px;
        opacity: 0;
        animation: stars-animation 8s infinite linear;
      }
      
      .stars {
        background-position: 0 0;
        animation-delay: 0s;
      }
      .stars2 {
        background-position: 100px 100px;
        animation-delay: 1s;
      }
      .stars3 {
        background-position: 50px 50px;
        animation-delay: 2s;
      }
      
      @keyframes stars-animation {
        0% {
          opacity: 0;
          transform: translateY(0);
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: translateY(-1000px);
        }
      }
      
      .nebula {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.25;
        animation: nebula-float 20s infinite alternate ease-in-out;
      }
      
      .nebula-1 {
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, rgba(255,107,129,1) 0%, rgba(255,107,129,0) 70%);
        top: 10%;
        left: 5%;
        animation-delay: 0s;
      }
      
      .nebula-2 {
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(112,161,255,1) 0%, rgba(112,161,255,0) 70%);
        bottom: 5%;
        right: 5%;
        animation-delay: 5s;
      }
      
      .nebula-3 {
        width: 450px;
        height: 450px;
        background: radial-gradient(circle, rgba(123,237,159,1) 0%, rgba(123,237,159,0) 70%);
        top: 40%;
        left: 40%;
        transform: translate(-50%, -50%);
        animation-delay: 10s;
      }
      
      .nebula-4 {
        width: 550px;
        height: 550px;
        background: radial-gradient(circle, rgba(255,192,105,1) 0%, rgba(255,192,105,0) 70%);
        top: 70%;
        left: 20%;
        animation-delay: 7s;
      }
      
      .nebula-5 {
        width: 480px;
        height: 480px;
        background: radial-gradient(circle, rgba(186,104,255,1) 0%, rgba(186,104,255,0) 70%);
        top: 20%;
        right: 15%;
        animation-delay: 3s;
      }
      
      .nebula-6 {
        width: 520px;
        height: 520px;
        background: radial-gradient(circle, rgba(79,209,197,1) 0%, rgba(79,209,197,0) 70%);
        bottom: 15%;
        left: 40%;
        animation-delay: 15s;
      }
      
      @keyframes nebula-float {
        0% {
          transform: translate(0, 0) rotate(0deg);
          opacity: 0.2;
        }
        50% {
          opacity: 0.3;
        }
        100% {
          transform: translate(30px, 30px) rotate(5deg);
          opacity: 0.25;
        }
      }

      /* Dynamic shooting stars with correct tail orientation */
      .shooting-star {
        position: absolute;
        height: 2px;
        /* Reversed gradient direction - bright at the front (right), fading to the tail (left) */
        background: linear-gradient(270deg, rgba(255,255,255,1), rgba(255,255,255,0));
        border-radius: 999px;
        filter: drop-shadow(0 0 6px rgba(255,255,255,0.8));
        opacity: 0;
      }

      .shooting-star::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        /* Move the glow effect to the front (right side) of the star */
        right: 0;
        height: 1px;
        width: 30px;
        background: linear-gradient(270deg, rgba(255,255,255,0.4), rgba(255,255,255,0));
      }
    `
    document.head.appendChild(style)

    // Function to create a shooting star
    const createShootingStar = () => {
      if (!shootingStarsRef.current) return

      // Create a new shooting star element
      const star = document.createElement("div")
      star.className = "shooting-star"

      // Random position and size
      const startY = Math.random() * (window.innerHeight * 0.7) // Keep in top 70% of screen
      const angle = 15 + Math.random() * 20 // Between 15 and 35 degrees
      const width = 80 + Math.random() * 120 // Between 80px and 200px

      // Set styles
      star.style.top = `${startY}px`
      star.style.left = `-${width}px`
      star.style.width = `${width}px`
      star.style.transform = `rotate(${angle}deg)`

      // Animation
      const duration = 2 + Math.random() * 4 // Between 2 and 6 seconds
      star.style.transition = `transform ${duration}s linear, opacity ${duration * 0.3}s ease-in, ${duration * 0.7}s ease-out`

      // Add to DOM
      shootingStarsRef.current.appendChild(star)

      // Start animation after a small delay to ensure the element is rendered
      setTimeout(() => {
        star.style.opacity = "1"
        star.style.transform = `translateX(${window.innerWidth + width}px) translateY(${window.innerWidth * Math.tan((angle * Math.PI) / 180)}px) rotate(${angle}deg)`
      }, 10)

      // Remove the star after animation completes
      setTimeout(
        () => {
          if (shootingStarsRef.current && shootingStarsRef.current.contains(star)) {
            shootingStarsRef.current.removeChild(star)
          }
        },
        duration * 1000 + 100,
      )
    }

    // Create initial stars
    for (let i = 0; i < 3; i++) {
      setTimeout(createShootingStar, i * 1000)
    }

    // Periodically create new shooting stars
    const interval = setInterval(() => {
      if (Math.random() < 0.7) {
        // 70% chance to create a star
        createShootingStar()
      }
    }, 2000) // Check every 2 seconds

    return () => {
      document.head.removeChild(style)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black">
      <div className="stars-container">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>
        <div className="nebula nebula-4"></div>
        <div className="nebula nebula-5"></div>
        <div className="nebula nebula-6"></div>

        {/* Container for dynamically generated shooting stars */}
        <div ref={shootingStarsRef} className="shooting-stars-container"></div>
      </div>
    </div>
  )
}
