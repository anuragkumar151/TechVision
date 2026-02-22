import { FiStar } from 'react-icons/fi'

interface TestimonialProps {
  name: string
  company: string
  message: string
  rating: number
}

export default function TestimonialCard({ name, message, rating }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col text-left h-[320px] w-full">
      <div className="flex gap-1 mb-4">
        {Array(rating).fill(0).map((_, i) => (
          <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic flex-grow overflow-hidden line-clamp-5">"{message}"</p>
      <p className="font-bold text-gray-800 mt-auto">{name}</p>
    </div>
  )
}
