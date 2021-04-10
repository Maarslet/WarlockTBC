function loadGear() {
  var gear = createGear();
  var filter = createFilter();
  var i, j, info, item, slot, list, extra, count
  
  var slotArray = ['tableMainHand', 'tableOffHand', 'tableStaff', 'tableHelmet', 'tableNeck', 'tableShoulders', 'tableBack', 'tableChest', 'tableWrists', 
                   'tableHands', 'tableWaist', 'tableLegs', 'tableFeet', 'tableRing1', 'tableRing2', 'tableTrinket1', 'tableTrinket2', 'tableWand'];
  var listArray = ['mainhand', 'offhand', 'staff', 'helmet', 'neck', 'shoulder', 'back', 'chest', 'wrist',
                   'hands', 'waist', 'legs', 'feet', 'ring', 'ring', 'trinket', 'trinket', 'wand'];
  var activeItem = " style='background-color:#AAAAAA' name='activeItem'";
  
  for (i=0; i<slotArray.length; i++) {
    slot = slotArray[i];
    list = listArray[i];
    $('#' + slot).DataTable().destroy();
    document.getElementById(slot).children[1].innerHTML = "";
    info = "";
    count = 0;
    for (j=0; j<gear[list].length; j++) {
      item = gear[list][j];
      extra = "";
      if (item.set !== undefined) {
        extra = " class='" + item.set + "'";
      }
      if (filter.includes(item.source) == false) {
        info += "<tr onclick=clickTable('" + slot + "',this);" + extra + "><td>" + item.name + "</td><td>" + item.source + "</td><td>" + item.sta + "</td><td>" + item.int + "</td><td>" + item.spi + "</td><td>" + item.SP + "</td><td>" + item.ShP + "</td><td>" + item.FiP + "</td><td>" + item.hit + "</td><td>" + item.crit + "</td><td>" + item.haste + "</td><td>" + item.pen + "</td><td>" + item.hp5 + "</td><td>" + item.mp5 + "</td><td></td><td></td></tr>";
        count++;
      }
    }
    if (count == 0)
      info = "<tr onclick=clickTable('" + slot + "',this);><td>No items found, check your filter in the Advanced Tab</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
    
    document.getElementById(slot).children[1].innerHTML = info.replaceAll("undefined","");
    $('#' + slot).DataTable();
  }
}

function createFilter() {
  var filter = new Array;
  // Vanilla
  if (document.getElementById("filterNaxx").checked == false)
    filter.push("Naxx");
  if (document.getElementById("filterAQ40").checked == false)
    filter.push("AQ40");
  if (document.getElementById("filterBWL").checked == false)
    filter.push("BWL");
  if (document.getElementById("filterMC").checked == false)
    filter.push("MC");
  if (document.getElementById("filterAQ20").checked == false)
    filter.push("AQ20");
  if (document.getElementById("filterZG").checked == false)
    filter.push("ZG");
  if (document.getElementById("filterOny").checked == false)
    filter.push("Onyxia");
  if (document.getElementById("filterVPvP").checked == false)
    filter.push("Vanilla PvP");
  if (document.getElementById("filterVBoss").checked == false) {
    filter.push("Azuregos");
    filter.push("Vanilla Kazzak");
  }
  if (document.getElementById("filterVDung").checked == false) {
    filter.push("Stratholme");
    filter.push("Scholomance");
    filter.push("UBRS");
    filter.push("LBRS");
    filter.push("BRD");
    filter.push("Dire Maul");
  }
  if (document.getElementById("filterVQuest").checked == false)
    filter.push("Vanilla Quest");
  if (document.getElementById("filterVCraft").checked == false)
    filter.push("Vanilla Crafting");
  if (document.getElementById("filterVBoE").checked == false)
    filter.push("Vanilla BoE");
  
  // TBC
  if (document.getElementById("filterSWP").checked == false)
    filter.push("Sunwell Plateau");
  if (document.getElementById("filterBT").checked == false)
    filter.push("The Black Temple");
  if (document.getElementById("filterHyjal").checked == false)
    filter.push("Mount Hyjal");
  if (document.getElementById("filterTK").checked == false)
    filter.push("Tempest Keep");
  if (document.getElementById("filterSerp").checked == false)
    filter.push("Serpentshrine Cavern");
  if (document.getElementById("filterML").checked == false)
    filter.push("Magtheridon's Lair");
  if (document.getElementById("filterGL").checked == false)
    filter.push("Gruul's Lair");
  if (document.getElementById("filterZulA").checked == false)
    filter.push("Zul'Aman");
  if (document.getElementById("filterKara").checked == false)
    filter.push("Karazhan");
  if (document.getElementById("filterPvP4").checked == false)
    filter.push("TBC PvP S4");
  if (document.getElementById("filterPvP3").checked == false)
    filter.push("TBC PvP S3");
  if (document.getElementById("filterPvP2").checked == false)
    filter.push("TBC PvP S2");
  if (document.getElementById("filterPvP1").checked == false)
    filter.push("TBC PvP S1");
  if (document.getElementById("filterBCRep").checked == false) {
    filter.push("TBC Reputation");
    filter.push("Exalted Rep");
  }
  if (document.getElementById("filterBCBoss").checked == false) {
//     filter.push("TBC Reputation");
//     filter.push("Exalted Rep");
  }
  if (document.getElementById("filterBCDung").checked == false) {
    filter.push("TBC Dungeon");
    filter.push("Badges of Justice");
    // Specifics here
    filter.push("Shadow Labyrinth");
    filter.push("Shadow Labyrinth (HC)");
    filter.push("Sethekk Halls");
    filter.push("Sethekk Halls (HC)");
    filter.push("Black Morass");
    filter.push("Black Morass (HC)");
    filter.push("Mechanar");
    filter.push("Mechanar (HC)");
    filter.push("Arcatraz");
    filter.push("Arcatraz (HC)");
    filter.push("Mana-Tombs");
    filter.push("Mana-Tombs (HC)");
    filter.push("Underbog");
    filter.push("Underbog (HC)");
  }
  if (document.getElementById("filterBCQ").checked == false)
    filter.push("TBC Quest");
  if (document.getElementById("filterBCraft").checked == false)
    filter.push("TBC Crafting");
  if (document.getElementById("filterBCBoE").checked == false)
    filter.push("TBC BoE");
  
  return filter
}

function createGear() {
  var gear = {
    mainhand: [{                    // Main Hand
      name: "Gladiator's Spellblade",
      source: "TBC PvP S1",
      sta: 28,
      int: 18,
      SP: 199,
      resil: 18,
      id: 28297
    }, {
      name: "Eternium Runed Blade",
      source: "TBC Crafting",
      int: 19,
      SP: 168,
      crit: 21,
      id: 23554
    }, {
      name: "Blade of the Archmage",
      source: "Exalted Rep",
      sta: 13,
      int: 11,
      SP: 159,
      crit: 21,
      id: 29153
    }, {
      name: "Blade of Wizardry (No Proc)",
      source: "TBC BoE",
      SP: 159,
      id: 31336
    }, {
      name: "Greatsword of Horrid Dreams",
      source: "Shadow Labyrinth",
      sta: 15,
      int: 14,
      SP: 130,
      hit: 14,
      id: 27905
    }, {
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
      source: "Vanilla Crafting",
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
      name: "Lamp of Peaceful Radiance",
      source: "Arcatraz",
      sta: 13,
      int: 14,
      SP: 21,
      hit: 12,
      crit: 13,
      id: 28412
    }, {
      name: "Orb of the Soul-Eater",
      source: "Badges of Justice",
      sta: 18,
      ShP: 51,
      id: 29272
    }, {
      name: "Khadgar's Knapsack",
      source: "Badges of Justice",
      SP: 49,
      id: 29273
    }, {
      name: "Star-Heart Lamp",
      source: "Black Morass",
      sta: 17,
      int: 18,
      SP: 22,
      hit: 12,
      id: 28187
    }, {
      name: "Draenei Crystal Rod of Shadow Wrath",
      source: "TBC BoE",
      ShP: 45,
      id: 25099
    }, {
      nane: "Manual of the Nethermancer",
      source: "Mechanar",
      sta: 12,
      int: 15,
      SP: 21,
      crit: 19,
      id: 28260
    }, {
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
      name: "Terokk's Shadowstaff",
      source: "Sethekk Halls (HC)",
      sta: 40,
      int: 42,
      SP: 168,
      crit: 37,
      id: 29355
    }, {
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
      name: "Spellstrike Hood",
      source: "TBC Crafting",
      armor: 145,
      sta: 16,
      int: 12,
      SP: 46,
      hit: 16,
      crit: 24,
      set: "Spellstrike",
      gems: 3,
      gem1: "blue",
      gem2: "yellow",
      gem3: "red",
      gemB: "sta: 6",
      id: 24266
    }, {
      name: "Gnomish Power Goggles",
      source: "TBC Crafting",
      armor: 132,
      int: 21,
      SP: 59,
      crit: 28,
      id: 23838
    }, {
      name: "Evoker's Helmet of Second Sight",
      source: "TBC Quest",
      armor: 120,
      sta: 12,
      int: 15,
      spi: 8,
      SP: 35,
      crit: 24,
      gems: 3,
      gem1: "blue",
      gem2: "blue",
      gem3: "yellow",
      gemB: "SP: 5",
      id: 31104
    }, {
      name: "Elementalist Skullcap of Shadow Wrath",
      source: "TBC BoE",
      armor: 120,
      ShP: 80,
      id: 24689
    }, {
      name: "Mana-Binders Cowl",
      source: "Badges of Justice",
      armor: 151,
      sta: 38,
      int: 29,
      SP: 34,
      crit: 15,
      gems: 1,
      gem1: "yellow",
      meta: true,
      gemB: "SP: 5",
      id: 32089
    }, {
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
      source: "Vanilla Crafting",
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
    
    shoulder: [{                                            // Shoulder
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
    
    back: [{                                          // Back
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
      name: "Bracers of Undead Cleansing",
      source: "Vanilla Quest",
      armor: 39,
      sta: 6,
      int: 7,
      SP: 26,
      set: "UDC",
      id: 23091
    }, {
      name: "Shackles of the Unscarred",
      source: "AQ20",
      armor: 55,
      sta: 9,
      int: 12,
      SP: 21,
      pen: 10,
      id: 21464
    }, {
      name: "Dryad's Wrist Bindings",
      source: "Vanilla PvP",
      armor: 50,
      sta: 8,
      int: 8,
      spi: 7,
      SP: 22,
      id: 19595
    }, {
      name: "Zandalar Demoniac's Wraps",
      source: "ZG",
      armor: 47,
      sta: 15,
      int: 8,
      SP: 16,
      set: "ZG",
      id: 19848
    }, {
      name: "Nemesis Bracers",
      source: "BWL",
      armor: 58,
      sta: 21,
      int: 11,
      spi: 6,
      SP: 15,
      set: "T2",
      id: 16934
    }, {
      name: "Felheart Bracers",
      source: "MC",
      armor: 51,
      sta: 18,
      int: 11,
      spi: 8,
      SP: 13,
      set: "T1",
      id: 16804
    }, {
      name: "Sublime Wristguards",
      source: "Dire Maul",
      armor: 37,
      sta: 6,
      int: 10,
      spi: 6,
      SP: 12,
      id: 18497
    }, {
      name: "Deathmist Bracers",
      source: "Vanilla Quest",
      armor: 40,
      sta: 12,
      int: 12,
      SP: 8,
      set: "T0.5",
      id: 22071
    }],
    
    hands: [{                         // Hands
      name: "Dark Storm Gauntlets",
      source: "AQ40",
      armor: 95,
      sta: 19,
      int: 15,
      SP: 37,
      hit: 8,
      id: 21585
    }, {
      name: "Ebony Flame Gloves",
      source: "BWL",
      armor: 82,
      sta: 17,
      int: 12,
      ShP: 43,
      id: 19407
    }, {
      name: "Plagueheart Gloves",
      source: "Naxx",
      armor: 95,
      sta: 25,
      int: 17,
      SP: 26,
      crit: 14,
      set: "T3",
      id: 22509
    }, {
      name: "Bloodtinged Gloves",
      source: "ZG",
      armor: 62,
      sta: 10,
      int: 10,
      spi: 10,
      SP: 19,
      hit: 8,
      id: 19929
    }, {
      name: "Gloves of Undead Cleansing",
      source: "Vanilla Quest",
      armor: 56,
      sta: 10,
      int: 10,
      SP: 35,
      set: "UDC",
      id: 23084
    }, {
      name: "Deathmist Wraps",
      source: "Vanilla Quest",
      armor: 61,
      sta: 16,
      int: 13,
      SP: 13,
      hit: 8,
      set: "T0.5",
      id: 22077
    }, {
      name: "Nemesis Gloves",
      source: "BWL",
      armor: 83,
      sta: 17,
      int: 15,
      SP: 15,
      crit: 14,
      hp5: 4,
      set: "T2",
      id: 16928
    }, {
      name: "Felcloth Gloves",
      source: "Vanilla Crafting",
      armor: 55,
      sta: 9,
      ShP: 33,
      id: 18407
    }, {
      name: "Hands of Power",
      source: "LBRS",
      armor: 53,
      int: 6,
      spi: 6,
      SP: 26,
      id: 13253
    }, {
      name: "Felheart Gloves",
      source: "MC",
      armor: 72,
      sta: 18,
      int: 15,
      spi: 8,
      SP: 9,
      crit: 14,
      set: "T1",
      id: 16805
    }, {
      name: "Marshal's Dreadweave Gloves",
      source: "Vanilla PvP",
      armor: 78,
      sta: 20,
      int: 6,
      SP: 30,
      set: "PvPEpic",
      id: 17584
    }, {
      name: "Knight-Lieutenant's Dreadweave Handwraps",
      source: "Vanilla PvP",
      armor: 58,
      sta: 14,
      int: 4,
      SP: 21,
      set: "PvPRare",
      id: 23282
    }, {
      name: "Dreamweave Gloves",
      source: "Vanilla Crafting",
      armor: 41,
      int: 4,
      spi: 7,
      SP: 18,
      id: 10019
    }, {
      name: "Gloves of the Hypnotic Flame",
      source: "MC",
      armor: 77,
      sta: 18,
      int: 19,
      spi: 8,
      SP: 9,
      FiP: 23,
      id: 18808
    }, {
      name: "Inferno Gloves",
      source: "Vanilla Crafting",
      armor: 55,
      int: 9,
      FiP: 33,
      id: 18408
    }],
    
    waist: [{                         // Waist
      name: "Eyestalk Waist Cord",
      source: "AQ40",
      armor: 85,
      sta: 10,
      int: 9,
      SP: 41,
      crit: 14,
      id: 22730
    }, {
      name: "Plagueheart Belt",
      source: "Naxx",
      armor: 85,
      sta: 23,
      int: 12,
      SP: 34,
      crit: 14,
      set: "T3",
      id: 22510
    }, {
      name: "Mana Igniting Cord",
      source: "MC",
      armor: 70,
      sta: 12,
      int: 16,
      SP: 25,
      crit: 14,
      id: 19136
    }, {
      name: "Angelista's Grasp",
      source: "BWL",
      armor: 75,
      sta: 17,
      int: 20,
      spi: 13,
      hit: 16,
      id: 19388
    }, {
      name: "Firemaw's Clutch",
      source: "BWL",
      armor: 74,
      sta: 12,
      int: 12,
      SP: 35,
      mp5: 5,
      id: 19400
    }, {
      name: "Nemesis Belt",
      source: "BWL",
      armor: 74,
      sta: 18,
      int: 8,
      spi: 6,
      SP: 25,
      crit: 14,
      set: "T2",
      id: 16933
    }, {
      name: "Ban'thok Sash",
      source: "BRD",
      armor: 43,
      sta: 10,
      int: 11,
      SP: 12,
      hit: 8,
      id: 11622
    }, {
      name: "Sash of Whispered Secrets",
      source: "MC",
      armor: 70,
      sta: 20,
      ShP: 33,
      hp5: 6,
      id: 18809
    }, {
      name: "Belt of Untapped Power",
      source: "ZG",
      armor: 54,
      sta: 6,
      int: 7,
      SP: 29,
      id: 22716
    }, {
      name: "Felheart Belt",
      source: "MC",
      armor: 65,
      sta: 18,
      int: 15,
      spi: 8,
      SP: 20,
      set: "T1",
      id: 16806
    }, {
      name: "Clutch of Andros",
      source: "Scholomance",
      armor: 49,
      sta: 9,
      int: 19,
      hit: 8,
      id: 13956
    }, {
      name: "Deathmist Belt",
      source: "Vanilla Quest",
      armor: 52,
      sta: 16,
      int: 16,
      SP: 12,
      set: "T0.5",
      id: 22070
    }],
    
    legs: [{                    // Legs
      name: "Leggings of Polarity",
      source: "Naxx",
      armor: 128,
      sta: 20,
      int: 14,
      SP: 44,
      crit: 28,
      id: 23070
    }, {
      name: "Plagueheart Leggings",
      source: "Naxx",
      armor: 133,
      sta: 30,
      int: 25,
      SP: 37,
      crit: 14,
      pen: 10,
      set: "T3",
      id: 22505
    }, {
      name: "Fel Infused Leggings",
      source: "Vanilla Kazzak",
      armor: 109,
      sta: 21,
      ShP: 64,
      id: 19133
    }, {
      name: "Leggings of the Black Blizzard",
      source: "AQ20",
      armor: 110,
      sta: 14,
      int: 16,
      spi: 8,
      SP: 41,
      crit: 14,
      id: 21461
    }, {
      name: "Doomcaller's Trousers",
      source: "AQ40",
      armor: 123,
      sta: 28,
      int: 24,
      spi: 9,
      SP: 34,
      crit: 14,
      set: "T2.5",
      id: 21336
    }, {
      name: "Bloodvine Leggings",
      source: "Vanilla Crafting",
      armor: 80,
      int: 6,
      SP: 37,
      hit: 8,
      set: "Bloodvine",
      id: 19683
    }, {
      name: "Marshal's Dreadweave Leggings",
      source: "Vanilla PvP",
      armor: 149,
      sta: 28,
      int: 19,
      SP: 37,
      set: "PvPEpic",
      id: 17579
    }, {
      name: "Knight-Captain's Dreadweave Legguards",
      source: "Vanilla PvP",
      armor: 84,
      sta: 21,
      int: 13,
      SP: 28,
      set: "PvPRare",
      id: 23296
    }, {
      name: "Nemesis Leggings",
      source: "MC",
      armor: 116,
      sta: 23,
      int: 16,
      spi: 4,
      SP: 39,
      set: "T2",
      id: 16930
    }, {
      name: "Flarecore Leggings",
      source: "Vanilla Crafting",
      armor: 107,
      sta: 21,
      SP: 43,
      id: 19165
    }, {
      name: "Leggings of Torment",
      source: "UBRS",
      armor: 78,
      sta: 16,
      int: 16,
      ShP: 34,
      id: 22342
    }, {
      name: "Skyshroud Leggings",
      source: "LBRS",
      armor: 75,
      sta: 8,
      int: 8,
      SP: 34,
      id: 13170
    }, {
      name: "Felheart Pants",
      source: "MC",
      armor: 101,
      sta: 20,
      int: 19,
      spi: 10,
      SP: 30,
      set: "T1",
      id: 16810
    }, {
      name: "Bloodtinged Kilt",
      source: "ZG",
      armor: 87,
      sta: 20,
      int: 20,
      SP: 28,
      id: 19895
    }, {
      name: "Spiritshroud Leggings",
      source: "UBRS",
      armor: 78,
      sta: 13,
      int: 16,
      spi: 16,
      SP: 19,
      id: 12965
    }, {
      name: "Deathmist Leggings",
      source: "Vanilla Quest",
      armor: 81,
      sta: 22,
      int: 21,
      SP: 16,
      set: "T0.5",
      id: 22072
    }, {
      name: "Leggings of the Festering Swarm",
      source: "AQ40",
      armor: 116,
      sta: 17,
      int: 23,
      FiP: 57,
      id: 21676
    }],
    
    feet: [{                        // Feet
      name: "Plagueheart Sandals",
      source: "Naxx",
      armor: 102,
      sta: 20,
      int: 16,
      SP: 32,
      crit: 14,
      set: "T3",
      id: 22508
    }, {
      name: "Boots of Epiphany",
      source: "AQ40",
      armor: 96,
      sta: 18,
      int: 19,
      SP: 34,
      id: 21600
    }, {
      name: "Bloodvine Boots",
      source: "Vanilla Crafting",
      armor: 63,
      int: 16,
      SP: 19,
      hit: 8,
      set: "Bloodvine",
      id: 19684
    }, {
      name: "Snowblind Shoes",
      source: "Azuregos",
      armor: 83,
      sta: 10,
      int: 10,
      SP: 32,
      mp5: 5,
      id: 19131
    }, {
      name: "Doomcaller's Footwraps",
      source: "AQ40",
      armor: 93,
      sta: 20,
      int: 16,
      spi: 3,
      SP: 28,
      pen: 10,
      set: "T2.5",
      id: 21338
    }, {
      name: "Betrayer's Boots",
      source: "ZG",
      armor: 79,
      sta: 8,
      int: 12,
      spi: 12,
      SP: 30,
      id: 19897
    }, {
      name: "Marshal's Dreadweave Boots",
      source: "Vanilla PvP",
      armor: 145,
      sta: 22,
      int: 13,
      SP: 26,
      set: "PvPEpic",
      id: 17583
    }, {
      name: "Knight-Lieutenant's Dreadweave Walkers",
      source: "Vanilla PvP",
      armor: 64,
      sta: 17,
      int: 13,
      SP: 18,
      set: "PvPRare",
      id: 23283
    }, {
      name: "Nemesis Boots",
      source: "BWL",
      armor: 91,
      sta: 20,
      int: 17,
      spi: 6,
      SP: 23,
      set: "T2",
      id: 16927
    }, {
      name: "Maleki's Footwraps",
      source: "Stratholme",
      armor: 60,
      sta: 9,
      int: 9,
      ShP: 27,
      id: 18735
    }, {
      name: "Omnicast Boots",
      source: "BRD",
      armor: 58,
      sta: 6,
      int: 9,
      SP: 22,
      id: 11822
    }, {
      name: "Dragonrider Boots",
      source: "UBRS",
      armor: 61,
      sta: 5,
      int: 16,
      SP: 18,
      id: 18102
    }, {
      name: "Recomposed Boots",
      source: "AQ40",
      armor: 91,
      sta: 21,
      int: 13,
      SP: 20,
      id: 21648
    }, {
      name: "Felheart Slippers",
      source: "MC",
      armor: 80,
      sta: 23,
      int: 11,
      SP: 18,
      set: "T1",
      id: 16803
    }, {
      name: "Deathmist Sandals",
      source: "Vanilla Quest",
      armor: 73,
      sta: 24,
      int: 14,
      SP: 12,
      set: "T0.5",
      id: 22076
    }, {
      name: "Fire Striders",
      source: "Stratholme",
      armor: 61,
      spi: 5,
      FiP: 29,
      id: 13369
    }],
    
    ring: [{                      // Ring
      name: "Ring of the Fallen God",
      source: "AQ40",
      sta: 5,
      int: 6,
      SP: 37,
      hit: 8,
      id: 21709
    }, {
      name: "Band of the Inevitable",
      source: "Naxx",
      SP: 36,
      hit: 8,
      id: 23031
    }, {
      name: "Seal of the Damned",
      source: "Naxx",
      sta: 17,
      SP: 21,
      hit: 8,
      crit: 14,
    }, {
      name: "Band of Forced Concentration",
      source: "BWL",
      sta: 9,
      int: 12,
      SP: 21,
      hit: 8,
      id: 19403
    }, {
      name: "Ring of Unspoken Names",
      source: "AQ20",
      sta: 12,
      SP: 14,
      hit: 8,
      crit: 14,
      set: "AQ20",
      id: 21417
    }, {
      name: "Ritssyn's Ring of Chaos",
      source: "AQ40",
      sta: 6,
      SP: 25,
      crit: 14,
      id: 21836
    }, {
      name: "Band of Dark Dominion",
      source: "BWL",
      sta: 12,
      int: 6,
      ShP: 33,
      id: 19434
    }, {
      name: "Zanzil's Seal",
      source: "ZG",
      sta: 10,
      int: 10,
      SP: 11,
      hit: 8,
      set: "Zanzil",
      id: 19893
    }, {
      name: "Signet of the Bronze Dragonflight",
      source: "Vanilla Quest",
      sta: 8,
      int: 9,
      SP: 28,
      mp5: 5,
      id: 21210
    }, {
      name: "Rune Band of Wizardry",
      source: "UBRS",
      sta: 7,
      SP: 16,
      hit: 8,
      id: 22339
    }, {
      name: "Ring of Spell Power",
      source: "MC",
      SP: 33,
      id: 19147
    }, {
      name: "Plagueheart Ring",
      source: "Naxx",
      sta: 24,
      SP: 29,
      set: "T3",
      id: 23063
    }, {
      name: "Band of Servitude",
      source: "ZG",
      sta: 8,
      int: 9,
      SP: 23,
      id: 22721
    }, {
      name: "Ring of the Desert Winds",
      source: "AQ20",
      int: 9,
      SP: 9,
      crit: 14,
      mp5: 3,
      id: 21483
    }, {
      name: "Ring of Swarming Thought",
      source: "AQ40",
      SP: 26,
      pen: 20,
      id: 21707
    }, {
      name: "Zanzil's Band",
      source: "ZG",
      int: 13,
      hit: 8,
      mp5: 4,
      set: "Zanzil",
      id: 19905
    }, {
      name: "Songstone of Ironforge",
      source: "Vanilla Quest",
      int: 7,
      spi: 4,
      SP: 18,
      id: 12543
    }, {
      name: "Ring of Blackrock",
      source: "BWL",
      SP: 19,
      mp5: 9,
      id: 19397
    }, {
      name: "Dragonslayer's Signet",
      source: "Onyxia",
      sta: 12,
      int: 12,
      spi: 6,
      crit: 14,
      id: 18403
    }, {
      name: "Ring of Eternal Flame",
      source: "Naxx",
      int: 10,
      FiP: 34,
      crit: 14,
      id: 23237
    }, {
      name: "Don Rodrigo's Band",
      source: "Vanilla PvP",
      sta: 7,
      crit: 14,
      pen: 20,
      id: 21563
    }],
    
    trinket: [{                             // Trinket
      name: "Mark of the Champion",
      source: "Naxx",
      SP: 85,
      id: 23207
    },{
      name: "Neltharion's Tear",
      source: "BWL",
      SP: 44,
      hit: 16,
      id: 19379
    }, {
      name: "The Restrained Essence of Sapphiron",
      source: "Naxx",
      SP: 40,
      id: 23046
    }, {
      name: "Rune of the Dawn",
      source: "Vanilla Quest",
      SP: 48,
      id: 19812
    }, {
      name: "Talisman of Ephemeral Power",
      source: "MC",
      id: 18820
    }, {
      name: "Zandalarian Hero Charm",
      source: "ZG",
      id: 19950
    }, {
      name: "Hazza'rah's Charm of Destruction",
      source: "ZG",
      set: "ZG",
      id: 19957
    }, {
      name: "Briarwood Reed",
      source: "UBRS",
      SP: 29,
      id: 12930
    }, {
      name: "Eye of the Beast",
      source: "Vanilla Quest",
      crit: 28,
      id: 13968
    }, {
      name: "Eye of Diminution",
      source: "Naxx",
      crit: 28,
      id: 23001
    }, {
      name: "Royal Seal of Eldre'Thalas",
      source: "Vanilla Quest",
      SP: 23,
      id: 18467
    }, {
      name: "Nat Pagle's Broken Reel",
      source: "ZG",
      id: 19947
    }, {
      name: "Eye of Moam",
      source: "AQ20",
      id: 21473
    }, {
      name: "Fetish of the Sand Reaver",
      source: "AQ40",
      id: 21647
    }],
    
    wand: [{                                // Wand
      name: "Nether Core's Control Rod",
      source: "Arcatraz",
      sta: 9,
      int: 10,
      SP: 13,
      hit: 8,
      id: 28386
    }, {
      name: "The Black Stalk",
      source: "Underbog (HC)",
      sta: 10,
      SP: 20,
      crit: 11,
      id: 29350
    }, {
      name: "Voidfire Wand",
      source: "Mana-Tombs",
      sta: 9,
      int: 9,
      SP: 11,
      hit: 7,
      id: 25939
    }, {
      name: "Flawless Wand of Shadow Wrath",
      source: "TBC BoE",
      ShP: 25,
      id: 25295
    }, {
      name: "Nesingwary Safari Stick",
      source: "TBC Quest",
      SP: 14,
      crit: 12,
      id: 25640
    }, {
      name: "Nethekurse's Rod of Torment",
      source: "TBC Quest",
      int: 10,
      SP: 11,
      crit: 10,
      id: 25806
    }, {
      name: "Wand of Fates",
      source: "Naxx",
      sta: 7,
      int: 7,
      SP: 12,
      hit: 8,
      id: 22820
    }, {
      name: "Doomfinger",
      source: "Naxx",
      SP: 16,
      crit: 14,
      id: 22821
    }, {
      name: "Wand of Qiraji Nobility",
      source: "AQ40",
      sta: 5,
      SP: 19,
      id: 21603
    }, {
      name: "Touch of Chaos",
      source: "ZG",
      SP: 18,
      id: 19861
    }, {
      name: "Dragon's Touch",
      source: "BWL",
      sta: 7,
      int: 12,
      SP: 6,
      id: 19367
    }, {
      name: "Skul's Ghastly Touch",
      source: "Stratholme",
      ShP: 14,
      id: 13396
    }, {
      name: "Bonecreeper Stylus",
      source: "Scholomance",
      int: 4,
      SP: 11,
      id: 13938
    }, {
      name: "Ritssyn's Wand of Bad Mojo",
      source: "Stratholme",
      sta: 4,
      SP: 11,
      id: 22408
    }, {
      name: "Lethtendris's Wand",
      source: "Dire Maul",
      SP: 9,
      id: 18301
    }, {
      name: "Stormrager",
      source: "Vanilla Quest",
      sta: 8,
      int: 5,
      id: 16997
    }, {
      name: "Pyric Caduceus",
      source: "BRD",
      FiP: 13,
      id: 11748
    }]
  };
  return gear
}
