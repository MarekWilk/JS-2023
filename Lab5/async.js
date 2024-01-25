function asyncAdd(a, b) {
    return new Promise(resolve => {
        setTimeout(() => resolve(a + b), 100);
    });
}

// Funkcja dodająca listę liczb wykorzystująca asyncAdd
async function sumNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = await asyncAdd(sum, number);
    }
    return sum;
}

// Funkcja mierząca czas wykonania
async function measurePerformance() {
    const numbers = Array.from({length: 100}, (_, i) => i + 1); // Lista 100 liczb

    const startTime = performance.now();
    const result = await sumNumbers(numbers);
    const endTime = performance.now();

    const output = `Wynik: ${result}, Czas wykonania: ${(endTime - startTime).toFixed(2)} ms, Liczba operacji asynchronicznych: ${numbers.length}`;
    document.getElementById('output').textContent = output;
}
