import React from 'react';
import './style.css';
import { Partytown } from '@builder.io/partytown/react';

export default function App() {
  return (
    <div>
      <Partytown
        debug={false}
        forward={[
          'dataLayer.push',
          'ga',
          'gtag',
          'fbq',
          'GoogleAnalyticsObject',
          '__tag_assistant_forwarder',
        ]}
        resolveUrl={(url) => {
          const proxyMap = {
            'www.google-analytics.com': {
              hostName: 'd2936ub9ht9t2x.cloudfront.net',
            },
            'googleads.g.doubleclick.net': {
              hostName: 'dj4xj0adxksfa.cloudfront.net',
            },
            'www.googletagmanager.com': {
              hostName: 'd39bhx4t4rcr1e.cloudfront.net',
            },
          };
          url.hostname = proxyMap[url.hostname]?.hostName || url.hostname;
          return url;
        }}
      />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
