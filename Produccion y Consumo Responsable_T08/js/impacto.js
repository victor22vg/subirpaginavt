function calculateImpact() {
    const energy = parseFloat(document.getElementById('energy').value) || 0;
    const water = parseFloat(document.getElementById('water').value) || 0;
    
    // Calcula el puntaje de impacto ambiental
    const impactScore = (energy * 0.2) + (water * 0.05);
    localStorage.setItem("impactScore", impactScore);
    
    // Muestra el puntaje en pantalla
    document.getElementById('result').innerText = `Tu puntaje de impacto ambiental es: ${impactScore.toFixed(2)}`;
    
    // Evalúa si el puntaje es bueno o malo
    let evaluation = '';
    if (impactScore < 50) {
        evaluation = "¡Buen trabajo! Tu impacto ambiental es bajo.";
    } else if (impactScore < 100) {
        evaluation = "Tu impacto ambiental es moderado. Puedes reducirlo un poco más.";
    } else {
        evaluation = "Tu impacto ambiental es alto. Considera medidas para reducirlo.";
    }

    // Muestra la evaluación en pantalla
    document.getElementById('impactEvaluation').innerText = evaluation;
}
