"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FounderNote() {
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
			className={`relative overflow-hidden bg-background px-6 py-16 sm:px-8 sm:py-20
				lg:transition-none
				${
					visible
						? "translate-y-0 opacity-100 lg:animate-[slide-up-in_0.7s_ease-out_forwards]"
						: "translate-y-10 opacity-0 lg:opacity-0"
				}
				transition-all duration-700 ease-out`}>
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
					{/* Image */}
					<div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.08] ring-1 ring-white/[0.04] lg:max-w-none">
						<div className="aspect-[4/5] w-full">
							<Image
								src="/founder-desk.jpeg"
								alt="Yahya Abdi, Founder & CEO of Pipeline Grid"
								fill
								className="object-cover object-center"
								sizes="(max-width: 1024px) 90vw, 50vw"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-[#08060e]/60 via-transparent to-transparent" />
						</div>
					</div>

					{/* Quote */}
					<div className="flex flex-col gap-6">
						<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-black/35 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.34em]">
							<span className="h-2 w-2 rounded-full bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) shadow-[0_0_18px_rgba(139,92,246,0.9)]" />
							<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
								From the Founder
							</span>
						</div>

						<blockquote className="flex flex-col gap-5">
							<span className="text-5xl leading-none text-primary/40 select-none">&ldquo;</span>
							<p
								className="text-[clamp(1.1rem,2.2vw,1.4rem)] font-medium leading-relaxed text-white/90"
								style={{ fontFamily: "var(--font-sora)" }}>
								I built Pipeline Grid because I watched too many great B2B
								founders lose deals simply because no one knew they existed.
								Your product deserves a full pipeline. We make sure it gets one.
							</p>
						</blockquote>

						<div className="flex items-center gap-4 border-t border-white/[0.08] pt-6">
							<div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
								<Image
									src="/yahya.jpeg"
									alt="Yahya Abdi"
									fill
									className="object-cover object-top"
									sizes="48px"
								/>
							</div>
							<div>
								<p className="text-sm font-bold text-white">Yahya Abdi</p>
								<p className="text-xs text-muted-foreground">
									Founder &amp; CEO, Pipeline Grid
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
