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
