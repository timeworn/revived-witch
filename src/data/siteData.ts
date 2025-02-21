const rwUrls = {
  home: {
    name: "Revived Witch",
    url: "/rw/",
  },
  characters: {
    name: "Dolls",
    url: "/rw/dolls",
  },
  game: {
    name: "Game",
    url: {
      accountLevel: { name: "Account Level", url: "/rw/game/account-level" },
      achievements: { name: "Achievements", url: "/rw/game/achievements" },
      dailyMission: { name: "Daily Mission", url: "/rw/game/daily" },
      equipment: { name: "Equipment", url: "/rw/game/equipment" },
      uniqueEquipment: {
        name: "Unique Equipment",
        url: "/rw/game/unique-equipment",
      },
      gifts: { name: "Gifts", url: "/rw/game/gifts" },
    },
  },
  courtYard: {
    name: "Courtyard",
    url: {
      alchemyLab: {
        name: "Alchemy Lab",
        url: "/rw/courtyard/alchemy-lab",
      },
      fluorescentVilla: {
        name: "Fluorescent Villa",
        url: "/rw/courtyard/fluorescent-villa",
      },
      furniture: { name: "Furniture", url: "/rw/courtyard/furniture" },
      musicBox: { name: "Music Box", url: "/rw/courtyard/music-box" },
    },
  },
  gallery: {
    name: "Gallery",
    url: {
      avatar: { name: "Avatars", url: "/rw/gallery/avatars" },
      avatarFrames: { name: "Avatar Frames", url: "/rw/gallery/frames" },
      stickers: { name: "Stickers", url: "/rw/gallery/stickers" },
    },
  },
};

const siteUrls = {
  rw: rwUrls,
};

const siteData = {
  siteName: "Timeworn Wiki",
  siteDesc: "A database for various games.",
  siteUrl: "https://wiki.timeworn.net",
  siteUrls: siteUrls,
  socials: {
    github: "https://github.com/timeworn/",
    githubAlt: "https://github.com/lele394/kimaris-archive",
    mail: "contact@timeworn.net",
  },
  shareImage: "https://cdn.timeworn.net/metadata/share_image.jpg",
};

export default siteData;
