"use client"

import { Button } from "@/components/ui/button"
import { Truck, HeadphonesIcon, ShieldCheck, RefreshCw } from 'lucide-react'
import Image from "next/image"
import Products from "@/../public/produits.webp"

export function HeroSection() {
	return (
		<section className="bg-gray-50">
			<div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
				<div className="relative flex flex-col-reverse md:flex-row md:items-center">
					{/* Content */}
					<div className="md:w-1/2">
						<span className="text-sm uppercase text-[#00B207]">Welcome to NutriTech agro</span>
						<h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
							Manufacturing And Sale Of Fertilizers.
							<br />
						</h1>
						<p className="mt-4 text-lg">
							Save up to <span className="text-[#00B207]">30% OFF</span>
							<br />
							Get amazing fresh and organic fertilizers.
						</p>
						<Button className="mt-6 bg-[#00B207] hover:bg-[#009606]">
							Shop Now
						</Button>
					</div>

					{/* Image */}
					<div className="mb-8 md:mb-0 md:w-1/2">
						<Image
							src={Products}
							alt="products"
							className="w-full object-cover"
						/>
					</div>
				</div>

				{/* Features */}
				<div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
					<FeatureBox
						icon={<Truck className="h-6 w-6" />}
						title="Free Shipping"
						description="Free shipping on all orders"
					/>
					<FeatureBox
						icon={<HeadphonesIcon className="h-6 w-6" />}
						title="Customer Support 24/7"
						description="Instant access to support"
					/>
					<FeatureBox
						icon={<ShieldCheck className="h-6 w-6" />}
						title="100% Secure Payment"
						description="We ensure secure payment"
					/>
					<FeatureBox
						icon={<RefreshCw className="h-6 w-6" />}
						title="Money-Back Guarantee"
						description="30 days money-back"
					/>
				</div>
			</div>
		</section>
	)
}

function FeatureBox({
	icon,
	title,
	description
}: {
	icon: React.ReactNode
	title: string
	description: string
}) {
	return (
		<div className="flex items-center gap-4 rounded-lg border bg-white p-4">
			<div className="text-[#00B207]">{icon}</div>
			<div>
				<h3 className="font-semibold">{title}</h3>
				<p className="text-sm text-gray-600">{description}</p>
			</div>
		</div>
	)
}
