import Image from "next/image";

const clients = [
	{
		name: "Process Zero",
		logo: "/process-zero-logo.svg",
		url: "https://processzero.co.uk/",
		width: 120,
		height: 80,
	},
];

export default function TrustedBy() {
	return (
		<div className="relative bg-background px-6 pb-10 pt-2 sm:px-8 sm:pb-14">
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col items-center gap-6">
					<p className="text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-muted-foreground/60">
						Trusted by
					</p>
					<div className="flex flex-wrap items-center justify-center gap-10">
						{clients.map(({ name, logo, url, width, height }) => (
							<a
								key={name}
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-70">
								<Image
									src={logo}
									alt={name}
									width={width}
									height={height}
									className="h-4 w-auto object-contain sm:h-5"
								/>
								<span className="text-base font-semibold text-white/80">
									{name}
								</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
