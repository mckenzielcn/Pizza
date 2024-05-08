window.onload = pageLoad;

function pageLoad() {
  $("p").onclick = myFunction;
  $("m").onclick = myFunction;
  $("o").onclick = myFunction;
  $("s").onclick = myFunction;
  var btn = $("btn");
  btn.onclick = submit;
  r1.onclick = update;
  r2.onclick = update;
  crust.onclick = update;
}

function myFunction() {
  $(total3).innerHTML = "";
  $(total4).innerHTML = "";
  var pcheckBox = $("p");
  var mcheckBox = $("m");
  var ocheckBox = $("o");
  var scheckBox = $("s");
  var top = 0;

  if (pcheckBox.checked == true) {
    $("pep").style.display = "block";
    top += 1.25;
  } else {
    $("pep").style.display = "none";
  }
  if (mcheckBox.checked == true) {
    $("mush").style.display = "block";
    top += 1.25;
  } else {
    $("mush").style.display = "none";
  }
  if (ocheckBox.checked == true) {
    $("ol").style.display = "block";
    top += 1.25;
  } else {
    $("ol").style.display = "none";
  }
  if (scheckBox.checked == true) {
    $("saus").style.display = "block";
    top += 1.25;
  } else {
    $("saus").style.display = "none";
  }
  $(total).innerHTML = top;
}

function update() {
  $(total3).innerHTML = "";
  $(total4).innerHTML = "";
  var bal = 0;
  var e = $("crust");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  if ($("r1").checked) {
    bal += 9.95;
  } else if ($("r2").checked) {
    bal += 12.95;
  }

  if (text == "Deep dish") {
    bal += 2;
  }
  $(total1).innerHTML = bal;
}
function submit() {
  var sum = 0;
  var toppings = "";
  var size = "";
  var e = $("crust");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  if ($("p").checked == true) {
    toppings += "pepperoni ";
  }
  if ($("m").checked == true) {
    toppings += "mushrooms ";
  }
  if ($("o").checked == true) {
    toppings += "olives ";
  }
  if ($("s").checked == true) {
    toppings += "sausage ";
  }
  if ($("r1").checked) {
    size = "Large";
  }
  if ($("r2").checked) {
    size = "X-Large";
  }

  if ($("r1").checked || $("r2").checked) {
    sum += parseFloat($(total1).innerHTML);
    sum += parseFloat($(total).innerHTML);
    if (toppings == "") {
      toppings = "no toppings";
    }

    $(total3).innerHTML = "Order made! Your total is $" + sum.toFixed(2);
    $(total4).innerHTML =
      size +
      " pizza with " +
      toppings +
      " and " +
      text.toLowerCase() +
      " crust";
  }
}
