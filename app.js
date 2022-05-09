
const getValueInput = () => {
        let inputValue = document.getElementById("domTextElement").value;
        document.body.style.backgroundColor = inputValue;

        if (inputValue == "rojo") {
                document.body.style.backgroundColor = "red";
        }
        if (inputValue == "azul") {
                document.body.style.backgroundColor = "blue";
        }
        if (inputValue == "amarillo") {
                document.body.style.backgroundColor = "yellow";
        }
        if (inputValue == "verde") {
                document.body.style.backgroundColor = "green";
        }

}
    
    function borrarColor() {
        document.getElementById("domTextElement").value = "";
        document.body.style.backgroundColor = "white";

}
