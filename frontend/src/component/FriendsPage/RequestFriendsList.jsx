import React from 'react';
import { MapPin, Users, X, Check } from 'lucide-react';

const RequestFriendsList = ({ requests }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {requests.map(request => (
        <div key={request.id} className="bg-black/20 p-6 rounded-2xl backdrop-blur-md shadow-lg transition-transform hover:scale-105 duration-300">
          <div className="flex items-center space-x-4 mb-4">
            <img src={request.avatar} alt={request.name} className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="font-bold text-white">{request.name}</h4>
              <p className="text-sm text-gray-400 flex items-center"><MapPin className="w-3 h-3 mr-1" />{request.location}</p>
              <p className="text-sm text-gray-300 italic">"{request.reason}"</p>
              <p className="text-sm text-gray-400 flex items-center mt-1">
                <Users className="w-3 h-3 mr-1" />{request.mutual} mutual friends
              </p>
            </div>
          </div>
          <div className="flex space-x-2 mt-4">
            <button className="flex-1 bg-[#003049] hover:bg-[#001f3f] py-2.5 px-4 rounded-lg text-white font-medium transition duration-200 flex items-center justify-center space-x-2">
              <Check className="w-4 h-4" />
              <span>Accept</span>
            </button>
            <button className="flex-1 bg-gray-700 hover:bg-gray-600 py-2.5 px-4 rounded-lg text-white font-medium transition duration-200 flex items-center justify-center space-x-2">
              <X className="w-4 h-4" />
              <span>Decline</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestFriendsList;
