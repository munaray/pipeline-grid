"use client";

import { useEffect, useRef, useState } from "react";
import { Users, FileText, Shield, LayoutTemplate, Zap, Gem } from "lucide-react";

const reasons = [
	{
		icon: Users,
		title: "A Human in Every Conversation",
		body: "We automate the connection phase only. The moment someone accepts, a real person takes over. Every reply is read, every conversation is handled manually. That's why our appointments are qualified, not just booked.",
	},
	{
		icon: FileText,
		title: "Copy That Actually Converts",
		body: "Most tools hand you a platform and wish you luck. We write every single message. Copywriting is the difference between a 2% and a 20% reply rate. We take that seriously.",
	},
	{
		icon: Shield,
		title: "LinkedIn Only, No Cold Email",
		body: "We focus entirely on LinkedIn. No domain warm-up, no deliverability issues, no spam folders. Just the platform where your buyers are most active, used properly.",
	},
	{
		icon: LayoutTemplate,
		title: "Profile-First Philosophy",
		body: "Great outreach to a weak profile is wasted effort. We fix your profile before we start outreach so every prospect who visits sees credibility and authority before they've even replied.",
	},
	{
		icon: Zap,
		title: "Results in Week One",
		body: "Most agencies take 4–6 weeks to onboard you. We build your campaign before you sign and launch in your first week. Your first warm conversations start before most agencies have finished their strategy deck.",
	},
	{
		icon: Gem,
		title: "Selective by Design",
		body: "We don't take on everyone. We're selective about who we work with because our model only works when we're fully focused on your pipeline, not juggling fifty accounts at once.",
	},
];

export default function WhyUs() {
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
			id="why-us"
			className={`relative bg-background px-6 py-16 sm:px-8 sm:py-24 lg:py-28
				lg:transition-none
				${visible
					? "translate-y-0 opacity-100 lg:animate-[slide-up-in_0.7s_ease-out_forwards]"
					: "translate-y-10 opacity-0 lg:opacity-0"
				}
				transition-all duration-700 ease-out`}>
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col items-center mx-auto gap-4 text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-black/35 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.34em]">
						<span className="h-2 w-2 rounded-full bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) shadow-[0_0_18px_rgba(139,92,246,0.9)]" />
						<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
							Why Us
						</span>
					</div>

					<h2
						className="text-[clamp(2rem,5.5vw,4.5rem)] font-black leading-none tracking-tight text-white"
						style={{ fontFamily: "var(--font-sora)" }}>
						Not just another{" "}
						<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
							tool.
						</span>
					</h2>

					<p className="max-w-lg text-base leading-relaxed text-muted-foreground">
						There&apos;s no shortage of LinkedIn tools and outreach
						agencies. Here&apos;s what makes us different and why it
						matters.
					</p>
				</div>

				<div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{reasons.map(({ icon: Icon, title, body }) => (
						<div
							key={title}
							className="flex flex-col gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 ring-1 ring-white/[0.04] transition-colors hover:border-primary/20 hover:bg-white/[0.05]">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
								<Icon size={18} className="text-primary" />
							</div>
							<div className="flex flex-col gap-2">
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
		</section>
	);
}
