// components/page-layout.tsx

interface PageLayoutProps {
  title?: string
  description?: string
  children: React.ReactNode
}

export function PageLayout({ title, description, children }: PageLayoutProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-gray-600">
            {description}
          </p>
        )}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}