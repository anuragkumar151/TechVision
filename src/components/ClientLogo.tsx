interface ClientLogoProps {
  name: string
  logo: string
}

export default function ClientLogo({ name, logo }: ClientLogoProps) {
  return (
    <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all flex items-center justify-center h-32 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50">
      <div className="text-4xl filter group-hover:scale-110 transition-transform">
        {logo}
      </div>
    </div>
  )
}
