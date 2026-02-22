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
  const [cardsPerView, setCardsPerView] = useState(3)
  const scrollRef = useRef<HTMLDivElement>(null)
  const indexRef = useRef(0)
  indexRef.current = currentIndex

  useEffect(() => {
    const update = () => setCardsPerView(window.innerWidth < 768 ? 1 : 3)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - cardsPerView)

  const scrollToIndex = (index: number) => {
    const idx = Math.max(0, Math.min(index, maxIndex))
    setCurrentIndex(idx)
    const container = scrollRef.current
    if (container) {
      const cardWidth = container.scrollWidth / testimonials.length
      container.scrollTo({ left: idx * cardWidth, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return
    const cardWidth = container.scrollWidth / testimonials.length
    const idx = Math.round(container.scrollLeft / cardWidth)
    setCurrentIndex(Math.min(idx, maxIndex))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const container = scrollRef.current
      if (!container) return
      const idx = indexRef.current
      const mx = Math.max(0, testimonials.length - (window.innerWidth < 768 ? 1 : 3))
      const next = idx >= mx ? 0 : idx + 1
      setCurrentIndex(next)
      const cardWidth = container.scrollWidth / testimonials.length
      container.scrollTo({ left: next * cardWidth, behavior: 'smooth' })
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="relative px-12 md:px-16">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide items-stretch"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[85vw] md:w-[320px] snap-center h-full"
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollToIndex(currentIndex - 1)}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all z-10 border border-gray-100"
        aria-label="Previous"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => scrollToIndex(currentIndex + 1)}
        disabled={currentIndex >= maxIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all z-10 border border-gray-100"
        aria-label="Next"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2.5 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  )
}
