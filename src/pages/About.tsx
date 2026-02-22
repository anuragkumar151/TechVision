import TeamMember from '../components/TeamMember'
import FeatureBox from '../components/FeatureBox'
import SectionTitle from '../components/SectionTitle'
import CTAButton from '../components/CTAButton'

export default function About() {
  const team = [
      { name: 'Anurag Kumar', role: 'Developer', specialty: 'Web & App Development', avatar: '👨‍💻' },
      { name: 'Manmeet Anand', role: 'Designer', specialty: 'UI/UX Design', avatar: '👨‍🎨' }
  ]

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">About TechVision</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Innovative IT solutions company dedicated to transforming businesses through technology.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2024, TechVision started with a simple vision: to help businesses harness the power of technology to achieve their goals. What began as a small team of passionate developers.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over the past 2 years, we've successfully delivered 50+ projects for clients across various industries including healthcare, finance, e-commerce, and enterprise solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to innovate and adapt to emerging technologies, ensuring our clients stay ahead in the competitive digital landscape.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg h-96 flex items-center justify-center text-white text-8xl shadow-2xl">
              🚀
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tag="What Drives Us"
            title="Our Core Values"
            subtitle="These principles guide every decision we make and every solution we deliver."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureBox icon="🎯" title="Excellence" description="We strive for excellence in every project and interaction." />
            <FeatureBox icon="🤝" title="Collaboration" description="We believe in strong partnerships with clients and team." />
            <FeatureBox icon="💡" title="Innovation" description="We embrace new technologies and creative solutions." />
            <FeatureBox icon="📈" title="Growth" description="We focus on continuous improvement and business growth." />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
              tag="Meet The Team"
              title="Team Members"
              subtitle="Our talented and experienced team bringing innovation to every project."
          />
          
          <div className="flex flex-wrap justify-center gap-12">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tag="Our Competitive Edge"
            title="Why Choose TechVision?"
            subtitle="Here's what sets us apart from the competition."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Proven Expertise',
                points: [
                  '50+ successful projects delivered',
                  '50+ satisfied clients',
                  '1+ years of industry experience',
                  'Expert team of 10+ professionals'
                ]
              },
              {
                title: 'Quality & Reliability',
                points: [
                  '99.9% uptime guarantee',
                  'Rigorous testing and QA',
                  'Scalable and maintainable code',
                  'Regular updates and support'
                ]
              },
              {
                title: 'Customer-Centric Approach',
                points: [
                  '24/7 customer support',
                  'Dedicated project managers',
                  'Regular progress updates',
                  'Transparent communication'
                ]
              },
              {
                title: 'Modern Technology Stack',
                points: [
                  'Latest frameworks and tools',
                  'Cloud-native solutions',
                  'AI and machine learning integration',
                  'Microservices architecture'
                ]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <h3 className="font-bold text-2xl mb-6 text-gray-800">{item.title}</h3>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Partner With Us Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's work together to transform your business with innovative IT solutions.
          </p>
          <CTAButton variant="secondary" size="lg" href="/contact">
            Get In Touch
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
