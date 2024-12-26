// app/layout.tsx
import { MainNav } from '@/components/main-nav'
import { Container } from '@/components/ui/container'
import './globals.css'

export const metadata = {
  title: 'PHAIR Lab',
  description: 'The PHAIR Lab is a research group in the Department of Medicine at the University of Alberta, led by Dr. J. Ross Mitchell.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <MainNav />
        <main className="flex-1 py-12">
          <Container>
            {children}
          </Container>
        </main>
        <footer className="border-t bg-white">
          <Container>
            <div className="py-6 md:flex md:items-center md:justify-between">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600">
                  © {new Date().getFullYear()} PHAIR Lab. All rights reserved.
                </p>
              </div>
              <div className="mt-4 flex justify-center md:mt-0">
                <div className="flex space-x-6">
                  <a href="https://scholar.google.com/" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Google Scholar</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.3 14.6c0-.3-.2-.5-.5-.5h-1.1c-.3 0-.5.2-.5.5v1.1c0 .3.2.5.5.5h1.1c.3 0 .5-.2.5-.5v-1.1zm-4.2 0c0-.3-.2-.5-.5-.5h-1.1c-.3 0-.5.2-.5.5v1.1c0 .3.2.5.5.5h1.1c.3 0 .5-.2.5-.5v-1.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </footer>
      </body>
    </html>
  )
}