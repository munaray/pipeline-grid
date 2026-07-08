"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function DesktopMockup() {
	return (
		<Image
			src="/laptop-hero.png"
			alt="Pipeline Grid desktop mockup"
			width={1080}
			height={1080}
			className="h-auto w-full drop-shadow-[0_38px_110px_rgba(0,0,0,0.52)]"
			priority
		/>
	);
}

function MobileMockup() {
	return (
		<div className="mx-auto w-[min(98vw,42rem)] origin-top scale-150">
			<Image
				src="/phone-hero.png"
				alt="Pipeline Grid mobile mockup"
				width={1080}
				height={1080}
				className="h-auto w-full drop-shadow-[0_34px_96px_rgba(0,0,0,0.46)]"
				priority
			/>
		</div>
	);
}

export default function Hero() {
	const sectionRef = useRef<HTMLElement>(null);
	const laptopRef = useRef<HTMLDivElement>(null);
	const phoneRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const media = gsap.matchMedia();

		media.add("(min-width: 1024px)", () => {
			const section = sectionRef.current;
			const laptop = laptopRef.current;

			if (!section || !laptop) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "top top",
					end: "+=900",
					scrub: 1,
				},
			});

			tl.to(laptop, { y: -1300, ease: "none" }, 0);

			return () => {
				tl.scrollTrigger?.kill();
				tl.kill();
			};
		});

		media.add("(max-width: 1023px)", () => {
			const section = sectionRef.current;
			const phone = phoneRef.current;

			if (!section || !phone) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "top top",
					end: "+=600",
					scrub: 1,
				},
			});

			tl.to(phone, { y: -500, ease: "none" }, 0);

			return () => {
				tl.scrollTrigger?.kill();
				tl.kill();
			};
		});

		return () => media.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="relative overflow-hidden bg-background px-6 pb-0 pt-20 sm:px-8 sm:pt-24 lg:max-h-[130vh] lg:pb-20 lg:pt-30">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(139,92,246,0.16),transparent_30%),linear-gradient(180deg,rgba(8,6,14,0)_0%,rgba(8,6,14,0.76)_100%)]" />

			<div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-12 gap-y-10 lg:grid-cols-2">
				{/* Text column */}
				<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
					<div className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-black/35 px-3 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.22em] shadow-[0_0_0_1px_rgba(139,92,246,0.05)] lg:mt-0 lg:px-5 lg:py-2 lg:text-[0.65rem] lg:tracking-[0.34em]">
						<span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) shadow-[0_0_18px_rgba(139,92,246,0.9)] lg:h-2 lg:w-2" />
						<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
							LinkedIn Appointment Setting
						</span>
					</div>

					<h1 className="mt-6 text-[clamp(1.9rem,5.6vw,5rem)] font-black leading-[1.05] tracking-tight text-white lg:mt-8">
						Your pipeline
						<br />
						<span className="whitespace-nowrap">
							<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
								Full
							</span>{" "}
							On autopilot
						</span>
					</h1>

					<p className="mt-6 max-w-xl text-balance text-base leading-7 text-muted-foreground sm:text-lg sm:leading-[1.6] lg:mt-8">
						Done for you LinkedIn outreach for B2B founders. Profile
						optimisation, targeted outreach and real human follow-up so
						you show up and close.
					</p>

					<div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:mt-11 lg:justify-start">
						<a
							href="https://calendly.com/yahya-myimperiumsystems/30min?back=1&month=2026-07"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex h-11 items-center justify-center rounded-md bg-linear-to-r from-primary via-(--color-brand-light) to-(--color-brand) px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(139,92,246,0.28),inset_0_1px_0_rgba(255,255,255,0.22)] [text-shadow:0_1px_2px_rgba(0,0,0,0.28)] transition-opacity hover:opacity-92 sm:h-12 sm:min-w-60 lg:rounded-full">
							Book Your Free Strategy Call
						</a>
						<a
							href="#how-it-works"
							className="inline-flex h-11 items-center justify-center rounded-md border border-primary/25 bg-white/3 px-6 text-sm font-semibold text-white transition-colors hover:border-primary/40 sm:h-12 sm:min-w-44 lg:rounded-full">
							<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
								See how it works
							</span>
						</a>
					</div>
				</div>

				{/* Image column — desktop only */}
				<div
					ref={laptopRef}
					className="hidden items-center justify-center lg:-mr-8 lg:flex">
					<DesktopMockup />
				</div>
			</div>

			{/* Mobile image — animates up on scroll */}
			<div ref={phoneRef} className="relative z-40 mt-10 flex justify-center lg:hidden">
				<MobileMockup />
			</div>
		</section>
	);
}
