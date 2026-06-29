"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

const goodFit = [
	"You run a B2B business with a proven offer and a clear ideal customer",
	"Your pipeline is inconsistent and you're ready to fix it properly",
	"You want qualified appointments, not just activity and vanity metrics",
	"You're done spending hours on manual LinkedIn outreach with unpredictable results",
	"You want a system that runs without you and a real person accountable for results",
];

const badFit = [
	"You're pre-revenue or still figuring out product-market fit",
	"You sell directly to consumers — LinkedIn outreach works for B2B, not B2C",
	"You want full automation with no human involvement",
	"You're looking for brand awareness or follower growth rather than pipeline",
	"You're not ready to show up to and close the appointments we book",
];

export default function WhoItsFor() {
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
			id="who-its-for"
			className={`relative bg-background px-6 py-16 sm:px-8 sm:py-24 lg:py-28
				lg:transition-none
				${visible
					? "translate-y-0 opacity-100 lg:animate-[slide-up-in_0.7s_ease-out_forwards]"
					: "translate-y-10 opacity-0 lg:opacity-0"
				}
				transition-all duration-700 ease-out`}>
			<div className="mx-auto max-w-7xl">

				{/* Mobile layout — stacked sections */}
				<div className="flex flex-col gap-8 lg:hidden">
					<div className="flex flex-col gap-3">
						<div className="flex flex-col gap-3 pb-1">
							<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-black/35 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.34em]">
								<span className="h-2 w-2 rounded-full bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) shadow-[0_0_18px_rgba(139,92,246,0.9)]" />
								<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
									Who It&apos;s For
								</span>
							</div>
							<h2
								className="text-[clamp(2rem,4vw,3.6rem)] font-black leading-[1.05] tracking-tight text-white"
								style={{ fontFamily: "var(--font-sora)" }}>
								This is{" "}
								<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
									built for you
								</span>{" "}
								if&hellip;
							</h2>
						</div>
						{goodFit.map((item, i) => (
							<div key={i} className="flex items-start gap-4 rounded-xl border border-primary/20 bg-primary/[0.06] px-5 py-4 ring-1 ring-primary/10 transition-colors hover:border-primary/35 hover:bg-primary/[0.09]">
								<CheckCircle2 size={17} className="mt-0.5 shrink-0 text-primary" />
								<p className="text-sm leading-relaxed text-foreground">{item}</p>
							</div>
						))}
					</div>

					<div className="flex flex-col gap-3">
						<div className="flex flex-col gap-3 pb-1">
							<div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.34em]">
								<span className="h-2 w-2 rounded-full bg-white/30" />
								<span className="text-muted-foreground">
									Not the Right Fit If&hellip;
								</span>
							</div>
							<h2
								className="text-[clamp(2rem,4vw,3.6rem)] font-black leading-[1.05] tracking-tight text-white"
								style={{ fontFamily: "var(--font-sora)" }}>
								This{" "}
								<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
									isn&apos;t
								</span>{" "}
								for you if&hellip;
							</h2>
						</div>
						{badFit.map((item, i) => (
							<div key={i} className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 ring-1 ring-white/[0.03] transition-colors hover:border-white/[0.12]">
								<XCircle size={17} className="mt-0.5 shrink-0 text-red-500/60" />
								<p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
							</div>
						))}
					</div>
				</div>

				{/* Desktop layout — interleaved 2-col grid */}
				<div className="hidden lg:grid grid-cols-2 items-stretch gap-x-10 gap-y-3">
					<div className="flex flex-col gap-4 pb-3">
						<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-black/35 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.34em]">
							<span className="h-2 w-2 rounded-full bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) shadow-[0_0_18px_rgba(139,92,246,0.9)]" />
							<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
								Who It&apos;s For
							</span>
						</div>
						<h2
							className="text-[clamp(2.2rem,4vw,3.6rem)] font-black leading-[1.05] tracking-tight text-white"
							style={{ fontFamily: "var(--font-sora)" }}>
							This is{" "}
							<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
								built for you
							</span>{" "}
							if&hellip;
						</h2>
					</div>

					<div className="flex flex-col gap-4 pb-3">
						<div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.34em]">
							<span className="h-2 w-2 rounded-full bg-white/30" />
							<span className="text-muted-foreground">
								Not the Right Fit If&hellip;
							</span>
						</div>
						<h2
							className="text-[clamp(2.2rem,4vw,3.6rem)] font-black leading-[1.05] tracking-tight text-white"
							style={{ fontFamily: "var(--font-sora)" }}>
							This{" "}
							<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
								isn&apos;t
							</span>{" "}
							for you if&hellip;
						</h2>
					</div>

					{goodFit.map((goodItem, i) => (
						<Fragment key={i}>
							<div className="flex items-start gap-4 rounded-xl border border-primary/20 bg-primary/[0.06] px-5 py-4 ring-1 ring-primary/10 transition-colors hover:border-primary/35 hover:bg-primary/[0.09]">
								<CheckCircle2 size={17} className="mt-0.5 shrink-0 text-primary" />
								<p className="text-sm leading-relaxed text-foreground">{goodItem}</p>
							</div>
							<div className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 ring-1 ring-white/[0.03] transition-colors hover:border-white/[0.12]">
								<XCircle size={17} className="mt-0.5 shrink-0 text-red-500/60" />
								<p className="text-sm leading-relaxed text-muted-foreground">{badFit[i]}</p>
							</div>
						</Fragment>
					))}
				</div>

			</div>
		</section>
	);
}
