import React, { useState } from 'react';
import { Users, UserPlus } from 'lucide-react';
import MyFriends from './MyFriends';
import RequestFriendsList from './RequestFriendsList';

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
        {/* Header */}
        {/* Header */}
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

{/* Tabs */}
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

        {activeTab === 'friends' ? (
          <MyFriends friends={filteredFriends} />
        ) : (
          <RequestFriendsList requests={friendRequests} />
        )}
      </div>
    </div>
  );
};

export default TravelFriendsPage;
