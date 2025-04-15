import Image from 'next/image'
import React from 'react'

const Advert = () => {
    const advert = "/images/advert.png"
  return (
    <div>
      <Image src={advert} alt='advert' width={1176} height={206} className='w-[1176px] h-[206px]'/>
    </div>
  )
}

export default Advert