interface FeatureProps {
  icon: string
  title: string
  description: string
}

export default function FeatureBox({ icon, title, description }: FeatureProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
