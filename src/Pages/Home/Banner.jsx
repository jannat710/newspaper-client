import slide1 from '../../assets/slider/slide5.jpg'
import slide2 from '../../assets/slider/slide2.jpg'
import slide3 from '../../assets/slider/slide3.jpg'
import slide4 from '../../assets/slider/slide4.png'
import slide5 from '../../assets/slider/slide1.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-[50vh] w-full mx-auto' src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[50vh] w-full mx-auto' src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[50vh] w-full mx-auto' src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[50vh] w-full mx-auto' src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[50vh] w-full mx-auto' src={slide5} alt="" /></SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Banner;