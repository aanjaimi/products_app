import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { DealsSection } from "@/components/deals-section"
import { CategoriesSection } from "@/components/categories-section"
import { PromotionalBanners } from "@/components/promotional-banners"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <DealsSection />
        <CategoriesSection />
        <PromotionalBanners />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
