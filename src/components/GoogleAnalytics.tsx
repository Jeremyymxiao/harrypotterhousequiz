'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// 为window添加gtag类型声明
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

// 使用环境变量或默认值
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-M4GXJKKP23';

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (window.gtag) {
      // 当路由变化时，发送页面浏览事件到Google Analytics
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname + (searchParams.toString() ? `?${searchParams.toString()}` : ''),
      })
      console.log('Google Analytics pageview sent for:', pathname)
    }
  }, [pathname, searchParams])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Google Analytics script loaded successfully')
        }}
        onError={(e) => {
          console.error('Error loading Google Analytics script:', e)
        }}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: '${pathname}',
            debug_mode: true
          });
          console.log('Google Analytics initialized with ID: ${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
} 