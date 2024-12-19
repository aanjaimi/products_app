import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Logo from "@/../public/logo.png"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        {/* Newsletter Section */}
        <div className="mb-12 grid gap-8 border-b pb-12 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-xl font-semibold">Subcribe our Newsletter</h3>
            <p className="mt-2 text-gray-600">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="max-w-sm"
            />
            <Button className="bg-[#00B207] hover:bg-[#009606]">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex space-x-2">
              <Image src={Logo} alt="Logo" width={20} height={20}/>
              <Link href="/" className="text-xl font-bold ">
                Nutritech Agro
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <span>+212 5 23 31 30 92</span>
              <span>Or</span>
              <span>Contact@nutritechagro.com</span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">My Account</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/account" className="hover:text-[#00B207]">My Account</Link></li>
              <li><Link href="/order-history" className="hover:text-[#00B207]">Order History</Link></li>
              <li><Link href="/cart" className="hover:text-[#00B207]">Shopping Cart</Link></li>
              <li><Link href="/wishlist" className="hover:text-[#00B207]">Wishlist</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Helps</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-[#00B207]">Contact</Link></li>
              <li><Link href="/faqs" className="hover:text-[#00B207]">Faqs</Link></li>
              <li><Link href="/terms" className="hover:text-[#00B207]">Terms & Condition</Link></li>
              <li><Link href="/privacy" className="hover:text-[#00B207]">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/fruits" className="hover:text-[#00B207]">Fruit & Vegetables</Link></li>
              <li><Link href="/category/meat" className="hover:text-[#00B207]">Meat & Fish</Link></li>
              <li><Link href="/category/bread" className="hover:text-[#00B207]">Bread & Bakery</Link></li>
              <li><Link href="/category/beauty" className="hover:text-[#00B207]">Beauty & Health</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-gray-600">
            Copyright © 2024, Nutritech Agro. All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/p/Nutritech-AGRO-100063561851253/" target="_blank" className="hover:text-[#00B207]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/nutritechagro_/" target="_blank" className="hover:text-[#00B207]">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/nutritech-agro/posts/?feedView=all" target="_blank" className="hover:text-[#00B207]">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
