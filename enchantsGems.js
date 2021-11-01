function loadEnchants() {
  var cell;
  cell = document.getElementById("enchantHead");
  cell.innerHTML = "<select name='enchantSelect' id='enchantHeadSelection'>"
      + "<option value='SP: 22,hit: 14'>Glyph of Power</option>"
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
  
  normalHTML = ""
  + "<optgroup label='Red Gems'>"
  + "<option value='SP: 14'>Don Julio's Heart</option>"
  + "<option value='SP: 12'>Runed Ornate Ruby</option>"
  + "<option value='SP: 12'>Runed Crimson Spinel</option>"
  + "<option value='SP: 9'>Runed Living Ruby</option>"
  + "<option value='SP: 7'>Runed Blood Garnet</option>"
  + "</optgroup>"
  + "<optgroup label='Orange Gems'>"
  + "<option value='SP: 6,haste:5'>Reckless Pyrestone</option>"
  + "</optgroup>"
  + "<option value='SP: 0' selected>No Gem Equipped</option></select>";
  
  cellArray = document.getElementsByName('gemslot');
  for (i = 0; i<cellArray.length; i++) {
    cellArray[i].innerHTML = "<select name='gemselect'>" + normalHTML;
  }
  
}



/*
  <select name="cars" id="cars">
    <optgroup label="Swedish Cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="German Cars">
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </optgroup>
  </select>
*/

/*function clickDropdown(elem) {
  var menuList = document.getElementsByClassName("dropdown-content");
    for (i = 0; i<menuList.length; i++) {
      if (menuList[i].classList.contains('show')) {
    	menuList[i].classList.remove('show');
      }
    }
  elem.parentNode.children[1].classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  	var menuList = document.getElementsByClassName("dropdown-content");
    for (i = 0; i<menuList.length; i++) {
      if (menuList[i].classList.contains('show')) {
    	menuList[i].classList.remove('show');
      }
    }
  }
}*/
