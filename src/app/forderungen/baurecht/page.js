import BaurechtBannerSection from '@/components/Forderungen/Baurecht/banner'
import BaurechtPV from '@/components/Forderungen/Baurecht/second'
import EndSection from '@/components/Reusable/end'
import React from 'react'

const page = () => {
  return (
    <div>
      <BaurechtBannerSection/>
      <BaurechtPV/>
      <EndSection/>
    </div>
  )
}

export default page
