import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem";
import HowItWorks from "@/components/sections/how-it-works";
import WhatsIncluded from "@/components/sections/whats-included";
import WhyUs from "@/components/sections/why-us";
import WhoItsFor from "@/components/sections/who-its-for";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";

export default function Home() {
	return (
		<main>
			<Hero />
			<Problem />
			<HowItWorks />
			<WhatsIncluded />
			<WhyUs />
			<WhoItsFor />
			<FAQ />
			<CTA />
		</main>
	);
}
