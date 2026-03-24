import { User } from 'lucide-react'

interface TeamCardProps {
  name: string
  role: string
  bio: string
}

export default function TeamCard({ name, role, bio }: TeamCardProps) {
  return (
    <div className="bg-dark-light rounded-xl border border-white/10 overflow-hidden text-center p-6 h-full">
      <div className="w-24 h-24 bg-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <User className="w-10 h-10 text-cyan/60" />
      </div>
      <h3 className="font-display font-semibold text-lg text-white">
        {name}
      </h3>
      <p className="text-gold font-medium text-sm mb-3">{role}</p>
      <p className="text-gray-400 text-sm">{bio}</p>
    </div>
  )
}
