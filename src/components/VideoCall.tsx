import { useState } from 'react';

const VideoCall = () => {
  const [isCalling, setIsCalling] = useState(false);

  return (
    <div className="p-4 border rounded-lg shadow bg-white mb-4">
      <h2 className="text-xl font-bold mb-2">Video Call</h2>
      {isCalling ? (
        <div>
          <video autoPlay muted className="w-full h-48 bg-gray-200 mb-2" />
          <div className="flex gap-2 flex-wrap">
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 hover:scale-105 transition-all duration-200"
              onClick={() => setIsCalling(false)}
            >
              End Call
            </button>
            <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 hover:scale-105 transition-all duration-200">
              Toggle Video
            </button>
            <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 hover:scale-105 transition-all duration-200">
              Toggle Audio
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 hover:scale-105 transition-all duration-200"
          onClick={() => setIsCalling(true)}
        >
          Start Call
        </button>
      )}
    </div>
  );
};

export default VideoCall;