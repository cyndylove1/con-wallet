"use client"
import '../globals.css'
import '../styles.css'
import Image from "next/image"
import client1 from "@/public/images/client1.jpg"
import client2 from "@/public/images/client2.jpg"
import {BsQuote} from "react-icons/bs"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import {Navigation, Autoplay } from 'swiper/modules';

export default function Testimonial(){
    return(
        <div>
             <div className="testimonial-title">
                    <h2>What Says Our Customers</h2>
                </div>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{delay:3000,  disableOnInteraction:false,}}
                // navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    // 280:  {
                    //     slidesPerView : 1,
                    //     spaceBetween: 10
                    // },
                    320:  {
                        slidesPerView : 1,
                        spaceBetween: 20
                    },
                    
                }}
            
                >
                
                <SwiperSlide>

               
            <div className="testimonial">
               
                <div className="testimonial-container">
                    <div className="testimonial-content">
                        <div className="testimonial-info">
                            <div> <Image src={client1} className="client-img"/></div>
                           
                            <div className="testimonial-text">
                                <div className="testimonial-text1">
                                    <h5>LusDen</h5>
                                    <p>magna aliqua. Ut</p>
                                </div>
                                <div className="testimonial-quote">
                                    <h5><BsQuote/></h5>

                                </div>
                            </div>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quia illum dolor nihil expedita  perferendis ipsum molestias nobis reiciendis  est saepe? Illo, consequatur assumenda quo rerum quidem</p>

                        </div>
                    </div>
                    <div className="testimonial-content">
                        <div className="testimonial-info">
                            <div> <Image src={client2} className="client-img"/></div>
                           
                            <div className="testimonial-text">
                                <div className="testimonial-text1">
                                    <h5>Zen Court</h5>
                                    <p>magna aliqua. Ut</p>
                                </div>
                                <div className="testimonial-quote">
                                    <h5><BsQuote/></h5>

                                </div>
                            </div>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quia illum dolor nihil expedita  perferendis ipsum molestias nobis reiciendis  est saepe? Illo, consequatur assumenda quo rerum quidem</p>

                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
                <SwiperSlide>

               
            <div className="testimonial">
                {/* <div className="testimonial-title">
                    <h2>What Says Our Customers</h2>
                </div> */}
                <div className="testimonial-container">
                    <div className="testimonial-content">
                        <div className="testimonial-info">
                            <div> <Image src={client1} className="client-img"/></div>
                           
                            <div className="testimonial-text">
                                <div className="testimonial-text1">
                                    <h5>LusDen</h5>
                                    <p>magna aliqua. Ut</p>
                                </div>
                                <div className="testimonial-quote">
                                    <h5><BsQuote/></h5>

                                </div>
                            </div>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia illum dolor nihil expedita  perferendis ipsum molestias nobis reiciendis  est saepe? Illo, consequatur assumenda quo rerum quidem</p>

                        </div>
                    </div>
                    <div className="testimonial-content">
                        <div className="testimonial-info">
                            <div> <Image src={client2} className="client-img"/></div>
                           
                            <div className="testimonial-text">
                                <div className="testimonial-text1">
                                    <h5>Zen Court</h5>
                                    <p>magna aliqua. Ut</p>
                                </div>
                                <div className="testimonial-quote">
                                    <h5><BsQuote/></h5>

                                </div>
                            </div>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia illum dolor nihil expedita perferendis ipsum molestias nobis reiciendis est saepe? Illo, consequatur assumenda quo rerum quidem</p>

                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            </Swiper>
            
        </div>
        
    )
}