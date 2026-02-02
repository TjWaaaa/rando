'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const imgIcon = 'http://localhost:3845/assets/afb396f5dc0ad9e2aeaca3a8fa30945ec3b70711.svg'
const imgIcon1 = 'http://localhost:3845/assets/b53718d407657bb4acbb01d2f11aae418fb90bb2.svg'

export default function Home() {
  const router = useRouter()
  const [hasClicked, setHasClicked] = React.useState(false)
  const [noButtonPos, setNoButtonPos] = React.useState<{ x: number; y: number } | null>(null)
  const [clickCount, setClickCount] = React.useState(0)
  const [randomValues] = React.useState(() => Array.from({ length: 120 }, () => Math.random()))
  const noButtonRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (hasClicked) {
      const timer = setTimeout(() => {
        router.push('/countdown')
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [hasClicked, router])

  const handleYesClick = () => {
    setHasClicked(true)
  }

  const handleNoHover = () => {
    // Generate random position on screen
    const randomX = Math.random() * (window.innerWidth - 88)
    const randomY = Math.random() * (window.innerHeight - 60)
    setNoButtonPos({ x: randomX, y: randomY })
    setClickCount((prev) => prev + 1)
  }
  return (
    <div className="bg-white flex flex-col items-center justify-center w-full h-screen overflow-hidden">
      <style>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInScale {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slide-in-down {
          animation: slideInDown 0.6s ease-out forwards;
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
          animation-delay: 0.15s;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          animation-delay: 0.15s;
        }
        @keyframes flyAirplane {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(0.3);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--distance-x), var(--distance-y)) rotate(var(--rotation)) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
      <div
        className="h-full relative w-full overflow-hidden shrink-0 flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(151.018deg, rgb(219, 234, 254) 0%, rgb(243, 232, 255) 50%, rgb(252, 231, 243) 100%)',
        }}
      >
        {hasClicked ? (
          // Success State with Flying Airplanes
          <>
            {Array.from({ length: 30 }).map((_, index) => {
              const angle = (index / 30) * Math.PI * 2
              const distance = 400 + randomValues[index * 4] * 200
              const x = Math.cos(angle) * distance
              const y = Math.sin(angle) * distance
              const rotation = (angle * 180) / Math.PI + (randomValues[index * 4 + 1] - 0.5) * 60
              const duration = 1.5 + randomValues[index * 4 + 2] * 1.5
              const size = 8 + randomValues[index * 4 + 3] * 12

              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2 pointer-events-none"
                  style={
                    {
                      animation: `flyAirplane var(--duration) ease-out forwards`,
                      animationDelay: `var(--delay)`,
                      opacity: 0,
                      '--duration': `${duration}s`,
                      '--delay': `${randomValues[index * 4] * 0.3}s`,
                      '--distance-x': `${x}px`,
                      '--distance-y': `${y}px`,
                      '--rotation': `${rotation}deg`,
                      '--size': `${size}px`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    style={{
                      width: `var(--size)`,
                      height: `var(--size)`,
                      marginLeft: `calc(var(--size) / -2)`,
                      marginTop: `calc(var(--size) / -2)`,
                    }}
                  >
                    <img alt="Flying airplane" className="block w-full h-full" src={imgIcon} />
                  </div>
                </div>
              )
            })}

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 px-4 h-full w-full">
              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-14 sm:leading-15 md:leading-18 lg:leading-18 text-center text-[#1e2939] font-['Arimo:Regular',sans-serif]">
                Yayyy! 🎉
              </h1>

              {/* Subheading */}
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-8 sm:leading-10 md:leading-11 text-center text-[#4a5565] font-['Arimo:Regular',sans-serif]">
                Ich mich auch! 💖
              </p>
            </div>
          </>
        ) : (
          // Question State
          <div className="flex flex-col items-center justify-center gap-12 h-full w-full">
            {/* Icons Container */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 animate-slide-in-up">
              <div className="absolute left-0 top-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                <img alt="Airplane Icon" className="block w-full h-full" src={imgIcon} />
              </div>
              <div className="absolute left-16 sm:left-20 md:left-24 -top-2 sm:-top-3 md:-top-4 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12">
                <img alt="Sparkle Icon" className="block w-full h-full" src={imgIcon1} />
              </div>
            </div>

            {/* Heading */}
            <div className="flex items-center justify-center px-4 animate-slide-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-10 sm:leading-12 md:leading-14 lg:leading-15 text-center text-[#1e2939] font-['Arimo:Regular',sans-serif]">
                {'Lust auf Norwegen? :)'}
              </h1>
            </div>

            {/* Buttons Container */}
            <div className="relative h-12 sm:h-14 md:h-15 w-56 sm:w-64 md:w-75 animate-fade-in">
              {/* Yes Button */}
              <button
                onClick={handleYesClick}
                className="absolute left-0 top-0 w-24 sm:w-28 md:w-30.75 h-12 sm:h-14 md:h-15 bg-[#00c950] rounded-full shadow-lg hover:opacity-90 transition-transform duration-300 flex items-center justify-center z-10 cursor-pointer"
                style={{
                  transform: `scale(${1 + clickCount * 0.15})`,
                  transformOrigin: 'center',
                }}
              >
                <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold font-['Arimo:Bold',sans-serif]">
                  Ja! ❤️
                </span>
              </button>

              {/* No Button */}
              <button
                ref={noButtonRef}
                onMouseEnter={handleNoHover}
                onClick={handleNoHover}
                className={`w-20 sm:w-22 md:w-22 h-12 sm:h-14 md:h-15 bg-[#fb2c36] rounded-full shadow-lg hover:opacity-90 flex items-center justify-center ${
                  noButtonPos ? 'fixed' : 'absolute'
                }`}
                style={
                  noButtonPos
                    ? {
                        left: `${noButtonPos.x}px`,
                        top: `${noButtonPos.y}px`,
                        zIndex: 50,
                      }
                    : {
                        left: '140px',
                        top: '0',
                      }
                }
              >
                <span className="text-white text-xs sm:text-sm md:text-base font-bold font-['Arimo:Bold',sans-serif]">
                  Nein
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
