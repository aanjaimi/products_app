"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from "react"
import EngraisHydrosolubles from "/public/categories/engrais-hydrosolubles.jpeg"
import EngraisSolides from "/public/categories/engrais-solides.webp"
import CorrecteursDeCarences from "/public/categories/correcteurs-de-carences.jpeg"
import Biostimulants from "/public/categories/biostimulants.jpeg"
import Image from "next/image"

const CATEGORIES = [
	{
		name: "ENGRAIS HYDROSOLUBLES",
		icon: EngraisHydrosolubles,
	},
	{
		name: "ENGRAIS SOLIDES",
		icon: EngraisSolides,
	},
	{
		name: "CORRECTEURS DE CARENCES",
		icon: CorrecteursDeCarences,
	},
	{
		name: "BIOSTIMULANTS",
		icon: Biostimulants,
	},
]

export function CategoriesSection() {
	const scrollRef = useRef<HTMLDivElement>(null)

	const scroll = (direction: "left" | "right") => {
		if (scrollRef.current) {
			const scrollAmount = direction === "left" ? -200 : 200
			scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
		}
	}

	return (
		<section className="py-12">
			<div className="mx-auto max-w-7xl px-4 md:px-6">
				<div className="flex items-center justify-between">
					<h2 className="text-2xl font-bold">Top Category</h2>
					<div className="flex gap-2">
						<Button
							variant="outline"
							size="icon"
							onClick={() => scroll("left")}
						>
							<ChevronLeft className="h-4 w-4" />
						</Button>
						<Button
							variant="outline"
							size="icon"
							onClick={() => scroll("right")}
						>
							<ChevronRight className="h-4 w-4" />
						</Button>
					</div>
				</div>
				<div
					ref={scrollRef}
					className="mt-6 flex gap-4 overflow-x-auto scrollbar-hide"
				>
					{CATEGORIES.map((category, index) => (
						<div
							key={index}
							className="flex min-w-[150px] flex-col items-center rounded-lg border p-4 hover:border-[#00B207]"
						>
							<Image
								src={category.icon}
								alt={category.name}
								className="mb-2"
								width={192}
								height={192}
							/>
							<span className="text-center font-medium">{category.name}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
