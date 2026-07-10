"use client";

import { useEffect, useRef, useState } from "react";

export default function CTA() {
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
			id="book-a-call"
			className={`relative overflow-hidden bg-background px-6 py-16 sm:px-8 sm:py-24 lg:py-36
				lg:transition-none
				${visible
					? "translate-y-0 opacity-100 lg:animate-[slide-up-in_0.7s_ease-out_forwards]"
					: "translate-y-10 opacity-0 lg:opacity-0"
				}
				transition-all duration-700 ease-out`}>
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(139,92,246,0.18),transparent_70%)]" />

			<div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
				<div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-black/35 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.34em]">
					<span className="h-2 w-2 rounded-full bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) shadow-[0_0_18px_rgba(139,92,246,0.9)]" />
					<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
						Free Strategy Call
					</span>
				</div>

				<h2
					className="text-[clamp(2rem,5.5vw,4.2rem)] font-black leading-[1.2] tracking-tight text-white"
					style={{ fontFamily: "var(--font-sora)" }}>
					Ready to Stop Chasing
					<br />
					<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
						and Start Closing?
					</span>
				</h2>

				<p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
					Book a free 20-minute strategy call. We&apos;ll show you
					exactly how we&apos;d build your campaign, who we&apos;d
					target and what results you can realistically expect. No
					hard sell. No obligation.
				</p>

				<div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
					<a
						href="https://calendly.com/yahya-myimperiumsystems/30min?back=1&month=2026-07"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex h-11 w-full items-center justify-center rounded-md bg-linear-to-r from-primary via-(--color-brand-light) to-(--color-brand) px-8 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(139,92,246,0.35),inset_0_1px_0_rgba(255,255,255,0.22)] [text-shadow:0_1px_2px_rgba(0,0,0,0.28)] transition-opacity hover:opacity-90 sm:h-12 sm:w-auto sm:min-w-64 sm:rounded-full">
						Book Your Free Strategy Call →
					</a>
					<a
						href="https://www.linkedin.com/newsletters/pipeline-insider-7475236472061763585"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex h-11 w-full items-center justify-center rounded-md border border-white/12 bg-white/[0.04] px-6 text-sm font-semibold text-white/80 transition-colors hover:border-primary/30 hover:text-white sm:h-12 sm:w-auto sm:rounded-full">
						Read the Newsletter
					</a>
				</div>
			</div>
		</section>
	);
}
