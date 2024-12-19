"use client"

import Link from "next/link"
import { Eye, EyeOff } from 'lucide-react'
import { useCallback, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { loginSchema } from "@/schemas/auth"
import { fetcher } from "@/lib/fetcher"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { AxiosError } from "axios"
import { toast } from "react-hot-toast"

const defaultValues = {
	email: '',
	password: '',
}

interface SignInFormValues {
	email: string
	password: string
}

export function SignInCard() {
	const [showPassword, setShowPassword] = useState(false)
	const [isDisabled, setIsDisabled] = useState(true)
	const router = useRouter()

	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues,
		resolver: yupResolver(loginSchema)
	})

	const handleSignIn: SubmitHandler<SignInFormValues> = useCallback((data) => {
		setIsDisabled(true)
		JSON.stringify(data)
		// Call the API to create a new account
		const { email, password } = data
		fetcher
		.post('/auth/login', { email, password })
		.then((res) => {
			const { access_token } = res.data as { access_token: string }
			localStorage.setItem("access_token", access_token)
			router.push("/")
		})
		.catch((err: AxiosError) => {
			const { error } = err.response?.data as { error: string }
			toast.error(error)
			setIsDisabled(false)
		})
	}, [])

	return (
		<Card className="mx-auto max-w-md">
			<CardHeader>
				<CardTitle className="text-center text-2xl">Sign In</CardTitle>
			</CardHeader>
			<CardContent>
				<form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="Email"
							required
							{...register("email")}
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<div className="relative">
							<Input
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="Password"
								required
								{...register("password")}
							/>
							<Button
								type="button"
								variant="ghost"
								size="sm"
								className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<EyeOff className="h-4 w-4" />
								) : (
									<Eye className="h-4 w-4" />
								)}
							</Button>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Checkbox id="remember" />
							<Label htmlFor="remember" className="text-sm">
								Remember me
							</Label>
						</div>
						<Link
							href="/forgot-password"
							className="text-sm text-[#00B207] hover:underline"
						>
							Forget Password
						</Link>
					</div>

					<Button type="submit" className="w-full bg-[#00B207] hover:bg-[#009606]">
						Login
					</Button>

					<p className="text-center text-sm">
						Don't have account?{" "}
						<Link href="/register" className="text-[#00B207] hover:underline">
							Register
						</Link>
					</p>
				</form>
			</CardContent>
		</Card>
	)
}
