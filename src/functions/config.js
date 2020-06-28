export const proxy = url => {
  return `https://c-hive-proxy.herokuapp.com/${url}`;
};

export const leaguesApi = () => {
  return proxy("http://api.pathofexile.com/leagues?type=main&compact=1");
};

export const comparisons = () => {
  return {
    "Pure vs. normal Breachstones": [
      {
        name: "Chayula",
        poeApiItemType: "type",
        base: ["Chayula's Pure Breachstone"],
        compare: ["Chayula's Breachstone"]
      },
      {
        name: "Uul-Netol",
        poeApiItemType: "type",
        base: ["Uul-Netol's Pure Breachstone"],
        compare: ["Uul-Netol's Breachstone"]
      },
      {
        name: "Tul",
        poeApiItemType: "type",
        base: ["Tul's Pure Breachstone"],
        compare: ["Tul's Breachstone"]
      },
      {
        name: "Xoph",
        poeApiItemType: "type",
        base: ["Xoph's Pure Breachstone"],
        compare: ["Xoph's Breachstone"]
      },
      {
        name: "Esh",
        poeApiItemType: "type",
        base: ["Esh's Pure Breachstone"],
        compare: ["Esh's Breachstone"]
      }
    ],
    "Divination cards vs. outcome": [
      {
        name: "The Hoarder (Exalted Orb)",
        poeApiItemType: "type",
        base: ["Exalted Orb"],
        compare: [
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder"
        ]
      },
      {
        name: "Abandoned Wealth (3x Exalted Orb)",
        poeApiItemType: "type",
        base: ["Exalted Orb", "Exalted Orb", "Exalted Orb"],
        compare: [
          "Abandoned Wealth",
          "Abandoned Wealth",
          "Abandoned Wealth",
          "Abandoned Wealth",
          "Abandoned Wealth"
        ]
      },
      {
        name: "Nook's Crown (Elder Bone Helmet ilvl100)",
        poeApiItemType: "type",
        base: ["bone-helmet-86-elder"],
        compare: [
          "Nook's Crown",
          "Nook's Crown",
          "Nook's Crown",
          "Nook's Crown"
        ]
      }
    ],
    "Fated uniques vs. their base + prophecy": [
      {
        name: "Amplification Rod",
        poeApiItemType: "name",
        base: ["Amplification Rod"],
        compare: ["Reverberation Rod", "Power Magnified"],
        comment: "The Lunaris Temple Level 2 (Act 3 or Act 8)"
      },
      {
        name: "Atziri's Reflection",
        poeApiItemType: "name",
        base: ["Atziri's Reflection"],
        compare: ["Atziri's Mirror", "The Queen's Sacrifice"],
        comment: "The Alluring Abyss"
      },
      {
        name: "Asenath's Chant",
        poeApiItemType: "name",
        base: ["Asenath's Chant"],
        compare: ["Asenath's Mark", "Song of the Sekhema"],
        comment: "The Quarry(Act 9)"
      },
      {
        name: "Cameria's Avarice",
        poeApiItemType: "name",
        base: ["Cameria's Avarice"],
        compare: ["Cameria's Maul", "Cold Greed"],
        comment: "Waterways Map"
      },
      {
        name: "Chaber Cairn",
        poeApiItemType: "name",
        base: ["Chaber Cairn"],
        compare: ["Chober Chaber", "Faith Exhumed"],
        comment: "Mausoleum Map"
      },
      {
        name: "Corona Solaris",
        poeApiItemType: "name",
        base: ["Corona Solaris"],
        compare: ["Eclipse Solaris", "Blinding Light"],
        comment: "Temple Map"
      },
      {
        name: "Cragfall",
        poeApiItemType: "name",
        base: ["Cragfall"],
        compare: ["Craghead", "Heavy Blows"],
        comment: "The Old Fields(Act 2)"
      },
      {
        name: "Crystal Vault",
        poeApiItemType: "name",
        base: ["Crystal Vault"],
        compare: ["Icetomb", "End of the Light"],
        comment: "The Brine King's Reef(Act 6)"
      },
      {
        name: "Death's Opus",
        poeApiItemType: "name",
        base: ["Death's Opus"],
        compare: ["Death's Harp", "The Bowstring's Music"],
        comment: "The Dried Lake(Act 4)"
      },
      {
        name: "Deidbellow",
        poeApiItemType: "name",
        base: ["Deidbellow"],
        compare: ["Deidbell", "Dying Cry"],
        comment: "The Ebony Barracks(Act 3)"
      },
      {
        name: "Doedre's Malevolence",
        poeApiItemType: "name",
        base: ["Doedre's Malevolence"],
        compare: ["Doedre's Tenure", "The Malevolent Witch"],
        comment: "Phantasmagoria Map"
      },
      {
        name: "Doomfletch's Prism",
        poeApiItemType: "name",
        base: ["Doomfletch's Prism"],
        compare: ["Doomfletch", "Ancient Doom"],
        comment: "The Ancient Pyramid(Act 2)"
      },
      {
        name: "Dreadbeak",
        poeApiItemType: "name",
        base: ["Dreadbeak"],
        compare: ["Redbeak", "The Dreaded Rhoa"],
        comment: "Bog Map"
      },

      {
        name: "Dreadsurge",
        poeApiItemType: "name",
        base: ["Dreadsurge"],
        compare: ["Dreadarc", "Burning Dread"],
        comment: "Shrine Map"
      },
      {
        name: "Duskblight",
        poeApiItemType: "name",
        base: ["Duskblight"],
        compare: ["Dusktoe", "Agony at Dusk"],
        comment: "The Harvest(Act 4)"
      },
      {
        name: "Ezomyte Hold",
        poeApiItemType: "name",
        base: ["Ezomyte Hold"],
        compare: ["Ezomyte Peak", "The Bloody Flowers Redux"],
        comment: "The Grain Gate(Act 8)"
      },
      {
        name: "Fox's Fortune",
        poeApiItemType: "name",
        base: ["Fox's Fortune"],
        compare: ["Foxshade", "Dark Instincts"],
        comment: "The Temple of Decay Level 2 (Act 7)"
      },
      {
        name: "Frostferno",
        poeApiItemType: "name",
        base: ["Frostferno"],
        compare: ["Heatshiver", "A Vision of Ice and Fire"],
        comment: "Estuary Map"
      },
      {
        name: "Geofri's Devotion",
        poeApiItemType: "name",
        base: ["Geofri's Devotion"],
        compare: ["Geofri's Baptism", "Black Devotion"],
        comment: "Relic Chambers Map "
      },
      {
        name: "Geofri's Legacy",
        poeApiItemType: "name",
        base: ["Geofri's Legacy"],
        compare: ["Geofri's Crest", "The Bishop's Legacy"],
        comment: "Cursed Crypt Map"
      },
      {
        name: "Hrimburn",
        poeApiItemType: "name",
        base: ["Hrimburn"],
        compare: ["Hrimsorrow", "Fire and Ice"],
        comment: "The Tidal Island (Act 1 or Act 6)"
      },
      {
        name: "Hrimnor's Dirge",
        poeApiItemType: "name",
        base: ["Hrimnor's Dirge"],
        compare: ["Hrimnor's Hymn", "Winter's Mournful Melodies"],
        comment: "The Fellshrine Ruins (Act 2)"
      },
      {
        name: "Hyrri's Demise",
        poeApiItemType: "name",
        base: ["Hyrri's Demise"],
        compare: ["Hyrri's Bite", "A Dishonourable Death"],
        comment: "The Mud Flats (Act 6)"
      },
      {
        name: "Kaltensoul",
        poeApiItemType: "name",
        base: ["Kaltensoul"],
        compare: ["Kaltenhalt", "The Snuffed Flame"],
        comment: "The Lower Prison(Act 1 or Act 6)"
      },
      {
        name: "Kaom's Way",
        poeApiItemType: "name",
        base: ["Kaom's Way"],
        compare: ["Kaom's Sign", "The King's Path"],
        comment: "Kaom's Stronghold(Act 4)"
      },
      {
        name: "Karui Charge",
        poeApiItemType: "name",
        base: ["Karui Charge"],
        compare: ["Karui Ward", "The Karui Rebellion"],
        comment: "The Grain Gate(Act 8)"
      },
      {
        name: "Malachai's Awakening",
        poeApiItemType: "name",
        base: ["Malachai's Awakening"],
        compare: ["Malachai's Simula", "The Nightmare Awakens"],
        comment: "Core Map"
      },
      {
        name: "Martyr's Crown",
        poeApiItemType: "name",
        base: ["Martyr's Crown"],
        compare: ["Crown of Thorns", "Pleasure and Pain"],
        comment: "The Harvest(Act 4) or Core Map"
      },
      {
        name: "Mirebough",
        poeApiItemType: "name",
        base: ["Mirebough"],
        compare: ["Fencoil", "Trapped in the Tower"],
        comment: "The Sceptre of God(Act 3)"
      },
      {
        name: "Ngamahu Tiki",
        poeApiItemType: "name",
        base: ["Ngamahu Tiki"],
        compare: ["Araku Tiki", "A Forest of False Idols"],
        comment: "Kaom's Dream(Act 4)"
      },
      {
        name: "Panquetzaliztli",
        poeApiItemType: "name",
        base: ["Panquetzaliztli"],
        compare: ["Quecholli", "The Fall of an Empire"],
        comment: "Maze Map"
      },
      {
        name: "Queen's Escape",
        poeApiItemType: "name",
        base: ["Queen's Escape"],
        compare: ["Queen's Decree", "The Misunderstood Queen"],
        comment: "The Belly of the Beast Level 1(Act 4)"
      },
      {
        name: "Realm Ender",
        poeApiItemType: "name",
        base: ["Realm Ender"],
        compare: ["Realmshaper", "The Beginning and the End"],
        comment: "The Crypt Level 2(Act 2)"
      },
      {
        name: "Sanguine Gambol",
        poeApiItemType: "name",
        base: ["Sanguine Gambol"],
        compare: ["Goredrill", "Crimson Hues"],
        comment: "Overgrown Ruin Map"
      },
      {
        name: "Shavronne's Gambit",
        poeApiItemType: "name",
        base: ["Shavronne's Gambit"],
        compare: ["Shavronne's Pace", "The Flow of Energy"],
        comment: "The Harvest(Act 4)"
      },
      {
        name: "Silverbough",
        poeApiItemType: "name",
        base: ["Silverbough"],
        compare: ["Silverbranch", "The Silverwood"],
        comment: "The Riverways (Act 2)"
      },
      {
        name: "Sunspite",
        poeApiItemType: "name",
        base: ["Sunspite"],
        compare: ["Sundance", "Sun's Punishment"],
        comment: "The Solaris Temple Level 2 (Act 8)"
      },
      {
        name: "The Cauteriser",
        poeApiItemType: "name",
        base: ["The Cauteriser"],
        compare: ["Limbsplit", "Severed Limbs"],
        comment: "The Mines Level 2(Act 4)"
      },
      {
        name: "The Dancing Duo",
        poeApiItemType: "name",
        base: ["The Dancing Duo"],
        compare: ["The Dancing Dervish", "Dance of Steel"],
        comment: "Arsenal Map"
      },
      {
        name: "The Effigon",
        poeApiItemType: "name",
        base: ["The Effigon"],
        compare: ["The Ignomon", "Blind Faith"],
        comment: "Haunted Mansion Map"
      },
      {
        name: "The Gryphon",
        poeApiItemType: "name",
        base: ["The Gryphon"],
        compare: ["The Screaming Eagle", "The Apex Predator"],
        comment: "The Aqueduct(Act 4)"
      },
      {
        name: "The Nomad",
        poeApiItemType: "name",
        base: ["The Nomad"],
        compare: ["The Magnate", "The Great Leader of the North"],
        comment: "The Foothills(Act 9)"
      },
      {
        name: "The Oak",
        poeApiItemType: "name",
        base: ["The Oak"],
        compare: ["Springleaf", "Nature's Resilience"],
        comment: "The Southern Forest (Act 2)"
      },
      {
        name: "The Signal Fire",
        poeApiItemType: "name",
        base: ["The Signal Fire"],
        compare: ["Blackgleam", "Fire and Brimstone"],
        comment: "The Crematorium(Act 3)"
      },
      {
        name: "The Stormwall",
        poeApiItemType: "name",
        base: ["The Stormwall"],
        compare: ["The Stormheart", "The Storm Spire"],
        comment: "Plateau Map"
      },
      {
        name: "The Tempest",
        poeApiItemType: "name",
        base: ["The Tempest"],
        compare: ["Storm Cloud", "The Servant's Heart"],
        comment: "The Chamber of Sins Level 2 (Act 2)"
      },
      {
        name: "Thirst for Horrors",
        poeApiItemType: "name",
        base: ["Thirst for Horrors"],
        compare: ["Chalice of Horrors", "Mouth of Horrors"],
        comment: "The Harvest (Act 4) or The Toxic Conduits (Act 8) "
      },
      {
        name: "Timetwist",
        poeApiItemType: "name",
        base: ["Timetwist"],
        compare: ["Timeclasp", "A Rift in Time"],
        comment: "Laboratory Map "
      },
      {
        name: "Voidheart",
        poeApiItemType: "name",
        base: ["Voidheart"],
        compare: ["Blackheart", "From The Void"],
        comment: ""
      },
      {
        name: "Wall of Brambles",
        poeApiItemType: "name",
        base: ["Wall of Brambles"],
        compare: ["Bramblejack", "The King and the Brambles"],
        comment: "The Grand Arena(Act 4)"
      },
      {
        name: "Whakatutuki o Matua",
        poeApiItemType: "name",
        base: ["Whakatutuki o Matua"],
        compare: ["Matua Tupuna", "The Mentor"],
        comment: "Basilica Map"
      },
      {
        name: "Wildwrap",
        poeApiItemType: "name",
        base: ["Wildwrap"],
        compare: ["Briskwrap", "Last of the Wildmen"],
        comment: "Strand Map"
      },
      {
        name: "Windshriek",
        poeApiItemType: "name",
        base: ["Windshriek"],
        compare: ["Windscream", "Darktongue's Shriek"],
        comment: "Sepulchre Map"
      },
      {
        name: "Winterweave",
        poeApiItemType: "name",
        base: ["Winterweave"],
        compare: ["Bloodboil", "Cold Blooded Fury"],
        comment: "Beach Map"
      }
    ],
    "Prophecy rewards": [
      {
        name: "Volkuur's Key",
        poeApiItemType: "name",
        base: ["Volkuur's Key"],
        compare: ["The Unbreathing Queen V", "Cemetery Map"],
        comment: "Cemetery Map"
      }
    ],
    "Gilded Scarabs": [
      {
        name: "Sulphite",
        poeApiItemType: "name",
        base: ["Gilded Sulphite Scarab"],
        compare: [],
        comment: "Cameria"
      },
      {
        name: "Legion",
        poeApiItemType: "name",
        base: ["Gilded Legion Scarab"],
        compare: [],
        comment: "Vagan"
      },
      {
        name: "Harbinger",
        poeApiItemType: "name",
        base: ["Gilded Harbinger Scarab"],
        compare: [],
        comment: "Tora"
      },
      {
        name: "Bestiary",
        poeApiItemType: "name",
        base: ["Gilded Bestiary Scarab"],
        compare: [],
        comment: "Jorgin"
      },
      {
        name: "Divination",
        poeApiItemType: "name",
        base: ["Gilded Divination Scarab"],
        compare: [],
        comment: "Gravicius"
      },
      {
        name: "Cartography",
        poeApiItemType: "name",
        base: ["Gilded Cartography Scarab"],
        compare: [],
        comment: "Rin"
      },
      {
        name: "Torment",
        poeApiItemType: "name",
        base: ["Gilded Torment Scarab"],
        compare: [],
        comment: "Leo"
      },
      {
        name: "Shaper",
        poeApiItemType: "name",
        base: ["Gilded Shaper Scarab"],
        compare: [],
        comment: "Vorici"
      },
      {
        name: "Elder",
        poeApiItemType: "name",
        base: ["Gilded Elder Scarab"],
        compare: [],
        comment: "Korell"
      },
      {
        name: "Reliquary",
        poeApiItemType: "name",
        base: ["Gilded Reliquary Scarab"],
        compare: [],
        comment: "Elreon"
      },
      {
        name: "Breach",
        poeApiItemType: "name",
        base: ["Gilded Breach Scarab"],
        compare: [],
        comment: "It That Fled"
      },
      {
        name: "Ambush",
        poeApiItemType: "name",
        base: ["Gilded Ambush Scarab"],
        compare: [],
        comment: "Haku"
      },
      {
        name: "Perandus",
        poeApiItemType: "name",
        base: ["Gilded Perandus Scarab"],
        compare: [],
        comment: "Janus"
      }
    ],
    "Item prices": [
      {
        name: "Exalted Orb",
        poeApiItemType: "name",
        base: ["Exalted Orb"],
        compare: []
      }
    ],
    "Incursion uniques (vials excluded)": [
      {
        name: "Apep's Supremacy",
        poeApiItemType: "name",
        base: ["Apep's Supremacy"],
        compare: ["Apep's Slumber"],
        comment:
          "Vial of Awakening: https://www.pathofexile.com/trade/search/Metamorph/KYVR6Ri5"
      },
      {
        name: "Slavedriver's Hand",
        poeApiItemType: "name",
        base: ["Slavedriver's Hand"],
        compare: ["Architect's Hand"],
        comment:
          "Vial of Dominance: https://www.pathofexile.com/trade/search/Metamorph/q2Ew93Cg"
      },
      {
        name: "Mask of the Stitched Demon",
        poeApiItemType: "name",
        base: ["Mask of the Stitched Demon"],
        compare: ["Mask of the Spirit Drinker"],
        comment:
          "Vial of Summoning: https://www.pathofexile.com/trade/search/Metamorph/mZprJJH6"
      },
      {
        name: "Coward's Legacy",
        poeApiItemType: "name",
        base: ["Coward's Legacy"],
        compare: ["Coward's Chains"],
        comment:
          "Vial of Consequence: https://www.pathofexile.com/trade/search/Metamorph/REManrf7"
      },
      {
        name: "Fate of the Vaal",
        poeApiItemType: "name",
        base: ["Fate of the Vaal"],
        compare: ["Story of the Vaal"],
        comment:
          "Vial of Fate: https://www.pathofexile.com/trade/search/Metamorph/ak4Q2pte"
      },
      {
        name: "Omeyocan",
        poeApiItemType: "name",
        base: ["Omeyocan"],
        compare: ["Dance of the Offered"],
        comment:
          "Vial of the Ritual: https://www.pathofexile.com/trade/search/Metamorph/9d9Wk4uK"
      },
      {
        name: "Zerphi's Heart",
        poeApiItemType: "name",
        base: ["Zerphi's Heart"],
        compare: ["Sacrificial Heart"],
        comment:
          "Vial of Sacrifice: https://www.pathofexile.com/trade/search/Metamorph/pY25JWi0"
      },
      {
        name: "Soul Ripper",
        poeApiItemType: "name",
        base: ["Soul Ripper"],
        compare: ["Soul Catcher"],
        comment:
          "Vial of the Ghost: https://www.pathofexile.com/trade/search/Metamorph/rGdy0gHQ"
      },
      {
        name: "Transcendent Flesh",
        poeApiItemType: "name",
        base: ["Transcendent Flesh"],
        compare: ["Tempered Flesh"],
        comment:
          "Vial of Transcendence: https://www.pathofexile.com/trade/search/Metamorph/Q34bbRuw"
      },
      {
        name: "Transcendent Mind",
        poeApiItemType: "name",
        base: ["Transcendent Mind"],
        compare: ["Tempered Mind"],
        comment:
          "Vial of Transcendence: https://www.pathofexile.com/trade/search/Metamorph/Q34bbRuw"
      },
      {
        name: "Transcendent Spirit",
        poeApiItemType: "name",
        base: ["Transcendent Spirit"],
        compare: ["Tempered Spirit"],
        comment:
          "Vial of Transcendence: https://www.pathofexile.com/trade/search/Metamorph/Q34bbRuw"
      }
    ]
  };
};
