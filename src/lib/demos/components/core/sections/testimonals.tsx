
  import TestimonialImg01 from '@/assets/images/testimonial-01.jpg'
  import TestimonialImg02 from '@/assets/images/testimonial-02.jpg'
  import TestimonialImg03 from '@/assets/images/testimonial-03.jpg'
  import FancyTestimonialsSlider from '@/lib/components/core/default/testimonalsslider'
 
  
  export default function FancyTestimonialSliderPage() {  
  
    const testimonials = [
      {
        img: TestimonialImg01,
        quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
        name: 'Jessie J',
        role: 'Acme LTD'
      },
      {
        img: TestimonialImg02,
        quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
        name: 'Nick V',
        role: 'Malika Inc.'
      },
      {
        img: TestimonialImg03,
        quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
        name: 'Amelia W',
        role: 'Panda AI'
      }
    ]
  
    return (
      <>
        <main className="relative h-[450px] flex flex-col justify-center bg-slate-50 overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div className="flex justify-center">
  
              <FancyTestimonialsSlider testimonials={testimonials} />
  
            </div>
          </div>
        </main>
  
       
      </>
    )
  }