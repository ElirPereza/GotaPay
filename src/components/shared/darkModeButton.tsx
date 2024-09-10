'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useThemeMode } from '@/hooks/theme/useTheme';

export default function EnhancedThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const { setTheme } = useThemeMode();


  console.log(isDark)

  const toggleTheme = () => {
    setIsDark(!isDark)
    setTheme(isDark? 'light' : 'dark')  
  }

  return (
    <motion.div
    className={`w-20 h-10 rounded-full p-1 cursor-pointer flex items-center ${
      isDark ? 'justify-end' : 'justify-start'
    }`}
    style={{
      backgroundColor: isDark ? '#1e1e2e' : '#8533FF',
    }}
    onClick={toggleTheme}
    animate={{ backgroundColor: isDark ? '#1e1e2e' : '#8533FF' }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="w-8 h-8 rounded-full flex items-center justify-center"
      animate={{
        backgroundColor: isDark ? '#2d2d3f' : '#9f66ff',
        rotate: isDark ? 360 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      {isDark ? (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-purple-200"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </motion.svg>
      ) : (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </motion.svg>
      )}
    </motion.div>
  </motion.div>
  )
}