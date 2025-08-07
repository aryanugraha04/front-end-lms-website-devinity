import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'
import { useInView } from 'react-intersection-observer';

const TestimonialSection = () => {

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });

  return (
    // 3. PASANG 'ref' PADA PEMBUNGKUS UTAMA SEKSI INI
    <div ref={ref} className='w-full py-14'>
      <div className='max-w-6xl mx-auto px-4 text-center'>
        <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
        <p className='md:text-base text-gray-500 mt-3'>
          Hear from our learners as they share their journeys of transformation, success, and how our
          <br /> platform has made a difference in their lives.
        </p>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mt-14'>
          {dummyTestimonial.map((testimonial, index) => (
            // 4. MODIFIKASI ADA DI SINI
            <div 
              key={index} 
              // Gabungkan kelas asli Anda dengan kelas animasi baru
              className={`text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden transition-all duration-700 ease-in-out ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              // Tambahkan style untuk jeda animasi (stagger)
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* KONTEN KARTU DI BAWAH INI TIDAK ADA YANG BERUBAH SAMA SEKALI */}
              <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
                <img className='h-12 w-12 rounded-full object-cover' src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                  <p className='text-gray-800/80'>{testimonial.role}</p>
                </div>
              </div>
              <div className='p-5 pb-7'>
                <div className='flex gap-0.5'>
                  {[...Array(5)].map((_, i) => (
                    <img className='h-5' key={i} src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} alt="star" />
                  ))}
                </div>
                <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
              </div>
              <a href="#" className='text-blue-500 underline px-5'>Read more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection
