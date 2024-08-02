import { Skeleton } from "@/components/ui/skeleton"
const loading = () => {
  return (
    <div className="flex items-center space-x-4 min-h-screen justify-center bg-[#101115]">
      <Skeleton className="h-12 w-12 rounded-full bg-[#1F1F1F]" />
      <p className="text-[#ffffff9c]">Please wait ..</p>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-[#1F1F1F]" />
        <Skeleton className="h-4 w-[200px] bg-[#1F1F1F]" />
      </div>
    </div>
  )
}

export default loading
