"use client"
import Link from 'next/link';
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  return (
    <div className='flex border-gray-400 rounded'>
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
    </div>
  )
}

export default SignupPage