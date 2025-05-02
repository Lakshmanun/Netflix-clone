import React from 'react'
function GeoLocationModel({onClose}) {
   
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#3c3c3c15] bg-opacity-20 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <h2 className="text-lg font-semibold mb-4">Welcome!</h2>
            <p className="text-gray-600 mb-4">We need some information from you.</p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      );
}
export default GeoLocationModel


