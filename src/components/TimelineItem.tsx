interface TimelineItemProps {
  step: number
  title: string
  description: string
  icon: string
}

export default function TimelineItem({ step, title, description, icon }: TimelineItemProps) {
  return (
    <div className="flex gap-6">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
          {icon}
        </div>
        <div className="w-1 h-24 bg-gradient-to-b from-blue-400 to-transparent mt-4"></div>
      </div>

      {/* Content */}
      <div className="pb-8 flex-1 pt-4">
        <h3 className="font-bold text-xl text-gray-800 mb-2">Step {step}: {title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
