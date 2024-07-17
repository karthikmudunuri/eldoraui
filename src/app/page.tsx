import { Brands } from "@/components/marketing/brands";
import { CallToAction } from "@/components/marketing/cta";
import { Explore } from "@/components/marketing/explore";
import Hero from "@/components/marketing/hero/hero";



export default function HomePage() {
  return (
    <div>

   
    
    <main className="container pb-36 pt-6 ">
      <Hero/>
      
    
      
     
      <Explore className="-mt-10" />
      <CallToAction className="mt-40" />
    </main>
    </div>
    
  );
}
