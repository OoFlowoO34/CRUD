var aOfPersonnes = [];
aOfPersonnes[0] = [];
aOfPersonnes[0]["javascript"] =
  "document.querySelectorAll(<span style='color:green;''>'.my #awesome selector'</span>);";
aOfPersonnes[0]["jquery"] =
  "$(<span style='color:green;''>'.my #awesome selector'</span>);";
aOfPersonnes[0]["utilite"] = "Find Elements";
aOfPersonnes[0]["frequence"] = "++";
aOfPersonnes[0]["btn_js"] =
  "<a href='https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector' target='blank'><button class='buttonJS'>JS</button></a>" +
  " " +
  "<a href='https://api.jquery.com/id-selector/' target='blank'><button class='buttonJS'>JQ</button></a>";
aOfPersonnes[0]["btn_jq"] = "Guillian@afpa.fr";

aOfPersonnes[1] = [];
aOfPersonnes[1]["javascript"] = "el.innerHTML";
aOfPersonnes[1]["jquery"] = "$(el).html();";
aOfPersonnes[1]["utilite"] = "Get HTML";
aOfPersonnes[1]["frequence"] = "++";
aOfPersonnes[1]["btn_js"] =
  "<a href='https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML' target='blank'><button class='buttonJS'>JS</button></a>" +
  " " +
  "<a href='https://www.w3schools.com/jquery/html_html.asp' target='blank'><button class='buttonJS'>JQ</button></a>";
aOfPersonnes[1]["btn_jq"] = "Julie@afpa.fr";

aOfPersonnes[2] = [];
aOfPersonnes[2]["javascript"] = "el.outerHTML";
aOfPersonnes[2]["jquery"] = "$(el).prop('outerHTML');";
aOfPersonnes[2]["utilite"] = "Get Outer HTML";
aOfPersonnes[2]["frequence"] = "++";
aOfPersonnes[2]["btn_js"] =
  "<a href='https://developer.mozilla.org/fr/docs/Web/API/Element/outerHTML' target='blank'><button class='buttonJS'>JS</button></a>" +
  " " +
  "<a href='https://www.techiedelight.com/get-outerhtml-element-javascript/' target='blank'><button class='buttonJS'>JQ</button></a>";
aOfPersonnes[2]["btn_jq"] = "Aurelien@afpa.fr";

aOfPersonnes[3] = [];
aOfPersonnes[3]["javascript"] = "el.textContent";
aOfPersonnes[3]["jquery"] = "$(el).text();";
aOfPersonnes[3]["utilite"] = "Get Text";
aOfPersonnes[3]["frequence"] = "";
aOfPersonnes[3]["btn_js"] =
  "<a href='https://developer.mozilla.org/fr/docs/Web/API/Node/textContent' target='blank'><button class='buttonJS'>JS</button></a>" +
  " " +
  "<a href='https://www.w3schools.com/jquery/html_text.asp' target='blank'><button class='buttonJS'>JQ</button></a>";
aOfPersonnes[3]["btn_jq"] = "Aurelien@afpa.fr";

aOfPersonnes[4] = [];
aOfPersonnes[4]["javascript"] = "el.setAttribute('tabindex', 3);";
aOfPersonnes[4]["jquery"] = "$(el).attr('tabindex', 3);";
aOfPersonnes[4]["utilite"] = "Set Attributes";
aOfPersonnes[4]["frequence"] = "+";
aOfPersonnes[4]["btn_js"] =
  "<a href='https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute' target='blank'><button class='buttonJS'>JS</button></a>" +
  " " +
  "<a href='https://www.w3schools.com/jquery/html_attr.asp' target='blank'><button class='buttonJS'>JQ</button></a>";
aOfPersonnes[4]["btn_jq"] = "Jacques@afpa.fr";

aOfPersonnes[5] = [];
aOfPersonnes[5]["javascript"] = "el.removeAttribute('tabindex');";
aOfPersonnes[5]["jquery"] = "$(el).removeAttr('tabindex');";
aOfPersonnes[5]["utilite"] = "Remove Attributes";
aOfPersonnes[5]["frequence"] = "+";
aOfPersonnes[5]["btn_js"] =
  "<a href='https://developer.mozilla.org/fr/docs/Web/API/Element/removeAttribute' target='blank'><button class='buttonJS'>JS</button></a>" +
  " " +
  "<a href='https://www.w3schools.com/jquery/html_removeattr.asp' target='blank'><button class='buttonJS'>JQ</button></a>";
aOfPersonnes[5]["btn_jq"] = "JiJou@afpa.fr";

/*let get_trier_javascript = document.gebtn_jsementById("trier_javascript");
get_trier_javascript.addEventListener("click", trier_javascript);

function trier_javascript() {
  get_trier_javascript.setAttribute;
}*/

function constructTable() {
  var i;
  frequence_plusplus_boolean = false;
  frequence_plus_boolean = false;
  constructThead();
  sHTML += "<tbody>";
  let get_toggle_pluplus = $("toggle_plusplus").val();
  for (i = 0; i < aOfPersonnes.length; i++) {
    j = i + 1;
    sHTML += `<tr>`;
    sHTML += "<td>" + aOfPersonnes[i]["javascript"] + "</td>";
    sHTML += "<td>" + aOfPersonnes[i]["jquery"] + "</td>";
    sHTML += "<td>" + aOfPersonnes[i]["utilite"] + "</td>";
    sHTML += "<td>" + aOfPersonnes[i]["frequence"] + "</td>";
    // prettier-ignore
    sHTML +="<td onClick=`linkToExplanation("+i+")`>" + aOfPersonnes[i]["btn_js"]  +"</td>";
    sHTML +=
      '<td onClick="editPersonne(' +
      i +
      ')"><button class="buttonJS">Editer</button></td>';
    sHTML +=
      '<td onClick="supprimPersonne(' +
      i +
      ' )" ><button class="buttonJS">Supprimer</button></td>"';
    sHTML += "</tr>";
  }

  sHTML += "</tbody>";
  $("#table_personnes").html(sHTML);
}

function constructThead() {
  sHTML = "";
  sHTML += "<thead class='table_tittle'>"; // HEAD
  sHTML += "<tr>";
  sHTML += "<td>Javascript</td>";
  sHTML += "<td>JQuery</td>";
  sHTML += "<td>Utilité</td>";
  sHTML += "<td>Frequence</td>";
  sHTML += "<td>Explication</td>";
  sHTML += "<td>Editer</td>";
  sHTML += "<td>Supprimer</td>";
  sHTML += "</tr>";
  sHTML += "</thead>"; // Fin HEAD
  $("#table_personnes").html(sHTML);
}

function constructBody(freq1, freq2) {
  var i;
  sHTML += "<tbody>";
  for (i = 0; i < aOfPersonnes.length; i++) {
    if (
      (aOfPersonnes[i]["frequence"] == freq1) |
      (aOfPersonnes[i]["frequence"] == freq2)
    ) {
      console.log(freq1);
      sHTML += `<tr>`;
      sHTML += "<td>" + aOfPersonnes[i]["javascript"] + "</td>";
      sHTML += "<td>" + aOfPersonnes[i]["jquery"] + "</td>";
      sHTML += "<td>" + aOfPersonnes[i]["utilite"] + "</td>";
      sHTML += "<td>" + aOfPersonnes[i]["frequence"] + "</td>";
      // prettier-ignore
      sHTML +="<td onClick=`linkToExplanation("+i+")`>" + aOfPersonnes[i]["btn_js"]  +"</td>";
      sHTML +=
        '<td onClick="editPersonne(' +
        i +
        ')"><button class="buttonJS">Editer</button></td>';
      sHTML +=
        '<td onClick="supprimPersonne(' +
        i +
        ' )" ><button class="buttonJS">Supprimer</button></td>"';
      sHTML += "</tr>";

      $("#table_personnes").html(sHTML);
    }
  }
  sHTML += "</tbody>";
}

let frequence_plusplus_boolean = false;
let frequence_plus_boolean = false;

function constructTable_plusplus() {
  sHTML = "";
  if (
    (frequence_plusplus_boolean == false) &
    (frequence_plus_boolean == false)
  ) {
    frequence_plusplus_boolean = true;
    constructThead();
    let freq1 = "++";
    let freq2 = "++";
    constructBody(freq1, freq2);
  } else if (
    (frequence_plusplus_boolean == false) &
    (frequence_plus_boolean == true)
  ) {
    frequence_plusplus_boolean = true;
    constructThead();
    let freq1 = "++";
    let freq2 = "+";
    constructBody(freq1, freq2);
  } else if (
    (frequence_plusplus_boolean == true) &
    (frequence_plus_boolean == true)
  ) {
    frequence_plusplus_boolean = false;
    constructThead();
    let freq1 = "+";
    let freq2 = "+";
    constructBody(freq1, freq2);
  } else if (
    (frequence_plusplus_boolean == true) &
    (frequence_plus_boolean == false)
  ) {
    frequence_plusplus_boolean = false;
    constructThead();
    constructTable();
    constructBody(freq1, freq2);
  } else {
    constructTable();
  }
}

function constructTable_plus() {
  sHTML = "";
  if (
    (frequence_plus_boolean == false) &
    (frequence_plusplus_boolean == false)
  ) {
    frequence_plus_boolean = true;
    constructThead();
    let freq1 = "+";
    let freq2 = "+";
    constructBody(freq1, freq2);
  } else if (
    (frequence_plus_boolean == false) &
    (frequence_plusplus_boolean == true)
  ) {
    frequence_plus_boolean = true;
    constructThead();
    let freq1 = "+";
    let freq2 = "++";
    constructBody(freq1, freq2);
  } else if (
    (frequence_plus_boolean == true) &
    (frequence_plusplus_boolean == true)
  ) {
    frequence_plus_boolean = false;
    constructThead();
    let freq1 = "++";
    let freq2 = "++";
    constructBody(freq1, freq2);
  } else {
    constructTable();
  }
}

function ajoutPersonne() {
  //let btn_js_val = $(#btn_jsephone).val();
  var iLongueur = aOfPersonnes.length;
  aOfPersonnes[iLongueur] = [];
  aOfPersonnes[iLongueur]["javascript"] = $("#javascript").val();
  aOfPersonnes[iLongueur]["jquery"] = $("#jquery").val();
  aOfPersonnes[iLongueur]["utilite"] = $("#utilite").val();
  //prettier-ignore
  aOfPersonnes[iLongueur]["btn_js"] ="<a href=" + $("#input_js").val() + " target='blank'><button class='buttonJS'>JS</button></a>"
  + " " + "<a href=" + $("#input_jq").val() + " target='blank'><button class='buttonJS'>JQ</button></a>" ;
  //prettier-ignore
  //aOfPersonnes[iLongueur]["btn_jq"] = "<a href=" + $("#input_jq").val() + " target='blank'><button class='buttonJS'>JS</button></a>";
  constructTable();
}

function majPersonne() {}

function supprimPersonne(i) {
  /*
  console.log(event.target.id);
  let supr = parseInt(event.target.id);
  console.log(supr);
  */
  enleves = aOfPersonnes.splice(i, 1);
  //console.log(enleves);
  constructTable();
}
//}

//function linkToExplanation(i) {}

var iIndiceEditionEncours;
function editPersonne(iIndiceEdit) {
  let getbtn_modifier = $("#btn_modifier");
  getbtn_modifier.removeClass("hide");
  getbtn_modifier.attr("class", "btn_action");

  let getbtn_annuler = $("#btn_annuler");
  getbtn_annuler.removeClass("hide");
  getbtn_annuler.attr("class", "btn_save");

  alert("iIndiceEdit = " + iIndiceEdit);
  iIndiceEditionEncours = iIndiceEdit;
  $("#javascript").val(aOfPersonnes[iIndiceEdit]["javascript"]);
  $("#jquery").val(aOfPersonnes[iIndiceEdit]["jquery"]);
  $("#utilite").val(aOfPersonnes[iIndiceEdit]["utilite"]);
  $("#btn_jsephone").val(aOfPersonnes[iIndiceEdit]["btn_js"]);
  $("#ebtn_jq").val(aOfPersonnes[iIndiceEdit]["btn_jq"]);

  getbtn_modifier.click(function (e) {
    aOfPersonnes[iIndiceEdit] = [];
    aOfPersonnes[iIndiceEdit]["javascript"] = $("#javascript").val();
    aOfPersonnes[iIndiceEdit]["jquery"] = $("#jquery").val();
    aOfPersonnes[iIndiceEdit]["utilite"] = $("#utilite").val();
    aOfPersonnes[iIndiceEdit]["btn_js"] = $("#btn_jsephone").val();
    aOfPersonnes[iIndiceEdit]["btn_jq"] = $("#ebtn_jq").val();
    constructTable();
  });
  getbtn_annuler.click(function (e) {
    $("#javascript").val("");
    $("#jquery").val("");
    $("#utilite").val("");
    $("#btn_jsephone").val("");
    $("#ebtn_jq").val("");

    let getbtn_modifier = $("#btn_modifier");
    getbtn_modifier.attr("class", "hide");

    let getbtn_annuler = $("#btn_annuler");
    getbtn_annuler.attr("class", "hide");
  });
}

// CONFIGURATION DATATABLE

const configuration = {
  stateSave: false,
  order: [[1, "asc"]],
  pagingType: "simple_numbers",
  searching: true,
  lengthMenu: [
    [10, 25, 50, 100, -1],
    ["Dix", "Vingt cinq", "Cinquante", "Cent", "Ze total stp"],
  ],
  language: {
    info: "Utilisateurs _START_ à _END_ sur _TOTAL_ sélectionnées",
    emptyTable: "Aucun utilisateur",
    lengthMenu: "_MENU_ Utilisateurs par page",
    search: "Rechercher : ",
    zeroRecords: "Aucun résultat de recherche",
    paginate: {
      previous: "Précédent",
      next: "Suivant",
    },
    sInfoFiltered: "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
    sInfoEmpty: "Utilisateurs 0 à 0 sur 0 sélectionnée",
  },
  columns: [
    {
      orderable: true,
    },
    {
      orderable: true,
    },
    {
      orderable: true,
    },
    {
      orderable: true,
    },
    {
      orderable: true,
    },
    {
      orderable: false,
    },
    {
      orderable: false,
    },
  ],
  retrieve: true,
};

var tables;
$(document).ready(function () {
  constructTable();
  // INIT DATATABLE
  tables = $("#table_personnes").DataTable(configuration);
});
