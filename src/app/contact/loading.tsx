export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-dark text-light">
      <div className="max-w-[80vw] min-h-screen mx-auto pt-24 animate-pulse">
        <div className="flex flex-col space-y-8 md:flex-row justify-evenly items-start">
          <div className="w-full md:w-1/2 space-y-4">
            <div className="h-20 bg-gray-600/20 rounded-lg w-3/4"></div>
            <div className="h-8 bg-gray-600/20 rounded-lg w-1/2"></div>
            <div className="h-32 bg-gray-600/20 rounded-lg"></div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="h-96 bg-gray-600/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 