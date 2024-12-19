"use client"

import Link from "next/link"
import { Eye, EyeOff } from 'lucide-react'
import { useCallback, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from "@/schemas/auth"
import { fetcher } from "@/lib/fetcher"
import { useRouter } from "next/navigation"
import { AxiosError } from "axios"
import toast from "react-hot-toast"

const defaultValues = {
  email: '',
  password: '',
  confirmPassword: ''
}

interface SignUpFormValues {
  email: string
  password: string
  confirmPassword: string
}

export function SignUpCard() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agree, setAgree] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const router = useRouter()

  const handleCheckBox = (checked: string | boolean) => {
    const checkedBool = checked as boolean
    setAgree(checkedBool)
    checkedBool ? setIsDisabled(false) : setIsDisabled(true)
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues,
    resolver: yupResolver(registerSchema)
  })

  const handleSignUp: SubmitHandler<SignUpFormValues> = useCallback((data) => {
    setIsDisabled(true)
    JSON.stringify(data)
    console.log('sign_up_data: ', data)
    // Call the API to create a new account
    const { email, password } = data
    fetcher
    .post('/auth/register', { email, password })
    .then((res) => {
      toast.success("Account created successfully")
      setIsDisabled(false)
      router.push("/login")
    })
    .catch((err: AxiosError) => {
      const { email } = err.response?.data as { email: string }
      toast.error(email)
      setIsDisabled(false)
    })
  }, [])

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Create Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              {...register('email')}
            />
            <p className="text-sm text-red-500">
              {errors.email?.message || ''}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                {...register('password')}
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
            <p className="text-sm text-red-500">
              {errors.password?.message || ''}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                required
                {...register('confirmPassword')}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-sm text-red-500">
              {errors.confirmPassword?.message || ''}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agree}
              onCheckedChange={(checked) => {
                handleCheckBox(checked)
              }}
            />
            <Label htmlFor="terms" className="text-sm">
              Accept all terms & Conditions
            </Label>
          </div>

          <Button type="submit" className="w-full bg-[#00B207] hover:bg-[#009606]" disabled={isDisabled}>
            Create Account
          </Button>

          <p className="text-center text-sm">
            Already have account{" "}
            <Link href="/login" className="text-[#00B207] hover:underline">
              Login
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
