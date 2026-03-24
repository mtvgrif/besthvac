import { User } from 'lucide-react'

interface TeamCardProps {
  name: string
  role: string
  bio: string
}

export default function TeamCard({ name, role, bio }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-center p-6 h-full">
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <User className="w-10 h-10 text-primary/50" />
      </div>
      <h3 className="font-heading font-semibold text-lg text-primary">
        {name}
      </h3>
      <p className="text-accent font-medium text-sm mb-3">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  )
}
