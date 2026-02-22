import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning'
  size?: 'sm' | 'md' | 'lg'
}

export default function Badge({ children, variant = 'primary', size = 'md' }: BadgeProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  const variantClasses = {
    primary: 'bg-blue-100 text-blue-600',
    secondary: 'bg-gray-100 text-gray-600',
    success: 'bg-green-100 text-green-600',
    warning: 'bg-orange-100 text-orange-600'
  }

  return (
    <span className={`inline-block rounded-full font-semibold ${sizeClasses[size]} ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}
