"use client";

import { useEffect, useRef, useState } from "react";
import { UserCheck, PenLine, Target, MessageCircle, TrendingUp } from "lucide-react";

const steps = [
	{
		number: "01",
		icon: UserCheck,
		title: "Profile Optimisation",
		body: "We rewrite your banner, headline, about section, featured section and experience. Your profile becomes a high-converting landing page before a single message is sent.",
	},
	{
		number: "02",
		icon: PenLine,
		title: "Expert Content",
		body: "We write content that positions you as the authority in your space. When a prospect visits your profile, they see credibility and say yes.",
	},
	{
		number: "03",
		icon: Target,
		title: "Targeted Outreach",
		body: "We build a precision LinkedIn search matching your exact ICP and send personalised connection requests daily. Volume, without sacrificing personalisation.",
	},
	{
		number: "04",
		icon: MessageCircle,
		title: "Human Setter",
		body: "The moment a prospect accepts, automation stops. A real person takes over every conversation qualifying, following up and booking appointments directly into your calendar.",
	},
	{
		number: "05",
		icon: TrendingUp,
		title: "Continuous Optimisation",
		body: "We track reply rates, acceptance rates and appointment quality — testing and refining continuously until the system performs at its peak.",
	},
];

export default function HowItWorks() {
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
			id="how-it-works"
			className={`relative bg-background px-6 py-16 sm:px-8 sm:py-24 lg:py-28
				lg:transition-none
				${visible
					? "translate-y-0 opacity-100 lg:animate-[slide-up-in_0.7s_ease-out_forwards]"
					: "translate-y-10 opacity-0 lg:opacity-0"
				}
				transition-all duration-700 ease-out`}>
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col items-center gap-4 text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-black/35 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.34em]">
						<span className="h-2 w-2 rounded-full bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) shadow-[0_0_18px_rgba(139,92,246,0.9)]" />
						<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
							The System
						</span>
					</div>

					<h2
						className="text-[clamp(2rem,5.5vw,4.5rem)] font-black leading-none tracking-tight text-white"
						style={{ fontFamily: "var(--font-sora)" }}>
						Five steps to a{" "}
						<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
							full calendar
						</span>
					</h2>

					<p className="mt-2 max-w-lg text-base leading-relaxed text-muted-foreground">
						Every part of the system works together. Nothing is left
						to chance, nothing is automated that shouldn&apos;t be.
					</p>
				</div>

				<div className="mt-14 rounded-2xl border border-white/[0.12] bg-white/[0.03] p-8 ring-1 ring-white/[0.04] sm:p-10">
					<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
						{steps.map(({ number, icon: Icon, title, body }) => (
							<div key={number} className="flex flex-col gap-4">
								<span
									className="text-[3.5rem] font-black leading-none text-white/30"
									style={{ fontFamily: "var(--font-sora)" }}>
									{number}
								</span>
								<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
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
			</div>
		</section>
	);
}
