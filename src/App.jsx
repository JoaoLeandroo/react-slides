import './App.css'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

function App() {
  const [slidePreview, setSlidePreview] = useState(2)

  const data = [
    { id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    { id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
    { id: '3', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png'},
    { id: '4', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png'}
  ]

  useEffect(() => {

    function handleResize(){
      if(window.innerWidth < 720) {
        setSlidePreview(1)
      }else{
        setSlidePreview(2)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [])

  return (
    <div className='container'>
      <h2>Slide com React JS</h2>

        <Swiper
          slidesPerView={slidePreview}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
                <img src={item.image} alt="slide image" className='slide-img'/>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default App
