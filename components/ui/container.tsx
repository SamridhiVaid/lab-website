// components/ui/container.tsx
import { cn } from "@/lib/utils"

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  )
}


