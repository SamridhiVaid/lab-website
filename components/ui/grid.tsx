import { cn } from "@/lib/utils"  
// components/ui/grid.tsx 
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    columns?: {
      default?: number
      sm?: number
      md?: number
      lg?: number
      xl?: number
    }
  }
  
  export function Grid({
    columns = {
      default: 1,
      sm: 2,
      md: 3,
      lg: 4,
    },
    className,
    ...props
  }: GridProps) {
    const gridCols = `grid grid-cols-${columns.default} ${
      columns.sm ? `sm:grid-cols-${columns.sm}` : ''
    } ${columns.md ? `md:grid-cols-${columns.md}` : ''} ${
      columns.lg ? `lg:grid-cols-${columns.lg}` : ''
    } ${columns.xl ? `xl:grid-cols-${columns.xl}` : ''}`
  
    return (
      <div
        className={cn(
          gridCols,
          "gap-4 md:gap-6 lg:gap-8",
          className
        )}
        {...props}
      />
    )
  }
  
  