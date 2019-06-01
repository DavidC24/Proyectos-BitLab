$(document).ready(function(){
	$("button#Suma").click(function AgregarCosa(){
		$("ul#Tareas").append("<li id='Elemento'>" +
		"<input type='checkbox'>" +
		" " +
		$("#Insertar").val() +
		" " +
		"<button type='button' id='Resta' class='Menos'>" +
		"Eliminar" +
		"</button>" +
		"</li>")
        })
    $("ul#Tareas").on("click","#Resta",function(event){
    	$("button#Resta").click(function QuitarCosa(){
    	$("li#Elemento").click(function(){
    		$(this).remove();
    	})
    });
    });
    $("body").css({
    	background: "linear-gradient(#e00d0d,#291419)",
	    display: "flex",
	    justifyContent:"center",
	    fontFamily:"Calibri",
	    fontSize: "18px",
    })
    $("h1").css({
    	textTransform: "uppercase",
	    fontSize: "50px",
	    textAlign: "center",
    })
    $("form").css({
    	width: "500px",
	    height: "850px",
	    background: "white",
	    padding: "15px 20px",
	    boxSizing: "border-box",
	    boxShadow: "20px 20px 20px -8px #000",
	    borderRadius: "10px",
    })
    $(".Controles").css({
    	width: "80%",
    	margin: "auto",
    })
    $("input").css({
    	width: "100%",
        height: "30px",
        fontSize: "19px",
        paddingLeft: "5px",
        boxSizing: "border-box",
        marginBottom: "20px",
        border: "1px solid #57b00e",
    })
    $("button.Mas").css({
    	width: "100%",
        background: "white",
        fontSize: "15px",
    	border: "none",
    	height: "30px",
    	marginTop: "2px",
    	cursor: "pointer",
    	color: "white",
    	backgroundColor: "#57b00e",
    })
    $("ul#Tareas").css({
    	border: "2px solid skyblue",
		justifyContent:"center",
		paddingTop: "2px",
		paddingBottom: "5px"
    })
});