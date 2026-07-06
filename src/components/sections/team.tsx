"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
function LinkedInIcon() {
	return (
		<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect x="2" y="9" width="4" height="12" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	);
}

const members = [
	{
		name: "Yahya Abdi",
		role: "Founder & CEO",
		bio: "Yahya built Pipeline Grid after seeing how many great B2B founders were losing deals not because of their product, but because no one knew they existed. He leads strategy, client relationships and the overall system.",
		image: "/ahmed.png",
		linkedin: "#",
		objectPosition: "center top",
	},
	{
		name: "Ahmed Mohamed",
		role: "Head of Operations",
		bio: "Ahmed oversees the day-to-day execution from campaign builds and setter management to performance reporting. He ensures every client's pipeline runs smoothly and on time.",
		image: "/yahya.jpeg",
		linkedin: "#",
		objectPosition: "center center",
	},
];

export default function Team() {
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
			id="team"
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
							The Team
						</span>
					</div>

					<h2
						className="text-[clamp(2rem,5.5vw,4.5rem)] font-black leading-none tracking-tight text-white"
						style={{ fontFamily: "var(--font-sora)" }}>
						Real people,{" "}
						<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
							real results.
						</span>
					</h2>

					<p className="max-w-lg text-base leading-relaxed text-muted-foreground">
						We&apos;re not a faceless agency. You know exactly who is
						working on your pipeline.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:mx-auto lg:max-w-3xl">
					{members.map(({ name, role, bio, image, linkedin, objectPosition }) => (
						<div
							key={name}
							className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] ring-1 ring-white/[0.04] transition-colors hover:border-primary/20 hover:bg-white/[0.05]">
							<div className="relative h-72 w-full overflow-hidden sm:h-80">
								<Image
									src={image}
									alt={name}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
									style={{ objectPosition }}
									sizes="(max-width: 640px) 100vw, 50vw"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-[#08060e]/80 via-transparent to-transparent" />
							</div>

							<div className="flex flex-1 flex-col gap-3 p-6">
								<div className="flex items-start justify-between gap-3">
									<div>
										<p className="text-lg font-bold text-white">
											{name}
										</p>
										<p className="text-sm font-medium bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
											{role}
										</p>
									</div>
									<a
										href={linkedin}
										aria-label={`${name} on LinkedIn`}
										className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">
										<LinkedInIcon />
									</a>
								</div>

								<p className="text-sm leading-relaxed text-muted-foreground">
									{bio}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
