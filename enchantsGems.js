function loadEnchants() {
  //Head Enchant
  var cell = document.getElementById("enchantHead");
  cell.innerHTML = "
    <select name="enchants" id="enchantHeadSelection">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>";
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
