//首頁
import { SwiperComponent } from "../components/swiper";
import { Col, Row } from "antd";
import { DatePicker, Select, Button } from "antd";

// dayjs
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
dayjs.extend(customParseFormat);
dayjs.extend(localeData);
dayjs.extend(weekday);

// images
import newMessageImg from "../assets/img/new-message.png";

const adultOptions = [
  {
    value: 1
  },
  {
    value: 2
  },
  {
    value: 3
  },
  {
    value: 4
  }
];
const childOptions = [
  {
    value: 1
  },
  {
    value: 2
  }
];
export default function HomePage() {
  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");

  const dateFormat = "YYYY-MM-DD";

  return (
    <div>
      <SwiperComponent />
      <div>
        <Row justify="center" gutter={[0, 16]} className="py-6">
          <Col span={22}>
            <DatePicker className="w-full h-12" defaultValue={today} format={dateFormat} />
          </Col>
          <Col span={22}>
            <DatePicker className="w-full h-12" defaultValue={tomorrow} format={dateFormat} />
          </Col>
          <Col span={11}>
            <Select className="w-full h-12" options={adultOptions} placeholder="成人" />
          </Col>
          <Col span={11}>
            <Select className="w-full h-12" options={childOptions} placeholder="孩童" />
          </Col>
          <Col span={22}>
            <Button className="w-full !h-10 !bg-[#A12245] !text-white  active:!bg-[#851533]">查詢</Button>
          </Col>
        </Row>
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
