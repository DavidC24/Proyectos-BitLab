function calculateTip() {
	var Cantidad=
	document.getElementById("Cantidad").value;
	var Calidad=
	document.getElementById("Calidad").value;
	var Gentetotal=
	document.getElementById("Gentetotal").value;
	if(Cantidad === "" || Calidad == 0) {
        return window.alert("Por favor introduce algún valor para ser usado por la calculadora");
        }
    if(Gentetotal === "" || Gentetotal <= 1) {
    Gentetotal = 1;
    document.getElementById("Cada").style.display='none';
    } 
    else {
    document.getElementById("Cada").style.display='block';
    }
    var total1=(Cantidad*Calidad)/Gentetotal; total1=Math.round(total1*100)/100;total1=total1.toFixed(2);
    var total2=parseFloat(Cantidad)+parseFloat(total1);Math.round(total2*100)/100;total2=total2.toFixed(2);
    document.getElementById("Propinatotal").style.display='block';
    document.getElementById("Total").style.display='block'
    document.getElementById("Todo").innerHTML=total2;
    document.getElementById("Paga").innerHTML=total1;
    }
    document.getElementById("Propinatotal").style.display="none";
    document.getElementById("Total").style.display="none";
    document.getElementById("Cada").style.display="none";
    document.getElementById("Calcular").onclick=function () { calculateTip(); };