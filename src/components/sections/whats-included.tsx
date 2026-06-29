"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
	"Full LinkedIn profile optimisation",
	"Expert content writing that builds authority",
	"ICP targeting & precision LinkedIn search build",
	"Done-for-you copywriting for all sequences",
	"LinkedIn automation (connection phase only)",
	"Dedicated human setter managing all conversations",
	"Prospect qualification before calendar booking",
	"A/B message testing & continuous optimisation",
	"Monthly performance reporting",
	"WhatsApp support — direct access to your setter",
	"VSL landing page built and designed for you",
	"VSL script written to convert prospects into booked calls",
	"Calendly setup & optimisation",
	"Pre-call WhatsApp reminder sequence",
];

export default function WhatsIncluded() {
	const ref = useRef<HTMLElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.06 },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={ref}
			id="whats-included"
			className={`relative bg-background px-6 py-16 sm:px-8 sm:py-24 lg:py-28
				lg:transition-none
				${
					visible
						? "translate-y-0 opacity-100 lg:animate-[slide-up-in_0.7s_ease-out_forwards]"
						: "translate-y-10 opacity-0 lg:opacity-0"
				}
				transition-all duration-700 ease-out`}>
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col items-center gap-4 text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-black/35 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.34em]">
						<span className="h-2 w-2 rounded-full bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) shadow-[0_0_18px_rgba(139,92,246,0.9)]" />
						<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
							What&apos;s Included
						</span>
					</div>

					<h2
						className="text-[clamp(2rem,5.5vw,4.5rem)] font-black leading-none tracking-tight text-white"
						style={{ fontFamily: "var(--font-sora)" }}>
						Everything{" "}
						<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
							Done for you.
						</span>
					</h2>

					<p className="max-w-lg text-base leading-relaxed text-muted-foreground">
						No tools to figure out. No campaigns to manage. No
						courses to complete. We handle it all.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
					{features.map((feature) => (
						<div
							key={feature}
							className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 ring-1 ring-white/[0.04] transition-colors hover:border-primary/25 hover:bg-primary/[0.04]">
							<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15">
								<CheckCircle2 size={15} className="text-primary" />
							</div>
							<p className="text-sm font-medium text-foreground">
								{feature}
							</p>
						</div>
					))}
				</div>

				<div className="mt-10 flex justify-center sm:justify-start">
					<a
						href="#book-a-call"
						className="inline-flex h-11 w-full items-center justify-center rounded-md bg-linear-to-r from-primary via-(--color-brand-light) to-(--color-brand) px-7 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(139,92,246,0.28),inset_0_1px_0_rgba(255,255,255,0.22)] [text-shadow:0_1px_2px_rgba(0,0,0,0.28)] transition-opacity hover:opacity-90 sm:h-12 sm:w-auto sm:min-w-60 sm:rounded-full">
						Book Your Free Strategy Call →
					</a>
				</div>
			</div>
		</section>
	);
}
