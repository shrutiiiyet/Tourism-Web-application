import React from 'react';
import { Zap, Mountain, Star } from 'lucide-react';

const TravelTabs = ({ activeTab, profileData, getRarityStyles }) => {
  switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Travel DNA */}
            <div className="bg-gradient-to-br from-slate-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20 shadow-2xl">
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-7 h-7 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/25">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Travel DNA</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Vibes */}
                <div className="lg:col-span-3">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Travel Vibes</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.vibes.map((vibe, index) => (
                      <div key={index} className="px-3 py-1.5 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-200 text-sm font-medium hover:bg-emerald-500/30 transition-all hover:scale-105">
                        {vibe}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages - Made smaller */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Languages</h4>
                  <div className="space-y-2">
                    {profileData.languages.map((lang, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs">{lang.flag}</span>
                          <span className="text-white text-xs">{lang.name}</span>
                        </div>
                        <span className={`px-1 py-0.5 rounded text-xs font-medium ${
                          lang.level === 'native' ? 'bg-emerald-500/20 text-emerald-300' :
                          lang.level === 'fluent' ? 'bg-teal-500/20 text-teal-300' :
                          'bg-green-500/20 text-green-300'
                        }`}>
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Travel Style */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Travel Style</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(profileData.travelStyle).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{value}%</div>
                      <div className="w-full bg-white/10 rounded-full h-1.5 mb-2">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-1000"
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

             {/* Recent Journeys - Vertical Timeline */}
      <div className="bg-gradient-to-br from-slate-900/80 via-gray-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/10 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <Mountain className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Recent Journeys
            </h3>
          </div>
          <div className="text-xs text-gray-400 font-medium">Latest Updates</div>
        </div>

        {/* Timeline Journey Cards */}
        <div className="relative border-l-4 border-emerald-500/20 pl-6 ml-2 space-y-10">
          {profileData.recentJourney.map((activity, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[30px] top-1 w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 border-4 border-slate-900 group-hover:scale-110 transition-transform"></div>

              {/* Timeline Card */}
              <div className="bg-gradient-to-br from-slate-800/60 to-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center text-lg border border-emerald-400/20">
                      {activity.emoji}
                    </div>
                    <h4 className="text-white font-semibold text-lg group-hover:text-emerald-300 transition-colors">
                      {activity.place}
                    </h4>
                  </div>
                  <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">
                    {activity.time}
                  </span>
                </div>
                <p className="text-sm text-emerald-300 italic">{activity.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );


      case 'reviews':
        return (
          <div className="space-y-4">
            {profileData.reviews.map((review, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20 shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${review.color} rounded-xl flex items-center justify-center text-white font-bold shadow-lg`}>
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{review.name}</h4>
                      <p className="text-sm text-emerald-300">{review.trip}</p>
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-emerald-400 text-emerald-400' : 'text-gray-500'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        );

      case 'achievements':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.achievements.map((achievement, index) => {
              const rarityStyle = getRarityStyles(achievement.rarity, achievement.progress);
              const isUnlocked = achievement.progress === 100;
              
              return (
                <div
                  key={index}
                  className={
                    [
                      "group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105",
                      isUnlocked
                        ? `bg-gradient-to-br ${rarityStyle.bg} ${rarityStyle.border} border-2 shadow-2xl ${rarityStyle.glow}`
                        : `bg-gradient-to-br from-slate-900/60 via-gray-900/40 to-slate-800/60 backdrop-blur-xl ${rarityStyle.border} border hover:shadow-xl ${rarityStyle.glow}`
                    ].join(" ")
                  }
                >
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${rarityStyle.bg} rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700`}
                    ></div>
                    <div
                      className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${rarityStyle.bg} rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-500`}
                    ></div>
                  </div>

                  {/* Rarity indicator */}
                  <div className="absolute top-3 right-3">
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        isUnlocked
                          ? "bg-white/20 text-white"
                          : `bg-gradient-to-r ${rarityStyle.bg} text-white`
                      }`}
                    >
                      {achievement.rarity}
                    </div>
                  </div>

                  <div className="relative z-10 p-6">
                    {/* Icon with glow effect */}
                    <div className="relative mb-4">
                      <div
                        className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl ${
                          isUnlocked
                            ? "bg-white/20 backdrop-blur-sm shadow-lg"
                            : "bg-white/10 backdrop-blur-sm"
                        } group-hover:scale-110 transition-transform duration-300`}
                      >
                        {achievement.icon}
                      </div>
                      {isUnlocked && (
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${rarityStyle.bg} opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-300`}
                        ></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h4
                        className={`font-bold text-lg mb-2 ${
                          isUnlocked ? "text-white" : rarityStyle.text
                        } group-hover:scale-105 transition-transform duration-200`}
                      >
                        {achievement.title}
                      </h4>
                      <p
                        className={`text-sm mb-4 ${
                          isUnlocked ? "text-white/90" : "text-gray-400"
                        }`}
                      >
                        {achievement.desc}
                      </p>

                      {/* Progress section */}
                      {achievement.progress < 100 ? (
                        <div className="space-y-3">
                          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${rarityStyle.bg} rounded-full transition-all duration-1000 relative`}
                              style={{ width: `${achievement.progress}%` }}
                            >
                              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                          <div className={`text-sm font-bold ${rarityStyle.text}`}>
                            {achievement.progress}% Complete
                          </div>
                        </div>
                      ) : (
                        <div className="relative">
                          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span className="text-white font-bold text-sm">UNLOCKED</span>
                          </div>
                          {/* Sparkle effects */}
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-80 animate-ping"></div>
                          <div
                            className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Shimmer effect for unlocked achievements */}
                  {isUnlocked && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 -translate-x-full"></div>
                  )}
                </div>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

export default TravelTabs;
