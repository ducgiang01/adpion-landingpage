'use client';
import { useEffect } from 'react';

export default function FacebookPixel() {
    useEffect(() => {
        // Kiểm tra xem pixel đã được load chưa
        if (typeof window !== 'undefined' && !window.fbq) {
            // Load Facebook Pixel script với mã chính xác từ Meta
            const script = document.createElement('script');
            script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1859108128152076');
        fbq('track', 'PageView');
      `;
            document.head.appendChild(script);

            // Thêm noscript fallback
            const noscript = document.createElement('noscript');
            noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1859108128152076&ev=PageView&noscript=1" />`;
            document.head.appendChild(noscript);
        }
    }, []);

    return null;
}

// Declare global fbq function
declare global {
    interface Window {
        fbq: any;
    }
}
