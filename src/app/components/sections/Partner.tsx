import Image from 'next/image'
import React from 'react'

const Partner = () => {
  return (
      <section className="py-20 bg-white">
          <h2 className="text-4xl font-bold text-center text-orange-500">Nos Partenaires</h2>
          <div className="container mx-auto flex justify-center gap-8 mt-8">
              <Image src="/partner1.png" alt="Partner 1" width={150} height={100} />
              <Image src="/partner2.png" alt="Partner 2" width={150} height={100} />
              <Image src="/partner3.png" alt="Partner 3" width={150} height={100} />
          </div>
      </section>

  )
}

export default Partner