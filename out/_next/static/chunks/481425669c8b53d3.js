(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(e,t,a)=>{t.exports=e.r(76562)},52683,e=>{"use strict";var t=e.i(43476),a=e.i(71645),s=e.i(18566);let l="http://localhost:3845/assets/afb396f5dc0ad9e2aeaca3a8fa30945ec3b70711.svg";function n(){let e=(0,s.useRouter)(),[n,i]=a.default.useState(!1),[r,o]=a.default.useState(null),[d,m]=a.default.useState(0),[c]=a.default.useState(()=>Array.from({length:120},()=>Math.random())),f=a.default.useRef(null);a.default.useEffect(()=>{if(n){let t=setTimeout(()=>{e.push("/countdown")},3e3);return()=>clearTimeout(t)}},[n,e]);let x=()=>{o({x:Math.random()*(window.innerWidth-88),y:Math.random()*(window.innerHeight-60)}),m(e=>e+1)};return(0,t.jsxs)("div",{className:"bg-white flex flex-col items-center justify-center w-full h-screen overflow-hidden",children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsx)("div",{className:"h-full relative w-full overflow-hidden shrink-0 flex flex-col items-center justify-center",style:{backgroundImage:"linear-gradient(151.018deg, rgb(219, 234, 254) 0%, rgb(243, 232, 255) 50%, rgb(252, 231, 243) 100%)"},children:n?(0,t.jsxs)(t.Fragment,{children:[Array.from({length:30}).map((e,a)=>{let s=a/30*Math.PI*2,n=400+200*c[4*a],i=Math.cos(s)*n,r=Math.sin(s)*n,o=180*s/Math.PI+(c[4*a+1]-.5)*60,d=1.5+1.5*c[4*a+2],m=8+12*c[4*a+3];return(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 pointer-events-none",style:{animation:"flyAirplane var(--duration) ease-out forwards",animationDelay:"var(--delay)",opacity:0,"--duration":`${d}s`,"--delay":`${.3*c[4*a]}s`,"--distance-x":`${i}px`,"--distance-y":`${r}px`,"--rotation":`${o}deg`,"--size":`${m}px`},children:(0,t.jsx)("div",{style:{width:"var(--size)",height:"var(--size)",marginLeft:"calc(var(--size) / -2)",marginTop:"calc(var(--size) / -2)"},children:(0,t.jsx)("img",{alt:"Flying airplane",className:"block w-full h-full",src:l})})},a)}),(0,t.jsxs)("div",{className:"relative z-10 flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 px-4 h-full w-full",children:[(0,t.jsx)("h1",{className:"text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-14 sm:leading-15 md:leading-18 lg:leading-18 text-center text-[#1e2939] font-['Arimo:Regular',sans-serif]",children:"Yayyy! 🎉"}),(0,t.jsx)("p",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-8 sm:leading-10 md:leading-11 text-center text-[#4a5565] font-['Arimo:Regular',sans-serif]",children:"Ich mich auch! 💖"})]})]}):(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center gap-12 h-full w-full",children:[(0,t.jsxs)("div",{className:"relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 animate-slide-in-up",children:[(0,t.jsx)("div",{className:"absolute left-0 top-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32",children:(0,t.jsx)("img",{alt:"Airplane Icon",className:"block w-full h-full",src:l})}),(0,t.jsx)("div",{className:"absolute left-16 sm:left-20 md:left-24 -top-2 sm:-top-3 md:-top-4 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12",children:(0,t.jsx)("img",{alt:"Sparkle Icon",className:"block w-full h-full",src:"http://localhost:3845/assets/b53718d407657bb4acbb01d2f11aae418fb90bb2.svg"})})]}),(0,t.jsx)("div",{className:"flex items-center justify-center px-4 animate-slide-in-up",children:(0,t.jsx)("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-10 sm:leading-12 md:leading-14 lg:leading-15 text-center text-[#1e2939] font-['Arimo:Regular',sans-serif]",children:"Lust auf Norwegen? :)"})}),(0,t.jsxs)("div",{className:"relative h-12 sm:h-14 md:h-15 w-56 sm:w-64 md:w-75 animate-fade-in",children:[(0,t.jsx)("button",{onClick:()=>{i(!0)},className:"absolute left-0 top-0 w-24 sm:w-28 md:w-30.75 h-12 sm:h-14 md:h-15 bg-[#00c950] rounded-full shadow-lg hover:opacity-90 transition-transform duration-300 flex items-center justify-center z-10 cursor-pointer",style:{transform:`scale(${1+.15*d})`,transformOrigin:"center"},children:(0,t.jsx)("span",{className:"text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold font-['Arimo:Bold',sans-serif]",children:"Ja! ❤️"})}),(0,t.jsx)("button",{ref:f,onMouseEnter:x,onClick:x,className:`w-20 sm:w-22 md:w-22 h-12 sm:h-14 md:h-15 bg-[#fb2c36] rounded-full shadow-lg hover:opacity-90 flex items-center justify-center ${r?"fixed":"absolute"}`,style:r?{left:`${r.x}px`,top:`${r.y}px`,zIndex:50}:{left:"140px",top:"0"},children:(0,t.jsx)("span",{className:"text-white text-xs sm:text-sm md:text-base font-bold font-['Arimo:Bold',sans-serif]",children:"Nein"})})]})]})})]})}e.s(["default",()=>n])}]);