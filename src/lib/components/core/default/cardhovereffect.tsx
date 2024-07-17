import React from 'react'


const cards = [
  {
    label: "Label",
    title: "Daily Reports",
    description: "Building truly great products is both art and science. It's part intuition and part data.",
    imgSrc: '@/assets/images/card-011.png',
    imgHoverSrc: '@/assets/images/card-01-hover.png'
  },
  {
    label: "Label",
    title: "Advanced Security",
    description: "Building truly great products is both art and science. It's part intuition and part data.",
    imgSrc: '@/assets/images/card-022.png',
    imgHoverSrc: '@/assets/images/card-02-hover.png'
  },
  {
    label: "Label",
    title: "Powerful Analytics",
    description: "Building truly great products is both art and science. It's part intuition and part data.",
    imgSrc: '@/assets/images/card-033.png',
    imgHoverSrc: '@/assets/images/card-03-hover.png'
  }
];

const CardHoverEffect: React.FC = () => {
  return (
    <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden font-inter antialiased">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <section className="grid md:grid-cols-3 gap-6 max-md:max-w-xs mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="group relative [background:linear-gradient(theme(colors.slate.900),theme(colors.slate.900))_padding-box,linear-gradient(45deg,theme(colors.slate.800),theme(colors.slate.600/.8),theme(colors.slate.800))_border-box] before:absolute before:inset-0  before:bg-[length:352px_382px] before:rounded-[inherit] rounded-2xl border border-transparent">
              <div className="relative">
                <div className="px-6 py-5">
                  <div className="font-nycd text-lg text-indigo-500 mb-1">{card.label}</div>
                  <div className="text-lg font-bold text-slate-200 mb-1">{card.title}</div>
                  <p className="text-sm text-slate-500">{card.description}</p>
                </div>
                <div className="relative group-hover:-translate-y-1 transition-transform duration-500 ease-in-out">
                  <img className="group-hover:opacity-0 transition-opacity duration-500" src={card.imgSrc} width="350" height="240" alt={`Card image ${index + 1}`} />
                  <img className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" src={card.imgHoverSrc} width="350" height="240" alt={`Card image ${index + 1} displaying on hover`} aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}

export default CardHoverEffect
