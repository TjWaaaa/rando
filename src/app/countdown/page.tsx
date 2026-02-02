'use client'

import React from 'react'

export default function CountdownPage() {
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
            Noch so lange...
          </h1>

          {/* Top Row - Months and Weeks (Outside Card) */}
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
                1
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
                1
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#364153]">Wochen</p>
            </div>
          </div>

          {/* Card with Countdown - Only Days/Hours/Minutes/Seconds */}
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
                  02
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
                  17
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
                  27
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
                  45
                </div>
                <p className="text-[#4a5565] text-xs sm:text-sm md:text-base lg:text-lg font-normal text-center">Sek</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
