import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

import ContactLoader from '@/components/contact/ContactLoader'
import ContactHeading from '@/components/contact/ContactHeading'

// Lazy load non-critical components
const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-600/20 rounded-lg" />
});

// Lazy load icons
const ContactInfo = dynamic(() => import('@/components/contact/ContactInfo'), {
  ssr: true
});

// Add metadata for SEO
export const metadata: Metadata = {
  title: 'Contact | Sajjad Jonayed',
  description: 'Get in touch with me. Fill in the form to start a conversation about your project or opportunities.',
};

// Add revalidation for caching
export const revalidate = 3600;

const ContactPage = () => {
  
  
  return (
    <div className="  w-full min-h-screen bg-dark text-light">
      <ContactLoader/>
      <div className="max-w-[80vw] min-h-screen flex items-center justify-center mx-auto pt-24 bg-dark">
       <div className="flex flex-col space-y-16 md:flex-row  justify-evenly items-start  relative w-full">
       <div className="lg:px-20 md:px-4 md:max-w-md lg:max-w-max">
         <div className=' overflow-hidden  '>
         <ContactHeading/>
         </div>
          <p className="font-body text-xl opacity-80 tracking-[3px] font-extralight text-center md:text-left">Fill in the form to start a conversation</p>
          
          {/* Contact Information */}
          <Suspense fallback={<div className="animate-pulse h-32 bg-gray-600/20 rounded-lg mt-8" />}>
            <ContactInfo />
          </Suspense>
          
        </div>
       
        <div className="md:border-l-2 h-full  w-full md:w-max md:pl-10 lg::ml-10 flex-1 ">
          <Suspense fallback={<div className="animate-pulse h-96 bg-gray-600/20 rounded-lg" />}>
            <ContactForm/>
          </Suspense>
        </div>
       </div>
      </div>
    </div>
  )
}

export default ContactPage