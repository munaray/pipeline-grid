"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
	{
		quote:
			"PipelineGrid has been phenomenal to work with. They consistently elevated my founder-led outreach whilst I was doing it myself, and now that we're scaling with a new offer, I'm thrilled to have them fully managing and building our pipeline. Highly recommend their team for anyone serious about LinkedIn lead gen!",
		name: "Alex Johnson",
		role: "Founder & CEO",
		company: "ScaleOps",
		companyUrl: "https://scaleops.com",
		avatar: null,
	},
];

function Initials({ name }: { name: string }) {
	const parts = name.trim().split(" ");
	const initials =
		parts.length >= 2
			? parts[0][0] + parts[parts.length - 1][0]
			: parts[0][0];
	return (
		<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
			{initials.toUpperCase()}
		</div>
	);
}

export default function Testimonials() {
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
			id="testimonials"
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
							Testimonials
						</span>
					</div>

					<h2
						className="text-[clamp(2rem,5.5vw,4.5rem)] font-black leading-none tracking-tight text-white"
						style={{ fontFamily: "var(--font-sora)" }}>
						Don&apos;t take{" "}
						<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
							our word for it.
						</span>
					</h2>

					<p className="max-w-lg text-base leading-relaxed text-muted-foreground">
						Real results from real founders who trusted us with their pipeline.
					</p>
				</div>

				<div
					className={`mt-12 grid gap-6 ${
						testimonials.length === 1
							? "grid-cols-1 lg:max-w-2xl lg:mx-auto"
							: testimonials.length === 2
								? "grid-cols-1 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto"
								: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
					}`}>
					{testimonials.map(({ quote, name, role, company, companyUrl, avatar }) => (
						<div
							key={name}
							className="flex flex-col gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 ring-1 ring-white/[0.04] transition-colors hover:border-primary/20 hover:bg-white/[0.05] sm:p-8">
							<span className="text-4xl leading-none text-primary/40 select-none">
								&ldquo;
							</span>
							<p className="flex-1 text-sm leading-relaxed text-white/80 sm:text-base">
								{quote}
							</p>
							<div className="flex items-center gap-3 border-t border-white/[0.08] pt-5">
								{avatar ? (
									<div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/10">
										<Image
											src={avatar}
											alt={name}
											fill
											className="object-cover"
											sizes="44px"
										/>
									</div>
								) : (
									<Initials name={name} />
								)}
								<div className="min-w-0">
									<p className="text-sm font-bold text-white">{name}</p>
									<p className="text-xs text-muted-foreground">
										{role}
										{company && (
											<>
												{" · "}
												{companyUrl ? (
													<a
														href={companyUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="text-primary/70 hover:text-primary transition-colors">
														{company}
													</a>
												) : (
													<span>{company}</span>
												)}
											</>
										)}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
