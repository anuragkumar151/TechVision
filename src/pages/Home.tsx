import { FiArrowRight, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi'
import ServiceCard from '../components/ServiceCard'
import TestimonialCarousel from '../components/TestimonialCarousel'
import StatCounter from '../components/StatCounter'
import IndustryCard from '../components/IndustryCard'
import FeatureBox from '../components/FeatureBox'
import SectionTitle from '../components/SectionTitle'
import CTAButton from '../components/CTAButton'
import Badge from '../components/Badge'

export default function Home() {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom, scalable web applications built with modern technologies and best practices for optimal performance.'
    },
    {
      icon: '📱',
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences across all devices.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive interfaces designed to engage users and drive conversions.'
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description: 'Secure cloud infrastructure, migration, and management solutions for enterprise-level reliability.'
    },
    {
      icon: '🎯',
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns to boost your online presence and reach target audiences.'
    },
    {
      icon: '🏢',
      title: 'Logo & Branding',
      description: 'Creative logo design and comprehensive branding solutions that make your business stand out.'
    }
  ]


  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Digital Ventures Inc',
      message: 'TechVision transformed our business with their innovative solutions. Highly professional and delivered beyond expectations.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'E-Tech Solutions',
      message: 'Excellent team to work with. They understood our requirements perfectly and delivered on time.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      company: 'Global Tech Corp',
      message: 'Outstanding quality and support. Their expertise in cloud solutions is unmatched.',
      rating: 5
    },
    {
      name: 'Sneha Gupta',
      company: 'HealthFirst Clinics',
      message: 'The healthcare app they built for us has streamlined our operations. Patient satisfaction has improved significantly.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      company: 'QuickBite',
      message: 'Our food delivery app launched flawlessly. The team\'s attention to detail and timely delivery was impressive.',
      rating: 5
    },
    {
      name: 'Neha Verma',
      company: 'LearnHub',
      message: 'The e-learning platform exceeded our expectations. Clean design, smooth UX, and robust features.',
      rating: 5
    },
    {
      name: 'Rahul Mehta',
      company: 'PropertyHub',
      message: 'Professional work from start to finish. Our real estate portal is now our biggest lead generator.',
      rating: 5
    }
  ]

  const industries = [
    { icon: '🛍️', name: 'E-Commerce', description: 'Online retail solutions' },
    { icon: '🎓', name: 'Education', description: 'Learning management systems' },
    { icon: '🏥', name: 'Healthcare', description: 'Medical software solutions' },
    { icon: '🏋️', name: 'Fitness', description: 'Gym management apps' },
    { icon: '🏨', name: 'Hospitality', description: 'Hotel booking systems' },
    { icon: '🎨', name: 'Design', description: 'Creative services' },
    { icon: '🏠', name: 'Real Estate', description: 'Property platforms' },
    { icon: '🏛️', name: 'Government', description: 'Civic tech solutions' },
    { icon: '👷', name: 'Construction', description: 'Project management' },
    { icon: '🌾', name: 'Agriculture', description: 'Farm tech solutions' },
    { icon: '⛏️', name: 'Mining', description: 'Resource management' },
    { icon: '💇', name: 'Salon', description: 'Booking & management' }
  ]


  const features = [
    { icon: '⚡', title: 'High Performance', description: 'Lightning-fast applications optimized for speed' },
    { icon: '🔒', title: 'Security First', description: 'Enterprise-grade security and data protection' },
    { icon: '📱', title: 'Mobile Ready', description: 'Responsive designs that work on all devices' },
    { icon: '🎯', title: 'Results Driven', description: 'Focused on achieving your business goals' },
    { icon: '💡', title: 'Innovation', description: 'Latest technologies and best practices' },
    { icon: '🤝', title: '24/7 Support', description: 'Always available when you need us' }
  ]

  return (
    <div>
      {/* Hero Section with Animation */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <Badge variant="primary" size="md">
                🚀 Welcome to the Future of Tech
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Ideas Into <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Digital Reality</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We provide comprehensive IT solutions including web development, mobile apps, cloud services, and creative branding to help your business thrive in the digital world.
              </p>
              <div className="flex gap-4 flex-wrap">
                <CTAButton variant="primary" size="lg" href="/services">
                  Explore Services <FiArrowRight />
                </CTAButton>
                <CTAButton variant="outline" size="lg" href="/contact">
                  Get Free Consultation
                </CTAButton>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-white text-9xl shadow-2xl animate-bounce">
                💡
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Counters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 justify-items-center w-fit">
              <StatCounter number={50} suffix="+" label="Projects Completed" />
              <StatCounter number={50} suffix="+" label="Satisfied Clients" />
              <StatCounter number={10} suffix="+" label="Team Members" />
              <StatCounter number={2} suffix="+" label="Years Experience" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tag="Why We're Different"
            title="Our Core Strengths"
            subtitle="We combine technical excellence with creative innovation to deliver outstanding results"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureBox key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tag="What We Offer"
            title="Our Services"
            subtitle="Comprehensive IT solutions tailored to meet your business needs and drive growth."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton variant="primary" size="lg" href="/services">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tag="Across Industries"
            title="Industries We Serve"
            subtitle="Experience across diverse sectors ensures we understand your unique challenges"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}


      {/* Portfolio Section */}


      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tag="Client Reviews"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it - hear from our satisfied clients."
          />
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tag="Our Competitive Edge"
            title="Why Choose TechVision?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-md">
              <div className="text-5xl mb-4 text-blue-600 group-hover:scale-125 transition-transform"><FiUsers /></div>
              <h3 className="font-bold text-2xl mb-2">Expert Team</h3>
              <p className="text-gray-600">Highly skilled developers and designers with years of experience.</p>
            </div>
            <div className="text-center group bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-md">
              <div className="text-5xl mb-4 text-blue-600 group-hover:scale-125 transition-transform"><FiTrendingUp /></div>
              <h3 className="font-bold text-2xl mb-2">Proven Track Record</h3>
              <p className="text-gray-600">Successfully delivered 50+ projects for diverse industries.</p>
            </div>
            <div className="text-center group bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-md">
              <div className="text-5xl mb-4 text-blue-600 group-hover:scale-125 transition-transform"><FiAward /></div>
              <h3 className="font-bold text-2xl mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing and quality checks for every project.</p>
            </div>
            <div className="text-center group bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-md">
              <div className="text-5xl mb-4 text-blue-600 group-hover:scale-125 transition-transform">🚀</div>
              <h3 className="font-bold text-2xl mb-2">Fast Delivery</h3>
              <p className="text-gray-600">On-time delivery without compromising on quality.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
