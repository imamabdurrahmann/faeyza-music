export default function Loading() {
  return (
    <div className="min-h-screen bg-warmWhite animate-pulse">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero skeleton */}
        <div className="text-center space-y-4 mb-16">
          <div className="h-4 w-48 bg-cream rounded mx-auto" />
          <div className="h-12 w-80 bg-cream rounded mx-auto" />
          <div className="h-6 w-96 bg-cream rounded mx-auto" />
          <div className="flex justify-center gap-4 mt-8">
            <div className="h-12 w-40 bg-cream rounded" />
            <div className="h-12 w-40 bg-cream rounded" />
          </div>
        </div>

        {/* Cards skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-cream rounded-xl p-4 h-32" />
          ))}
        </div>
      </div>
    </div>
  );
}