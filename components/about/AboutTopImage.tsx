import React from 'react';

export default function AboutTopImage() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-[#F5F3ED]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=1200" 
        alt="Global Team"
        className="w-full h-full object-cover"
      />
    </section>
  );
}
