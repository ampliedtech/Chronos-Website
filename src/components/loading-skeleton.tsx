import { Card, CardContent } from '@/components/ui/card';

interface SkeletonProps {
  className?: string;
}

function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray-200 ${className}`}
    />
  );
}

export function ServiceCardSkeleton() {
  return (
    <Card className="h-full">
      <CardContent className="p-8 space-y-6">
        <Skeleton className="w-20 h-20 rounded-3xl" />
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-3">
              <Skeleton className="w-2 h-2 rounded-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
        <Skeleton className="h-6 w-24" />
      </CardContent>
    </Card>
  );
}

export function TestimonialSkeleton() {
  return (
    <Card className="h-full">
      <CardContent className="p-8 space-y-6">
        <Skeleton className="w-16 h-16 rounded-2xl" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
        </div>
        <div className="flex items-center space-x-4 pt-6">
          <Skeleton className="w-16 h-16 rounded-2xl" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function CustomerLogoSkeleton() {
  return (
    <div className="group relative">
      <div className="relative bg-white rounded-3xl border border-gray-200 p-8 h-full flex flex-col items-center text-center space-y-6">
        <Skeleton className="w-24 h-24 rounded-2xl" />
        <div className="space-y-3 flex-1 flex flex-col justify-center">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <div className="flex items-center justify-center space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="w-3 h-3 rounded-full" />
            ))}
          </div>
          <Skeleton className="h-3 w-1/3" />
        </div>
        <div className="w-full">
          <div className="bg-gray-100 rounded-xl p-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <Skeleton className="h-20 w-full bg-white/20" />
            <Skeleton className="h-6 w-3/4 mx-auto bg-white/20" />
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Skeleton className="h-12 w-32 bg-white/20" />
            <Skeleton className="h-12 w-40 bg-white/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="text-center space-y-6">
                <Skeleton className="w-20 h-20 rounded-2xl mx-auto bg-white/20" />
                <Skeleton className="h-6 w-24 mx-auto bg-white/20" />
                <Skeleton className="h-4 w-full bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
