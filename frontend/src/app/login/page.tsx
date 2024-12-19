import { Navbar } from "@/components/navbar"
import { SignInCard } from "@/components/sign-in-card"
import { Footer } from "@/components/footer"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-12">
        <SignInCard />
      </main>
      <Footer />
    </div>
  )
}
