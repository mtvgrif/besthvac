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
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group h-full flex flex-col">
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
        <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
      </div>
      <h3 className="font-heading font-semibold text-lg text-primary mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
      <Link
        href={`/services#${id}`}
        className="text-accent font-medium text-sm hover:text-accent-dark transition-colors"
      >
        Learn More &rarr;
      </Link>
    </div>
  )
}
