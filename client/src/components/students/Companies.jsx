import React from 'react';
import { assets } from '../../assets/assets';

const Companies = () => {
  const logos = [
    { src: assets.microsoft_logo, alt: 'Microsoft' },
    { src: assets.walmart_logo, alt: 'Walmart' },
    { src: assets.accenture_logo, alt: 'Accenture' },
    { src: assets.adobe_logo, alt: 'Adobe' },
    { src: assets.paypal_logo, alt: 'Paypal' },
    { src: assets.grab_logo, alt: 'Grab' },
    { src: assets.netflix_logo, alt: 'Netflix' },
    { src: assets.telkom_university_logo, alt: 'Telkom University' },
    { src: assets.spotify_logo, alt: 'Spotify' },
    { src: assets.slack_logo, alt: 'Slack' },
  ];

  return (
    // 1. Pembungkus Luar (Full-width, untuk padding vertikal seluruh seksi)
    <div className='w-full py-16 sm:py-20'>
      
      {/* 2. Kontainer Dalam (HANYA untuk TULISAN agar posisinya di tengah dan sejajar) */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className='text-base text-gray-500'>Trusted by learners from</p>
      </div>

      {/* 3. Scroller Logo (Diletakkan DI LUAR kontainer dalam agar tetap full-width) */}
      <div className='mt-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]'>
        <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll'>
          {/* Set logo 1 */}
          {logos.map((logo, index) => (
            <li key={`set1-${index}`}>
              <div className='w-28 md:w-32 h-16 flex items-center justify-center'>
                <img src={logo.src} alt={logo.alt} className='max-h-full max-w-full object-contain' />
              </div>
            </li>
          ))}
          {/* Set logo 2 (dan seterusnya untuk mengisi jeda) */}
          {logos.map((logo, index) => (
            <li key={`set2-${index}`} aria-hidden="true">
              <div className='w-28 md:w-32 h-16 flex items-center justify-center'>
                <img src={logo.src} alt={logo.alt} className='max-h-full max-w-full object-contain' />
              </div>
            </li>
          ))}
          {/* ... duplikasi logo lainnya ... */}
        </ul>
      </div>

    </div>
  );
};

export default Companies;