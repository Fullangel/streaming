// Swiper
const swiper = new Swiper('.popular-content', {
    slidesPerView: 1,
    spaceBetween: 10, 
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigatin: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        280:{
            slidesPerView: 1,
            spaceBetween: 10, 
        },
        320:{
            slidesPerView: 2,
            spaceBetween: 10, 
        },
        510:{
            slidesPerView: 2,
            spaceBetween: 10, 
        },
        758:{
            slidesPerView: 3,
            spaceBetween: 15, 
        },
        900:{
            slidesPerView: 4,
            spaceBetween: 20, 
        }
    }
})
// SHOW VIDEO
let video = document.querySelector('.video-container');
let myVideo = document.querySelector('#video');
let closeVideo = document.querySelector('.close-video');

closeVideo.onclick = () => {
    video.classList.remove('show-video');
    // PAUSE VIDEO
    myVideo.pause();
}