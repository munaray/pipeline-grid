import BrandLogo from "@/components/layout/brand-logo";

const navLinks = [
	{ label: "How It Works", href: "#how-it-works" },
	{ label: "What's Included", href: "#whats-included" },
	{ label: "Why Us", href: "#why-us" },
	{ label: "Who It's For", href: "#who-its-for" },
	{ label: "FAQ", href: "#faq" },
	{ label: "WhatsApp", href: "#" },
];

export default function Footer() {
	return (
		<footer className="border-t border-white/[0.07] bg-background px-6 py-8 sm:px-8">
			<div className="mx-auto flex max-w-7xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
				<div className="flex items-center gap-2.5">
					<BrandLogo className="w-[9.75rem] sm:w-[10.5rem]" />
				</div>

				<nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
					{navLinks.map(({ label, href }) => (
						<a
							key={label}
							href={href}
							className="text-xs text-muted-foreground transition-colors hover:text-foreground">
							{label}
						</a>
					))}
				</nav>

				<p className="text-xs text-white/25">
					&copy; 2025 Pipeline Grid. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
