function loadEnchants() {
  var cell;
  cell = document.getElementById("enchantHead");
  cell.innerHTML = "<select name='enchantSelect' id='enchantHeadSelection'>"
      + "<option value='SP: 22,hit: 14'><a href='https://tbc.wowhead.com/item=29191'>Glyph of Power</a></option>"
      + "<option value='SP: 18,sta: 10'>Hoodoo Hex</option>"
      + "<option value='SP: 0'>None</option></select>";
  
  cell = document.getElementById("enchantShoulder");
  cell.innerHTML = "<select name='enchantSelect' id='enchantShoulderSelection'>"
      + "<option value='SP: 18,crit: 10'>Greater Inscription of Discipline</option>"
      + "<option value='SP: 12,crit: 15'>Greater Inscription of the Orb	</option>"
      + "<option value='SP: 15'>Inscription of Discipline</option>"
      + "<option value='crit: 13'>Inscription of the Orb</option>"
      + "<option value='SP: 15,crit: 14'>Power of the Scourge</option>"
      + "<option value='SP: 18'>Zandalar SIgnet of Mojo</option>"
      + "<option value='SP: 0'>None</option></select>";
  
  cell = document.getElementById("enchantBack");
  cell.innerHTML = "<select name='enchantSelect' id='enchantBackSelection'>"
      + "<option value='SP: 0'>Subtlety</option>"
      + "<option value='pen: 20'>Spell Penetration</option>"
      + "<option value='SP: 0'>None</option></select>";
  
  cell = document.getElementById("enchantChest");
  cell.innerHTML = "<select name='enchantSelect' id='enchantChestSelection'>"
      + "<option value='sta: 6,int: 6,spi: 6'>Exceptional Stats</option>"
      + "<option value='sta: 4,int: 4,spi: 4'>Greater Stats</option>"
      + "<option value='SP: 0'>None</option></select>";
  
  cell = document.getElementById("enchantWrist");
  cell.innerHTML = "<select name='enchantSelect' id='enchantWristSelection'>"
      + "<option value='SP: 15'>Spellpower</option>"
      + "<option value='SP: 10'>Superior Healing</option>"
      + "<option value='SP: 8'>Healing Power</option>"
      + "<option value='int: 12'>Major Intellect</option>"
      + "<option value='sta: 4,int: 4,spi: 4'>Stats</option>"
      + "<option value='SP: 0'>None</option></select>";
  
  cell = document.getElementById("enchantHand");
  cell.innerHTML = "<select name='enchantSelect' id='enchantHandSelection'>"
      + "<option value='SP: 20'>Major Spellpower</option>"
      + "<option value='hit: 15'>Spell Strike</option>"
      + "<option value='crit: 10'>Blasting</option>"
      + "<option value='SP: 0'>None</option></select>";
  
  cell = document.getElementById("enchantLegs");
  cell.innerHTML = "<select name='enchantSelect' id='enchantLegsSelection'>"
      + "<option value='SP: 35,sta: 20'>Runic Spellthread</option>"
      + "<option value='SP: 25,sta: 15'>Mystic Spellthread</option>"
      + "<option value='SP: 18,sta: 10'>Hoodoo Hex</option>"
      + "<option value='SP: 0'>None</option></select>";
  
  cell = document.getElementById("enchantFeet");
  cell.innerHTML = "<select name='enchantSelect' id='enchantFeetSelection'>"
      + "<option value='sta: 9'>Boar's Speed</option>"
      + "<option value='SP: 0'>Minor Speed</option>"
      + "<option value='mp5: 3'>Magister's Armor Kit</option>"
      + "<option value='SP: 0'>None</option></select>";
  
  cell = document.getElementById("enchantFinger1");
  cell.innerHTML = "<select name='enchantSelect' id='enchantFinger1Selection'>"
      + "<option value='SP: 12'>Spellpower</option>"
      + "<option value='sta: 4,int: 4,spi: 4'>Stats</option>"
      + "<option value='SP: 0' selected>None</option></select>";
  
  cell = document.getElementById("enchantFinger2");
  cell.innerHTML = "<select name='enchantSelect' id='enchantFinger2Selection'>"
      + "<option value='SP: 12'>Spellpower</option>"
      + "<option value='sta: 4,int: 4,spi: 4'>Stats</option>"
      + "<option value='SP: 0' selected>None</option></select>";
  
  cell = document.getElementById("enchantWeapon");
  cell.innerHTML = "<select name='enchantSelect' id='enchantWeaponSelection'>"
      + "<option value='ShP: 54'>Soulfrost</option>"
      + "<option value='FiP: 50'>Sunfire</option>"
      + "<option value='SP: 40' selected>Major Spellpower</option>"
      + "<option value='SP: 30'>Spell Power</option>"
      + "<option value='int: 30'>Major Intellect</option>"
      + "<option value='SP: 0'>None</option></select>";
}

function loadGems(type) {
  var metaHTML, normalHTML, cellArray, i;
  
  if (type !== "meta")
    type = "normal";
  metaHTML = ""
  + "<option class='nogem' value='nometa'>No Gem Equipped</option>"
  + "<option class='metagem' value='chaotic' selected>Chaotic Skyfire Diamond</option>"
  + "<option class='metagem' value='ember'>Ember Skyfire Diamond</option>"
  + "<option class='metagem' value='mystical'>Mystical Skyfire Diamond</option>"
  + "<option class='metagem' value='swift'>Swift Starfire Diamond</option>"
  + "<option class='metagem' value='insightful'>Insightful Earthstorm Diamond</option>"
  + "<option class='metagem' value='imbued'>Imbued Unstable Diamond</option>"
  
  normalHTML = ""
  // No Gem
  + "<option class='nogem' value='SP: 0' selected>No Gem Equipped</option>"
  // Red Gems
  + "<option class='redgem' value='SP: 14'>Don Julio's Heart</option>"
  //+ "<option class='redgem' value='SP: 12'>Runed Ornate Ruby</option>"
  + "<option class='redgem' value='SP: 12'>Runed Crimson Spinel</option>"
  + "<option class='redgem' value='SP: 9'>Runed Living Ruby</option>"
  //+ "<option class='redgem' value='SP: 7'>Runed Blood Garnet</option>"
  // Orange Gems
  + "<option class='orangegem' value='SP: 6,haste:5'>Reckless Pyrestone</option>"
  + "<option class='orangegem' value='SP: 5,haste:4'>Reckless Noble Topaz</option>"
  + "<option class='orangegem' value='SP: 6,crit:5'>Potent Pyrestone</option>"
  + "<option class='orangegem' value='SP: 5,crit:4'>Potent Noble Topaz</option>"
  + "<option class='orangegem' value='SP: 6,hit:5'>Veiled Pyrestone</option>"
  + "<option class='orangegem' value='SP: 5,hit:4'>Veiled Noble Topaz</option>"
  // Yellow Gems
  + "<option class='yellowgem' value='haste: 10'>Quick Lionseye</option>"
  + "<option class='yellowgem' value='haste: 8'>Quick Dawnstone</option>"
  + "<option class='yellowgem' value='hit: 12'>Great Bladestone</option>"
  + "<option class='yellowgem' value='hit: 10'>Great Lionseye</option>"
  + "<option class='yellowgem' value='hit: 8'>Great Dawnstone</option>"
  + "<option class='yellowgem' value='crit: 12'>Blood of Amber</option>"
  + "<option class='yellowgem' value='crit: 10'>Gleaming Lionseye</option>"
  + "<option class='yellowgem' value='crit: 8'>Gleaming Dawnstone</option>"
  + "<option class='yellowgem' value='int: 10'>Brilliant Lionseye</option>"
  + "<option class='yellowgem' value='int: 8'>Brilliant Dawnstone</option>"
  // Purple Gems
  + "<option class='purplegem' value='SP: 6,sta:7'>Glowing Shadowsong Amethyst</option>"
  + "<option class='purplegem' value='SP: 5,sta:6'>Glowing Nightseye</option>"
  // Green Gems
  + "<option class='greengem' value='haste: 5,sta:7'>Forceful Seaspray Emerald</option>"
  + "<option class='greengem' value='haste: 4,sta:6'>Forceful Talasite</option>"
  + "<option class='greengem' value='crit: 5,pen:6'>Radiant Seaspray Emerald</option>"
  + "<option class='greengem' value='crit: 4,pen:5'>Radiant Talasite</option>"
  // Blue Gems
  + "<option class='bluegem' value='pen: 13'>Stormy Empyrean Sapphire</option>"
  + "<option class='bluegem' value='pen: 10'>Stormy Star of Elune</option>"
  + "</select></span>";
  
  cellArray = document.getElementsByName('gemslot');
  cellArray[0].innerHTML = "<select style='display:none' name='gemselect' class='nogem' onchange='updateSelectColor(this);'>" + normalHTML;
  cellArray[0].innerHTML += "<select style='display:inline-block' name='gemselect' class='metagem' onchange='updateSelectColor(this);'>" + metaHTML;
  for (i = 1; i<cellArray.length; i++) {
    cellArray[i].innerHTML = "<select name='gemselect' class='nogem' onchange='updateSelectColor(this);'>" + normalHTML;
  }
}

function updateSelectColor(element) {
  element.className = element[element.selectedIndex].className;
  checkGems();
}

function checkGems() {
  var enchantTable = document.getElementById('enchantTable').children[0].children;
  var i, red, blue, yellow, slot1, slot2, slot3, meta, gem1, gem2, gem3
  red = 0; blue = 0; yellow = 0;
  
  for (i = 1; i<18; i++) {
    if (enchantTable[i].children[6].innerHTML == "")
      continue
    slot1 = true; slot2 = true; slot3 = true;
    
    if (i == 1)
      meta = enchantTable[1].children[3].children[1];
    gem1 = enchantTable[i].children[3].children[0];
    gem2 = enchantTable[i].children[4].children[0];
    gem3 = enchantTable[i].children[5].children[0];
    if (i == 1 && meta.style.display !== "none") {
      if (meta.dataSlot == "meta" && meta.className == "metagem") {
        slot1 = true;
      }
      else 
        slot1 = false;
    }
    
    if (gem1 !== undefined && gem1.style.display !== "none") {
      if (gem1.dataSlot == "red" && (gem1.className == "redgem" || gem1.className == "orangegem" || gem1.className == "purplegem")) {
        slot1 = true;
      }
      else if (gem1.dataSlot == "blue" && (gem1.className == "bluegem" || gem1.className == "purplegem" || gem1.className == "greengem")) {
        slot1 = true;
      }
      else if (gem1.dataSlot == "yellow" && (gem1.className == "yellowgem" || gem1.className == "orangegem" || gem1.className == "greengem")) {
        slot1 = true;
      }
      else
        slot1 = false;
      if (gem1.className == "redgem" || gem1.className == "orangegem" || gem1.className == "purplegem")
        red++;
      if (gem1.className == "bluegem" || gem1.className == "purplegem" || gem1.className == "greengem")
        blue++;
      if (gem1.className == "yellowgem" || gem1.className == "orangegem" || gem1.className == "greengem")
        yellow++;
    }
    
    if (gem2 !== undefined && gem2.style.display !== "none") {
      if (gem2.dataSlot == "red" && (gem2.className == "redgem" || gem2.className == "orangegem" || gem2.className == "purplegem")) {
        slot2 = true;
      }
      else if (gem2.dataSlot == "blue" && (gem2.className == "bluegem" || gem2.className == "purplegem" || gem2.className == "greengem")) {
        slot2 = true;
      }
      else if (gem2.dataSlot == "yellow" && (gem2.className == "yellowgem" || gem2.className == "orangegem" || gem2.className == "greengem")) {
        slot2 = true;
      }
      else
        slot2 = false;
      if (gem2.className == "redgem" || gem2.className == "orangegem" || gem2.className == "purplegem")
        red++;
      if (gem2.className == "bluegem" || gem2.className == "purplegem" || gem2.className == "greengem")
        blue++;
      if (gem2.className == "yellowgem" || gem2.className == "orangegem" || gem2.className == "greengem")
        yellow++;
    }
    
    if (gem3 !== undefined && gem3.style.display !== "none") {
      if (gem3.dataSlot == "red" && (gem3.className == "redgem" || gem3.className == "orangegem" || gem3.className == "purplegem")) {
        slot3 = true;
      }
      else if (gem3.dataSlot == "blue" && (gem3.className == "bluegem" || gem3.className == "purplegem" || gem3.className == "greengem")) {
        slot3 = true;
      }
      else if (gem3.dataSlot == "yellow" && (gem3.className == "yellowgem" || gem3.className == "orangegem" || gem3.className == "greengem")) {
        slot3 = true;
      }
      else
        slot3 = false;
      if (gem3.className == "redgem" || gem3.className == "orangegem" || gem3.className == "purplegem")
        red++;
      if (gem3.className == "bluegem" || gem3.className == "purplegem" || gem3.className == "greengem")
        blue++;
      if (gem3.className == "yellowgem" || gem3.className == "orangegem" || gem3.className == "greengem")
        yellow++;
    }
    
    if (slot1 * slot2 * slot3 == 1) {
      enchantTable[i].children[6].style.color = "green";
      enchantTable[i].children[6].style.textDecoration = "none";
      enchantTable[i].children[6].style.fontStyle = "normal";
      enchantTable[i].children[6].name = "activeBonus";
    }
    else {
      enchantTable[i].children[6].style.color = "red";
      enchantTable[i].children[6].style.textDecoration = "line-through";
      enchantTable[i].children[6].style.fontStyle = "italic";
      enchantTable[i].children[6].name = "notActiveBonus";
    }
  }
  if (arguments.length > 0)
    return "red: " + red + ", blue: " + blue + ", yellow: " + yellow;
}


