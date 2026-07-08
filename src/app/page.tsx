import Hero from "@/components/sections/hero";
import FounderNote from "@/components/sections/founder-note";
import Problem from "@/components/sections/problem";
import HowItWorks from "@/components/sections/how-it-works";
import WhatsIncluded from "@/components/sections/whats-included";
import WhyUs from "@/components/sections/why-us";
import Team from "@/components/sections/team";
import WhoItsFor from "@/components/sections/who-its-for";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";

export default function Home() {
	return (
		<main>
			<Hero />
			{/* <FounderNote /> */}
			<Problem />
			<HowItWorks />
			<WhatsIncluded />
			<WhyUs />
			<Team />
			<WhoItsFor />
			<Testimonials />
			<FAQ />
			<CTA />
		</main>
	);
}
