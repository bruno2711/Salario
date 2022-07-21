function calc() {
  let val1 = parseFloat(document.getElementById("val1").value);
  let val2 = parseFloat(document.getElementById("val2").value);
  let val3 = parseFloat(document.getElementById("val3").value);
  let val4 = parseFloat(document.getElementById("val4").value);
  let media, total;
  let real = Intl.NumberFormat("en-US");

  media = (val1 + val2 + val3 + val4) / 4;
  document.getElementById("media").innerHTML =
    "R$" + real.format(parseFloat(media).toFixed(2));
}

function clear() {}
