interface TimelineItemProps {
  step: number
  title: string
  description: string
  icon: string
}

export default function TimelineItem({ step, title, description, icon }: TimelineItemProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 w-full">
      
      {/* Timeline icon */}
      <div className="flex sm:flex-col items-center sm:items-center flex-shrink-0">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
          {icon}
        </div>

        {/* Vertical line (hidden on mobile if needed) */}
        <div className="hidden sm:block w-1 h-24 bg-gradient-to-b from-blue-400 to-transparent mt-4"></div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-2 sm:pt-4 pb-6 w-full">
        <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2 break-words">
          Step {step}: {title}
        </h3>

        <p className="text-gray-600 leading-relaxed break-words">
          {description}
        </p>
      </div>
    </div>
  )
}