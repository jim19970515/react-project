//dayjs
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
dayjs.extend(customParseFormat);
dayjs.extend(localeData);
dayjs.extend(weekday);
//antd
import { Col, Row } from "antd";
import { DatePicker, Select, Button, Form } from "antd";
//libs
import { trackGa4Event } from "../libs/analytics";
const adultOptions = [
  {
    label: "1人",
    value: 1
  },
  {
    label: "2人",
    value: 2
  },
  {
    label: "3人",
    value: 3
  },
  {
    label: "4人",
    value: 4
  }
];
const childOptions = [
  {
    label: "1人",
    value: 1
  },
  {
    label: "2人",
    value: 2
  }
];
export function RoomForm() {
  const roomSearch = () => {
    trackGa4Event("room_search", {});
  };
  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");

  const dateFormat = "YYYY-MM-DD";
  return (
    <>
      <Form layout="vertical">
        <Row justify="center" gutter={[0, 16]} className="py-6">
          <Col span={22}>
            <Form.Item noStyle>
              <DatePicker className="w-full h-12" defaultValue={today} format={dateFormat} />
            </Form.Item>
          </Col>
          <Col span={22}>
            <Form.Item noStyle>
              <DatePicker className="w-full h-12" defaultValue={tomorrow} format={dateFormat} />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item noStyle>
              <Select className="w-full h-12" options={adultOptions} placeholder="成人" />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item noStyle>
              <Select className="w-full h-12" options={childOptions} placeholder="孩童" />
            </Form.Item>
          </Col>
          <Col span={22}>
            <Button onClick={roomSearch} className="w-full !h-10 !bg-[#A12245] !text-white  active:!bg-[#851533]">
              查詢
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
