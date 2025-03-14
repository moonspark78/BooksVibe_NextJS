"use client";
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

const Provider = ({children}: {children: ReactNode}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme='light' enableSystem={false} >
        {children}
    </ThemeProvider>
  )
}

export default Provider