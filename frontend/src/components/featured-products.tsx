import { ProductCard } from "./shared/product-card"
import TERANOV_AZUR from "@/../public/products/engrais-hydrosolubles/TERANOV-AZUR.webp"
import AZOTEC_25S from "@/../public/products/engrais-solides/AZOTEC-25S.webp"
import CROPS_CALISAL from "@/../public/products/correcteurs-de-carences/CROPS-CALISAL.webp"
import NUTRI_LEAF_AN from "@/../public/products/biostimulants/NUTRI-LEAF-AN.webp"

const FEATURED_PRODUCTS = [
  {
    name: "TERANOV AZUR",
    price: 14.99,
    image: TERANOV_AZUR,
    rating: 4,
  },
  {
    name: "AZOTEC 25S",
    price: 15.99,
    image: AZOTEC_25S,
    rating: 4,
  },
  {
    name: "CROPS CALISAL",
    price: 14.99,
    image: CROPS_CALISAL,
    rating: 4,
  },
  {
    name: "NUTRI LEAF AN",
    price: 15.99,
    image: NUTRI_LEAF_AN,
    rating: 4,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold">Featured Products</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {FEATURED_PRODUCTS.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
