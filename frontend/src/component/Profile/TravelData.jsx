// TravelData.js

export const profileInitialState = {
  name: "Alex Rodriguez",
  age: 27,
  bio: "Digital nomad chasing sunsets across continents ✨",
  location: "Bali, Indonesia",
  joinedDate: "Explorer since 2019",
  avatar: "AR",
  stats: {
    adventures: 47,
    countries: 23,
    rating: 4.9
  },
  languages: [
    { name: "English", level: "native", flag: "🇺🇸" },
    { name: "Spanish", level: "fluent", flag: "🇪🇸" }
  ],
  vibes: ["🏔 Mountain Soul", "📸 Visual Storyteller", "🌊 Ocean Chaser", "🍜 Culture Collector", "🌅 Sunrise Hunter"],
  travelStyle: {
    adventure: 92,
    social: 85,
    budget: 75,
    spontaneous: 68
  },
  recentJourney: [
    { place: "Iceland", action: "Aurora photography expedition", time: "3 days ago", emoji: "🌌" },
    { place: "Nepal", action: "Everest Base Camp summit", time: "1 week ago", emoji: "⛰" },
    { place: "Thailand", action: "Traditional cooking masterclass", time: "2 weeks ago", emoji: "🍛" },
    { place: "Peru", action: "Machu Picchu sunrise trek", time: "1 month ago", emoji: "🌅" }
  ],
  reviews: [
    {
      name: "Maya Chen",
      rating: 5,
      comment: "Alex's eye for hidden gems is incredible! Found the most breathtaking aurora spots in Iceland that weren't in any guidebook.",
      date: "2 weeks ago",
      trip: "Iceland Aurora Expedition",
      avatar: "MC",
      color: "from-emerald-500 to-teal-600"
    },
    {
      name: "Diego Santos",
      rating: 5,
      comment: "Perfect balance of adventure and safety. Alex's Patagonia knowledge made our glacier trek absolutely unforgettable!",
      date: "1 month ago",
      trip: "Patagonia Glacier Trek",
      avatar: "DS",
      color: "from-teal-500 to-emerald-600"
    },
    {
      name: "Sarah Kim",
      rating: 5,
      comment: "Incredible storyteller and photographer. Every moment with Alex becomes a treasured memory and stunning photo.",
      date: "2 months ago",
      trip: "Japan Cultural Journey",
      avatar: "SK",
      color: "from-emerald-500 to-green-600"
    }
  ],
  achievements: [
    { title: "Globe Wanderer", desc: "25+ countries", icon: "🌍", progress: 100, rarity: "legendary" },
    { title: "Peak Conqueror", desc: "5 major summits", icon: "🏔", progress: 100, rarity: "epic" },
    { title: "Culture Curator", desc: "20+ festivals", icon: "🎭", progress: 100, rarity: "rare" },
    { title: "Ocean Explorer", desc: "15+ diving spots", icon: "🌊", progress: 75, rarity: "uncommon" },
    { title: "Photo Virtuoso", desc: "1000+ shots", icon: "📸", progress: 85, rarity: "rare" },
    { title: "Continental Master", desc: "All 7 continents", icon: "🗺", progress: 71, rarity: "legendary" }
  ]
};

export const getRarityStyles = (rarity, progress) => {
  const styles = {
    legendary: {
      bg: progress === 100 ? 'from-yellow-400 via-orange-500 to-red-500' : 'from-yellow-400/20 via-orange-500/20 to-red-500/20',
      border: 'border-yellow-400/30',
      glow: 'shadow-yellow-400/25',
      text: progress === 100 ? 'text-white' : 'text-yellow-300'
    },
    epic: {
      bg: progress === 100 ? 'from-purple-500 via-pink-500 to-purple-600' : 'from-purple-500/20 via-pink-500/20 to-purple-600/20',
      border: 'border-purple-400/30',
      glow: 'shadow-purple-400/25',
      text: progress === 100 ? 'text-white' : 'text-purple-300'
    },
    rare: {
      bg: progress === 100 ? 'from-blue-500 via-indigo-500 to-blue-600' : 'from-blue-500/20 via-indigo-500/20 to-blue-600/20',
      border: 'border-blue-400/30',
      glow: 'shadow-blue-400/25',
      text: progress === 100 ? 'text-white' : 'text-blue-300'
    },
    uncommon: {
      bg: progress === 100 ? 'from-emerald-500 via-teal-500 to-green-500' : 'from-emerald-500/20 via-teal-500/20 to-green-500/20',
      border: 'border-emerald-400/30',
      glow: 'shadow-emerald-400/25',
      text: progress === 100 ? 'text-white' : 'text-emerald-300'
    },
    common: {
      bg: 'from-slate-600/20 to-gray-600/20',
      border: 'border-slate-500/30',
      glow: 'shadow-slate-500/10',
      text: 'text-slate-300'
    }
  };
  return styles[rarity] || styles.common;
};
