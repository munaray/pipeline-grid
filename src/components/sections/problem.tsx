"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Clock, Ban, Users } from "lucide-react";

const problems = [
	{
		icon: Zap,
		title: "Inconsistent pipeline",
		body: "Some weeks your calendar is full. Others it's dead silent. You can't predict revenue or plan for growth.",
	},
	{
		icon: Clock,
		title: "Manual outreach is eating your time",
		body: "Hours on LinkedIn every day with unpredictable results. You're the most expensive person in your business doing the most replaceable task.",
	},
	{
		icon: Ban,
		title: "The alternatives don't stack up",
		body: "An SDR is a six-figure commitment before a single meeting is booked. Paid ads are slow and expensive. Cold email is getting harder.",
	},
	{
		icon: Users,
		title: "Your buyers are on LinkedIn right now",
		body: "They just haven't heard from you consistently, personally and at scale. That's exactly what we fix.",
	},
];

export default function Problem() {
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
			id="the-problem"
			className={`relative bg-background px-6 py-16 sm:px-8 sm:py-24 lg:py-28
				lg:transition-none
				${
					visible
						? "translate-y-0 opacity-100 lg:animate-[slide-up-in_0.7s_ease-out_forwards]"
						: "translate-y-10 opacity-0 lg:opacity-0"
				}
				transition-all duration-700 ease-out`}>
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
					<div className="flex flex-col gap-8">
						<div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
							<div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-black/35 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.34em]">
								<span className="h-2 w-2 rounded-full bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) shadow-[0_0_18px_rgba(139,92,246,0.9)]" />
								<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
									The Problem
								</span>
							</div>

							<h2
								className="text-[clamp(2rem,5.5vw,4.5rem)] font-black leading-none tracking-tight text-white"
								style={{ fontFamily: "var(--font-sora)" }}>
								Sound{" "}
								<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
									familiar?
								</span>
							</h2>
						</div>

						<div className="flex flex-col gap-3">
							{problems.map(({ icon: Icon, title, body }) => (
								<div
									key={title}
									className="flex items-start gap-4 rounded-xl border border-white/12 bg-white/3 px-5 py-4 ring-1 ring-white/4 transition-colors hover:border-white/22 hover:bg-white/5">
									<div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15">
										<Icon size={16} className="text-primary" />
									</div>
									<div className="flex flex-col gap-1.5">
										<p className="text-base font-semibold text-foreground">
											{title}
										</p>
										<p className="text-sm leading-relaxed text-muted-foreground">
											{body}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="flex items-center lg:pl-4">
						<div className="w-full rounded-2xl border border-primary/20 bg-primary/10 p-6 ring-1 ring-primary/10 sm:p-10">
							<blockquote
								className="text-[clamp(1.1rem,2.4vw,1.6rem)] font-bold leading-[1.35] text-foreground"
								style={{ fontFamily: "var(--font-sora)" }}>
								&ldquo;The founders winning right now
								aren&apos;t the ones with the best product.
								They&apos;re the ones showing up in the right
								inboxes,{" "}
								<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
									consistently.
								</span>
								&rdquo;
							</blockquote>

							<p className="mt-6 text-sm leading-relaxed text-muted-foreground">
								LinkedIn has over one billion members. Your
								ideal customer is there. The question isn&apos;t
								whether LinkedIn works, it&apos;s whether your
								approach does. We make sure it does.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
