import { RoomForm } from "../components/roomForm";
import { SwiperComponent } from "../components/swiper";
// images
import newMessageImg from "../assets/img/new-message.png";

export default function HomePage() {
  return (
    <div>
      <SwiperComponent />
      <div>
        <RoomForm />
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-bold w-fit px-2 mx-auto bg-white text-[#A12245] rounded-lg">最新消息</h2>
        <div className="flex justify-center items-center w-full mt-4 px-4 shadow-lg">
          <img src={newMessageImg} alt="news" className="w-full object-contain rounded-2xl py-4" />
        </div>
      </div>
    </div>
  );
}
