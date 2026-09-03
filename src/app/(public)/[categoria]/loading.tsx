export default function Loading() {
  return (
    <div className="min-h-screen bg-espresso/5 animate-pulse">
      {/* Banner de carga */}
      <div className="h-64 md:h-80 w-full bg-espresso/20 flex items-center justify-center">
        <div className="w-48 h-8 bg-cream/10 rounded-md"></div>
      </div>

      {/* Grid de productos  */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="flex flex-col gap-3">
              <div className="aspect-3/4 w-full bg-espresso/10 rounded-xl"></div>
              <div className="h-4 w-3/4 bg-espresso/10 rounded"></div>
              <div className="h-4 w-1/4 bg-espresso/10 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
