document.addEventListener("DOMContentLoaded", e=>{
    const form = document.querySelector("#frmestadistica");
    form.addEventListener("submit", event=>{
        event.preventDefault();
        
        var osc = document.getElementById("select").value;  

        let de = document.querySelector("#cboDeMonedas").value,
            a = document.querySelector("#cboAMonedas").value,
            cantidad = document.querySelector("#txtdatos").value,
            $res = document.querySelector("#lblrespu");

        if (osc == "Moneda") {
            let monedas = {
            'dolar': 1,
            'euro': 0.92,
            'quetzal': 7.63,
            'lempira': 24.86,
            'cordoba': 34.20
        };
        $res.innerHTML = `Respuesta: ${monedas[a] / monedas[de] * cantidad}`;
        }
        else if (osc == "Longitud") {
            let longitudd ={
                'Metro':1,
                'Centimetro':0.01,
                'Kilometro':1000,
                'Millas': 1609
        };
        $res.innerHTML = `Respuesta: ${longitudd[a] / longitudd[de] * cantidad}`;
        }
        
        
    });
});
