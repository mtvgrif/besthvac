'use client'

import { useState, type FormEvent } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {}
    if (!form.get('name')?.toString().trim()) errs.name = 'Name is required'

    const email = form.get('email')?.toString().trim() || ''
    if (!email) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = 'Invalid email address'

    const phone = form.get('phone')?.toString().trim() || ''
    if (!phone) errs.phone = 'Phone number is required'
    else if (!/^[\d\s\-()+ ]{7,}$/.test(phone))
      errs.phone = 'Invalid phone number'

    if (!form.get('service')?.toString()) errs.service = 'Please select a service'
    if (!form.get('message')?.toString().trim())
      errs.message = 'Message is required'

    return errs
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const validationErrors = validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="font-heading font-semibold text-xl text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700">
          We&apos;ve received your message and will get back to you within 1
          business hour during operating hours. For emergencies, please call us
          directly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-accent font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition ${
            errors.name ? 'border-red-400' : 'border-gray-300'
          }`}
          placeholder="John Smith"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition ${
              errors.email ? 'border-red-400' : 'border-gray-300'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition ${
              errors.phone ? 'border-red-400' : 'border-gray-300'
            }`}
            placeholder="(416) 555-1234"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Service & Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Service Type *
          </label>
          <select
            id="service"
            name="service"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition bg-white ${
              errors.service ? 'border-red-400' : 'border-gray-300'
            }`}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition resize-vertical ${
            errors.message ? 'border-red-400' : 'border-gray-300'
          }`}
          placeholder="Tell us about your HVAC needs..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  )
}
