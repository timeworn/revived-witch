const siteUrls = {
  home: {
    name: "Home",
    url: "/",
  },
  blog: {
    name: "Blog",
    url: "/blog",
    hidden: true,
  },
  characters: {
    name: "Dolls",
    url: "/dolls",
  },
  game: {
    name: "Game",
    url: {
      accountLevel: { name: "Account Level", url: "/game/account-level" },
      achievements: { name: "Achievements", url: "/game/achievements" },
      dailyMission: { name: "Daily Mission", url: "/game/daily" },
      equipment: { name: "Equipment", url: "/game/equipment" },
      uniqueEquipment: {
        name: "Unique Equipment",
        url: "/game/unique-equipment",
      },
      gifts: { name: "Gifts", url: "/game/gifts" },
    },
  },
  courtYard: {
    name: "Courtyard",
    url: {
      alchemyLab: {
        name: "Alchemy Lab",
        url: "/courtyard/alchemy-lab",
      },
      fluorescentVilla: {
        name: "Fluorescent Villa",
        url: "/courtyard/fluorescent-villa",
      },
      furniture: { name: "Furniture", url: "/courtyard/furniture" },
      musicBox: { name: "Music Box", url: "/courtyard/music-box" },
    },
  },
  gallery: {
    name: "Gallery",
    url: {
      avatar: { name: "Avatars", url: "/gallery/avatars" },
      avatarFrames: { name: "Avatar Frames", url: "/gallery/frames" },
      stickers: { name: "Stickers", url: "/gallery/stickers" },
    },
  },
};

const siteData = {
  siteName: "Revived Witch Database",
  siteDesc: "A database for Revived Witch",
  siteUrl: "https://rw.timeworn.net",
  siteUrls: siteUrls,
  socials: {
    github: "https://github.com/timeworn/",
    githubAlt: "https://github.com/lele394/kimaris-archive",
    mail: "contact@timeworn.net",
  },
  shareImage: "https://cdn.timeworn.net/metadata/share_image.jpg",
};

export default siteData;
