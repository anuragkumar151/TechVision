import { useEffect, useRef, useState } from 'react'

interface StatProps {
  number: number
  suffix?: string
  label: string
}

export default function StatCounter({ number, suffix = '', label }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let current = 0
    const increment = number / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 20)

    return () => clearInterval(timer)
  }, [isVisible, number])

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center">
      <div className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text mb-2">
        {count}{suffix}
      </div>
      <p className="text-gray-600 font-semibold">{label}</p>
    </div>
  )
}
