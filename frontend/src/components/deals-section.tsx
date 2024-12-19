import { ProductCard } from "./shared/product-card"
import TERANOV_POURPRE from "@/../public/products/engrais-hydrosolubles/TERANOV-POURPRE.webp"
import DROPFEED_I from "@/../public/products/engrais-hydrosolubles/DROPFEED-I.webp"
import AZOTEC_K10 from "@/../public/products/engrais-solides/AZOTEC-K10.webp"
import GRAMONIX_CAL from "@/../public/products/engrais-solides/GRAMONIX-CAL.webp"
import CROPS_ENTER from "@/../public/products/correcteurs-de-carences/CROPS-ENTER.webp"
import NUTRI_LEAF_VERDE from "@/../public/products/biostimulants/NUTRI-LEAF-VERDE.webp"

const DEALS_DATA = {
	hotDeals: [
		{
			name: "TERANOV POURPRE",
			price: 14.99,
			image: TERANOV_POURPRE,
			rating: 4,
			discount: 20,
		},
		{
			name: "AZOTEC K10",
			price: 9.99,
			image: AZOTEC_K10,
			rating: 5,
			discount: 15,
		},
	],
	bestSeller: [
		{
			name: "CROPS ENTER",
			price: 29.99,
			image: CROPS_ENTER,
			rating: 5,
		},
		{
			name: "NUTRI LEAF VERDE",
			price: 19.99,
			image: NUTRI_LEAF_VERDE,
			rating: 4,
		},
	],
	topRated: [
		{
			name: "FDROPFEED I",
			price: 24.99,
			image: DROPFEED_I,
			rating: 5,
		},
		{
			name: "GRAMONIX CAL",
			price: 14.99,
			image: GRAMONIX_CAL,
			rating: 5,
		},
	],
}

export function DealsSection() {
	return (
		<section className="py-12">
			<div className="mx-auto max-w-7xl px-4 md:px-6">
				<div className="grid gap-8 md:grid-cols-3">
					<div>
						<h2 className="mb-6 text-xl font-bold">Hot Deals</h2>
						<div className="space-y-4">
							{DEALS_DATA.hotDeals.map((product, index) => (
								<ProductCard key={index} {...product} />
							))}
						</div>
					</div>
					<div>
						<h2 className="mb-6 text-xl font-bold">Best Seller</h2>
						<div className="space-y-4">
							{DEALS_DATA.bestSeller.map((product, index) => (
								<ProductCard key={index} {...product} />
							))}
						</div>
					</div>
					<div>
						<h2 className="mb-6 text-xl font-bold">Top Rated</h2>
						<div className="space-y-4">
							{DEALS_DATA.topRated.map((product, index) => (
								<ProductCard key={index} {...product} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
