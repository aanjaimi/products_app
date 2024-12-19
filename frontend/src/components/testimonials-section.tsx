"use client"

import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import AVATAR from "@/../public/avatar.jpeg"

const TESTIMONIALS = [
	{
		name: "Issam Benmaina",
		image: AVATAR,
		rating: 4,
		text: "Amazing selection of organic products. The quality is outstanding and delivery is always on time.",
	},
	{
		name: "Ayoub Anjaimi",
		image: AVATAR,
		rating: 5,
		text: "Fresh products with great organic choices. Product delivered on time and great service. Highly recommended!",
	},
	{
		name: "Ayoub Taji",
		image: AVATAR,
		rating: 5,
		text: "Best organic products supplier! Their products are always fresh and the service is excellent.",
	},
]

export function TestimonialsSection() {
	return (
		<section className="bg-gray-50 py-12">
			<div className="mx-auto max-w-7xl px-4 md:px-6">
				<h2 className="mb-8 text-center text-3xl font-bold">
					Client Testimonial
				</h2>
				<Carousel
					opts={{
						align: "start",
					}}
					className="w-full"
				>
					<CarouselContent>
						{TESTIMONIALS.map((testimonial, index) => (
							<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
								<div className="rounded-lg border bg-white p-6">
									<p className="mb-4 text-gray-600">{testimonial.text}</p>
									<div className="flex items-center gap-4">
										<Image
											src={testimonial.image}
											alt={testimonial.name}
											className="h-12 w-12 rounded-full object-cover"
										/>
										<div>
											<h4 className="font-semibold">{testimonial.name}</h4>
											<div className="flex">
												{Array.from({ length: testimonial.rating }).map((_, i) => (
													<Star
														key={i}
														className="h-4 w-4 fill-yellow-400 text-yellow-400"
													/>
												))}
											</div>
										</div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	)
}
