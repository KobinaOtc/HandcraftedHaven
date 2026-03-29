import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Handcrafted Haven',
    description: 'A platform for artisans to showcase and sell their unique handcrafted items.',
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}