import React from 'react';

const Banner = () => {
  return (
    <div style={{ backgroundColor: 'transparent', paddingTop: '10%' }}>
        
      <div className="max-w-screen-xl mx-auto text-center">
        
        <img
          src="/still.gif"
          alt="Halen Çalışıyoruz"
          style={{ width: '100%', maxWidth: '400px', display: 'block', margin: '0 auto' }}
        />
        <h1 className="text-2xl font-bold text-white mt-4">Halen Çalışıyoruz</h1>
        <button
          onClick={() => {
            const emailAddress = 'onurylmmazz@gmail.com';
            window.location.href = `mailto:${emailAddress}`;
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 block mx-auto"
        >
          Biz Ulaş!
        </button>
      </div>
    </div>
  );
};

export default Banner;
