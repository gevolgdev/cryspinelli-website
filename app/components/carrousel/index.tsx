import { useWindowWidth } from "@react-hook/window-size";
import heroCarousel1 from "app/assets/images/hero-carousel-1.png";
import heroCarousel2 from "app/assets/images/hero-carousel-2.png";
import heroCarousel3 from "app/assets/images/hero-carousel-3.png";
import heroCarousel4 from "app/assets/images/hero-carousel-4.png";
import heroCarousel5 from "app/assets/images/hero-carousel-5.png";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Carrousel() {
    const screenSize = useWindowWidth();

    const images: string[] = [
        heroCarousel1,
        heroCarousel2,
        heroCarousel3,
        heroCarousel4,
        heroCarousel5,

        heroCarousel1,
        heroCarousel2,
        heroCarousel3,
        heroCarousel4,
        heroCarousel5,
    ];

    const spaceBetweenByScreenSize = screenSize > 1024 ? 5 : 3;
    console.log("screenSize", screenSize, spaceBetweenByScreenSize);

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay, Thumbs]}
            loop
            thumbs={{ autoScrollOffset: 10 }}
            spaceBetween={spaceBetweenByScreenSize}
            breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
            }}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            speed={4000}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index + image}>
                    <img
                        src={image}
                        alt={`Imagem ${index + 1} do carrossel`}
                        className="w-full flex-shrink-0 object-cover xl:h-[210px] xl:w-[400px]"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export { Carrousel };
