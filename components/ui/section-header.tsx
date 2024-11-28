// components/ui/section-header.tsx
interface SectionHeaderProps {
    title: string
    description?: string
  }
  
  export function SectionHeader({ title, description }: SectionHeaderProps) {
    return (
      <div className="space-y-2 mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-gray-600">
            {description}
          </p>
        )}
      </div>
    )
  }