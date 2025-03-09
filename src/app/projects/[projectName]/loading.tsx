export default function Loading() {
  return (
    <div className="lg:px-36 px-4 min-h-screen w-screen animate-pulse">
      <div className="h-screen bg-gray-200 bg-opacity-30 rounded"></div>
      <div className="space-y-4 mt-8">
        <div className="h-8 bg-gray-200 bg-opacity-30 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-200 bg-opacity-30 rounded w-1/2 mx-auto"></div>
        <div className="h-96 bg-gray-200 bg-opacity-30 rounded mt-12"></div>
      </div>
    </div>
  );
} 