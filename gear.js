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
    }]
  };
  return gear
}
