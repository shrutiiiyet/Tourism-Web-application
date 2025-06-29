import React, { useState } from 'react';
import { Edit3, Camera, Save, X, Plane, MessageCircle, Award, Compass } from 'lucide-react';
import TravelTabs from './TravelTabs'; 
import { profileInitialState, getRarityStyles } from './TravelData'; // Optional: profile state if you want cleaner separation

const TravelProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(profileInitialState);
  const [editForm, setEditForm] = useState({
    name: profileData.name,
    bio: profileData.bio,
    location: profileData.location,
    avatar: profileData.avatar
  });

  const handleEditSave = () => {
    setProfileData(prev => ({ ...prev, ...editForm }));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Hero section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 p-6 text-white shadow-2xl shadow-emerald-500/25 mb-6">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-2 right-2 opacity-10">
                    <Plane className="w-20 h-20 transform rotate-12" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-6">
                      {/* Avatar */}
                      <div className="relative group">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl p-1">
                          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                            {profileData.avatar}
                          </div>
                        </div>
                        <button className="absolute -bottom-1 -right-1 p-1.5 bg-white text-emerald-600 rounded-lg shadow-lg hover:shadow-xl transition-all group-hover:scale-110">
                          <Camera className="w-3 h-3" />
                        </button>
                      </div>
                      {/* Profile Info */}
                      <div>
                        {isEditing ? (
                          <div className="space-y-2">
                            <input
                              className="bg-white/20 text-white rounded px-2 py-1 mb-1 w-full"
                              value={editForm.name}
                              onChange={e => setEditForm({ ...editForm, name: e.target.value })}
                            />
                            <input
                              className="bg-white/20 text-white rounded px-2 py-1 mb-1 w-full"
                              value={editForm.location}
                              onChange={e => setEditForm({ ...editForm, location: e.target.value })}
                            />
                            <textarea
                              className="bg-white/20 text-white rounded px-2 py-1 w-full"
                              value={editForm.bio}
                              onChange={e => setEditForm({ ...editForm, bio: e.target.value })}
                            />
                          </div>
                        ) : (
                          <div>
                            <h2 className="text-2xl font-bold">{profileData.name}</h2>
                            <div className="flex items-center space-x-2 text-emerald-200">
                              <span>{profileData.location}</span>
                            </div>
                            <p className="mt-1 text-emerald-100">{profileData.bio}</p>
                          </div>
                        )}
                      </div>
                      {/* Edit/Save Button */}
                      <div className="ml-auto flex flex-col space-y-2">
                        {isEditing ? (
                          <div className="flex space-x-2">
                            <button
                              className="bg-white/20 hover:bg-white/30 text-emerald-900 px-3 py-1 rounded-lg flex items-center space-x-1"
                              onClick={handleEditSave}
                            >
                              <Save className="w-4 h-4" />
                              <span>Save</span>
                            </button>
                            <button
                              className="bg-white/20 hover:bg-white/30 text-emerald-900 px-3 py-1 rounded-lg flex items-center space-x-1"
                              onClick={() => setIsEditing(false)}
                            >
                              <X className="w-4 h-4" />
                              <span>Cancel</span>
                            </button>
                          </div>
                        ) : (
                          <button
                            className="bg-white/20 hover:bg-white/30 text-emerald-900 px-3 py-1 rounded-lg flex items-center space-x-1"
                            onClick={() => setIsEditing(true)}
                          >
                            <Edit3 className="w-4 h-4" />
                            <span>Edit</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

        {/* Navigation */}
        <div className="bg-slate-900/80 backdrop-blur-2xl rounded-2xl shadow-xl border border-emerald-500/20 mb-6 overflow-hidden">
          <div className="flex">
            {[
              { id: 'overview', label: 'Overview', icon: Compass },
              { id: 'reviews', label: 'Reviews', icon: MessageCircle },
              { id: 'achievements', label: 'Achievements', icon: Award }
            ].map(tab => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg'
                      : 'text-gray-300 hover:text-emerald-300 hover:bg-emerald-500/10'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline text-sm">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content from TravelTabs */}
        <TravelTabs
          activeTab={activeTab}
          profileData={profileData}
          getRarityStyles={getRarityStyles}
        />
      </div>
    </div>
  );
};

export default TravelProfilePage;
