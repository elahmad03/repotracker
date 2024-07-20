
const Token = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex flex-col items-center p-4">
        {/* Header */}
        <div className="w-full flex justify-between items-center mb-4">
          <div className="text-left">
            <button className="text-lg font-semibold">&times;</button>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">1win Token</h1>
          </div>
          <div className="text-right">
            <button className="text-lg font-semibold">&#8942;</button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="w-full flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="ml-2">
              <p className="font-semibold">Ahmad</p>
              <p className="text-blue-500 font-bold">1win</p>
            </div>
          </div>
        </div>

        {/* Token Information */}
        <div className="w-full flex flex-col items-center mb-4">
          <div className="text-center">
            <img src="path/to/coin-image.png" alt="1win Token" className="w-24 h-24 mx-auto mb-2"/>
            <p className="text-5xl font-bold">705</p>
          </div>
          <div className="flex items-center mt-2">
            <p className="px-2 py-1 bg-yellow-400 rounded-full font-semibold">+1</p>
            <p className="ml-2">coins per tap</p>
            <p className="ml-4 px-2 py-1 bg-yellow-400 rounded-full font-semibold">800</p>
            <p className="ml-2">income per hour</p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="w-full flex justify-around mb-4">
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <p>Soon</p>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <p>Soon</p>
          </button>
        </div>

        {/* Navigation Section */}
        <div className="w-full flex justify-around border-t pt-2">
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
            <p>Main</p>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
            <p>Earn</p>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
            <p>Friends</p>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <p>Soon</p>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full fixed bottom-0 bg-white border-t p-4">
        <p className="text-center">Simple Coin</p>
      </div>
    </div>
  );
};

export default Token;
