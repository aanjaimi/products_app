"use client"

import Link from "next/link"
import { Heart, Phone, ShoppingCart } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo from "@/../public/logo.png"

export function Navbar() {
  return (
	<header className="w-full">
	  {/* Top bar */}
	  <div className="flex items-center justify-between border-b px-4 py-4 md:px-6">
		<div className="flex justify-between space-x-2">
		  <Image src={Logo} alt="Logo" width={20} height={20}/>
		  <Link href="/" className="flex items-center space-x-2">
				{/* use popping font */}
		    <span className="text-xl font-bold">Nutritech Agro</span>
		  </Link>
		</div>
		<div className="hidden flex-1 items-center justify-center px-12 md:flex">
		  <div className="relative w-full max-w-lg">
			<Input
			  type="search"
			  placeholder="Search"
			  className="w-full rounded-r-none pr-12"
			/>
			<Button
			  type="submit"
			  className="absolute right-0 top-0 h-full rounded-l-none bg-[#00B207] hover:bg-[#009606]"
			>
			  Search
			</Button>
		  </div>
		</div>

		<div className="flex items-center space-x-4">
		  <Link href="/wishlist" className="flex items-center">
			<Heart className="h-6 w-6" />
		  </Link>
		  <Link href="/cart" className="flex items-center">
			<div className="relative">
			  <ShoppingCart className="h-6 w-6" />
			  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#00B207] text-xs text-white">
				0
			  </span>
			</div>
			<span className="ml-2 hidden md:inline-block">
			  Shopping cart:
			  <span className="font-bold"> $0.00</span>
			</span>
		  </Link>
		</div>
	  </div>

	  {/* Navigation */}
	  <nav className="flex items-center justify-between bg-zinc-900 px-4 py-3 text-white md:px-6">
		<ul className="hidden items-center space-x-8 md:flex">
		  <li>
			<Link href="/" className="hover:text-[#00B207]">Home</Link>
		  </li>
		  <li>
			<Link href="/shop" className="hover:text-[#00B207]">Shop</Link>
		  </li>
		  <li>
			<Link href="/pages" className="hover:text-[#00B207]">Pages</Link>
		  </li>
		  <li>
			<Link href="/blog" className="hover:text-[#00B207]">Blog</Link>
		  </li>
		  <li>
			<Link href="/about" className="hover:text-[#00B207]">About Us</Link>
		  </li>
		  <li>
			<Link href="/contact" className="hover:text-[#00B207]">Contact Us</Link>
		  </li>
		</ul>
		<div className="flex items-center text-sm">
		  <Phone className="mr-2 h-4 w-4" />
		  +212 5 23 31 30 92
		</div>
	  </nav>
	</header>
  )
}
