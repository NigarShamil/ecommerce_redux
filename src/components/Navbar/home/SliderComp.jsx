import React from 'react';
import Slider from "react-slick";

export const SliderComp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"

    }
    return (
        <div>
            <Slider {...settings}>
                <div className='!flex items-center bg-neutral-400 ' >
                    <div className='slider px-8 w-10/12'>
                        <div className='slider-title text-4xl font-bold'>The Best Place For Shopping</div>
                        <div className='slider-text text-lg my-4 text-wrap'>Be it clothing, footwear or accessories, ShopFast offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</div>
                        <div className='slider-btn border rounded-full cursor-pointer text-xl text-neutral-200 w-[150px] h-14 flex items-center justify-center bg-neutral-500 '>Discover</div>
                    </div>
                    <img className='slider_cover' style={{ width: 650, height: 500 }} src="https://i.pinimg.com/564x/dc/41/29/dc41298500917df1ca2e4b0e7bc5b5d6.jpg" />
                </div>
                <div className='!flex items-center bg-gray-400 '>
                    <img className='slider_cover' style={{ width: 650, height: 500 }} src="https://amelialiana.com/wp-content/uploads/2020/06/745AD979-2542-41DB-AD2C-66683D1A00B5.jpg" />
                    <div className='slider-none px-8 w-10/12'> 
                        <div className='slider-title text-4xl font-bold'>The Best Place For Shopping</div>
                        <div className='slider-text text-lg my-4 text-wrap'>Be it clothing, footwear or accessories, ShopFast offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</div>
                        <div className='slider-btn border rounded-full cursor-pointer text-xl text-slate-200 w-[150px] h-14 flex items-center justify-center bg-slate-500 '>Discover</div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
