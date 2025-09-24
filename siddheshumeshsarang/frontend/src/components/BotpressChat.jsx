// BotpressChat.jsx
import { useEffect } from 'react';

const BotpressChat = () => {
    useEffect(() => {
        // Inject Botpress Webchat script
        const injectScript = document.createElement('script');
        injectScript.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
        injectScript.async = true;
        document.body.appendChild(injectScript);

        // Load Botpress configuration script
        const configScript = document.createElement('script');
        configScript.src = 'https://files.bpcontent.cloud/2025/09/24/14/20250924140524-0KFK0RE8.js';
        configScript.defer = true;
        document.body.appendChild(configScript);

        // Cleanup on unmount
        return () => {
            document.body.removeChild(injectScript);
            document.body.removeChild(configScript);
        };
    }, []);

    return null; // No visible UI needed
};

export default BotpressChat;