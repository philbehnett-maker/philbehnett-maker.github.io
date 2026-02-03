(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52683,e=>{"use strict";var s=e.i(43476),r=e.i(71645);let t=({state:e="idle",size:t=200,className:a="",onClick:o})=>{let n=(0,r.useCallback)(()=>`mf-${e}`,[e]);return(0,s.jsxs)("div",{className:`moose-wrapper ${a}`,style:{width:t,height:t},onClick:o,children:[(0,s.jsx)("style",{children:`
        .moose-wrapper {
          position: relative;
          cursor: pointer;
        }
        
        .mf-svg {
          width: 100%;
          height: 100%;
          display: block;
          filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3));
        }

        /* IDLE */
        .mf-idle .body-group {
          animation: idle-breathe 5s ease-in-out infinite;
        }
        .mf-idle .wing-left {
          animation: idle-wing-l 6s ease-in-out infinite;
        }
        .mf-idle .wing-right {
          animation: idle-wing-r 6s ease-in-out infinite;
        }
        .mf-idle .tail-feathers {
          animation: idle-tail 7s ease-in-out infinite;
        }
        
        /* THINKING */
        .mf-thinking .body-group {
          animation: think-alert 2.5s ease-in-out infinite;
        }
        .mf-thinking .wing-left,
        .mf-thinking .wing-right {
          animation: think-wings 0.8s ease-in-out infinite alternate;
        }
        .mf-thinking .ear-left,
        .mf-thinking .ear-right {
          animation: think-ears 1.5s ease-in-out infinite;
        }
        .mf-thinking .glow-ring {
          opacity: 1;
          animation: glow-pulse 2s ease-in-out infinite;
        }
        
        /* TALKING */
        .mf-talking .body-group {
          animation: talk-engage 0.6s ease-in-out infinite;
        }
        .mf-talking .wing-left {
          animation: talk-wing-l 1s ease-in-out infinite;
        }
        .mf-talking .wing-right {
          animation: talk-wing-r 1s ease-in-out infinite;
        }
        .mf-talking .beak {
          animation: talk-beak 0.35s ease-in-out infinite;
        }
        
        /* SUCCESS */
        .mf-success .body-group {
          animation: success-proud 0.8s cubic-bezier(0.34, 1.2, 0.64, 1) infinite;
        }
        .mf-success .wing-left {
          animation: success-wing-l 0.6s ease-out forwards;
        }
        .mf-success .wing-right {
          animation: success-wing-r 0.6s ease-out forwards;
        }
        .mf-success .crown-glow {
          opacity: 1;
          animation: crown-shine 1s ease-in-out infinite;
        }
        
        /* ERROR */
        .mf-error .body-group {
          animation: error-wary 0.4s ease-in-out infinite;
        }
        .mf-error .wing-left,
        .mf-error .wing-right {
          animation: error-wings 0.5s ease-out forwards;
        }
        .mf-error .ear-left,
        .mf-error .ear-right {
          animation: error-ears 0.4s ease-out forwards;
        }
        
        /* GREETING */
        .mf-greeting .body-group {
          animation: greet-nod 0.8s ease-in-out infinite;
        }
        .mf-greeting .wing-right {
          animation: greet-wing 0.5s ease-in-out infinite alternate;
          transform-origin: 75% 70%;
        }

        /* KEYFRAMES */
        @keyframes idle-breathe {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes idle-wing-l {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-2deg); }
        }
        
        @keyframes idle-wing-r {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(2deg); }
        }
        
        @keyframes idle-tail {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(1deg); }
        }
        
        @keyframes think-alert {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes think-wings {
          0% { transform: translateY(0); }
          100% { transform: translateY(-4px); }
        }
        
        @keyframes think-ears {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes talk-engage {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes talk-wing-l {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-5deg); }
        }
        
        @keyframes talk-wing-r {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
        }
        
        @keyframes talk-beak {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.85); }
        }
        
        @keyframes success-proud {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.01); }
        }
        
        @keyframes success-wing-l {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-18deg) translateY(-5px); }
        }
        
        @keyframes success-wing-r {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(18deg) translateY(-5px); }
        }
        
        @keyframes crown-shine {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }
        
        @keyframes error-wary {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }
        
        @keyframes error-wings {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(5deg) translateY(3px); }
        }
        
        @keyframes error-ears {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-8deg); }
        }
        
        @keyframes greet-nod {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(1deg); }
        }
        
        @keyframes greet-wing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(10deg); }
        }
        
        .glow-ring { opacity: 0; transition: opacity 0.3s; }
        .crown-glow { opacity: 0; transition: opacity 0.3s; }
      `}),(0,s.jsxs)("svg",{viewBox:"0 0 200 200",className:`mf-svg ${n()}`,children:[(0,s.jsxs)("defs",{children:[(0,s.jsxs)("linearGradient",{id:"furDark",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:"#5c4a3d"}),(0,s.jsx)("stop",{offset:"100%",stopColor:"#3d3029"})]}),(0,s.jsxs)("linearGradient",{id:"furMid",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:"#8b7355"}),(0,s.jsx)("stop",{offset:"50%",stopColor:"#6d5a47"}),(0,s.jsx)("stop",{offset:"100%",stopColor:"#4a3d32"})]}),(0,s.jsxs)("linearGradient",{id:"furLight",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:"#a69076"}),(0,s.jsx)("stop",{offset:"100%",stopColor:"#8b7355"})]}),(0,s.jsxs)("linearGradient",{id:"furChest",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:"#d4c4a8"}),(0,s.jsx)("stop",{offset:"100%",stopColor:"#b8a88c"})]}),(0,s.jsxs)("linearGradient",{id:"antler",x1:"50%",y1:"100%",x2:"50%",y2:"0%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:"#6b5d4d"}),(0,s.jsx)("stop",{offset:"30%",stopColor:"#9c8b74"}),(0,s.jsx)("stop",{offset:"70%",stopColor:"#c4b59c"}),(0,s.jsx)("stop",{offset:"100%",stopColor:"#e0d5c3"})]}),(0,s.jsxs)("linearGradient",{id:"wingPrimary",x1:"100%",y1:"0%",x2:"0%",y2:"100%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:"#2d4a3e"}),(0,s.jsx)("stop",{offset:"40%",stopColor:"#1f3830"}),(0,s.jsx)("stop",{offset:"100%",stopColor:"#162822"})]}),(0,s.jsxs)("linearGradient",{id:"wingSecondary",x1:"100%",y1:"0%",x2:"0%",y2:"100%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:"#4a6b5a"}),(0,s.jsx)("stop",{offset:"50%",stopColor:"#3d5a4a"}),(0,s.jsx)("stop",{offset:"100%",stopColor:"#2d4a3e"})]}),(0,s.jsxs)("linearGradient",{id:"wingAccent",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:"#c9a962"}),(0,s.jsx)("stop",{offset:"50%",stopColor:"#a68b4b"}),(0,s.jsx)("stop",{offset:"100%",stopColor:"#8b7340"})]}),(0,s.jsxs)("radialGradient",{id:"eyeOuter",cx:"50%",cy:"50%",r:"50%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:"#4a3d28"}),(0,s.jsx)("stop",{offset:"100%",stopColor:"#2a1f14"})]}),(0,s.jsxs)("radialGradient",{id:"eyeInner",cx:"30%",cy:"30%",r:"60%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:"#c9a962"}),(0,s.jsx)("stop",{offset:"60%",stopColor:"#8b6b2a"}),(0,s.jsx)("stop",{offset:"100%",stopColor:"#5a4420"})]}),(0,s.jsxs)("linearGradient",{id:"beak",x1:"50%",y1:"0%",x2:"50%",y2:"100%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:"#4a4038"}),(0,s.jsx)("stop",{offset:"100%",stopColor:"#2d2620"})]}),(0,s.jsxs)("radialGradient",{id:"glowGold",cx:"50%",cy:"50%",r:"50%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:"#c9a962",stopOpacity:"0.4"}),(0,s.jsx)("stop",{offset:"100%",stopColor:"#c9a962",stopOpacity:"0"})]}),(0,s.jsxs)("filter",{id:"softGlow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[(0,s.jsx)("feGaussianBlur",{stdDeviation:"3",result:"blur"}),(0,s.jsxs)("feMerge",{children:[(0,s.jsx)("feMergeNode",{in:"blur"}),(0,s.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,s.jsx)("circle",{className:"glow-ring",cx:"100",cy:"95",r:"75",fill:"url(#glowGold)"}),(0,s.jsx)("ellipse",{className:"crown-glow",cx:"100",cy:"35",rx:"30",ry:"20",fill:"url(#glowGold)"}),(0,s.jsxs)("g",{className:"body-group",children:[(0,s.jsxs)("g",{className:"tail-feathers",style:{transformOrigin:"100px 160px"},children:[(0,s.jsx)("path",{d:"M 85 155 Q 70 170 65 185 Q 80 175 90 165 Z",fill:"url(#wingPrimary)"}),(0,s.jsx)("path",{d:"M 95 158 Q 90 175 88 192 Q 98 178 100 165 Z",fill:"url(#wingSecondary)"}),(0,s.jsx)("path",{d:"M 105 158 Q 110 175 112 192 Q 102 178 100 165 Z",fill:"url(#wingSecondary)"}),(0,s.jsx)("path",{d:"M 115 155 Q 130 170 135 185 Q 120 175 110 165 Z",fill:"url(#wingPrimary)"})]}),(0,s.jsxs)("g",{className:"wing-left",style:{transformOrigin:"65px 100px"},children:[(0,s.jsx)("path",{d:"M 62 90 Q 30 75 15 55 Q 18 70 22 82 Q 8 72 5 85 Q 15 95 25 98 Q 10 100 12 115 Q 25 112 35 108 Q 22 120 30 130 Q 42 122 52 115 Q 45 130 55 138 L 62 115 Z",fill:"url(#wingPrimary)"}),(0,s.jsx)("path",{d:"M 60 95 Q 40 85 30 75 Q 35 88 40 95 Q 28 92 25 102 Q 38 102 48 100 Q 38 110 45 118 L 58 108 Z",fill:"url(#wingSecondary)"}),(0,s.jsx)("path",{d:"M 55 92 Q 38 88 28 82",stroke:"url(#wingAccent)",strokeWidth:"3",fill:"none",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 52 102 Q 35 100 25 98",stroke:"url(#wingAccent)",strokeWidth:"2",fill:"none",strokeLinecap:"round",opacity:"0.7"})]}),(0,s.jsxs)("g",{className:"wing-right",style:{transformOrigin:"135px 100px"},children:[(0,s.jsx)("path",{d:"M 138 90 Q 170 75 185 55 Q 182 70 178 82 Q 192 72 195 85 Q 185 95 175 98 Q 190 100 188 115 Q 175 112 165 108 Q 178 120 170 130 Q 158 122 148 115 Q 155 130 145 138 L 138 115 Z",fill:"url(#wingPrimary)"}),(0,s.jsx)("path",{d:"M 140 95 Q 160 85 170 75 Q 165 88 160 95 Q 172 92 175 102 Q 162 102 152 100 Q 162 110 155 118 L 142 108 Z",fill:"url(#wingSecondary)"}),(0,s.jsx)("path",{d:"M 145 92 Q 162 88 172 82",stroke:"url(#wingAccent)",strokeWidth:"3",fill:"none",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 148 102 Q 165 100 175 98",stroke:"url(#wingAccent)",strokeWidth:"2",fill:"none",strokeLinecap:"round",opacity:"0.7"})]}),(0,s.jsx)("ellipse",{cx:"100",cy:"120",rx:"40",ry:"42",fill:"url(#furMid)"}),(0,s.jsx)("ellipse",{cx:"100",cy:"130",rx:"25",ry:"28",fill:"url(#furChest)"}),(0,s.jsx)("ellipse",{cx:"100",cy:"138",rx:"18",ry:"18",fill:"url(#furLight)",opacity:"0.5"}),(0,s.jsx)("path",{d:"M 88 118 Q 92 128 88 140",stroke:"#c4b49a",strokeWidth:"1",fill:"none",opacity:"0.4"}),(0,s.jsx)("path",{d:"M 100 115 Q 100 130 100 145",stroke:"#c4b49a",strokeWidth:"1",fill:"none",opacity:"0.4"}),(0,s.jsx)("path",{d:"M 112 118 Q 108 128 112 140",stroke:"#c4b49a",strokeWidth:"1",fill:"none",opacity:"0.4"}),(0,s.jsx)("ellipse",{cx:"100",cy:"85",rx:"28",ry:"22",fill:"url(#furMid)"}),(0,s.jsx)("ellipse",{cx:"100",cy:"62",rx:"30",ry:"28",fill:"url(#furLight)"}),(0,s.jsx)("path",{d:"M 75 55 Q 85 50 100 48 Q 115 50 125 55 Q 120 62 100 65 Q 80 62 75 55 Z",fill:"url(#furMid)",opacity:"0.6"}),(0,s.jsxs)("g",{className:"ear-left",style:{transformOrigin:"72px 42px"},children:[(0,s.jsx)("path",{d:"M 72 48 Q 60 35 55 25 Q 52 35 58 45 Q 65 50 72 48 Z",fill:"url(#furMid)"}),(0,s.jsx)("path",{d:"M 68 45 Q 62 38 60 32",stroke:"#d4c4a8",strokeWidth:"2",fill:"none",opacity:"0.5"})]}),(0,s.jsxs)("g",{className:"ear-right",style:{transformOrigin:"128px 42px"},children:[(0,s.jsx)("path",{d:"M 128 48 Q 140 35 145 25 Q 148 35 142 45 Q 135 50 128 48 Z",fill:"url(#furMid)"}),(0,s.jsx)("path",{d:"M 132 45 Q 138 38 140 32",stroke:"#d4c4a8",strokeWidth:"2",fill:"none",opacity:"0.5"})]}),(0,s.jsxs)("g",{filter:"url(#softGlow)",children:[(0,s.jsx)("path",{d:"M 78 45 Q 72 30 65 15 M 72 30 Q 60 28 52 22 M 72 30 Q 65 22 58 18 M 68 38 Q 55 38 45 35 M 68 38 Q 58 32 50 28",fill:"none",stroke:"url(#antler)",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("circle",{cx:"65",cy:"15",r:"2.5",fill:"#e0d5c3"}),(0,s.jsx)("circle",{cx:"52",cy:"22",r:"2",fill:"#e0d5c3"}),(0,s.jsx)("circle",{cx:"58",cy:"18",r:"2",fill:"#e0d5c3"}),(0,s.jsx)("circle",{cx:"45",cy:"35",r:"2",fill:"#e0d5c3"}),(0,s.jsx)("circle",{cx:"50",cy:"28",r:"2",fill:"#e0d5c3"}),(0,s.jsx)("path",{d:"M 122 45 Q 128 30 135 15 M 128 30 Q 140 28 148 22 M 128 30 Q 135 22 142 18 M 132 38 Q 145 38 155 35 M 132 38 Q 142 32 150 28",fill:"none",stroke:"url(#antler)",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("circle",{cx:"135",cy:"15",r:"2.5",fill:"#e0d5c3"}),(0,s.jsx)("circle",{cx:"148",cy:"22",r:"2",fill:"#e0d5c3"}),(0,s.jsx)("circle",{cx:"142",cy:"18",r:"2",fill:"#e0d5c3"}),(0,s.jsx)("circle",{cx:"155",cy:"35",r:"2",fill:"#e0d5c3"}),(0,s.jsx)("circle",{cx:"150",cy:"28",r:"2",fill:"#e0d5c3"})]}),(0,s.jsxs)("g",{className:"eyes",children:[(0,s.jsx)("ellipse",{cx:"85",cy:"60",rx:"8",ry:"9",fill:"url(#eyeOuter)"}),(0,s.jsx)("ellipse",{cx:"85",cy:"60",rx:"5",ry:"6",fill:"url(#eyeInner)"}),(0,s.jsx)("ellipse",{cx:"85",cy:"60",rx:"2.5",ry:"3",fill:"#1a1408"}),(0,s.jsx)("circle",{cx:"83",cy:"58",r:"1.5",fill:"#fff",opacity:"0.8"}),(0,s.jsx)("ellipse",{cx:"115",cy:"60",rx:"8",ry:"9",fill:"url(#eyeOuter)"}),(0,s.jsx)("ellipse",{cx:"115",cy:"60",rx:"5",ry:"6",fill:"url(#eyeInner)"}),(0,s.jsx)("ellipse",{cx:"115",cy:"60",rx:"2.5",ry:"3",fill:"#1a1408"}),(0,s.jsx)("circle",{cx:"113",cy:"58",r:"1.5",fill:"#fff",opacity:"0.8"})]}),(0,s.jsx)("path",{d:"M 78 52 Q 85 50 92 52",stroke:"#4a3d32",strokeWidth:"1.5",fill:"none",opacity:"0.5"}),(0,s.jsx)("path",{d:"M 108 52 Q 115 50 122 52",stroke:"#4a3d32",strokeWidth:"1.5",fill:"none",opacity:"0.5"}),(0,s.jsxs)("g",{className:"beak",style:{transformOrigin:"100px 72px"},children:[(0,s.jsx)("path",{d:"M 95 68 Q 100 65 105 68 L 103 75 Q 100 78 97 75 Z",fill:"url(#beak)"}),(0,s.jsx)("ellipse",{cx:"100",cy:"70",rx:"3",ry:"2",fill:"#1a1408",opacity:"0.8"}),(0,s.jsx)("ellipse",{cx:"98",cy:"68",rx:"1.5",ry:"1",fill:"#5a4a3a",opacity:"0.5"})]}),(0,s.jsx)("path",{d:"M 94 77 Q 100 80 106 77",stroke:"#4a3d32",strokeWidth:"1",fill:"none",opacity:"0.4"}),(0,s.jsx)("ellipse",{cx:"85",cy:"162",rx:"8",ry:"4",fill:"#3d3029"}),(0,s.jsx)("ellipse",{cx:"115",cy:"162",rx:"8",ry:"4",fill:"#3d3029"})]})]})]})},a=[{name:"Classifier",role:"Query Routing",description:"Fast-path routing that categorizes queries to get you answers quickly.",color:"bg-green-light"},{name:"Hermes",role:"Deep Reasoning",description:"Handles complex analysis and multi-step problem solving for tough engineering challenges.",color:"bg-gold-dark"},{name:"Coder",role:"Code & Scripts",description:"Writes code, automates workflows, and helps debug your projects.",color:"bg-green-accent"},{name:"Math",role:"Calculations",description:"Engineering math, unit conversions, material calculations, and data analysis.",color:"bg-brown-light"},{name:"Reasoner",role:"Planning",description:"Breaks down complex builds into actionable steps and helps you plan projects.",color:"bg-green-mid"},{name:"Security",role:"Safety First",description:"Keeps your data local and ensures safe operations throughout.",color:"bg-brown-dark"}],o=[{icon:(0,s.jsx)("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"})}),title:"3D Printing & CAD",description:"Works with Bambu Lab printers, Blender, FreeCAD, and other maker tools."},{icon:(0,s.jsx)("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),title:"Runs Locally",description:"Your projects and data never leave your machine. Complete privacy."},{icon:(0,s.jsx)("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"})}),title:"Your Models",description:"Use LM Studio, Ollama, or llama.cpp. Pick the AI models you trust."},{icon:(0,s.jsx)("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),title:"Automation",description:"Script repetitive tasks, batch process files, and automate your workflow."},{icon:(0,s.jsx)("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})}),title:"Engineering Math",description:"Material specs, tolerances, unit conversions, and technical calculations."},{icon:(0,s.jsx)("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),title:"Learn As You Build",description:"Get explanations, tutorials, and guidance while you work on projects."}],n=[{name:"Bambu Lab",icon:"🖨️"},{name:"Blender",icon:"🎨"},{name:"FreeCAD",icon:"📐"},{name:"Arduino",icon:"⚡"},{name:"Python",icon:"🐍"},{name:"Shell",icon:"💻"}];function i(){let[e,i]=(0,r.useState)("idle");return(0,s.jsxs)("div",{className:"min-h-screen",children:[(0,s.jsx)("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-brown-dark/30",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)(t,{size:40,state:"idle"}),(0,s.jsx)("span",{className:"text-xl font-semibold text-cream",children:"Moose"})]}),(0,s.jsxs)("div",{className:"hidden md:flex items-center gap-8",children:[(0,s.jsx)("a",{href:"#features",className:"text-foreground-muted hover:text-gold transition-colors",children:"Features"}),(0,s.jsx)("a",{href:"#agents",className:"text-foreground-muted hover:text-gold transition-colors",children:"Agents"}),(0,s.jsx)("a",{href:"#install",className:"text-foreground-muted hover:text-gold transition-colors",children:"Install"}),(0,s.jsx)("a",{href:"/venezuela-analysis.html",className:"text-foreground-muted hover:text-gold transition-colors",children:"Research"}),(0,s.jsxs)("a",{href:"https://github.com/moosefinch/moose",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-4 py-2 bg-green-light hover:bg-green-accent text-cream rounded-lg transition-colors",children:[(0,s.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"})}),"GitHub"]})]})]})}),(0,s.jsxs)("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden pt-20",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-background via-background to-green-dark/20"}),(0,s.jsxs)("div",{className:"relative z-10 max-w-7xl mx-auto px-6 py-20 text-center",children:[(0,s.jsx)("div",{className:"animate-float mb-8 cursor-pointer inline-block",onMouseEnter:()=>i("greeting"),onMouseLeave:()=>i("idle"),children:(0,s.jsx)(t,{size:180,state:e})}),(0,s.jsx)("h1",{className:"text-5xl md:text-7xl font-bold mb-6",children:(0,s.jsx)("span",{className:"gradient-text",children:"Moose"})}),(0,s.jsx)("p",{className:"text-xl md:text-2xl text-cream mb-6 max-w-3xl mx-auto font-medium",children:"Your local AI engineering assistant"}),(0,s.jsxs)("p",{className:"text-lg md:text-xl text-foreground-muted mb-12 max-w-2xl mx-auto",children:["Making engineering, building, making, and tinkering more accessible & fun.",(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"text-gold",children:"Runs entirely on your machine. Your data stays yours."})]}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[(0,s.jsx)("a",{href:"#install",className:"px-8 py-4 bg-gold hover:bg-gold-dark text-background font-semibold rounded-lg transition-all hover:scale-105",children:"Get Started"}),(0,s.jsx)("a",{href:"https://github.com/moosefinch/moose",target:"_blank",rel:"noopener noreferrer",className:"px-8 py-4 border border-green-accent hover:bg-green-dark text-cream rounded-lg transition-colors",children:"View on GitHub"})]}),(0,s.jsxs)("div",{className:"mt-16",children:[(0,s.jsx)("p",{className:"text-foreground-muted text-sm mb-4",children:"Works with your favorite tools"}),(0,s.jsx)("div",{className:"flex flex-wrap items-center justify-center gap-4",children:n.map((e,r)=>(0,s.jsxs)("span",{className:"px-4 py-2 bg-brown-dark/50 rounded-full text-cream flex items-center gap-2",children:[(0,s.jsx)("span",{children:e.icon}),(0,s.jsx)("span",{children:e.name})]},r))})]})]}),(0,s.jsx)("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",children:(0,s.jsx)("svg",{className:"w-6 h-6 text-foreground-muted",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})]}),(0,s.jsx)("section",{className:"py-16 border-y border-brown-dark/30",children:(0,s.jsx)("div",{className:"max-w-4xl mx-auto px-6 text-center",children:(0,s.jsxs)("p",{className:"text-xl md:text-2xl text-foreground-muted leading-relaxed",children:["Whether you're designing parts in ",(0,s.jsx)("span",{className:"text-gold",children:"Blender"}),", slicing prints for your ",(0,s.jsx)("span",{className:"text-gold",children:"Bambu Lab"}),", writing ",(0,s.jsx)("span",{className:"text-gold",children:"Arduino"})," code, or just figuring out the right bolt size — Moose is there to help."]})})}),(0,s.jsx)("section",{id:"features",className:"py-24 bg-background-secondary",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-6",children:[(0,s.jsxs)("div",{className:"text-center mb-16",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold mb-4 gradient-text",children:"Built for Makers"}),(0,s.jsx)("p",{className:"text-foreground-muted max-w-2xl mx-auto",children:"An AI assistant that understands engineering, respects your privacy, and runs on your hardware."})]}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:o.map((e,r)=>(0,s.jsxs)("div",{className:"p-6 bg-background rounded-xl border border-brown-dark/30 hover:border-gold/30 transition-all hover:-translate-y-1",children:[(0,s.jsx)("div",{className:"w-12 h-12 bg-green-dark rounded-lg flex items-center justify-center text-gold mb-4",children:e.icon}),(0,s.jsx)("h3",{className:"text-xl font-semibold text-cream mb-2",children:e.title}),(0,s.jsx)("p",{className:"text-foreground-muted",children:e.description})]},r))})]})}),(0,s.jsx)("section",{id:"agents",className:"py-24",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-6",children:[(0,s.jsxs)("div",{className:"text-center mb-16",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold mb-4 gradient-text",children:"Specialist Agents"}),(0,s.jsx)("p",{className:"text-foreground-muted max-w-2xl mx-auto",children:"Different problems need different expertise. Moose routes your questions to the right specialist."})]}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:a.map((e,r)=>(0,s.jsxs)("div",{className:"relative p-6 bg-background-secondary rounded-xl border border-brown-dark/30 overflow-hidden group hover:border-gold/30 transition-all",children:[(0,s.jsx)("div",{className:`absolute top-0 left-0 w-1 h-full ${e.color}`}),(0,s.jsxs)("div",{className:"flex items-center gap-3 mb-3",children:[(0,s.jsx)("div",{className:`w-3 h-3 rounded-full ${e.color}`}),(0,s.jsx)("h3",{className:"text-lg font-semibold text-cream",children:e.name})]}),(0,s.jsx)("p",{className:"text-gold text-sm mb-2",children:e.role}),(0,s.jsx)("p",{className:"text-foreground-muted text-sm",children:e.description})]},r))})]})}),(0,s.jsx)("section",{id:"install",className:"py-24 bg-background-secondary",children:(0,s.jsxs)("div",{className:"max-w-4xl mx-auto px-6",children:[(0,s.jsxs)("div",{className:"text-center mb-16",children:[(0,s.jsx)("h2",{className:"text-4xl font-bold mb-4 gradient-text",children:"Quick Start"}),(0,s.jsx)("p",{className:"text-foreground-muted max-w-2xl mx-auto",children:"Get Moose running on your machine. Requires Python 3.11+, Node 18+, and an LLM backend."})]}),(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{className:"p-6 bg-background rounded-xl border border-brown-dark/30",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,s.jsx)("span",{className:"w-8 h-8 bg-gold text-background rounded-full flex items-center justify-center font-bold",children:"1"}),(0,s.jsx)("h3",{className:"text-lg font-semibold text-cream",children:"Clone the repository"})]}),(0,s.jsx)("pre",{className:"bg-green-dark/50 p-4 rounded-lg overflow-x-auto text-sm",children:(0,s.jsxs)("code",{className:"text-cream",children:["git clone https://github.com/moosefinch/moose.git","\n","cd moose"]})})]}),(0,s.jsxs)("div",{className:"p-6 bg-background rounded-xl border border-brown-dark/30",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,s.jsx)("span",{className:"w-8 h-8 bg-gold text-background rounded-full flex items-center justify-center font-bold",children:"2"}),(0,s.jsx)("h3",{className:"text-lg font-semibold text-cream",children:"Run the setup wizard"})]}),(0,s.jsx)("pre",{className:"bg-green-dark/50 p-4 rounded-lg overflow-x-auto text-sm",children:(0,s.jsxs)("code",{className:"text-cream",children:["cd scripts","\n","python setup.py"]})}),(0,s.jsx)("p",{className:"text-foreground-muted text-sm mt-3",children:"Auto-detects your LLM backend and configures everything."})]}),(0,s.jsxs)("div",{className:"p-6 bg-background rounded-xl border border-brown-dark/30",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,s.jsx)("span",{className:"w-8 h-8 bg-gold text-background rounded-full flex items-center justify-center font-bold",children:"3"}),(0,s.jsx)("h3",{className:"text-lg font-semibold text-cream",children:"Install dependencies & start"})]}),(0,s.jsx)("pre",{className:"bg-green-dark/50 p-4 rounded-lg overflow-x-auto text-sm",children:(0,s.jsxs)("code",{className:"text-cream",children:["cd backend","\n","pip install -r requirements.txt","\n","./start.sh"]})})]}),(0,s.jsxs)("div",{className:"p-6 bg-background rounded-xl border border-brown-dark/30",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,s.jsx)("span",{className:"w-8 h-8 bg-gold text-background rounded-full flex items-center justify-center font-bold",children:"4"}),(0,s.jsx)("h3",{className:"text-lg font-semibold text-cream",children:"Open the UI"})]}),(0,s.jsx)("pre",{className:"bg-green-dark/50 p-4 rounded-lg overflow-x-auto text-sm",children:(0,s.jsx)("code",{className:"text-cream",children:"http://localhost:3000"})})]}),(0,s.jsxs)("div",{className:"p-6 bg-green-dark/20 rounded-xl border border-green-accent/30",children:[(0,s.jsxs)("h3",{className:"text-lg font-semibold text-cream mb-4 flex items-center gap-2",children:[(0,s.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.084.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"})}),"Docker Alternative"]}),(0,s.jsx)("pre",{className:"bg-green-dark/50 p-4 rounded-lg overflow-x-auto text-sm",children:(0,s.jsxs)("code",{className:"text-cream",children:["cp profile.yaml.example profile.yaml","\n","# Edit profile.yaml with your LLM backend settings","\n","docker compose up --build"]})})]})]})]})}),(0,s.jsx)("section",{className:"py-24",children:(0,s.jsxs)("div",{className:"max-w-4xl mx-auto px-6 text-center",children:[(0,s.jsx)(t,{size:120,state:"success",className:"mx-auto mb-8"}),(0,s.jsx)("h2",{className:"text-4xl font-bold mb-4 gradient-text",children:"Start Building"}),(0,s.jsx)("p",{className:"text-foreground-muted mb-8 max-w-xl mx-auto",children:"Join makers and engineers who want an AI assistant that respects their privacy and runs locally."}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[(0,s.jsx)("a",{href:"https://github.com/moosefinch/moose",target:"_blank",rel:"noopener noreferrer",className:"px-8 py-4 bg-gold hover:bg-gold-dark text-background font-semibold rounded-lg transition-all hover:scale-105",children:"Star on GitHub"}),(0,s.jsx)("a",{href:"https://github.com/moosefinch/moose/issues",target:"_blank",rel:"noopener noreferrer",className:"px-8 py-4 border border-green-accent hover:bg-green-dark text-cream rounded-lg transition-colors",children:"Report Issues"})]})]})}),(0,s.jsx)("footer",{className:"py-12 border-t border-brown-dark/30",children:(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-6",children:(0,s.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)(t,{size:32,state:"idle"}),(0,s.jsx)("span",{className:"text-cream font-semibold",children:"Moose"})]}),(0,s.jsx)("p",{className:"text-foreground-muted text-sm",children:"Apache 2.0 License. Built in Virginia's Shenandoah Valley."}),(0,s.jsxs)("div",{className:"flex items-center gap-6",children:[(0,s.jsx)("a",{href:"https://github.com/moosefinch/moose",target:"_blank",rel:"noopener noreferrer",className:"text-foreground-muted hover:text-gold transition-colors",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"})})}),(0,s.jsx)("a",{href:"mailto:contact@securefileusa.com",className:"text-foreground-muted hover:text-gold transition-colors",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})})]})]})})})]})}e.s(["default",()=>i],52683)}]);