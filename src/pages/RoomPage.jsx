//房間展示頁面
export default function RoomPage() {
  return (
    <div>
      <img
        src="/src/assets/img/room-banner.png"
        alt="room"
        className="w-full h-40 object-cover shadow-lg py-2 bg-[#A12245]/80"
      />
      <h2 className="text-2xl font-bold text-[#A12245] text-center bg-[#A12245]/20 py-1">房型介紹</h2>
      <div className="flex flex-col gap-32 mt-4 px-4 mb-40">
        <div className="relative ">
          <img src="/src/assets/img/banner2.png" alt="room" className="w-full h-64 object-cover shadow-lg" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-fit w-full bg-white/90 text-[#525151] border-2 border-[#A12245] rounded-lg p-2 flex flex-col gap-2">
            <h3 className="text-center text-2xl font-bold ">雙人客房 / 2人</h3>
            <p className="text-center text-sm text-[#525151]">
              雙人客房擁有12坪大空間，一大床寬敞舒適的入住環境，客房以溫暖高貴風格來設計，提供有設計感的家具與優良的備品，營造溫馨舒適的住宿體驗。
            </p>
          </div>
        </div>
        <div className="relative">
          <img src="/src/assets/img/family-room.png" alt="room" className="w-full h-64 object-cover shadow-lg" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-fit w-full bg-white/90 text-[#525151] border-2 border-[#A12245] rounded-lg p-2 flex flex-col gap-2">
            <h3 className="text-center text-2xl font-bold ">溫馨家庭房 / 4人</h3>
            <p className="text-center text-sm text-[#525151]">
              溫馨家庭房擁有18坪大空間，兩張大床寬敞舒適的入住環境，客房以溫暖高貴風格來設計，提供有設計感的家具與優良的備品，營造溫馨舒適的住宿體驗。
            </p>
          </div>
        </div>
        <div className="relative">
          <img src="/src/assets/img/king-room.png" alt="room" className="w-full h-64 object-cover shadow-lg" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-fit w-full bg-white/90 text-[#525151] border-2 border-[#A12245] rounded-lg p-2 flex flex-col gap-2">
            <h3 className="text-center text-2xl font-bold ">高級客房 / 2人</h3>
            <p className="text-center text-sm text-[#525151]">
              高級客房擁有24坪大空間，一大床寬敞舒適的入住環境，客房以金屬風來設計，提供有設計感的家具與優良的備品，營造溫馨舒適的住宿體驗。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
