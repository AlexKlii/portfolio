'use client'

import * as React from 'react'
import { ThemeProvider } from 'next-themes'

const Providers = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => setMounted(true), [])

    return (
        <ThemeProvider attribute="class">
            {mounted && children}
        </ThemeProvider>
    )
}
export default Providers