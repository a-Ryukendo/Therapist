'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const quotes = [
  { text: 'Dr. Name helped me regain confidence and establish healthier coping strategies.', author: '— A-S., New Delhi' },
  { text: 'Her warmth and evidence-based techniques turned my grief journey into growth.', author: '— K-R., Mumbai' },
  { text: 'Telehealth sessions fit perfectly into my residency schedule and reduced burnout.', author: '— J-M., Bengaluru' },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-gradient-to-b from-[#F5F0FF]/60 to-white">
    <div className="mx-auto max-w-4xl px-6 text-center">
      <h2 className="font-serif text-3xl md:text-4xl text-gray-900">What Clients Say</h2>
      <p className="mt-2 text-gray-600">Real stories of growth and healing</p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
          spaceBetween={32}
          className="pb-12"
        >
          {quotes.map(({ text, author }) => (
            <SwiperSlide key={text}>
              <div className="mx-auto max-w-xl rounded-xl bg-[#FBF9FF] p-8 shadow-lg flex flex-col items-center gap-4">
                <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-accent" />
                <p className="text-lg italic text-gray-800">“{text}”</p>
                <span className="text-sm text-gray-600">{author}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection; 