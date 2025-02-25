import { getImageUrl } from "../hooks/getImage";

export interface SiteRoute {
  name: string;
  url: string;
  routes?: Record<string, SiteRoute>;
}

const rwUrls = {
  name: "Revived Witch",
  url: "/rw",
  icon: getImageUrl("rw/home/bg.webp"),
  routes: {
    characters: {
      name: "Dolls",
      url: "/rw/dolls",
    },
    game: {
      name: "Game",
      url: "/game",
      routes: {
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
      url: "/rw/courtyard",
      routes: {
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
      url: "/rw/gallery",
      routes: {
        avatar: { name: "Avatars", url: "/rw/gallery/avatars" },
        avatarFrames: { name: "Avatar Frames", url: "/rw/gallery/frames" },
        stickers: { name: "Stickers", url: "/rw/gallery/stickers" },
      },
    },
  },
};

const csUrls = {
  name: "CounterSide",
  url: "/cs",
  icon: getImageUrl("rw/home/bg.webp"),
  routes: {
    characters: {
      name: "Dolls",
      url: "/cs/dolls",
    },
    game: {
      name: "Game",
      url: "/game",
      routes: {
        accountLevel: { name: "Account Level", url: "/cs/game/account-level" },
        achievements: { name: "Achievements", url: "/cs/game/achievements" },
        dailyMission: { name: "Daily Mission", url: "/cs/game/daily" },
        equipment: { name: "Equipment", url: "/cs/game/equipment" },
        uniqueEquipment: {
          name: "Unique Equipment",
          url: "/cs/game/unique-equipment",
        },
        gifts: { name: "Gifts", url: "/cs/game/gifts" },
      },
    },
    courtYard: {
      name: "Courtyard",
      url: "/cs/courtyard",
      routes: {
        alchemyLab: {
          name: "Alchemy Lab",
          url: "/cs/courtyard/alchemy-lab",
        },
        fluorescentVilla: {
          name: "Fluorescent Villa",
          url: "/cs/courtyard/fluorescent-villa",
        },
        furniture: { name: "Furniture", url: "/cs/courtyard/furniture" },
        musicBox: { name: "Music Box", url: "/cs/courtyard/music-box" },
      },
    },
    gallery: {
      name: "Gallery",
      url: "/cs/gallery",
      routes: {
        avatar: { name: "Avatars", url: "/cs/gallery/avatars" },
        avatarFrames: { name: "Avatar Frames", url: "/cs/gallery/frames" },
        stickers: { name: "Stickers", url: "/cs/gallery/stickers" },
      },
    },
  },
};

const siteUrls = {
  rw: rwUrls,
  cs: csUrls,
};

const siteData = {
  siteName: "Timeworn Wiki",
  siteDesc: "A database.",
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
