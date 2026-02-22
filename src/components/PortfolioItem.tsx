import { Link } from 'react-router-dom'

interface PortfolioItemProps {
  id: string
  image: string
  title: string
  category: string
  description: string
}

export default function PortfolioItem({ id, image, title, category, description }: PortfolioItemProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative overflow-hidden h-64 bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
          {category}
        </div>
        <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={`/portfolio/${id}`} className="text-blue-600 font-semibold hover:text-teal-500 transition-colors">
          View Project →
        </Link>
      </div>
    </div>
  )
}
