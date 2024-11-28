import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Dr. J. Ross Mitchell',
  description: 'Academic website of Dr. J. Ross Mitchell',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-blue-700 text-white p-4">
          <h1 className="text-2xl font-bold">Dr. J. Ross Mitchell</h1>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/publications" className="hover:underline">Publications</Link></li>
              <li><Link href="/experience" className="hover:underline">Experience</Link></li>
              <li><Link href="/media" className="hover:underline">Media</Link></li>
              <li><Link href="/accomplishments" className="hover:underline">Accomplishments</Link></li>
              <li><Link href="/awards" className="hover:underline">Awards</Link></li>
              <li><Link href="/presentations" className="hover:underline">Presentations</Link></li>
              <li><Link href="/calendar" className="hover:underline">Calendar</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-200 p-4 text-center">
          © 2023 Dr. J. Ross Mitchell. All rights reserved.
        </footer>
      </body>
    </html>
  )
}

