"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface TypingAnimationProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export default function TypingAnimation({ text, className = "", speed = 100, delay = 500 }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    // Start typing after initial delay
    const startTimeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => {
      clearTimeout(startTimeout)
      clearInterval(cursorInterval)
    }
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    let currentIndex = 0
    const typeInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setIsComplete(true)
      }
    }, speed)

    return () => clearInterval(typeInterval)
  }, [isTyping, text, speed])

  return (
    <span className={`flex items-center ${className}`}>
      {displayText}
      <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-100 mr-1`}>|</span>

      {/* Show spinning head during typing, browsing after completion */}
      {isTyping && !isComplete && (
        <Image
          src="/nuko-spinning-head.gif"
          alt="Spinning character"
          width={24}
          height={24}
          className="inline-block ml-1"
        />
      )}

      {isComplete && (
        <Image src="/nuko-browsing.gif" alt="Browsing character" width={28} height={28} className="inline-block ml-1" />
      )}
    </span>
  )
}
