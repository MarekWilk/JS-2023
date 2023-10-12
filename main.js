   
function suma(){
    const l1 = parseFloat(document.querySelector("#liczba1").value) ||0
    const l2 = parseFloat(document.querySelector("#liczba2").value) ||0
    const l3 = parseFloat(document.querySelector("#liczba3").value) ||0
    const l4 = parseFloat(document.querySelector("#liczba4").value) ||0

    const sum = l1 + l2 + l3 +l4;
    
    document.querySelector("#suma").textContent = "Suma: "+ sum;
}
function srednia(){
    const l1 = parseFloat(document.querySelector("#liczba1").value)
    const l2 = parseFloat(document.querySelector("#liczba2").value)
    const l3 = parseFloat(document.querySelector("#liczba3").value)
    const l4 = parseFloat(document.querySelector("#liczba4").value)

    const srednia = (l1 + l2 + l3 +l4)/4;

    document.querySelector("#srednia").textContent = "Średnia: "+ srednia;
}
function min(){
    const l1 = parseFloat(document.querySelector("#liczba1").value)
    const l2 = parseFloat(document.querySelector("#liczba2").value)
    const l3 = parseFloat(document.querySelector("#liczba3").value)
    const l4 = parseFloat(document.querySelector("#liczba4").value)
    
    const min =  Math.min(l1,l2,l3,l4)

    document.querySelector("#min").textContent = "Min: "+ min;
}
function max(){
    const l1 = parseFloat(document.querySelector("#liczba1").value)
    const l2 = parseFloat(document.querySelector("#liczba2").value)
    const l3 = parseFloat(document.querySelector("#liczba3").value)
    const l4 = parseFloat(document.querySelector("#liczba4").value)
    
    const max = Math.max(l1,l2,l3,l4)

    document.querySelector("#max").textContent = "Max: "+ max;
}