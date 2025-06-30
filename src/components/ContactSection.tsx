'use client';

/* ---------------------------------------------------------
   ContactSection – bordered card form with inline validation
   --------------------------------------------------------- */
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormFields = {
  name: string;
  phone: string;
  email: string;
  reason: string;
  preferredTime: string;
  consent: boolean;
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({ mode: 'onBlur' });

  const onSubmit = (data: FormFields) => {
    console.log('Contact data:', data);
    alert('Thanks! Dr. Serena Blake will contact you within one business day.');
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-[#F7F9FC]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl px-6"
      >
        {/* Card wrapper */}
        <div className="rounded-lg border-2 border-accent/40 bg-white p-8 shadow-sm">
          <h2 className="font-heading text-3xl md:text-4xl text-center text-accent mb-2">
            Get In Touch
          </h2>
          <p className="text-center text-gray-700 mb-8">
            In-person Tue & Thu 10 AM–6 PM · Virtual Mon Wed Fri 1 PM–5 PM
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block font-medium text-[#1e4674] mb-1">Name</label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className={`w-full rounded-md border px-4 py-3 focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-500 ${
                  errors.name ? 'border-red-500 focus:ring-red-400' : 'border-accent/40 focus:ring-accent'
                }`}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium text-[#1e4674] mb-1">Phone</label>
              <input
                type="tel"
                {...register('phone', { required: 'Phone is required' })}
                className={`w-full rounded-md border px-4 py-3 focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-500 ${
                  errors.phone ? 'border-red-500 focus:ring-red-400' : 'border-accent/40 focus:ring-accent'
                }`}
                placeholder="(323) 555-0192"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium text-[#1e4674] mb-1">Email</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                })}
                className={`w-full rounded-md border px-4 py-3 focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-500 ${
                  errors.email ? 'border-red-500 focus:ring-red-400' : 'border-accent/40 focus:ring-accent'
                }`}
                placeholder="serena@blakepsychology.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            {/* Reason */}
            <div>
              <label className="block font-medium text-[#1e4674] mb-1">What brings you here?</label>
              <textarea
                rows={4}
                {...register('reason', { required: 'Please share a brief message' })}
                className={`w-full rounded-md border px-4 py-3 focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-500 ${
                  errors.reason ? 'border-red-500 focus:ring-red-400' : 'border-accent/40 focus:ring-accent'
                }`}
                placeholder="How can I help you?"
              />
              {errors.reason && <p className="mt-1 text-sm text-red-600">{errors.reason.message}</p>}
            </div>

            {/* Preferred time */}
            <div>
              <label className="block font-medium text-[#1e4674] mb-1">Preferred time to reach you</label>
              <input
                type="text"
                {...register('preferredTime', { required: 'Preferred time is required' })}
                className={`w-full rounded-md border px-4 py-3 focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-500 ${
                  errors.preferredTime ? 'border-red-500 focus:ring-red-400' : 'border-accent/40 focus:ring-accent'
                }`}
                placeholder="e.g., Mornings, Afternoons, Evenings"
              />
              {errors.preferredTime && (
                <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
              )}
            </div>

            {/* Consent */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="consent"
                {...register('consent', { required: true })}
                className={`h-5 w-5 rounded border border-accent/40 text-accent focus:ring-0 ${
                  errors.consent ? 'border-red-500' : ''
                }`}
              />
              <label htmlFor="consent" className="text-[#1e4674]">
                I agree to be contacted
              </label>
            </div>
            {errors.consent && <p className="mt-1 text-sm text-red-600">Consent is required</p>}

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-md bg-accent py-3 text-[#1e4674] text-base font-semibold leading-none shadow-md hover:bg-accent/90 focus:outline-none focus:ring-4 focus:ring-accent/40 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
} 