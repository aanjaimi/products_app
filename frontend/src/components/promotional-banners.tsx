import { Button } from "@/components/ui/button"
import Image from "next/image"
import BETA_BORE from "@/../public/products/correcteurs-de-carences/BETA-BORE.webp"
import HUMIPOL from "@/../public/products/biostimulants/HUMIPOL.webp"
import HUMUS_ACTIVE_BIO from "@/../public/products/biostimulants/HUMUS-ACTIVE-BIO.webp"

export function PromotionalBanners() {
	return (
		<section className="py-12">
			<div className="mx-auto max-w-7xl px-4 md:px-6">
				<div className="grid gap-4 md:grid-cols-3">
					<div className="relative overflow-hidden rounded-lg bg-blue-600 p-6 text-white">
						<div className="relative z-10">
							<h3 className="text-2xl font-bold">Sale<br/>of the<br/>Month</h3>
							<div className="mt-2 flex gap-2">
								<div className="rounded bg-white/20 px-2 py-1">
									<span className="text-sm">00</span>
								</div>
								<div className="rounded bg-white/20 px-2 py-1">
									<span className="text-sm">00</span>
								</div>
								<div className="rounded bg-white/20 px-2 py-1">
									<span className="text-sm">00</span>
								</div>
							</div>
							<Button className="mt-4 bg-white text-blue-600 hover:bg-white/90">
								Shop Now
							</Button>
						</div>
						<Image
							src={BETA_BORE}
							alt="BETA BORE"
							className="absolute bottom-0 right-0 w-1/2 h-full"
						/>
					</div>

					<div className="relative overflow-hidden rounded-lg bg-zinc-900 p-6 text-white">
						<div className="relative z-10">
							<h3 className="text-2xl font-bold">Product<br/>Offer</h3>
							<p className="mt-2">Starting at $9.99</p>
							<Button className="mt-4 bg-white text-zinc-900 hover:bg-white/90">
								Shop Now
							</Button>
						</div>
						<Image
							src={HUMIPOL}
							alt="HUMIPOL"
							className="absolute bottom-0 right-0 w-1/2 h-full"
						/>
					</div>

					<div className="relative overflow-hidden rounded-lg bg-yellow-500 p-6 text-white">
						<div className="relative z-10">
							<h3 className="text-2xl font-bold">100%<br/>Fresh<br/>Products</h3>
							<p className="mt-2">Get 10% Off</p>
							<Button className="mt-4 bg-white text-yellow-500 hover:bg-white/90">
								Shop Now
							</Button>
						</div>
						<Image
							src={HUMUS_ACTIVE_BIO}
							alt="HUMUS ACTIVE BIO"
							className="absolute bottom-0 right-0 w-1/2 h-full"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
