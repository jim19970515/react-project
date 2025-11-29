//react router 資料模式
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

//middleware 在導航前後執行，用於認證等操作
//loader 在元件渲染前提供要去的路由資料
//action 在表單提交時執行，用於處理表單數據
//lazy 懒加载整个路由定義 element（组件）、loader（数据加载函数）、action（表单提交處理函数）、errorElement（错误组件）、errorElement（错误處理组件）

const router = createBrowserRouter([
  //首頁
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  //房間展示頁面
  {
    path: "/room",
    lazy: () => import("../pages/RoomPage"),
    errorElement: <ErrorPage />
  },
  //設施與服務頁面
  {
    path: "/services",
    lazy: () => import("../pages/ServicesPage"),
    errorElement: <ErrorPage />
  },
  //品牌頁面
  {
    path: "/brand",
    lazy: () => import("../pages/BrandPage"),
    errorElement: <ErrorPage />
  }
]);
export default router;
