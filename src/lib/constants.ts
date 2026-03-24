export const COMPANY = {
  name: 'Best HVAC',
  domain: 'besthvac.ca',
  phone: '416-555-HVAC',
  phoneHref: 'tel:+14165554822',
  email: 'info@besthvac.ca',
  address: {
    street: '123 King St W',
    city: 'Toronto',
    province: 'ON',
    postal: 'M5H 1A1',
    full: '123 King St W, Toronto, ON M5H 1A1',
  },
  hours: [
    { days: 'Monday - Friday', time: '7:00 AM - 8:00 PM' },
    { days: 'Saturday', time: '8:00 AM - 5:00 PM' },
    { days: 'Sunday', time: 'Emergency Only' },
  ],
  founded: 1998,
  yearsExperience: 25,
  tagline: "Toronto's Most Trusted HVAC Experts",
  subTagline: '24/7 Emergency Service \u2022 Licensed & Insured \u2022 Free Estimates',
  description:
    'Best HVAC provides expert heating, cooling, and ventilation services across the Greater Toronto Area. Licensed, insured, and trusted since 1998.',
} as const

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export const SERVICES = [
  {
    id: 'furnace',
    icon: 'Flame',
    title: 'Furnace Repair & Installation',
    shortDescription:
      'Keep your home warm with expert furnace services. From emergency repairs to new installations, we handle it all.',
    description: [
      "Your furnace is the heart of your home\u2019s heating system, and when it breaks down, you need fast, reliable service. Our certified technicians have the experience to diagnose and repair all makes and models of furnaces, ensuring your home stays warm and comfortable throughout Toronto\u2019s harsh winters.",
      'Whether you need a simple repair, a complete furnace replacement, or a brand-new installation, we provide honest assessments and transparent pricing. We\u2019ll help you choose the most energy-efficient option for your home and budget.',
      'All our furnace installations come with a comprehensive warranty and our 100% satisfaction guarantee. We also offer annual maintenance plans to keep your furnace running at peak efficiency and prevent costly breakdowns.',
    ],
    includes: [
      'Emergency furnace repair (24/7)',
      'High-efficiency furnace installation',
      'Annual maintenance & tune-ups',
      'Thermostat installation & calibration',
      'Heat exchanger inspection',
      'Carbon monoxide testing',
    ],
  },
  {
    id: 'ac',
    icon: 'Snowflake',
    title: 'AC Repair & Installation',
    shortDescription:
      'Stay cool all summer with our professional air conditioning services and energy-efficient installations.',
    description: [
      "When Toronto\u2019s summer heat hits, the last thing you want is a broken air conditioner. Our expert technicians provide fast, reliable AC repair services to get your cooling system back up and running quickly. We service all major brands and models.",
      "If it\u2019s time for a new air conditioning system, we\u2019ll help you select the perfect unit for your home\u2019s size and your budget. Our installations are done right the first time, ensuring maximum efficiency and comfort for years to come.",
      'We also offer preventative maintenance plans to keep your AC running smoothly all season long. Regular maintenance not only extends the life of your system but also keeps your energy bills low.',
    ],
    includes: [
      'Central air conditioning repair',
      'New AC system installation',
      'Ductless mini-split systems',
      'Seasonal tune-ups & maintenance',
      'Refrigerant recharge & leak repair',
      'Smart thermostat integration',
    ],
  },
  {
    id: 'duct-cleaning',
    icon: 'Wind',
    title: 'Duct Cleaning',
    shortDescription:
      'Improve air quality and system efficiency with professional duct cleaning services.',
    description: [
      "Over time, your home\u2019s ductwork accumulates dust, allergens, pet dander, and other contaminants that circulate through your living spaces every time your HVAC system runs. Professional duct cleaning removes these pollutants, improving your indoor air quality significantly.",
      'Our thorough duct cleaning process uses industrial-grade equipment to clean every inch of your ductwork. We also inspect for leaks, damage, and insulation issues that could be costing you money on your energy bills.',
      'The Canadian Air Quality Association recommends duct cleaning every 3\u20135 years, or more frequently if you have pets, allergies, or have recently completed renovations. Let us help you breathe easier in your own home.',
    ],
    includes: [
      'Complete duct system cleaning',
      'Dryer vent cleaning',
      'Return & supply vent cleaning',
      'Ductwork inspection & sealing',
      'Filter replacement',
      'Before & after air quality testing',
    ],
  },
  {
    id: 'water-heater',
    icon: 'Droplets',
    title: 'Water Heater Service',
    shortDescription:
      'From tankless to traditional, we install and repair all types of water heaters.',
    description: [
      "A reliable water heater is essential for everyday comfort. Whether you\u2019re dealing with a lack of hot water, strange noises, or leaks, our technicians can quickly diagnose and repair the issue. We service both traditional tank and modern tankless water heaters.",
      "Considering an upgrade? Tankless water heaters offer endless hot water and significant energy savings. We\u2019ll help you evaluate the best option for your household\u2019s hot water needs and provide a professional installation.",
      'Regular maintenance extends the life of your water heater and maintains its efficiency. Our maintenance service includes flushing the tank, checking the anode rod, testing safety valves, and inspecting all connections.',
    ],
    includes: [
      'Tank water heater repair & replacement',
      'Tankless water heater installation',
      'Annual maintenance & flushing',
      'Temperature & pressure valve testing',
      'Energy efficiency upgrades',
      'Same-day emergency service',
    ],
  },
  {
    id: 'air-quality',
    icon: 'Leaf',
    title: 'Indoor Air Quality',
    shortDescription:
      'Breathe cleaner, healthier air with our comprehensive indoor air quality solutions.',
    description: [
      "Indoor air can be up to five times more polluted than outdoor air, according to the EPA. With Canadians spending up to 90% of their time indoors, ensuring clean air in your home is essential for your family\u2019s health and well-being.",
      "We offer a complete range of indoor air quality solutions, from air purifiers and UV germicidal lights to whole-home humidifiers and dehumidifiers. Our experts will assess your home\u2019s specific needs and recommend the right combination of products.",
      'Our IAQ solutions work with your existing HVAC system to filter out allergens, bacteria, viruses, and other airborne contaminants. The result is cleaner, fresher air throughout your entire home.',
    ],
    includes: [
      'Air quality assessment & testing',
      'HEPA air purifier installation',
      'UV germicidal light systems',
      'Whole-home humidifiers & dehumidifiers',
      'ERV/HRV ventilation systems',
      'MERV-rated filter upgrades',
    ],
  },
  {
    id: 'emergency',
    icon: 'AlertTriangle',
    title: '24/7 Emergency Repairs',
    shortDescription:
      'HVAC emergency? We offer round-the-clock emergency service across the GTA.',
    description: [
      "HVAC emergencies don\u2019t wait for business hours, and neither do we. Our emergency repair team is available 24 hours a day, 7 days a week, 365 days a year. When your heating or cooling system fails unexpectedly, one call is all it takes.",
      'We keep our service vehicles fully stocked with common parts and equipment so we can resolve most emergencies in a single visit. Our average response time across the GTA is under 60 minutes, because we know that when you\u2019re uncomfortable, every minute counts.',
      "There\u2019s never an extra charge for after-hours diagnostics \u2014 you\u2019ll get the same transparent, upfront pricing no matter when you call. Your comfort and safety are our top priorities.",
    ],
    includes: [
      '24/7/365 availability',
      'Under 60-minute average response time',
      'No after-hours diagnostic fees',
      'Fully stocked service vehicles',
      'All major HVAC brands serviced',
      'Temporary heating/cooling solutions available',
    ],
  },
] as const

export const WHY_CHOOSE_US = [
  {
    icon: 'Award',
    title: '25+ Years Experience',
    description:
      'Proudly serving the Greater Toronto Area since 1998 with thousands of satisfied customers.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Licensed & Insured',
    description:
      'Fully licensed by TSSA and insured for your complete peace of mind and protection.',
  },
  {
    icon: 'Clock',
    title: 'Same-Day Service',
    description:
      'We understand urgency. Most service calls are completed the same day you call.',
  },
  {
    icon: 'ThumbsUp',
    title: '100% Satisfaction',
    description:
      "We stand behind our work with a satisfaction guarantee. If you\u2019re not happy, we\u2019ll make it right.",
  },
] as const

export const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    neighborhood: 'Scarborough',
    rating: 5,
    text: "Our furnace died in the middle of a January cold snap. Best HVAC had a technician at our door within an hour and had us back up and running the same evening. Incredible service and very fair pricing. We won\u2019t call anyone else!",
  },
  {
    name: 'David Chen',
    neighborhood: 'North York',
    rating: 5,
    text: "We had Best HVAC install a new central air system last summer. The team was professional, clean, and finished ahead of schedule. They even helped us choose a more efficient unit that\u2019s saving us money on our bills. Highly recommend!",
  },
  {
    name: 'Maria Rodriguez',
    neighborhood: 'Etobicoke',
    rating: 5,
    text: "I\u2019ve been using Best HVAC for annual maintenance for three years now. They\u2019re always on time, thorough, and honest. Last visit they found a small issue and fixed it on the spot before it became a big problem. That\u2019s the kind of service you can trust.",
  },
] as const

export const SERVICE_AREAS = [
  'Toronto',
  'North York',
  'Scarborough',
  'Etobicoke',
  'Mississauga',
  'Brampton',
  'Vaughan',
  'Richmond Hill',
  'Markham',
  'Pickering',
  'Ajax',
  'Whitby',
  'Oakville',
  'Burlington',
  'Milton',
  'Newmarket',
] as const

export const TEAM = [
  {
    name: 'Robert Thompson',
    role: 'Founder & Lead Technician',
    bio: 'With over 30 years of HVAC experience, Rob founded Best HVAC with a simple mission: provide honest, reliable service at fair prices.',
  },
  {
    name: 'Jennifer Park',
    role: 'Operations Manager',
    bio: 'Jennifer ensures every job runs smoothly from your first call to project completion. She leads our customer service team with dedication.',
  },
  {
    name: 'Michael Santos',
    role: 'Senior Service Technician',
    bio: 'TSSA-certified with specializations in high-efficiency systems and indoor air quality. Michael has been with Best HVAC for 12 years.',
  },
] as const

export const FAQS = [
  {
    question: 'How often should I have my HVAC system serviced?',
    answer:
      'We recommend servicing your HVAC system at least twice a year \u2014 once in spring for your air conditioning and once in fall for your furnace. Regular maintenance prevents breakdowns, improves efficiency, and extends the life of your equipment. Our maintenance plans make it easy and affordable to stay on schedule.',
  },
  {
    question: 'How do I know if I need a new furnace or just a repair?',
    answer:
      'Generally, if your furnace is over 15\u201320 years old, requires frequent repairs, or your energy bills are steadily increasing, it may be more cost-effective to replace it. However, many issues can be resolved with a simple repair. Our technicians will give you an honest assessment and help you weigh the costs of repair vs. replacement.',
  },
  {
    question: 'What size AC unit do I need for my home?',
    answer:
      "The right AC size depends on several factors including your home\u2019s square footage, insulation, number of windows, and sun exposure. An oversized unit wastes energy and creates humidity problems, while an undersized unit can\u2019t keep up. We perform a detailed load calculation to recommend the perfect size for your home.",
  },
  {
    question: 'Do you offer financing for new HVAC installations?',
    answer:
      'Yes! We understand that a new HVAC system is a significant investment. We offer flexible financing options with competitive rates to help make your new system affordable. Ask us about our current financing promotions when you schedule your free estimate.',
  },
  {
    question: 'How can I improve my indoor air quality?',
    answer:
      'There are several effective ways to improve your indoor air quality: upgrade to a higher-rated MERV filter, install a whole-home air purifier or UV germicidal light, add a humidifier or dehumidifier as needed, and have your ducts professionally cleaned. We offer free IAQ assessments to identify the best solutions for your home.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      "We proudly serve the entire Greater Toronto Area including Toronto, North York, Scarborough, Etobicoke, Mississauga, Brampton, Vaughan, Richmond Hill, Markham, Pickering, Ajax, Whitby, Oakville, Burlington, Milton, and Newmarket. If you\u2019re not sure if we service your area, give us a call!",
  },
] as const

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Call Us',
    description:
      'Reach out by phone or through our online form. We listen to your needs and schedule a convenient time.',
  },
  {
    step: 2,
    title: 'Free Estimate',
    description:
      'Our technician visits your home, assesses the situation, and provides a transparent, no-obligation quote.',
  },
  {
    step: 3,
    title: 'Expert Service',
    description:
      'Our licensed technicians complete the work efficiently and professionally, respecting your home and time.',
  },
  {
    step: 4,
    title: 'Satisfaction Guaranteed',
    description:
      "We follow up to make sure everything is working perfectly. If you\u2019re not satisfied, we make it right.",
  },
] as const
