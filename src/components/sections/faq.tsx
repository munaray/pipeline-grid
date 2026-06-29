"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
	{
		question: "Do I need LinkedIn Sales Navigator?",
		answer:
			"No. We run campaigns on a standard LinkedIn account. Sales Navigator is optional — it sharpens targeting but isn't required to get started.",
	},
	{
		question: "How quickly will I see results?",
		answer:
			"Most clients see their first warm conversations in week one and their first qualified appointments by weeks two or three. The first 30 days are backed by our guarantee.",
	},
	{
		question: "Will my LinkedIn account get banned?",
		answer:
			"No. We only automate the initial connection request phase. Everything after that is handled manually. Our approach mimics human behaviour and keeps your account completely safe.",
	},
	{
		question: "Do you do cold email as well?",
		answer:
			"No. We focus entirely on LinkedIn. No domain warm-up, no deliverability issues, no spam folders — just the platform where your buyers are most active.",
	},
	{
		question: "How much time do I need to commit?",
		answer:
			"0 minutes a day. Everything else — targeting, copy, outreach, qualification and conversation handling — is done by us. You only show up to the appointments we book.",
	},
	{
		question: "What's the 30-day guarantee?",
		answer:
			"If you don't see qualified appointment activity within your first 30 days, we work for free until you do. No awkward conversations. No small print.",
	},
	{
		question: "How do you define a qualified appointment?",
		answer:
			"A booked call with a decision-maker who fits your ICP and has shown genuine interest in your offer. Not curiosity calls, not tyre-kickers — people worth your time.",
	},
	{
		question: "Is there a long-term contract?",
		answer:
			"No. We work on a monthly retainer with no long-term commitment. Most clients stay because results compound over time, not because they're locked in.",
	},
];

export default function FAQ() {
	const ref = useRef<HTMLElement>(null);
	const [visible, setVisible] = useState(false);
	const [openItems, setOpenItems] = useState<number[]>([]);

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

	const toggle = (i: number) => {
		setOpenItems((prev) =>
			prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
		);
	};

	return (
		<section
			ref={ref}
			id="faq"
			className={`relative bg-background px-6 py-16 sm:px-8 sm:py-24 lg:py-28
				lg:transition-none
				${visible
					? "translate-y-0 opacity-100 lg:animate-[slide-up-in_0.7s_ease-out_forwards]"
					: "translate-y-10 opacity-0 lg:opacity-0"
				}
				transition-all duration-700 ease-out`}>
			<div className="mx-auto max-w-4xl">
				<div className="flex flex-col items-center gap-4 text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-black/35 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.34em]">
						<span className="h-2 w-2 rounded-full bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) shadow-[0_0_18px_rgba(139,92,246,0.9)]" />
						<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
							FAQ
						</span>
					</div>

					<h2
						className="text-[clamp(2rem,5.5vw,4.5rem)] font-black leading-none tracking-tight text-white"
						style={{ fontFamily: "var(--font-sora)" }}>
						Questions we{" "}
						<span className="bg-linear-to-r from-primary-foreground via-(--color-brand-light) to-(--color-brand) bg-clip-text text-transparent">
							get asked
						</span>
					</h2>
				</div>

				<div className="mt-14 flex flex-col gap-3">
					{faqs.map(({ question, answer }, i) => {
						const isOpen = openItems.includes(i);
						return (
							<div
								key={question}
								className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] ring-1 ring-white/[0.04] transition-colors hover:border-white/[0.14]">
								<button
									onClick={() => toggle(i)}
									className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left">
									<span className="text-base font-semibold text-foreground">
										{question}
									</span>
									<ChevronDown
										size={18}
										className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
									/>
								</button>
								<div
									className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
									<div className="overflow-hidden">
										<p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
											{answer}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
