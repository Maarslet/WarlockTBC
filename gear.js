function loadGear() {
  var gear = createGear();
  var i, info, item
  
  // Main Hand
  document.getElementById("tableMainHand").children[1].innerHTML = "";
  info = "";
  for (i=0; i<gear.mainhand.length; i++) {
    item = gear.mainhand[i];
    info += "<tr onclick=clickTable('tableMainHand',this); clickTable('tableStaff')><td>" + item.name + "</td><td>" + item.source + "</td><td>" + item.sta + "</td><td>" + item.int + "</td><td>" + item.spi + "</td><td>" + item.SP + "</td><td>" + item.ShP + "</td><td>" + item.FiP + "</td><td>" + item.hit + "</td><td>" + item.crit + "</td><td>" + item.haste + "</td><td>" + item.pen + "</td><td>" + item.hp5 + "</td><td>" + item.mp5 + "</td><td></td><td></td></tr>";
  }
  document.getElementById("tableMainHand").children[1].innerHTML = info.replaceAll("undefined","");
  $('#tableMainHand').DataTable();
  
  
}

function createGear() {
  var gear = {
    mainhand: [{                    // Main Hand
      name: "Wraith Blade",
      source: "Naxx",
      sta: 10,
      int: 8,
      SP: 95,
      hit: 8,
      crit: 14,
      id: 22807
    }, {
      name: "Midnight Haze",
      source: "Naxx",
      sta: 20,
      int: 12,
      SP: 85,
      id: 22803
    }, {
      name: "Grand Marshal's Mageblade",
      source: "Vanilla PvP",
      sta: 14,
      int: 8,
      SP: 72,
      crit: 14,
      id: 23451
    }, {
      name: "Sharpened Silithid Femur",
      source: "AQ40",
      sta: 14,
      int: 7,
      SP: 72,
      crit: 14,
      id: 21622
    }, {
      name: "Claw of Chromaggus",
      source: "BWL",
      sta: 7,
      int: 17,
      SP: 64,
      mp5: 4,
      id: 19347
    }, {
      name: "Runesword of the Red",
      source: "Vanilla Quest",
      sta: 17,
      int: 9,
      spi: 7,
      SP: 64,
      id: 21521
    }, {
      name: "Kris of Unspoken Names",
      source: "AQ20",
      sta: 9,
      int: 7,
      SP: 59,
      set: "AQ20",
      id: 21416
    }, {
      name: "Fang of the Mystics",
      source: "Azuregos",
      int: 10,
      SP: 40,
      crit: 14,
      mp5: 4,
      id: 17070
    }, {
      name: "Azuresong Mageblade",
      source: "MC",
      sta: 7,
      int: 12,
      SP: 40,
      crit: 14,
      id: 17103
    }, {
      name: "Sageclaw",
      source: "Vanilla PvP",
      armor: 35,
      sta: 8,
      SP: 30,
      crit: 14,
      id: 20070
    }, {
      name: "Bloodcaller",
      source: "ZG",
      sta: 12,
      int: 15,
      SP: 33,
      id: 19864
    }, {
      name: "Elemental Attuned Blade",
      source: "Vanilla BoE",
      int: 6,
      SP: 32,
      mp5: 3,
      id: 20698
    }, {
      name: "Fang of Venoxis",
      source: "ZG",
      int: 8,
      spi: 6,
      SP: 24,
      mp5: 6,
      id: 19903
    }, {
      name: "Sorcerous Dagger",
      source: "MC",
      sta: 8,
      int: 17,
      SP: 20,
      id: 18878
    }, {
      name: "The Lost Kris of Zedd",
      source: "AQ20",
      sta: 6,
      SP: 14,
      crit: 14,
      id: 21802
    }, {
      name: "Sageblade",
      source: "Vanilla Crafted",
      sta: 14,
      int: 6,
      SP: 20,
      pen: 10,
      id: 22383
    }, {
      name: "Blade of the New Moon",
      source: "Dire Maul",
      sta: 5,
      ShP: 19,
      id: 18372
    }, {
      name: "Witchblade",
      source: "Scholomance",
      int: 8,
      SP: 14,
      id: 13964
    }],
    
    offhand: [{                     // Off Hand
      name: "Sapphiron's Left Eye",
      source: "Naxx",
      sta: 12,
      int: 8,
      SP: 26,
      hit: 8,
      crit: 14,
      id: 23049
    }, {
      name: "Royal Scepter of Vek'lor",
      source: "AQ40",
      sta: 10,
      int: 9,
      SP: 20,
      hit: 8,
      crit: 14,
      id: 21593
    }, {
      name: "Jin'do's Bag of Whammies",
      source: "ZG",
      sta: 8,
      int: 11,
      SP: 18,
      hit: 8,
      id: 19891
    }, {
      name: "Scepter of Interminable Focus",
      source: "Stratholme",
      SP: 9,
      hit: 8,
      crit: 14,
      id: 22329
    }, {
      name: "Talon of Furious Concentration",
      source: "AQ20",
      sta: 8,
      int: 8,
      SP: 21,
      crit: 14,
      id: 21471
    }, {
      name: "Master Dragonslayer's Orb",
      source: "BWL",
      sta: 10,
      int: 14,
      SP: 28,
      id: 19366
    }, {
      name: "Tome of Shadow Force",
      source: "Vanilla PvP",
      sta: 8,
      ShP: 34,
      id: 19309
    }, {
      name: "Therazane's Touch",
      source: "Vanilla PvP",
      SP: 33,
      id: 19315
    }, {
      name: "Tome of Fiery Arcana",
      source: "Vanilla PvP",
      FiP: 40,
      id: 19311
    }, {
      name: "Gem of Nerubis",
      source: "Naxx",
      sta: 14,
      int: 10,
      SP: 25,
      pen: 10,
      id: 22937
    }, {
      name: "Grand Marshal's Tome of Power",
      source: "Vanilla PvP",
      sta: 17,
      int: 16,
      SP: 20,
      id: 23452
    }, {
      name: "Fire Runed Grimoire",
      source: "MC",
      sta: 12,
      int: 21,
      SP: 11,
      id: 19142
    }, {
      name: "Tome of the Lost",
      source: "UBRS",
      sta: 6,
      int: 7,
      SP: 18,
      id: 22253
    }],
    
    staff: [{                       // Staff
      name: "Atiesh, Greatstaff of the Guardian",
      source: "Naxx",
      sta: 30,
      int: 29,
      SP: 183,
      crit: 28,
      id: 22630
    }, {
      name: "Brimstone Staff",
      source: "Naxx",
      sta: 31,
      int: 30,
      SP: 113,
      hit: 16,
      crit: 14,
      id: 22800
    }, {
      name: "Soulseeker",
      source: "Naxx",
      sta: 30,
      int: 31,
      SP: 126,
      crit: 28,
      pen: 25,
      id: 22799
    }, {
      name: "Blessed Qiraji Acolyte Staff",
      source: "AQ40",
      sta: 32,
      int: 33,
      SP: 76,
      hit: 16,
      crit: 14,
      id: 21273
    }, {
      name: "Staff of the Shadow Flame",
      source: "BWL",
      sta: 24,
      int: 29,
      spi: 18,
      SP: 84,
      crit: 28,
      id: 19356
    }, {
      name: "Staff of the Ruins",
      source: "AQ20",
      sta: 24,
      int: 23,
      spi: 14,
      SP: 60,
      hit: 8,
      crit: 14,
      id: 21452
    }, {
      name: "Grand Marshal's Stave",
      source: "Vanilla PvP",
      sta: 41,
      int: 23,
      spi: 17,
      SP: 71,
      id: 18873
    }, {
      name: "Shadow Wing Focus Staff",
      source: "BWL",
      sta: 22,
      int: 40,
      spi: 17,
      SP: 56,
      id: 19355
    }, {
      name: "Ironbark Staff",
      source: "Vanilla PvP",
      armor: 95,
      sta: 19,
      int: 10,
      SP: 41,
      crit: 28,
      id: 20220
    }, {
      name: "Staff of Dominance",
      source: "MC",
      sta: 16,
      int: 37,
      spi: 14,
      SP: 40,
      crit: 14,
      id: 18842
    }, {
      name: "Jin'do's Judgement",
      source: "ZG",
      sta: 10,
      int: 10,
      SP: 27,
      hit: 16,
      mp5: 14,
      id: 19884
    }, {
      name: "Rod of the Ogre Magi",
      source: "Dire Maul",
      sta: 11,
      int: 14,
      spi: 7,
      SP: 23,
      crit: 14,
      id: 18534
    }, {
      name: "Soul Harvester",
      source: "Vanilla Quest",
      sta: 16,
      ShP: 24,
      hit: 8,
      id: 20536
    }, {
      name: "Zulian Ceremonial Staff",
      source: "AQ20",
      sta: 13,
      int: 16,
      SP: 32,
      id: 20258
    }, {
      name: "Staff of Jordan",
      source: "Vanilla BoE",
      int: 11,
      spi: 11,
      SP: 26,
      id: 873
    }],
    
    helmet: [{                        // Helmet
      name: "Plagueheart Circlet",
      source: "Naxx",
      armor: 123,
      sta: 28,
      int: 25,
      SP: 33,
      hit: 8,
      crit: 28,
      set: "T3",
      id: 22506
    }, {
      name: "Doomcaller's Circlet",
      source: "AQ40",
      armor: 114,
      sta: 27,
      int: 24,
      spi: 6,
      SP: 33,
      hit: 8,
      crit: 14,
      set: "T2.5",
      id: 21337
    }, {
      name: "Mish'undare, Circlet of the Mind Flayer",
      source: "BWL",
      armor: 117,
      sta: 15,
      int: 24,
      spi: 9,
      SP: 35,
      crit: 28,
      id: 19375
    }, {
      name: "Preceptor's Hat",
      source: "Naxx",
      armor: 117,
      sta: 18,
      int: 24,
      SP: 51,
      id: 23035
    }, {
      name: "Spellweaver's Turban",
      source: "UBRS",
      armor: 73,
      int: 9,
      SP: 36,
      hit: 8,
      id: 22267
    }, {
      name: "Bloodvine Goggles",
      source: "Vanilla Crafted",
      armor: 75,
      hit: 16,
      crit: 14,
      mp5: 9,
      id: 19999
    }, {
      name: "The Hexxer's Cover",
      source: "ZG",
      armor: 81,
      sta: 10,
      int: 10,
      SP: 41,
      id: 19886
    }, {
      name: "Deathmist Mask",
      source: "Vanilla Quest",
      armor: 86,
      sta: 24,
      int: 24,
      SP: 16,
      hit: 8,
      set: "T0.5",
      id: 22074
    }, {
      name: "Field Marshal's Coronal",
      source: "Vanilla PvP",
      armor: 145,
      sta: 30,
      int: 24,
      SP: 32,
      set: "PvPEpic",
      id: 17578
    }, {
      name: "Lieutenant Commander's Dreadweave Cowl",
      source: "Vanilla PvP",
      armor: 81,
      sta: 21,
      int: 18,
      SP: 21,
      crit: 14,
      set: "PvPRare",
      id: 23310
    }, {
      name: "Nemesis Skullcap",
      source: "Onyxia",
      armor: 107,
      sta: 26,
      int: 16,
      spi: 6,
      SP: 32,
      hp5: 4,
      set: "T2",
      id: 16929
    }, {
      name: "Cap of the Scarlet Savant",
      source: "Vanilla Crafting",
      armor: 89,
      sta: 17,
      int: 20,
      crit: 28,
      id: 12752
    }, {
      name: "Crimson Felt Hat",
      source: "Stratholme",
      armor: 68,
      sta: 8,
      int: 8,
      spi: 8,
      SP: 30,
      id: 18727
    }, {
      name: "Felheart Horns",
      source: "MC",
      armor: 94,
      sta: 27,
      int: 20,
      spi: 10,
      SP: 20,
      set: "T1",
      id: 16808
    }, {
      name: "Dreamweave Circlet",
      source: "Vanilla Crafting",
      armor: 58,
      int: 10,
      spi: 12,
      SP: 21,
      id: 10041
    }, {
      name: "Eye of Flame",
      source: "Vanilla BoE",
      armor: 79,
      int: 10,
      spi: 10,
      FiP: 43,
      id: 3075
    }],
    
    neck: [{                    // Neck
      name: "Gem of Trapped Innocents",
      source: "Naxx",
      sta: 9,
      int: 7,
      SP: 15,
      crit: 28,
      id: 23057
    }, {
      name: "Amulet of Vek'nilash",
      source: "AQ40",
      sta: 9,
      int: 5,
      SP: 27,
      crit: 14,
      id: 21608
    }, {
      name: "Choker of the Fire Lord",
      source: "MC",
      sta: 7,
      int: 7,
      SP: 34,
      id: 18814
    }, {
      name: "Charm of the Shifting Sands",
      source: "AQ20",
      sta: 9,
      int: 12,
      SP: 25,
      id: 21504
    }, {
      name: "Malice Stone Pendant",
      source: "Naxx",
      sta: 9,
      int: 8,
      SP: 28,
      pen: 15,
      id: 22943
    }, {
      name: "Diana's Pearl Necklace",
      source: "Stratholme",
      sta: 8,
      int: 8,
      SP: 9,
      hit: 8,
      id: 22403
    }, {
      name: "Soul Corrupter's Necklace",
      source: "ZG",
      sta: 10,
      int: 16,
      spi: 8,
      hit: 8,
      id: 19876
    }, {
      name: "Choker of Enlightenment",
      source: "MC",
      sta: 9,
      int: 10,
      spi: 10,
      SP: 18,
      id: 17109
    }, {
      name: "Dark Advisor's Pendant",
      source: "Scholomance",
      sta: 8,
      int: 7,
      ShP: 20,
      id: 18691
    }, {
      name: "Star of Mystaria",
      source: "Stratholme",
      sta: 9,
      int: 9,
      spi: 8,
      hit: 8,
      id: 12103
    }, {
      name: "Amulet of the Dawn",
      source: "Vanilla Quest",
      sta: 13,
      int: 13,
      SP: 15,
      id: 22657
    }, {
      name: "Jeklik's Opaline Talisman",
      source: "ZG",
      SP: 22,
      mp5: 3,
      id: 19923
    }, {
      name: "Orb of the Darkmoon",
      source: "Vanilla Quest",
      sta: 11,
      spi: 8,
      SP: 22,
      id: 19426
    }, {
      name: "Kezan's Unstoppable Taint",
      source: "ZG",
      sta: 13,
      int: 8,
      SP: 14,
      set: "ZG",
      id: 19605
    }, {
      name: "Anastari Heirloom",
      source: "Stratholme",
      sta: 15,
      ShP: 13,
      id: 18728
    }],
    
    shoulder: [{
      name: "Plagueheart Shoulderpads",
      source: "Naxx",
      armor: 111,
      sta: 22,
      int: 12,
      SP: 36,
      hit: 8,
      set: "T3",
      id: 22507
    }, {
      name: "Rime Covered Mantle",
      source: "Naxx",
      armor: 108,
      sta: 12,
      int: 12,
      SP: 39,
      crit: 14,
      id: 22983
    }, {
      name: "Doomcaller's Mantle",
      source: "AQ40",
      armor: 102,
      sta: 20,
      int: 11,
      spi: 4,
      SP: 28,
      hit: 8,
      pen: 10,
      set: "T2.5",
      id: 21335
    }, {
      name: "Mantle of the Blackwing Cabal",
      source: "BWL",
      armor: 96,
      sta: 12,
      int: 16,
      SP: 34,
      id: 19370
    }, {
      name: "Field Marshal's Dreadweave Shoulders",
      source: "Vanilla PvP",
      armor: 115,
      sta: 24,
      int: 17,
      SP: 25,
      set: "PvPEpic",
      id: 17580
    }, {
      name: "Lieutenant Commander's Dreadweave Spaulders",
      source: "Vanilla PvP",
      armor: 75,
      sta: 17,
      int: 13,
      SP: 12,
      crit: 14,
      set: "PvPRare",
      id: 23311
    }, {
      name: "Nemesis Spaulders",
      source: "BWL",
      armor: 99,
      sta: 20,
      int: 13,
      spi: 6,
      SP: 23,
      hp5: 4,
      set: "T2",
      id: 16932
    }, {
      name: "Mantle of Maz'Nadir",
      source: "AQ20",
      armor: 78,
      sta: 11,
      int: 15,
      spi: 7,
      SP: 21,
      id: 21468
    }, {
      name: "Burial Shawl",
      source: "Scholomance",
      armor: 65,
      int: 16,
      SP: 20,
      id: 18681
    }, {
      name: "Felcloth Shoulders",
      source: "Vanilla Crafting",
      armor: 60,
      spi: 5,
      ShP: 26,
      id: 14112
    }, {
      name: "Zandalar Demoniac's Mantle",
      source: "ZG",
      armor: 81,
      sta: 23,
      int: 19,
      SP: 12,
      set: "ZG",
      id: 19849
    }, {
      name: "Felheart Shoulder Pads",
      source: "MC",
      armor: 87,
      sta: 25,
      int: 17,
      spi: 7,
      SP: 9,
      set: "T1",
      id: 16807
    }, {
      name: "Mantle of Phrenic Power",
      source: "AQ40",
      armor: 99,
      sta: 20,
      int: 20,
      FiP: 33,
      id: 21686
    }],
    
    back: [{
      name: "Cloak of the Necropolis",
      source: "Naxx",
      armor: 77,
      sta: 12,
      int: 11,
      SP: 26,
      hit: 8,
      crit: 14,
      id: 23050
    }, {
      name: "Cloak of the Devoured",
      source: "AQ40",
      armor: 76,
      sta: 11,
      int: 10,
      SP: 30,
      hit: 8,
      id: 22731
    }, {
      name: "Cloak of Consumption",
      source: "ZG",
      armor: 60,
      int: 10,
      SP: 23,
      hit: 8,
      id: 19857
    }, {
      name: "Cloak of the Brood Lord",
      source: "BWL",
      armor: 72,
      sta: 10,
      int: 14,
      SP: 28,
      id: 19378
    }, {
      name: "Veil of Eclipse",
      source: "Naxx",
      armor: 72,
      sta: 10,
      int: 10,
      SP: 28,
      pen: 10,
      id: 23017
    }, {
      name: "Cape of the Trinity",
      source: "AQ40",
      armor: 65,
      sta: 17,
      int: 12,
      SP: 21,
      id: 21697
    }, {
      name: "Cloak of the Hakkari Worshippers",
      source: "ZG",
      armor: 48,
      sta: 6,
      int: 6,
      SP: 23,
      id: 22711
    }, {
      name: "Sapphiron Drape",
      source: "Onyxia",
      armor: 63,
      sta: 10,
      int: 17,
      SP: 14,
      id: 17078
    }, {
      name: "Shroud of Unspoken Names",
      source: "AQ20",
      armor: 59,
      sta: 16,
      int: 9,
      SP: 18,
      set: "AQ20",
      id: 21418
    }, {
    }],
    
    chest: [{
      name: "Plagueheart Robe",
      source: "Naxx",
      armor: 158,
      sta: 27,
      int: 22,
      SP: 51,
      hit: 8,
      crit: 14,
      set: "T3",
      id: 22504
    }, {
      name: "Bloodvine Vest",
      source: "Vanilla Crafting",
      armor: 92,
      int: 13,
      SP: 27,
      hit: 16,
      set: "Bloodvine",
      id: 19682
    }, {
      name: "Garb of Royal Ascension",
      source: "AQ40",
      armor: 124,
      sta: 21,
      SP: 30,
      hit: 16,
      id: 21838
    }, {
      name: "Crystal Webbed Robe",
      source: "Naxx",
      armor: 147,
      sta: 25,
      int: 19,
      SP: 53,
      id: 23220
    }, {
      name: "Doomcaller's Robes",
      source: "AQ40",
      armor: 151,
      sta: 23,
      int: 17,
      spi: 7,
      SP: 41,
      crit: 14,
      pen: 20,
      set: "T2.5",
      id: 21334
    }, {
      name: "Robe of Volatile Power",
      source: "MC",
      armor: 116,
      sta: 10,
      int: 15,
      spi: 10,
      SP: 23,
      crit: 28,
      id: 19145
    }, {
      name: "Robe of Undead Cleansing",
      source: "Vanilla Quest",
      armor: 89,
      sta: 12,
      int: 13,
      SP: 48,
      set: "UDC",
      id: 23085
    }, {
      name: "Nemesis Robes",
      source: "BWL",
      armor: 132,
      sta: 26,
      int: 16,
      spi: 8,
      SP: 32,
      crit: 14,
      set: "T2",
      id: 16931
    }, {
      name: "Vestments of the Shifting Sands",
      source: "AQ20",
      armor: 116,
      sta: 20,
      int: 14,
      spi: 8,
      SP: 32,
      crit: 14,
      id: 21499
    }, {
      name: "Robe of the Void",
      source: "Vanilla Crafting",
      armor: 109,
      sta: 14,
      SP: 46,
      id: 14153
    }, {
      name: "Field Marshal's Dreadweave Robe",
      source: "Vanilla PvP",
      armor: 169,
      sta: 30,
      int: 24,
      SP: 32,
      set: "PvPEpic",
      id: 17581
    }, {
      name: "Knight-Captain's Dreadweave Tunic",
      source: "Vanilla PvP",
      armor: 96,
      sta: 20,
      int: 20,
      SP: 25,
      set: "PvPRare",
      id: 23297
    }, {
      name: "Robes of the Battleguard",
      source: "AQ40",
      armor: 132,
      sta: 23,
      int: 17,
      spi: 8,
      SP: 36,
      pen: 20,
      id: 21671
    }, {
      name: "Zandalar Demoniac's Robe",
      source: "ZG",
      armor: 114,
      sta: 35,
      SP: 27,
      hit: 8,
      set: "ZG",
      id: 20033
    }, {
      name: "Felheart Robes",
      source: "MC",
      armor: 116,
      sta: 31,
      int: 20,
      SP: 13,
      hit: 8,
      set: "T1",
      id: 16809
    }, {
      name: "Deathmist Robe",
      source: "Vanilla Quest",
      armor: 106,
      sta: 27,
      int: 22,
      SP: 12,
      crit: 14,
      set: "T0.5",
      id: 22075
    }, {
      name: "Dreamweave Vest",
      source: "Vanilla Crafting",
      armor: 65,
      int: 9,
      spi: 14,
      SP: 18,
      id: 10021
    }, {
      name: "Flarecore Robe",
      source: "Vanilla Crafting",
      armor: 116,
      sta: 35,
      SP: 23,
      id: 19156
    }],
    
    wrist: [{
      name: "Rockfury Bracers",
      source: "Vanilla Quest",
      armor: 48,
      sta: 7,
      SP: 27,
      hit: 8,
      id: 21186
    }, {
      name: "Bracers of Arcane Accuracy",
      source: "BWL",
      armor: 57,
      sta: 9,
      int: 12,
      SP: 21,
      hit: 8,
      id: 19374
    }, {
      name: "The Soul Harvester's Bindings",
      source: "Naxx",
      armor: 63,
      sta: 14,
      int: 11,
      SP: 21,
      crit: 14,
      id: 23021
    }, {
      name: "Burrower Bracers",
      source: "AQ40",
      armor: 61,
      sta: 10,
      int: 13,
      SP: 28,
      id: 21611
    }, {
      name: "Plagueheart Bindings",
      source: "Naxx",
      armor: 66,
      sta: 23,
      int: 14,
      SP: 23,
      set: "T3",
      id: 22511
    }, {
      
      
      
    }],
  };
  return gear
}
