function obliczenia() {
    const input1 = document.querySelector("#liczba1");
    const input2 = document.querySelector("#liczba2");
    const input3 = document.querySelector("#liczba3");
    const input4 = document.querySelector("#liczba4");

    function aktualizujWyniki() {
        const l1 = parseFloat(input1.value) || 0;
        const l2 = parseFloat(input2.value) || 0;
        const l3 = parseFloat(input3.value) || 0;
        const l4 = parseFloat(input4.value) || 0;

        const suma = l1 + l2 + l3 + l4;
        const srednia = suma / 4;
        const min = Math.min(l1, l2, l3, l4);
        const max = Math.max(l1, l2, l3, l4);

        document.querySelector("#suma").textContent = "Suma: " + suma;
        document.querySelector("#srednia").textContent = "Średnia: " + srednia;
        document.querySelector("#min").textContent = "Min: " + min;
        document.querySelector("#max").textContent = "Max: " + max;
    }

    // Dodaj zdarzenia nasłuchujące na zmiany w polach wejściowych
    input1.addEventListener("input", aktualizujWyniki);
    input2.addEventListener("input", aktualizujWyniki);
    input3.addEventListener("input", aktualizujWyniki);
    input4.addEventListener("input", aktualizujWyniki);

    // Wywołaj funkcję na starcie, aby zainicjować wyniki
    aktualizujWyniki();
    
}
document.addEventListener("OnLoad", function() {obliczenia()});