import { useState, useEffect } from "react";

/**
 * 品牌載入動畫組件
 * 1. Logo 淡入 + 縮放動畫
 * 2. 載入指示器（三個圓點跳躍動畫）
 * 3. 平滑淡出效果
 * 4. 確保最小顯示時間（1.5秒）提供良好用戶體驗
 * 5. 監聽資源載入完成
 */
export function SplashScreen({ onLoaded }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 確保最小顯示時間（1.5秒）和資源載入完成
    const minDisplayTime = 1500; // 1.5秒
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        // 開始淡出動畫
        setIsFading(true);

        // 淡出動畫完成後隱藏並調用回調
        setTimeout(() => {
          setIsVisible(false);
          if (onLoaded) onLoaded();
        }, 500); // 淡出動畫持續時間
      }, remainingTime);
    };

    // 檢查頁面是否已經載入
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [onLoaded]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#ffd6e2] transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Logo 容器 - 淡入和縮放動畫 */}
        <div
          className={`transform transition-all duration-700 ${
            isFading ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
          style={{
            animation: isFading ? "none" : "fadeInScale 0.7s ease-out"
          }}
        >
          <img src="/src/assets/img/logo.png" alt="Logo" className="h-24 w-auto mb-8" />
        </div>

        {/* 載入指示器 - 三個圓點動畫 */}
        <div className="flex items-center gap-2 mt-4">
          <div
            className="w-2 h-2 rounded-full bg-[#A12245]"
            style={{
              animation: isFading ? "none" : "bounce 1.4s infinite",
              animationDelay: "0s"
            }}
          />
          <div
            className="w-2 h-2 rounded-full bg-[#A12245]"
            style={{
              animation: isFading ? "none" : "bounce 1.4s infinite",
              animationDelay: "0.2s"
            }}
          />
          <div
            className="w-2 h-2 rounded-full bg-[#A12245]"
            style={{
              animation: isFading ? "none" : "bounce 1.4s infinite",
              animationDelay: "0.4s"
            }}
          />
        </div>
      </div>

      {/* 自定義動畫樣式 */}
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          40% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
