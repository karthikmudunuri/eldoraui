import { Brands } from "@/components/marketing/brands";
import { CallToAction } from "@/components/marketing/cta";
import { Explore } from "@/components/marketing/explore";
import Hero from "@/components/marketing/hero/hero";
import SupportSection from "@/components/marketing/support";
import Testimonials from "@/components/marketing/tweets";



export default function HomePage() {
  return (
    <div>

   
    
    <main className="container pb-36 pt-6 ">
      <Hero/>
      <Explore className="-mt-10 mb-32" />
      <Testimonials />
      <CallToAction className="mt-40" />
     
      
    </main>
    </div>
    
  );
}
