import React from 'react';
import { MapPin, Users, Plane, MessageCircle, Camera } from 'lucide-react';

const MyFriends = ({ friends }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {friends.map(friend => (
        <div key={friend.id} className="bg-black/20 p-6 rounded-2xl backdrop-blur-md shadow-lg transition-transform hover:scale-105 duration-300">
          <div className="flex items-center space-x-4 mb-4">
            <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="font-bold text-white">{friend.name}</h4>
              <p className="text-sm text-gray-400 flex items-center"><MapPin className="w-3 h-3 mr-1" />{friend.location}</p>
              <p className="text-sm text-gray-300 italic">{friend.status}</p>
              <p className="text-sm text-gray-400 flex items-center mt-1">
                <Users className="w-3 h-3 mr-1" />{friend.mutual} mutual • 
                <Plane className="w-3 h-3 mx-1" />{friend.trips} trips
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {friend.badges.map((badge, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-green-700 text-white rounded-full">{badge}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex space-x-2 mt-4">
            <button className="flex-1 bg-[#003049] hover:bg-[#001f3f] py-2.5 px-4 rounded-lg text-white font-medium transition duration-200 flex items-center justify-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Message</span>
            </button>
            <button className="flex-1 bg-gray-700 hover:bg-gray-600 py-2.5 px-4 rounded-lg text-white font-medium transition duration-200 flex items-center justify-center space-x-2">
              <Camera className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyFriends;
