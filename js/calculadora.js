function calcularEnergia() {
  const massa = parseFloat(document.getElementById("massa").value);
  const velocidadeLuz = parseFloat(document.getElementById("velocidadeLuz").value);

  if (isNaN(massa) || isNaN(velocidadeLuz)) {
    document.getElementById("resultado").textContent = "Por favor, insira valores válidos.";
    document.getElementById("formula").textContent = "";
  } else {
    const energia = massa * Math.pow(velocidadeLuz, 2);
    document.getElementById("resultado").textContent = `Energia (E) = ${energia.toFixed(2)}`;
    document.getElementById("formula").textContent = "Fórmula: E = m * c²";
  }
}