import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { getProjectById } from '../data/portfolioData'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-blue-600 hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors"
          >
            <FiArrowLeft /> Back to Portfolio
          </Link>

          <div className="rounded-2xl overflow-hidden shadow-xl mb-8 bg-gray-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {project.category}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{project.description}</p>

          <span className="text-gray-600"><strong className="text-gray-800">Duration:</strong> {project.duration}</span>

          <div className="mt-10 space-y-6">
            {project.details.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
