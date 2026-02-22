import PortfolioItem from '../components/PortfolioItem'
import { portfolioProjects } from '../data/portfolioData'

export default function Portfolio() {
  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore our successful projects across various industries and technologies.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((item) => (
              <PortfolioItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Success Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: '98%',
                label: 'Client Satisfaction Rate',
                description: 'Our clients rate our work highly for quality and professionalism'
              },
              {
                metric: '99.9%',
                label: 'Uptime Guarantee',
                description: 'Our deployed solutions maintain industry-leading uptime standards'
              },
              {
                metric: '2.5x',
                label: 'Average ROI',
                description: 'Our solutions deliver significant return on investment for clients'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-lg text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-4">
                  {item.metric}
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">{item.label}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl mb-8">
            Let's create something amazing together. Contact us for a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all text-lg"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  )
}
