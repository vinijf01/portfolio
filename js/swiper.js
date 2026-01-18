// js/swiper.js
// Swiper Config
const projectSwiperConfig = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: { clickable: true },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
};

new Swiper(".tech-swiper", {
    ...projectSwiperConfig,
    pagination: {
        ...projectSwiperConfig.pagination,
        el: ".tech-swiper .swiper-pagination"
    }
});

new Swiper(".enterprise-swiper", {
    ...projectSwiperConfig,
    pagination: {
        ...projectSwiperConfig.pagination,
        el: ".enterprise-swiper .swiper-pagination"
    }
});

new Swiper(".personal-swiper", {
    ...projectSwiperConfig,
    pagination: {
        ...projectSwiperConfig.pagination,
        el: ".personal-swiper .swiper-pagination"
    }
});
