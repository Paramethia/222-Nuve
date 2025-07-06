import { Hero } from "../components/hero";
import { Services } from "../components/services";
import { Team } from "../components/team";
import { Testimonials } from "../components/testimonials";
import { CTA } from "../components/CTA";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-deep-slate via-steel-blue to-textured-navy">
      <div className="bg-black/20">
      <Hero />
      <Services />
      <Team />
      <Testimonials />
      <CTA />
      </div>
    </div>
  )
}
