document.getElementById('invertButton').addEventListener('click', function() {
    // Obtener el valor del input
    let inputText = document.getElementById('inputText').value;
    
    // Invertir el string
    let reversedText = inputText.split('').reverse().join('');
    
    // Mostrar el resultado en el párrafo con id 'reversedText'
    document.getElementById('reversedText').textContent = reversedText;
});
