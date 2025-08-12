
'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        CreateWhatsappChatWidget: (options: any) => void;
    }
}

const WhatsAppWidget = () => {
  useEffect(() => {
    const url = 'https://timelinesai-widget.web.app/timelinesWidget.js?user_id=832550';
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    const options = {
      "enabled": true,
      "chatButtonSetting": {
        "backgroundColor": "#00e785",
        "ctaText": "Chat with us",
        "borderRadius": "25",
        "marginLeft": "0",
        "marginRight": "20",
        "marginBottom": "20",
        "ctaIcon": false,
        "position": "right"
      },
      "brandSetting": {
        "brandName": "Nimitz World Wide",
        "brandSubTitle": "undefined",
        "brandImg": "https://i.postimg.cc/cCZdYkTc/471153132-122109371366653918-3126876278288396208-n-removebg-preview.png",
        "welcomeText": "Hi there!\nHow can I help you?",
        "messageText": "Hello, I have a question about {{page_link}}\n",
        "backgroundColor": "#00e785",
        "ctaText": "Chat with us",
        "borderRadius": "25",
        "autoShow": false,
        "phoneNumber": "94777707310"
      }
    };
    s.onload = function() {
      if (window.CreateWhatsappChatWidget) {
        window.CreateWhatsappChatWidget(options);
      }
    };
    const x = document.getElementsByTagName('script')[0];
    if (x && x.parentNode) {
        x.parentNode.insertBefore(s, x);
    } else {
        document.head.appendChild(s);
    }

    return () => {
        const widgetScript = document.querySelector(`script[src="${url}"]`);
        if (widgetScript) {
            widgetScript.remove();
        }
         const widgetElement = document.getElementById('timelines-widget-container');
         if (widgetElement) {
            widgetElement.remove();
         }
    }
  }, []);

  return null;
};

export default WhatsAppWidget;
