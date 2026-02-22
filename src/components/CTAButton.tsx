import { ReactNode } from 'react'

interface CTAButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
  onClick?: () => void
  href?: string
}

export default function CTAButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon,
  onClick,
  href 
}: CTAButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:shadow-lg',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-blue-600 hover:bg-blue-50'
  }

  const commonClasses = 'inline-flex items-center gap-2 rounded-lg font-semibold transition-all'

  const className = `${commonClasses} ${sizeClasses[size]} ${variantClasses[variant]}`

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
        {icon}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
      {icon}
    </button>
  )
}
