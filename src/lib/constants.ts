export const COMPANY = {
  name: 'Best Technical Inc.',
  shortName: 'BEST',
  domain: 'besthvac.ca',
  phone: '(647) 680-9800',
  phoneHref: 'tel:+16476809800',
  email: 'info@besthvac.ca',
  address: {
    city: 'Toronto',
    province: 'ON',
    full: 'Serving the Greater Toronto Area',
  },
  hours: [
    { days: 'Mon \u2013 Fri', time: '7:00 AM \u2013 8:00 PM' },
    { days: 'Saturday', time: '8:00 AM \u2013 5:00 PM' },
    { days: 'Sunday', time: 'Emergency Only' },
  ],
  founded: 1998,
  yearsExperience: 25,
  tagline: 'Professional HVAC Services',
  subTagline: 'The Best Quality, Price & Time',
  credential: 'Licensed Gas Technician',
  instagram: '@best_technical_inc',
  instagramUrl: 'https://www.instagram.com/best_technical_inc',
  description:
    'Best Technical Inc. provides professional heating and cooling services for residential and commercial properties across the Greater Toronto Area. Licensed Gas Technician \u2014 trusted since 1998.',
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
      'Gas furnace diagnostics, repair, replacement, and high-efficiency upgrades for residential and commercial properties.',
    description: [
      "Your furnace is the heart of your property\u2019s heating system. When it breaks down, you need a Licensed Gas Technician on-site fast. Our certified team diagnoses and repairs all makes and models of gas furnaces, keeping your home or commercial space warm throughout Toronto\u2019s harsh winters.",
      'Whether you need a straightforward repair, a complete furnace replacement, or a brand-new installation for a residential or commercial build, we provide honest assessments and transparent pricing. We\u2019ll help you choose the most energy-efficient option for your property and budget.',
      'All our furnace installations come with a comprehensive warranty and our 100% satisfaction guarantee. We also offer annual maintenance plans to keep your system running at peak efficiency and prevent costly breakdowns.',
    ],
    includes: [
      'Emergency furnace repair (24/7)',
      'High-efficiency furnace installation',
      'Commercial heating systems',
      'Annual maintenance & tune-ups',
      'Thermostat installation & calibration',
      'Carbon monoxide testing',
    ],
  },
  {
    id: 'ac',
    icon: 'Snowflake',
    title: 'AC Repair & Installation',
    shortDescription:
      'Central air, ductless mini-splits, and seasonal tune-ups for homes and businesses. Licensed Gas Technicians on every job.',
    description: [
      "When Toronto\u2019s summer heat hits, you need reliable cooling for your home or business. Our Licensed Gas Technicians provide fast, reliable AC repair services to get your cooling system back up and running quickly. We service all major brands and models across residential and commercial properties.",
      "Planning a new installation? We\u2019ll help you select the perfect unit for your property\u2019s size and your budget. From single-family homes to multi-unit commercial buildings, our installations are done right the first time.",
      'We also offer preventative maintenance plans to keep your AC running smoothly all season long. Regular maintenance extends system life and keeps energy bills low \u2014 critical for both homeowners and business operators.',
    ],
    includes: [
      'Central air conditioning repair',
      'New AC system installation',
      'Commercial cooling systems',
      'Ductless mini-split systems',
      'Seasonal tune-ups & maintenance',
      'Refrigerant recharge & leak repair',
    ],
  },
  {
    id: 'duct-cleaning',
    icon: 'Wind',
    title: 'Duct Cleaning & Installation',
    shortDescription:
      'Full ductwork cleaning, new duct installation, sealing, and insulation for residential and commercial properties.',
    description: [
      "Over time, ductwork accumulates dust, allergens, pet dander, and other contaminants that circulate through your living or working spaces every time your HVAC system runs. Professional duct cleaning removes these pollutants, significantly improving indoor air quality.",
      'Our thorough cleaning process uses industrial-grade equipment to clean every inch of your ductwork \u2014 whether it\u2019s a residential home or a commercial building. We also install new ductwork, seal leaks, and add insulation to maximize efficiency.',
      'For commercial properties, clean ductwork is essential for meeting health and safety standards. For homes, it means healthier air for your family. We recommend cleaning every 3\u20135 years, or more frequently for properties with high occupancy or recent renovations.',
    ],
    includes: [
      'Complete duct system cleaning',
      'New ductwork installation',
      'Commercial ductwork services',
      'Duct sealing & insulation',
      'Dryer vent cleaning',
      'Before & after air quality testing',
    ],
  },
  {
    id: 'water-heater',
    icon: 'Droplets',
    title: 'Water Heater Service',
    shortDescription:
      'Tank and tankless water heater installation, repair, and maintenance for residential and commercial properties.',
    description: [
      "Reliable hot water is essential for any property. Whether you\u2019re dealing with a lack of hot water, strange noises, or leaks, our Licensed Gas Technicians can quickly diagnose and repair the issue. We service both traditional tank and modern tankless water heaters.",
      "For commercial properties with high hot water demands, we design and install systems that meet your capacity needs. For residential upgrades, tankless water heaters offer endless hot water and significant energy savings.",
      'Regular maintenance extends the life of your water heater and maintains efficiency. Our service includes flushing the tank, checking the anode rod, testing safety valves, and inspecting all gas and water connections.',
    ],
    includes: [
      'Tank water heater repair & replacement',
      'Tankless water heater installation',
      'Commercial water heating systems',
      'Annual maintenance & flushing',
      'Gas line inspection & testing',
      'Same-day emergency service',
    ],
  },
  {
    id: 'air-quality',
    icon: 'Leaf',
    title: 'Indoor Air Quality',
    shortDescription:
      'HRV/ERV systems, humidifiers, air filtration, and UV purification for healthier homes and workplaces.',
    description: [
      "Indoor air can be up to five times more polluted than outdoor air. With Canadians spending up to 90% of their time indoors, clean air in your home or workplace is essential for health and well-being.",
      "We offer a complete range of indoor air quality solutions for both residential and commercial properties \u2014 from HRV/ERV ventilation systems and whole-home humidifiers to HEPA filtration and UV air purification. Our team assesses your property\u2019s specific needs and recommends the right solution.",
      'For commercial properties, proper indoor air quality is critical for employee health, productivity, and regulatory compliance. For homes, it means cleaner, fresher air for your family.',
    ],
    includes: [
      'Air quality assessment & testing',
      'HRV/ERV ventilation systems',
      'Whole-home humidifiers',
      'HEPA air filtration',
      'UV air purification',
      'Commercial IAQ compliance',
    ],
  },
  {
    id: 'emergency',
    icon: 'AlertTriangle',
    title: '24/7 Emergency Repairs',
    shortDescription:
      'After-hours emergency HVAC service with same-day response across the GTA. Licensed Gas Technicians on call.',
    description: [
      "HVAC emergencies don\u2019t wait for business hours, and neither do we. Our Licensed Gas Technicians are available 24/7, 365 days a year. When your heating or cooling system fails unexpectedly \u2014 whether at home or at your business \u2014 one call is all it takes.",
      'We keep our service vehicles fully stocked with common parts and equipment so we can resolve most emergencies in a single visit. In most cases we can have a licensed technician at your door within 2\u20134 hours.',
      "There\u2019s never an extra charge for after-hours diagnostics. You get the same transparent, upfront pricing no matter when you call. Your comfort and safety are our top priorities \u2014 residential or commercial.",
    ],
    includes: [
      '24/7/365 availability',
      '2\u20134 hour average response time',
      'No after-hours diagnostic fees',
      'Residential & commercial service',
      'Licensed Gas Technicians on every call',
      'Temporary heating/cooling solutions',
    ],
  },
] as const

export const WHY_CHOOSE_US = [
  {
    icon: 'Award',
    title: '25+ Years Experience',
    description:
      'Proudly serving residential and commercial properties across the GTA since 1998.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Licensed Gas Technician',
    description:
      'All technicians are licensed gas fitters (G2/G3) regulated by TSSA. Fully insured.',
  },
  {
    icon: 'Clock',
    title: 'Same-Day Service',
    description:
      'We understand urgency. Most service calls are completed the same day you call.',
  },
  {
    icon: 'ThumbsUp',
    title: 'Best Quality & Price',
    description:
      'The best quality, price, and time \u2014 that\u2019s our guarantee on every job we take.',
  },
] as const

export const TESTIMONIALS = [
  {
    name: 'Mark R.',
    neighborhood: 'Scarborough',
    rating: 5,
    text: 'Called on a Sunday when our furnace died in January. Best Technical had someone here within 2 hours. Lifesavers.',
  },
  {
    name: 'Priya S.',
    neighborhood: 'North York',
    rating: 5,
    text: 'Professional crew, showed up on time, cleaned up after themselves. New AC unit works perfectly. Fair price too.',
  },
  {
    name: 'David & Lisa T.',
    neighborhood: 'Brampton',
    rating: 5,
    text: "We\u2019ve used Best Technical for our rental properties for years. Always reliable, always honest. Wouldn\u2019t call anyone else.",
  },
] as const

export const SERVICE_AREAS = [
  'Toronto',
  'Scarborough',
  'North York',
  'Etobicoke',
  'Mississauga',
  'Brampton',
  'Markham',
  'Vaughan',
  'Richmond Hill',
] as const

export const TEAM = [
  {
    name: 'The Founder',
    role: 'Owner & Licensed Gas Technician',
    bio: 'A hands-on technician who leads every major installation personally. From wiring furnaces to running ductwork on construction sites, he built Best Technical from the ground up.',
  },
  {
    name: 'Service Team Lead',
    role: 'Senior HVAC Technician',
    bio: 'TSSA-certified with years of field experience across residential and commercial projects. Specializes in high-efficiency systems and complex installations.',
  },
  {
    name: 'Operations Coordinator',
    role: 'Scheduling & Customer Relations',
    bio: 'Ensures every job runs smoothly from your first call to project completion. Coordinates our residential and commercial service teams across the GTA.',
  },
] as const

export const FAQS = [
  {
    question: 'How quickly can you respond to an emergency?',
    answer:
      'We offer 24/7 emergency service across the GTA. In most cases we can have a licensed technician at your door within 2\u20134 hours.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. All our technicians are licensed gas fitters (G2/G3) regulated by TSSA (Technical Standards & Safety Authority). We carry full liability insurance.',
  },
  {
    question: 'Do you service both residential and commercial?',
    answer:
      'Absolutely. From single-family homes to commercial buildings, we handle heating and cooling systems of all sizes.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes, we provide free on-site estimates for installations and major repairs. Call us at (647) 680-9800 to book.',
  },
  {
    question: 'What brands do you service?',
    answer:
      'We service all major brands including Lennox, Carrier, Trane, Goodman, Daikin, Rheem, and more.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve the entire Greater Toronto Area including Toronto, Scarborough, North York, Etobicoke, Mississauga, Brampton, Markham, Vaughan, and Richmond Hill.',
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
      'Our Licensed Gas Technician visits your property, assesses the situation, and provides a transparent, no-obligation quote.',
  },
  {
    step: 3,
    title: 'Expert Service',
    description:
      'Our licensed technicians complete the work efficiently and professionally \u2014 residential or commercial.',
  },
  {
    step: 4,
    title: 'Satisfaction Guaranteed',
    description:
      'We follow up to make sure everything is working perfectly. The best quality, price, and time \u2014 guaranteed.',
  },
] as const
