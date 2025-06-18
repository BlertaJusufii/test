import RichtlinenBannerSection from '@/components/Forderungen/Richtlinen/banner'
import RichtlinienPV from '@/components/Forderungen/Richtlinen/second'
import EndSection from '@/components/Reusable/end'
import React from 'react'

const page = () => {
  return (
    <div>
      <RichtlinenBannerSection/>
      <RichtlinienPV/>
      <EndSection/>
    </div>
  )
}

export default page
