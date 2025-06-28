import React, { useState } from 'react';
import {
  Users,
  UserPlus,
  MapPin,
  Plane,
  Camera,
  MessageCircle,
  MoreHorizontal,
  Search,
  Filter,
  Globe,
  X,
  Check
} from 'lucide-react';

const TravelFriendsPage = () => {
  const [activeTab, setActiveTab] = useState('friends');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const friends = [
    {
      id: 1,
      name: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen&background=003049&color=fff",
      location: "Tokyo, Japan",
      status: "Currently in Bali",
      mutual: 12,
      trips: 24,
      lastSeen: "2 hours ago",
      badges: ["Explorer", "Photographer"]
    },
    {
      id: 2,
      name: "Marcus Johnson",
      avatar: "https://ui-avatars.com/api/?name=Marcus+Johnson&background=003049&color=fff",
      location: "New York, USA",
      status: "Planning Europe trip",
      mutual: 8,
      trips: 18,
      lastSeen: "1 day ago",
      badges: ["Adventurer", "Local Guide"]
    },
    {
      id: 3,
      name: "Luna Rodriguez",
      avatar: "https://ui-avatars.com/api/?name=Luna+Rodriguez&background=003049&color=fff",
      location: "Barcelona, Spain",
      status: "Backpacking through Asia",
      mutual: 15,
      trips: 31,
      lastSeen: "5 minutes ago",
      badges: ["Solo Traveler", "Foodie"]
    },
    {
      id: 4,
      name: "Alex Kim",
      avatar: "https://ui-avatars.com/api/?name=Alex+Kim&background=003049&color=fff",
      location: "Seoul, South Korea",
      status: "Local explorer",
      mutual: 6,
      trips: 12,
      lastSeen: "3 hours ago",
      badges: ["Culture Enthusiast"]
    }
  ];

  const friendRequests = [
    {
      id: 1,
      name: "Emma Wilson",
      avatar: "https://ui-avatars.com/api/?name=Emma+Wilson&background=003049&color=fff",
      location: "London, UK",
      mutual: 3,
      reason: "Liked your Paris travel story",
      time: "2 hours ago"
    },
    {
      id: 2,
      name: "Diego Santos",
      avatar: "https://ui-avatars.com/api/?name=Diego+Santos&background=003049&color=fff",
      location: "Rio de Janeiro, Brazil",
      mutual: 7,
      reason: "Met at the travel meetup",
      time: "1 day ago"
    },
    {
      id: 3,
      name: "Priya Patel",
      avatar: "https://ui-avatars.com/api/?name=Priya+Patel&background=003049&color=fff",
      location: "Mumbai, India",
      mutual: 5,
      reason: "Interested in your India itinerary",
      time: "3 days ago"
    }
  ];

  const filteredFriends = friends.filter(friend => {
    const matchesSearch = friend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      friend.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' ||
      (selectedFilter === 'recent' && friend.lastSeen.includes('hour'));
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000814] via-[#003049] to-[#001d3d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white">Travel Friends</h1>
            <p className="text-gray-300">Connect with fellow travelers around the world</p>
          </div>
          <button className="bg-[#003049] hover:bg-[#001f3f] px-6 py-3 rounded-xl text-white font-medium hover:scale-105 transition-transform duration-300 flex items-center space-x-2">
            <UserPlus className="w-5 h-5" />
            <span>Find Friends</span>
          </button>
        </div>

        <div className="flex space-x-6 mb-6 border-b border-gray-700 pb-2">
          <button
            onClick={() => setActiveTab('friends')}
            className={`pb-2 font-semibold transition-colors ${
              activeTab === 'friends' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Users className="inline-block w-5 h-5 mr-2" />My Friends ({friends.length})
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`pb-2 font-semibold transition-colors ${
              activeTab === 'requests' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            <UserPlus className="inline-block w-5 h-5 mr-2" />Friend Requests
            {friendRequests.length > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {friendRequests.length}
              </span>
            )}
          </button>
        </div>

        {activeTab === 'friends' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFriends.map(friend => (
              <div key={friend.id} className="bg-black/20 p-6 rounded-2xl backdrop-blur-md shadow-lg transition-transform hover:scale-105 duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-white">{friend.name}</h4>
                    <p className="text-sm text-gray-400 flex items-center"><MapPin className="w-3 h-3 mr-1" />{friend.location}</p>
                    <p className="text-sm text-gray-300 italic">{friend.status}</p>
                    <p className="text-sm text-gray-400 flex items-center mt-1"><Users className="w-3 h-3 mr-1" />{friend.mutual} mutual • <Plane className="w-3 h-3 mx-1" />{friend.trips} trips</p>
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
        )}

        {activeTab === 'requests' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {friendRequests.map(request => (
              <div key={request.id} className="bg-black/20 p-6 rounded-2xl backdrop-blur-md shadow-lg transition-transform hover:scale-105 duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <img src={request.avatar} alt={request.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-white">{request.name}</h4>
                    <p className="text-sm text-gray-400 flex items-center"><MapPin className="w-3 h-3 mr-1" />{request.location}</p>
                    <p className="text-sm text-gray-300 italic">"{request.reason}"</p>
                    <p className="text-sm text-gray-400 flex items-center mt-1"><Users className="w-3 h-3 mr-1" />{request.mutual} mutual friends</p>
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
        )}
      </div>
    </div>
  );
};

export default TravelFriendsPage;
