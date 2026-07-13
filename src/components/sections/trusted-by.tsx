import Image from "next/image";
import { cn } from "@/lib/utils";

const clients = [
	{
		name: "Process Zero",
		logo: "/process-zero-logo.svg",
		url: "https://processzero.co.uk/",
		width: 120,
		height: 80,
		label: "Process Zero",
		imageClassName: "h-4 sm:h-5",
	},
	{
		name: "Navetra",
		logo: "/trusted-navetra.png",
		url: "https://www.purplewins.io/",
		width: 192,
		height: 176,
		label: "Navetra",
		imageClassName: "h-8 sm:h-10",
	},
	{
		name: "Spendifique",
		logo: "/trusted-spendifique-light.png",
		width: 301,
		height: 62,
		imageClassName: "h-5 sm:h-6",
	},
	{
		name: "Chronoloq",
		logo: "/trusted-chronoloq-light.png",
		width: 226,
		height: 62,
		imageClassName: "h-10 sm:h-12",
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
					<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
						{clients.map(({ name, logo, url, width, height, label, imageClassName }) => {
							const content = (
								<>
									<Image
										src={logo}
										alt={name}
										width={width}
										height={height}
										className={cn("w-auto object-contain", imageClassName)}
									/>
									{label ? (
										<span className="text-base font-semibold text-white/80">
											{label}
										</span>
									) : null}
								</>
							);

							return url ? (
								<a
									key={name}
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-70">
									{content}
								</a>
							) : (
								<div
									key={name}
									className="flex items-center gap-2.5">
									{content}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
