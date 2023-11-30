import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../../assets/slider/new.jpg'
import banner2 from '../../../assets/slider/new2.jpg'
import banner3 from '../../../assets/slider/new31.jpg'
import banner4 from '../../../assets/slider/new32.jpg'
import banner5 from '../../../assets/slider/new33.jpg'
import banner6 from '../../../assets/slider/new4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const Subscription = () => {
    return (
        <div>
            <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-[80vh] w-full mx-auto py-10' src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[80vh] w-full mx-auto py-10' src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[80vh] w-full mx-auto py-10' src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[80vh] w-full mx-auto py-10' src={banner4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[80vh] w-full mx-auto py-10' src={banner5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[80vh] w-full mx-auto py-10' src={banner6} alt="" /></SwiperSlide>
      </Swiper>
            
            
        </div>
    );
};

export default Subscription;