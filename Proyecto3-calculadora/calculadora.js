const operacion = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

if (!operacion || isNaN(num1) || isNaN(num2)) {
    console.log(`
        🧮 Calculadora Node.js
            Uso: node calculadora.js [operacion] [numero1] [numero2]
            Operaciones disponibles: suma, resta, multiplicacion, division
            Ejemplo: node calculadora.js suma 5 3
            `);
            process.exit(1);
}

let resultado;

switch (operacion.toLowerCase()) {
    case 'suma':
        resultado = num1 + num2;
        console.log(`${num1} + ${num2} = ${resultado}`);
        break;
    
    case 'resta':
        resultado = num1 - num2;
        console.log(`${num1} - ${num2} = ${resultado}`);
        break;

    case 'multiplicacion':
        resultado = num1 * num2;
        console.log(`${num1} * ${num2} = ${resultado}`);
        break;

    case 'division':
        if (num2 === 0) {
            console.log('❌ Error: No se puede dividir por cero')
        } else {
            resultado = num1 / num2;
            console.log(`${num1} / ${num2} = ${resultado}`);
        }
        break;
    default:
        console.log('❌ Error: Operación no válida');
}