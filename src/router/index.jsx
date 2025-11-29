//react router 資料模式
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import RoomPage from "../pages/RoomPage";
import ErrorPage from "../pages/ErrorPage";

//middleware 在導航前後執行，用於認證等操作

//loader 資料載入器，在元件渲染前提供要去的路由資料
//元件中使用 import { useLoaderData } from "react-router";
//useLoaderData() 獲取 loader 的返回值

//action 在表單提交時執行，用於處理表單數據
//lazy 懒加载整个路由定義 element（组件）、loader（数据加载函数）、action（表单提交處理函数）、errorElement（错误组件）、errorElement（错误處理组件）
//shouldRevalidate 控制 loader 是否重新執行
// shouldRevalidate: ({
//   currentUrl,    // 當前 URL
//   nextUrl,       // 下一个 URL
//   formMethod,    // 表单提交方法 ('get' | 'post' | 'put' | 'patch' | 'delete')
//   actionResult,  // action 的执行结果
//   defaultShouldRevalidate // 默认的重新验证行为
// }) => {
//   return true; // 或 false
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "room",
        lazy: async () => {
          const module = await import("../pages/RoomPage");
          return { Component: module.default };
        }
      },
      {
        path: "services",
        lazy: async () => {
          const module = await import("../pages/ServicesPage");
          return { Component: module.default };
        }
      },
      {
        path: "brand",
        lazy: async () => {
          const module = await import("../pages/BrandPage");
          return { Component: module.default };
        }
      },
      {
        path: "contact",
        lazy: async () => {
          const module = await import("../pages/ContactPage");
          return { Component: module.default };
        }
      }
    ]
  }
]);
export default router;
