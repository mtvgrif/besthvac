import Link from 'next/link'
import {
  Flame,
  Snowflake,
  Wind,
  Droplets,
  Leaf,
  AlertTriangle,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Snowflake,
  Wind,
  Droplets,
  Leaf,
  AlertTriangle,
}

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  id: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  id,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Flame

  return (
    <div className="bg-dark-light rounded-xl p-6 border border-white/10 hover:border-gold/40 group h-full flex flex-col transition-colors">
      <div className="w-14 h-14 bg-cyan/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
        <Icon className="w-7 h-7 text-cyan group-hover:text-gold transition-colors" />
      </div>
      <h3 className="font-display text-lg text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
      <Link
        href={`/services#${id}`}
        className="text-gold font-medium text-sm hover:text-gold-light transition-colors"
      >
        Learn More &rarr;
      </Link>
    </div>
  )
}
