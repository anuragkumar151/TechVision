import { ReactNode } from 'react'

interface SectionTitleProps {
  tag?: string
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function SectionTitle({ tag, title, subtitle, children }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      {tag && (
        <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          {tag}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6 whitespace-nowrap">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
