import Image from 'next/image'

export function Footer() {
  const partners = [
    {
      name: "University of Alberta",
      logo: "/uofa.png",
      width: 220,
      height: 80
    },
    {
      name: "Amii",
      logo: "/amii.png",
      width: 160,
      height: 80
    },
    {
      name: "Alberta Health Services",
      logo: "/ahs.png",
      width: 220,
      height: 80
    },
    {
      name: "CIFAR",
      logo: "/cifar.png",
      width: 160,
      height: 80
    }
  ]

  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="relative hover:grayscale-0 transition-all duration-200"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

