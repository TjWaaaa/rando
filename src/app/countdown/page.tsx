'use client'

import React, { useState, useEffect } from 'react'

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    weeks: 0,
    days: 0,
    daysTotal: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Berechne Gesamttage für Kurz-Modus aus den anderen Werten
  const totalDaysShortMode = timeLeft.months * 30 + timeLeft.weeks * 7 + timeLeft.days

  const [showExtended, setShowExtended] = useState(false)

  useEffect(() => {
    const targetDate = new Date('2026-03-29T14:25:00')

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft({
          months: 0,
          weeks: 0,
          days: 0,
          daysTotal: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        return
      }

      // Konstanten für Zeiteinheiten in Millisekunden
      const MS_PER_SECOND = 1000
      const MS_PER_MINUTE = 60 * MS_PER_SECOND
      const MS_PER_HOUR = 60 * MS_PER_MINUTE
      const MS_PER_DAY = 24 * MS_PER_HOUR

      // Berechne Gesamttage (für Kurz-Modus): alle Tage vom jetzt bis zum Zieldatum
      const daysTotal = Math.floor(difference / MS_PER_DAY)

      // Rest nach gesamten Tagen
      const remainingAfterDaysTotal = difference % MS_PER_DAY
      const hours = Math.floor(remainingAfterDaysTotal / MS_PER_HOUR)
      const remainingAfterHours = remainingAfterDaysTotal % MS_PER_HOUR
      const minutes = Math.floor(remainingAfterHours / MS_PER_MINUTE)
      const seconds = Math.floor((remainingAfterHours % MS_PER_MINUTE) / MS_PER_SECOND)

      // Für Lang-Modus: Berechne Monate, Wochen und Tage (nach Monate/Wochen Abzug)
      const months = Math.floor(daysTotal / 30)
      const remainingDaysAfterMonths = daysTotal % 30
      const weeks = Math.floor(remainingDaysAfterMonths / 7)
      const days = remainingDaysAfterMonths % 7

      setTimeLeft({
        months,
        weeks,
        days,
        daysTotal: 0, // Wird über totalDaysShortMode berechnet
        hours,
        minutes,
        seconds,
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white flex flex-col items-center justify-center w-full min-h-screen">
      <div
        className="min-h-screen relative w-full overflow-hidden flex flex-col items-center justify-center px-4 py-8 sm:py-12"
        style={{
          backgroundImage:
            'linear-gradient(151.018deg, rgb(219, 234, 254) 0%, rgb(243, 232, 255) 50%, rgb(252, 231, 243) 100%)',
        }}
      >
        {/* Main Content */}
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 items-center w-full">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-10 sm:leading-12 md:leading-14 lg:leading-15 text-center text-[#1e2939] font-['Arimo:Regular',sans-serif]">
            Nur noch so lange...
          </h1>

          {/* Extended Mode: Months and Weeks */}
          {showExtended && (
            <div className="flex gap-4 sm:gap-6 md:gap-8 items-center justify-center">
              {/* Months */}
              <div className="flex flex-col gap-1 sm:gap-2 items-center">
                <div
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {timeLeft.months}
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#364153]">Monate</p>
              </div>

              {/* Separator */}
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#d1d5dc]">•</div>

              {/* Weeks */}
              <div className="flex flex-col gap-1 sm:gap-2 items-center">
                <div
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, rgb(246, 51, 154) 0%, rgb(255, 32, 86) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {timeLeft.weeks}
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#364153]">Wochen</p>
              </div>
            </div>
          )}

          {/* Card with Countdown */}
          <div className="bg-white/50 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 backdrop-blur w-full max-w-sm sm:max-w-2xl md:max-w-4xl">
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 items-center justify-center">
              {/* Days */}
              <div className="flex flex-col gap-1 items:center">
                <div
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center"
                  style={{
                    backgroundImage: 'linear-gradient(138.102deg, rgb(43, 127, 255) 0%, rgb(79, 57, 246) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {showExtended
                    ? timeLeft.days.toString().padStart(2, '0')
                    : totalDaysShortMode.toString().padStart(2, '0')}
                </div>
                <p className="text-[#4a5565] text-xs sm:text-sm md:text-base lg:text-lg font-normal text-center">
                  Tage
                </p>
              </div>

              <p className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-[#99a1af]">:</p>

              {/* Hours */}
              <div className="flex flex-col gap-1 items-center">
                <div
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center"
                  style={{
                    backgroundImage: 'linear-gradient(138.102deg, rgb(97, 95, 255) 0%, rgb(152, 16, 250) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <p className="text-[#4a5565] text-xs sm:text-sm md:text-base lg:text-lg font-normal text-center">Std</p>
              </div>

              <p className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-[#99a1af]">:</p>

              {/* Minutes */}
              <div className="flex flex-col gap-1 items-center">
                <div
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center"
                  style={{
                    backgroundImage: 'linear-gradient(138.102deg, rgb(173, 70, 255) 0%, rgb(230, 0, 118) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <p className="text-[#4a5565] text-xs sm:text-sm md:text-base lg:text-lg font-normal text-center">Min</p>
              </div>

              <p className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-[#99a1af]">:</p>

              {/* Seconds */}
              <div className="flex flex-col gap-1 items-center">
                <div
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center"
                  style={{
                    backgroundImage: 'linear-gradient(138.102deg, rgb(246, 51, 154) 0%, rgb(231, 0, 11) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <p className="text-[#4a5565] text-xs sm:text-sm md:text-base lg:text-lg font-normal text-center">Sek</p>
              </div>
            </div>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowExtended(false)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                showExtended ? 'bg-[#4f39f6] text-white shadow-lg' : 'bg-white text-[#4f39f6] border-2 border-[#4f39f6]'
              }`}
            >
              Kurz
            </button>
            <button
              onClick={() => setShowExtended(true)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                !showExtended
                  ? 'bg-[#4f39f6] text-white shadow-lg'
                  : 'bg-white text-[#4f39f6] border-2 border-[#4f39f6]'
              }`}
            >
              Lang
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
