import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import FAQItem from '../components/FAQItem'
import SectionTitle from '../components/SectionTitle'
import CTAButton from '../components/CTAButton'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(data.message || 'Failed to send message. Please try again.')
      }
    } catch {
      setError('Failed to send. Make sure the server is running (npm run dev:all).')
    }
    setLoading(false)
  }

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Let's discuss your project and how we can help you achieve your business goals.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            {[
              {
                icon: <FiPhone className="w-6 h-6" />,
                title: 'Phone',
                value: '+91 8092580652',
                link: 'tel:+918092580652'
              },
              {
                icon: <FiMail className="w-6 h-6" />,
                title: 'Email',
                value: 'anuragkumar88583@gmail.com',
                link: 'mailto:anuragkumar88583@gmail.com'
              },
              {
                icon: <FiMapPin className="w-6 h-6" />,
                title: 'Office',
                value: 'Dhanbad, Jharkhand',
                link: 'https://maps.google.com/?q=Dhanbad,Jharkhand'
              }
            ].map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:bg-blue-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center text-white">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">{info.title}</h3>
                </div>
                <p className="text-gray-600 text-lg font-semibold">{info.value}</p>
              </a>
            ))}
          </div>

          {/* Contact Form & Business Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you! Your message has been sent. We&apos;ll get back to you soon.
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Select Service Type</option>
                  <option value="web-development">Web Development</option>
                  <option value="app-development">App Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="cloud-services">Cloud Services</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Business Hours & Info */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-8">Business Hours</h3>

              <div className="space-y-6 mb-8">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiClock className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <p className="font-semibold">{item.day}</p>
                      <p className="text-gray-400">{item.hours}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-700 pt-8">
                <h4 className="font-bold mb-4">Quick Response</h4>
                <p className="text-gray-400 text-sm">
                  We typically respond to inquiries within 2 hours during business hours. For urgent matters, call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            tag="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and processes."
          />

          <div className="space-y-4">
            <FAQItem
              question="What is your typical project timeline?"
              answer="Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications may take 2-6 months. We provide detailed timelines after the initial consultation."
            />
            <FAQItem
              question="Do you provide ongoing support?"
              answer="Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, updates, security patches, and technical support available 24/7."
            />
            <FAQItem
              question="What technologies do you use?"
              answer="We use modern technologies including React, Vue, Angular, Node.js, Python, Java, AWS, Azure, and more. Technology selection is based on project requirements."
            />
            <FAQItem
              question="Can you work with existing projects?"
              answer="Absolutely! We can take over existing projects, fix bugs, add new features, or optimize performance. We work seamlessly with your existing teams."
            />
            <FAQItem
              question="What's your pricing model?"
              answer="We offer flexible pricing: fixed-price projects, time & material, dedicated team models, and retainer support. We provide detailed quotes after understanding your requirements."
            />
            <FAQItem
              question="How do you ensure code quality?"
              answer="We follow industry best practices including code reviews, automated testing, continuous integration, and deployment. Quality assurance is built into every stage of development."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's transform your ideas into reality. Fill out the form above or call us for a quick discussion.
          </p>
        </div>
      </section>
    </div>
  )
}
