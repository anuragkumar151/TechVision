  const processSteps = [
    { step: '01', title: 'Discovery & Planning', description: 'We understand your goals, analyze requirements, and create a detailed project plan.' },
    { step: '02', title: 'Design & Strategy', description: 'Our team designs solutions and strategies aligned with your business objectives.' },
    { step: '03', title: 'Development & Testing', description: 'We build robust solutions with rigorous testing to ensure quality and performance.' },
    { step: '04', title: 'Deployment & Support', description: 'We deploy your solution and provide ongoing support for long-term success.' }
  ];
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Build powerful, scalable web applications using modern technologies like React, Vue, Angular, and Node.js. From responsive websites to complex web platforms.'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Create engaging mobile applications for iOS and Android. Native, cross-platform, and progressive web apps tailored to your needs.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, user-centric interface design that converts visitors into customers. Wireframing, prototyping, and user experience optimization.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Leverage cloud technology for scalability and reliability. AWS, Azure, and Google Cloud services with expert implementation and support.'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions including penetration testing, vulnerability assessment, and security audits.'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights. BI dashboards, data visualization, and advanced analytics solutions.'
    },
    {
      icon: '🔄',
      title: 'API Development',
      description: 'RESTful and GraphQL APIs built for performance and scalability. Integration with third-party services and custom solutions.'
    },
    {
      icon: '🚀',
      title: 'DevOps & Automation',
      description: 'CI/CD pipelines, containerization, and infrastructure automation for efficient deployment and management.'
    },
    {
      icon: '🏢',
      title: 'Enterprise Solutions',
      description: 'Custom ERP, CRM, and business management systems designed for large-scale operations and complex workflows.'
    },
    {
      icon: '📧',
      title: 'Digital Marketing',
      description: 'SEO, SEM, social media marketing, and content strategy to boost your online visibility and reach.'
    },
    {
      icon: '🎯',
      title: 'Logo & Branding',
      description: 'Professional logo design, brand guidelines, and comprehensive branding solutions that define your identity.'
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Support',
      description: 'Ongoing technical support, regular updates, and maintenance to keep your systems running smoothly.'
    }
  ]

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-800 font-semibold">How we deliver exceptional results for every project</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <div className="text-5xl font-bold text-blue-700 mb-4">{item.step}</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-800 font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  )
}


