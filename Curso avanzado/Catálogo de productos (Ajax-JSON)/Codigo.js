$(document).ready(function() {
  $("#Muestra").click(function() {
    MostrarObjetos();
  });
  $("body").css({
    padding: "50px",
    background: "url(cropped-1920-1080-1003656.png)",
    backgroundPosition: "center center",
    backgroundBackgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    justifyContent:"center",
    fontSize: "18px"
  })
  $("h1").css({
    fontSize: "72px",
    textShadow: "3px 3px black"
  })
  $("#Objetos").css({
    margin: "20px",
    padding: "40px",
    boxSizing: "border-box",
    boxShadow: "10px 10px 10px -8px #000",
    borderRadius: "10px",
    textShadow: "1px 1px black"
  })
  function MostrarObjetos() {
    $("#Muestra").hide("slow");
    $.ajax({
      url: "https://mini-shop-rg.herokuapp.com/products",
      type: "GET",
      dataType: "json",
      success: function(respuesta) {
        var TotalProductos = respuesta;
        console.log(respuesta);
        for (var i = 0; i < TotalProductos.length; i++) {
          var articulos = TotalProductos[i];
          $("#Objetos").append(`
            <div>
              <h2>${articulos.name}</h2>
              <h4>$ ${articulos.price}</h4>
              <h6>Existencias: ${articulos.stock}</h6>
              <p>${articulos.description}</p>
              <img src=${articulos.image}>
              </br>
              </br>
            </div>
          `)
        }
      },
      error: function(error) {
        alert("No se han podido mostrar los artículos");
      },
    });
  }
});
