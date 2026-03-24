'use client'

import { useState, useEffect, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    )
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="py-16 lg:py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it &mdash; hear from homeowners
            across the GTA.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 lg:p-10 text-center min-h-[280px] flex flex-col justify-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: TESTIMONIALS[current].rating }).map(
                (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                )
              )}
            </div>

            {/* Quote */}
            <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
              &ldquo;{TESTIMONIALS[current].text}&rdquo;
            </blockquote>

            {/* Author */}
            <div>
              <p className="font-heading font-semibold text-primary">
                {TESTIMONIALS[current].name}
              </p>
              <p className="text-gray-500 text-sm">
                {TESTIMONIALS[current].neighborhood}, Toronto
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === current ? 'bg-accent' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
