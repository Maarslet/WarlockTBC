function talentFunc(click,element) {
  if (arguments.length == 0) {
    var affTree = document.getElementById("afflictionTree").children[0].children;
    var demTree = document.getElementById("demonologyTree").children[0].children;
    var desTree = document.getElementById("destructionTree").children[0].children;
    for (var q=1; q<=3; q++) {
      if (q==1)
        var tree = affTree;
      else if (q==2)
        var tree = demTree;
      else if (q==3)
        var tree = desTree;

      for (var i=1; i<tree.length; i++) {
        for (var j=0; j<4; j++) {
          try {
            var element = tree[i].children[j].children[0].children[0];
            var text = tree[i].children[j].children[0].children[0].children[1];
            var talent = tree[i].children[j].children[0].children[0].children[0];
          }
          catch(err) {}
          if (element !== undefined && text !== undefined && talent !== undefined) {
            if (talent.id == "talentAmpCurse" || talent.id == "talentSiphon" || talent.id == "talentExhaust" || talent.id == "talentDarkPact" || talent.id == "talentUnstable" || talent.id == "talentFelDomination" || talent.id == "talentDemonicSacrifice" || talent.id == "talentSoulLink" || talent.id == "talentSummonFelguard" || talent.id == "talentShadowburn" || talent.id == "talentRuin" || talent.id == "talentConflagrate" || talent.id == "talentShadowfury")
              var max = 1;
            else if (talent.id == "talentWeakness" || talent.id == "talentDrainSoul" || talent.id == "talentLifeTap" || talent.id == "talentSoulSiphon" || talent.id == "talentAgony" || talent.id == "talentGrimReach" || talent.id == "talentNightfall" || talent.id == "talentHowlTerror" || talent.id == "talentHealthstone" || talent.id == "talentHealthFunnel" || talent.id == "talentMasterSummon" || talent.id == "talentEnslaveDemon" || talent.id == "talentFirestone" || talent.id == "talentImpFirebolt" || talent.id == "talentImpLash" || talent.id == "talentIntensity" || talent.id == "talentDestructiveReach" || talent.id == "talentPyroclasm")
              var max = 2;
            else if (talent.id == "talentEmpCorr" || talent.id == "talentMalediction" || talent.id == "talentImpImp" || talent.id == "talentImpVoid" || talent.id == "talentFelIntellect" || talent.id == "talentImpSuccubus" || talent.id == "talentFelStamina" || talent.id == "talentFelArmor" || talent.id == "talentManaFeed" || talent.id == "talentDemonicResilience" || talent.id == "talentDemonicKnowledge" || talent.id == "talentSearingPain" || talent.id == "talentNetherProt" || talent.id == "talentBacklash" || talent.id == "talentSoulLeech")
              var max = 3;
            else
              var max = 5;

            if (text.innerHTML > 0 && text.innerHTML < max) {
              element.style.filter = "grayscale(0%)";
              element.style.color = "green";
              talent.style.border = "2px solid green";
            }  
            else if (text.innerHTML >= max) {
              element.style.filter = "grayscale(0%)";
              element.style.color = "orange";
              talent.style.border = "2px solid orange";
            }
            else if (text.innerHTML <= 0) {
              element.style.filter = "grayscale(100%)";
              element.style.color = "orange";
              talent.style.border = "2px solid orange";
            }
          }
        }
      }
    }
  }
  else {
    var text = element.children[1];
    var talent = element.children[0];
    if (talent.id == "talentAmpCurse" || talent.id == "talentSiphon" || talent.id == "talentExhaust" || talent.id == "talentDarkPact" || talent.id == "talentUnstable" || talent.id == "talentFelDomination" || talent.id == "talentDemonicSacrifice" || talent.id == "talentSoulLink" || talent.id == "talentSummonFelguard" || talent.id == "talentShadowburn" || talent.id == "talentRuin" || talent.id == "talentConflagrate" || talent.id == "talentShadowfury")
      var max = 1;
    else if (talent.id == "talentWeakness" || talent.id == "talentDrainSoul" || talent.id == "talentLifeTap" || talent.id == "talentSoulSiphon" || talent.id == "talentAgony" || talent.id == "talentGrimReach" || talent.id == "talentNightfall" || talent.id == "talentHowlTerror" || talent.id == "talentHealthstone" || talent.id == "talentHealthFunnel" || talent.id == "talentMasterSummon" || talent.id == "talentEnslaveDemon" || talent.id == "talentFirestone" || talent.id == "talentImpFirebolt" || talent.id == "talentImpLash" || talent.id == "talentIntensity" || talent.id == "talentDestructiveReach" || talent.id == "talentPyroclasm")
      var max = 2;
    else if (talent.id == "talentEmpCorr" || talent.id == "talentMalediction" || talent.id == "talentImpImp" || talent.id == "talentImpVoid" || talent.id == "talentFelIntellect" || talent.id == "talentImpSuccubus" || talent.id == "talentFelStamina" || talent.id == "talentFelArmor" || talent.id == "talentManaFeed" || talent.id == "talentDemonicResilience" || talent.id == "talentDemonicKnowledge" || talent.id == "talentSearingPain" || talent.id == "talentNetherProt" || talent.id == "talentBacklash" || talent.id == "talentSoulLeech")
      var max = 3;
    else
      var max = 5;

    if (click == "left") {
      text.innerHTML = Number(text.innerHTML) + 1;}
    else if (click == "right") {
      text.innerHTML = Number(text.innerHTML) - 1;}

    if (text.innerHTML > 0 && text.innerHTML < max) {
      element.style.filter = "grayscale(0%)";
      element.style.color = "green";
      talent.style.border = "2px solid green";
    }  
    else if (text.innerHTML >= max) {
      element.style.filter = "grayscale(0%)";
      element.style.color = "orange";
      talent.style.border = "2px solid orange";
      text.innerHTML = max;
    }
    else if (text.innerHTML <= 0) {
      element.style.filter = "grayscale(100%)";
      element.style.color = "orange";
      talent.style.border = "2px solid orange";
      text.innerHTML = 0;
    }
  }
  countTalents()
}

function setTalents(spec) {
  resetTalents();
  if (spec == "Destruction") {
    document.getElementById("talentHealthstone").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentStamina").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentFelIntellect").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentImpVoid").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentFelDomination").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentMasterSummon").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentFelStamina").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentFelArmor").parentNode.children[1].innerHTML = 3;

    document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentBane").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentDevastation").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentShadowburn").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDestructiveReach").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentIntensity").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentRuin").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentImmolate").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentBacklash").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentConflagrate").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentShadowFlame").parentNode.children[1].innerHTML = 5;
  }
  else if (spec == "Catabolt") {
    document.getElementById("talentHealthstone").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentStamina").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentFelIntellect").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentImpVoid").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentFelDomination").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentMasterSummon").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentFelStamina").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentFelArmor").parentNode.children[1].innerHTML = 3;

    document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentCataclysm").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentBane").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentDevastation").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentShadowburn").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDestructiveReach").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentIntensity").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentRuin").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentBacklash").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentNetherProt").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentSoulLeech").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentShadowFlame").parentNode.children[1].innerHTML = 5;
  }
  else if (spec == "Affliction") {
    document.getElementById("talentCorruption").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentDrainSoul").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentLifeTap").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentSoulSiphon").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentFelConc").parentNode.children[1].innerHTML = 4;
    document.getElementById("talentGrimReach").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentNightfall").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentEmpCorr").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentShadowEmbrace").parentNode.children[1].innerHTML = 4;
    document.getElementById("talentSiphon").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentContagion").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentMalediction").parentNode.children[1].innerHTML = 3;

    document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentBane").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentDevastation").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentShadowburn").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDestructiveReach").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentIntensity").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentRuin").parentNode.children[1].innerHTML = 1;
  }
  else if (spec == "Demonology") {
    document.getElementById("talentCorruption").parentNode.children[1].innerHTML = 1;

    document.getElementById("talentHealthstone").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentStamina").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentFelIntellect").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentFelDomination").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentMasterSummon").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentFelStamina").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentFelArmor").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentUnholyPower").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentManaFeed").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentMasterDemon").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentSoulLink").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDemonicKnowledge").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentDemonicTactics").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentSummonFelguard").parentNode.children[1].innerHTML = 1;
    
    document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentBane").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentDevastation").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentShadowburn").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDestructiveReach").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentIntensity").parentNode.children[1].innerHTML = 1;
  }
  else if (spec == "Destro/NF") {
    document.getElementById("talentSuppression").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentCorruption").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentDrainSoul").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentLifeTap").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentSoulSiphon").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentAgony").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentAmpCurse").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentNightfall").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentEmpCorr").parentNode.children[1].innerHTML = 3;

    document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentCataclysm").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentBane").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentDevastation").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentShadowburn").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDestructiveReach").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentIntensity").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentRuin").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentBacklash").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentNetherProt").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentSoulLeech").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentShadowFlame").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentShadowfury").parentNode.children[1].innerHTML = 1;
  }
  else if (spec == "SL/SL") {
    document.getElementById("talentSuppression").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentCorruption").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentLifeTap").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentSoulSiphon").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentAgony").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentFelConc").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentAmpCurse").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentGrimReach").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentNightfall").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentEmpCorr").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentShadowEmbrace").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentSiphon").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentExhaust").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML = 5;
    
    document.getElementById("talentHealthstone").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentStamina").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentHealthFunnel").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentFelIntellect").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentFelDomination").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentFelStamina").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentFelArmor").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentMasterSummon").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentUnholyPower").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentManaFeed").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentMasterDemon").parentNode.children[1].innerHTML = 4;
    document.getElementById("talentSoulLink").parentNode.children[1].innerHTML = 1;
  }
  talentFunc();
}

function resetTalents() {
  for (var i=0; i<document.getElementsByClassName('wrapper').length; i++) {
    var currentID = document.getElementsByClassName('wrapper')[i].children[0].id;
    document.getElementById(currentID).parentNode.children[1].innerHTML = 0;
  }
  talentFunc();
}

function countTalents() {
  var pointCount = 0;
  for (var i=0; i<document.getElementsByClassName('wrapper').length; i++) {
    var currentID = document.getElementsByClassName('wrapper')[i].children[0].id;
    pointCount += Number(document.getElementById(currentID).parentNode.children[1].innerHTML);
  }
  if (pointCount < 61)
    var color = "green";
  else if (pointCount == 61)
    var color = "orange";
  else if (pointCount > 61)
    var color = "red";
  document.getElementById("totalTalentPoints").innerHTML = "Total Talent Points: <span style=color:" + color + ">" + pointCount + "</span>";
}
