import React from 'react'
import 'swiper/css/swiper.min.css'
import img1 from './_assets/1.jpeg'
import img2 from './_assets/2.jpeg'
import img3 from './_assets/3.jpeg'
import video from './_assets/SampleVideo_1280x720_1mb.mp4'
import Gallery from '../../components/Gallery/Gallery'

const data = [
  {
    type: 'video',
    video: video
  },
  {
    type: 'youtube',
    video: 'https://youtu.be/GLuAIloEWRY'
  },
  {
    type: 'img',
    img: img1
  },
  {
    type: 'img',
    img: img2
  },
  {
    type: 'img',
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
