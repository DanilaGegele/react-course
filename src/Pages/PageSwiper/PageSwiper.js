import React from 'react'
import 'swiper/css/swiper.min.css'
import img1 from './_assets/1.jpeg'
import img2 from './_assets/2.jpeg'
import img3 from './_assets/3.jpeg'
import Gallery from '../../components/Gallery/Gallery'

const data = [
  {
    img: img1
  },
  {
    img: img2
  },
  {
    img: img3
  }
]

function PageSwiper () {
  return (
    <div>
      <Gallery data={data} />
    </div>
  )
}

export default PageSwiper
