'use client'

import { signIn } from 'next-auth/react'

export default function LoginButton() {
  const handleSignIn = async () => {
    try {
      await signIn('google', {
        callbackUrl: '/',
        redirect: true
      })
    } catch (error) {
      console.error('Login Error:', error)
    }
  }

  return (
    <button
      className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-md border transition-colors"
      onClick={handleSignIn}
    >
      Login
    </button>
  )
}
