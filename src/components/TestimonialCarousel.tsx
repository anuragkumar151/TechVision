import { useState, useEffect, useRef } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import TestimonialCard from './TestimonialCard'

interface Testimonial {
  name: string
  company: string
  message: string
  rating: number
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const isMobile = () => window.innerWidth < 768
  const cardsPerView = isMobile() ? 1 : 3
  const maxIndex = Math.max(0, testimonials.length - cardsPerView)

  const scrollToIndex = (index: number) => {
    const idx = Math.max(0, Math.min(index, maxIndex))
    setCurrentIndex(idx)

    const container = scrollRef.current
    if (!container) return

    const cardWidth = container.clientWidth / cardsPerView
    container.scrollTo({
      left: idx * cardWidth,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return

    const cardWidth = container.clientWidth / cardsPerView
    const idx = Math.round(container.scrollLeft / cardWidth)
    setCurrentIndex(Math.min(idx, maxIndex))
  }

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev >= maxIndex ? 0 : prev + 1
        scrollToIndex(next)
        return next
      })
    }, 5000)

    return () => clearInterval(timer)
  }, [maxIndex])

  return (
    <div className="relative w-full px-4 md:px-16 overflow-hidden">

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-1/3 snap-center"
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scrollToIndex(currentIndex - 1)}
        disabled={currentIndex === 0}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-40 transition-all z-10"
      >
        <FiChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scrollToIndex(currentIndex + 1)}
        disabled={currentIndex >= maxIndex}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-40 transition-all z-10"
      >
        <FiChevronRight />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex
                ? 'bg-blue-600 w-6'
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}