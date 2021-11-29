<script>
var horizontal, columna, mar = new Array(10);

for (var i = 0; i < 10; i++) {
  mar[i] = new Array(10);
}

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    mar[i][j] = 0;
  }
}

horizontal = parseInt(prompt("Ingrese la cantidad de barcos horizontales que desea colocar"));

if( horizontal >= 1 && horizontal <= 10){
    columna = Math.floor(Math.random() * 6);

    for (var i = 0; i < horizontal; i++) {
      mar[columna][i] = 1;
    }

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        console.log(mar[i][j]);
      }
    }

}
else{
    alert("Ingrese un numero entre 1 y 10");
}
</script>
