import { Navbar } from "@/components/navbar"
import { SignUpCard } from "@/components/sign-up-card"
import { Footer } from "@/components/footer"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-12">
        <SignUpCard />
      </main>
      <Footer />
    </div>
  )
}
