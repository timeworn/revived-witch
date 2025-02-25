export type RWCharacter = {
  "id": number,
  "name": string,
  "title": string,
  "skins"?: {
    "list"?: {
      "id": number,
      "name": string,
      "description": string,
      "thumbnail": string,
      "artist": string,
      "overseasArtist": string,
      "square": string,
      "card": string,
      "l2d"?: {
        "path"?: undefined,
        "name": string
      },
      "pixelAnims": any[]
    }[],
    "artist": string,
    "overseasArtist": string,
    "jpnCV": string,
    "chsCV": string
  },
  "frame": string,
  "image": string,
  "card": string,
  "skills": {
    "id": number,
    "name": string,
    "icon": string,
    "description": string
  }[],
  "rarity": {
    "id": number,
    "icon": string,
    "name": string
  },
  "unknown": boolean,
  "element": {
    "id": number,
    "image": string,
    "name": string
  },
  "vocation": {
    "id": number,
    "imgDescribe": string,
    "name": string
  },
  "equipment": any[],
  "affiliation": {
    "icon": string,
    "id": number,
    "name": string
  },
  "backstories": string[],
  "sex": string,
  "birthday": string,
  "height": string,
  "weight": string,
  "hobby": string,
  "race": string,
  "age": string,
  "bonds": {
    "level": number,
    "reward": string,
    "exp": number
  }[],
  "stats": {
    "list": {
      "icon": string,
      "name": string,
      "baseValue": number,
      "addValue": number
    }[],
    "evolutions": {
      "level": number,
      "icon": string,
      "name": string,
      "addValue": number
    }[]
  },
  "voicelines": {
    "name": string,
    "description": string
  }[],
  "gifts": {
    "id": number,
    "name": string,
    "description": string,
    "icon": string,
    "favour": number,
    "exfavour": number
  }[],
  "yardSkills": {
    "id": number,
    "name": string,
    "description": string,
    "icon": string
  }[]
};

export type RWElement = {
  "id": number,
  "name": string,
  "image": string
};

export type RWVocation = {
  "id": number,
  "name": string,
  "imgDescribe": string
};

export type RWAvatar = {
  "id": number,
  "name": string,
  "description": string,
  "icon": string
};

export type RWAvatarFrame = {
  "id": number,
  "name": string,
  "description": string,
  "icon": string
};

export type RWEquipmentItem = {
  "id": number,
  "name": string,
  "description": string,
  "icon": string,
  "type": string,
  "score": number,
  "attributes": {
    "id": number,
    "name": string,
    "baseStat": number,
    "growth": number
  }[],
  "abilityId": number[],
  "equipSuit": {
    "id": number,
    "name": string
  }
};

export type RWUniqueEquipmentItem = {
  "id": number,
  "name": string,
  "description": string,
  "icon": string,
  "type": string,
  "owner": string,
  "effect": string,
  "evolution": string,
  "attributes": {
    "id": number,
    "name": string,
    "baseStat": number,
    "isDecimal": boolean
  }[]
};

export type RWFurnitureItem = {
  "id": number,
  "name": string,
  "description": string,
  "icon": string,
  "type": string,
  "furnitureType": {
    "id": number,
    "name": string,
    "icon": string
  },
  "level": number,
  "cover": string,
  "comfortPoint": number
};

export type RWGiftItem = {
  "id": number,
  "name": string,
  "description": string,
  "icon": string,
  "type": string,
  "favour": number,
  "exfavour": number
};

export type RWAccountLevel = {
  "exp": number,
  "id": number,
  "roleMaxLv": number,
  "strengthGet": number,
  "strengthLimit": number,
  "typeid": number,
  "unlockAfter": number,
  "unlockDungeon": number,
  "unlockFunction": any[]
};

export type RWSticker = string;

export type RWAchievement = {
  "id": number,
  "name": string,
  "description": string,
  "group": string,
  "points": number,
  "rewards": {
    "item": {
      "id": number,
      "name": number,
      "description": number,
      "icon": number,
      "type": number,
      "attributes": {

      }
    },
    "amount": number
  }[]
};

export type RWBadge = {
  "id": number,
  "name": string,
  "description": string,
  "icon": string,
  "group": string
};

export type RWDailyMission = {
  "id": number,
  "name": string,
  "description": string,
  "instruction": string,
  "points": number
};

export type RWDailyMissionAward = {
  "id": number,
  "points": number,
  "reward": {
    "item": {
      "id": number,
      "name": number,
      "description": number,
      "icon": number,
      "type": number,
      "attributes": {

      }
    },
    "amount": number
  }
};

export type RWLevelReward = {
  "id": number,
  "level": number,
  "points": number,
  "reward": {
    "item": {
      "id": number,
      "name": number,
      "description": number,
      "icon": number,
      "type": number,
      "attributes": {

      }
    },
    "amount": number
  }
};

export type RWAlchemyFormula = {
  "id": number,
  "unlockLv": number,
  "type": number,
  "emotionCost": number,
  "getExp": number,
  "itemsNeeded": {
    "item": {
      "id": number,
      "name": number,
      "description": number,
      "icon": number,
      "type": number,
      "attributes": {

      }
    },
    "amount": number
  }[],
  "itemsGiven": {
    "item": {
      "id": number,
      "name": number,
      "description": number,
      "icon": number,
      "type": number,
      "attributes": {

      }
    },
    "amount": number
  }
};

export type RWAlchemyFormulaType = {
  "id": number,
  "typeNameTextID": number,
  "image": string,
  "byproduct": number
};

export type RWAlchemyLevel = {
  "id": number,
  "exp": number,
  "alchemyexplimit": number,
  "alchemystage": number,
  "byproductProbability": number
};

export type RWBackgroundMusic = {
  "id": number,
  "name": string,
  "url": string,
  "volume": number,
  "required": number
};

export type RWMusicBox = {
  "id": number,
  "name": string,
  "url": string,
  "volume": number,
  "required": number,
  "artist": string,
  "album": {
    "name": string,
    "icon": string
  },
  "itemsNeeded": {
    "item": {
      "id": number,
      "name": number,
      "description": number,
      "icon": number,
      "type": number,
      "attributes": {

      }
    },
    "amount": number
  }[]
};

export type RWSoundEffect = {
  "id": number,
  "name": string,
  "url": string,
  "volume": number,
  "required": number
};

export type RWVoiceline = {
  "id": number,
  "name": string,
  "url": string,
  "volume": number,
  "required": number
};

export type RWLightTraining = {
  "id": number,
  "name": string,
  "time": number,
  "timeString": string,
  "expGain": number,
  "rarity": number,
  "itemNeeded": {
    "item": {
      "id": number,
      "name": number,
      "description": number,
      "icon": number,
      "type": number,
      "attributes": {

      }
    },
    "amount": number
  }
};