interface IndustryCardProps {
  icon: string
  name: string
  description: string
}

export default function IndustryCard({ icon, name, description }: IndustryCardProps) {
  return (
    <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-bold text-lg text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
