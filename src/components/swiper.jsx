// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function SwiperComponent() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      slidesPerView={1}
      style={{ width: "100%" }}
    >
      <SwiperSlide>
        <img src="/src/assets/img/banner.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/img/banner2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/img/banner3.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/img/banner4.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

//Ｓwiper 筆記 基本配置
// spaceBetween 滑塊之間的間距（px） 範例:spaceBetween={30}
// slidesPerView 一次顯示幾個滑塊 範例:slidesPerView={1}
// slidesPerGroup 一次滑動幾個滑塊 範例:slidesPerGroup={1}
// speed 滑動速度（毫秒） 範例:speed={500}
// loop 是否無限循環 範例:loop={true}
// centeredSlides 是否居中顯示當前滑塊 範例:centeredSlides={true}
//loopAdditionalSlides 循環額外滑塊數量 範例:loopAdditionalSlides={1} #不懂

//pagination 配置
// pagination={{
//   clickable: true,  可點擊
//   dynamicBullets: true,   動態顯示（只顯示當前附近的點）
// }}

//Autoplay 自動播放
// autoplay={{
//   delay: 3000,   幾秒切換一次
//   disableOnInteraction: false, 用戶操作後是否停止
//   pauseOnMouseEnter: true,  滑鼠懸停時暫停
//   pauseOnFocus: true,  聚焦時暫停
//   reverseDirection: true,  反向播放
//   stopOnLastSlide: true,  到達最後一張時停止
//   stopOnInfinity: true,  無限循環時停止
//   stopOnMouseEnter: true,  滑鼠懸停時停止
//   stopOnMouseLeave: true,  滑鼠離開時停止
//   stopOnTouchStart: true,  觸摸開始時停止
//   stopOnTouchEnd: true,  觸摸結束時停止
//   stopOnTouchMove: true,  觸摸移動時停止
// }}

//響應式設計
// breakpoints={{
// 當螢幕 >= 640px
//   640: {
//     slidesPerView: 2,
//     spaceBetween: 20,
//   },
// 當螢幕 >= 768px
//   768: {
//     slidesPerView: 3,
//     spaceBetween: 30,
//   },
// 當螢幕 >= 1024px
//   1024: {
//     slidesPerView: 4,
//     spaceBetween: 40,
//   },
// }}

//切換效果
// import { EffectFade } from "swiper/modules";
// import "swiper/css/effect-fade";

// <Swiper
//   modules={[EffectFade]}
//   effect="fade"
//   fadeEffect={{
//     crossFade: true
//   }}
// >
// </Swiper>

//3D 效果
// import { EffectCube } from "swiper/modules";
// import "swiper/css/effect-cube";

// <Swiper
//   modules={[EffectCube]}
//   effect="cube"
//   cubeEffect={{
//     shadow: true,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   }}
// >
// </Swiper>

//事件處理
//onSlideChange 滑塊切換時觸發
// onSlideChange={(swiper) => {
//   console.log('當前索引:', swiper.activeIndex);
// }}

//onSwiper 初始化時觸發
// onSwiper={(swiper) => {
//   console.log('Swiper 實例:', swiper);
// 可以保存實例，之後手動控制
// }}

//onReachEnd 到達最後一張時觸發
// onReachEnd={(swiper) => {
//   console.log('到達最後一張');
// }}

//onReachBeginning 到達第一張時觸發
// onReachBeginning={(swiper) => {
//   console.log('到達第一張');
// }}
