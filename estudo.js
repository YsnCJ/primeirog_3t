function total(){
    let c = document.getElementById("capital").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    let m = 0;
    for(let i = 1; m <= t; i++){
        m = c * (1 + (j/100));
        document.write("Valor no mês: " + 1 = " + m + "<br>);
        c = m;
    }
    
    document.write("Montante: " + m);
}
