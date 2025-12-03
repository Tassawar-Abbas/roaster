"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFavorites } from "@/context/favorites-context"
import { Mail, Lock, User, ArrowLeft } from "lucide-react"

interface AuthDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type AuthView = "main" | "login" | "register"

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const { setIsAuthenticated, setUser } = useFavorites()
  const [isLoading, setIsLoading] = useState<string | null>(null)
  const [view, setView] = useState<AuthView>("main")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleOAuthLogin = async (provider: string) => {
    setIsLoading(provider)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({
      name: "Sports Fan",
      email: "fan@example.com",
      image: "/diverse-user-avatars.png",
    })
    setIsAuthenticated(true)
    setIsLoading(null)
    onOpenChange(false)
    resetForm()
  }

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading("email")
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({
      name: name || email.split("@")[0],
      email: email,
      image: "/diverse-user-avatars.png",
    })
    setIsAuthenticated(true)
    setIsLoading(null)
    onOpenChange(false)
    resetForm()
  }

  const resetForm = () => {
    setView("main")
    setEmail("")
    setPassword("")
    setName("")
  }

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      resetForm()
    }
    onOpenChange(isOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {view === "main" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-display tracking-wider">Welcome to FanZone</DialogTitle>
              <DialogDescription className="text-center">
                Sign in to save your favorite players and teams
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3 pt-4">
              {/* Google Login */}
              <Button
                variant="outline"
                className="w-full h-12 gap-3 bg-card hover:bg-secondary"
                onClick={() => handleOAuthLogin("google")}
                disabled={isLoading !== null}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                {isLoading === "google" ? "Signing in..." : "Continue with Google"}
              </Button>

              {/* Apple Login */}
              <Button
                variant="outline"
                className="w-full h-12 gap-3 bg-card hover:bg-secondary"
                onClick={() => handleOAuthLogin("apple")}
                disabled={isLoading !== null}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {isLoading === "apple" ? "Signing in..." : "Continue with Apple"}
              </Button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-popover px-2 text-muted-foreground">Or continue with email</span>
                </div>
              </div>

              {/* Login Button */}
              <Button
                variant="default"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setView("login")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Sign in with Email
              </Button>

              {/* Create Account Button */}
              <Button variant="secondary" className="w-full h-12" onClick={() => setView("register")}>
                <User className="w-4 h-4 mr-2" />
                Create Account
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-4">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </>
        )}

        {view === "login" && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setView("main")}>
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <DialogTitle className="text-xl">Sign In</DialogTitle>
              </div>
              <DialogDescription>Enter your email and password to sign in</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEmailLogin} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isLoading !== null}
              >
                {isLoading === "email" ? "Signing in..." : "Sign In"}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <button type="button" className="text-primary hover:underline" onClick={() => setView("register")}>
                  Create one
                </button>
              </p>
            </form>
          </>
        )}

        {view === "register" && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setView("main")}>
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <DialogTitle className="text-xl">Create Account</DialogTitle>
              </div>
              <DialogDescription>Create a new account to get started</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEmailLogin} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="register-name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="register-name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isLoading !== null}
              >
                {isLoading === "email" ? "Creating account..." : "Create Account"}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <button type="button" className="text-primary hover:underline" onClick={() => setView("login")}>
                  Sign in
                </button>
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
