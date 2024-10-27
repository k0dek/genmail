export function Features() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-[35px] shadow-md p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Generation</h3>
          <p className="text-gray-600">Generate HTML email templates in seconds with AI</p>
        </div>
      </div>
      <div className="bg-white rounded-[35px] shadow-md p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsive Design</h3>
          <p className="text-gray-600">Templates work perfectly across all email clients</p>
        </div>
      </div>
      <div className="bg-white rounded-[35px] shadow-md p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy to Use</h3>
          <p className="text-gray-600">No coding knowledge required</p>
        </div>
      </div>
    </div>
  );
}