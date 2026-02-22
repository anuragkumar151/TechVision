interface TeamMemberProps {
  name: string
  role: string
  specialty: string
  avatar: string
  socials?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export default function TeamMember({ name, role, specialty, avatar, socials }: TeamMemberProps) {
  return (
    <div className="group flex flex-col items-center justify-center text-center">
      <div className="relative mb-4 overflow-hidden rounded-lg h-64 w-64 bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center">
        <div className="text-8xl group-hover:scale-110 transition-transform">{avatar}</div>
        {/* Social Links Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity">
          {socials?.twitter && <a href={socials.twitter} className="text-white hover:text-blue-400">f</a>}
          {socials?.linkedin && <a href={socials.linkedin} className="text-white hover:text-blue-400">in</a>}
          {socials?.github && <a href={socials.github} className="text-white hover:text-blue-400">gh</a>}
        </div>
      </div>
      <h3 className="font-bold text-2xl text-gray-800 mt-2">{name}</h3>
      <p className="text-blue-600 font-semibold text-lg mb-1">{role}</p>
      <p className="text-gray-700 text-base">{specialty}</p>
    </div>
  )
}
