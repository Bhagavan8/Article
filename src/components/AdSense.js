import React, { useEffect } from 'react';

const AdSense = () => {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="YOUR-ADSENSE-ID"
            data-ad-slot="YOUR-AD-SLOT"
            data-ad-format="auto"
        ></ins>
    );
};

export default AdSense;
