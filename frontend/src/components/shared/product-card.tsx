import { Star, ShoppingCart, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

interface ProductCardProps {
	name: string
	price: number
	image: any
	rating: number
	discount?: number
	isNew?: boolean
}

export function ProductCard({
	name,
	price,
	image,
	rating,
	discount,
	isNew,
}: ProductCardProps) {
	return (
		<div className="group relative rounded-lg border bg-white p-4">
			{discount && (
				<span className="absolute left-4 top-4 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
					-{discount}%
				</span>
			)}
			{isNew && (
				<span className="absolute left-4 top-4 rounded-full bg-[#00B207] px-2 py-1 text-xs text-white">
					New
				</span>
			)}
			<div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
				<Image
					src={image}
					alt={name}
					className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
				/>
				<div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<Button size="icon" variant="secondary">
						<Heart className="h-4 w-4" />
					</Button>
				</div>
			</div>
			<div className="space-y-2">
				<h3 className="font-semibold">{name}</h3>
				<div className="flex items-center gap-1">
					{Array.from({ length: 5 }).map((_, i) => (
						<Star
							key={i}
							className={`h-4 w-4 ${
								i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
							}`}
						/>
					))}
				</div>
				<div className="flex items-center justify-between">
					<span className="text-lg font-bold">${price.toFixed(2)}</span>
					<Button size="icon" className="bg-[#00B207] hover:bg-[#009606]">
						<ShoppingCart className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	)
}
