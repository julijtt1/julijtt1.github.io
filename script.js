function no() {
    let siButton = document.getElementById('si');
    let noButton = document.getElementById('no');

    // Obtener tamaño actual
    let widthSi = siButton.offsetWidth || 50;
    let heightSi = siButton.offsetHeight || 50;

    // Aumentar tamaño del botón "Sí"
    let newWidthSi = widthSi * 1.5; // Crece un 50% en cada clic
    let newHeightSi = heightSi * 1.5;
    siButton.style.width = newWidthSi + 'px';
    siButton.style.height = newHeightSi + 'px';

    // Aumentar el tamaño de fuente
    let fontSizeSi = parseInt(window.getComputedStyle(siButton).fontSize) || 16;
    siButton.style.fontSize = (fontSizeSi * 1.5) + 'px';

    // 🔹 Si el botón crece mucho, usar position absolute
    if (newHeightSi > 200) { // Si la altura supera 150px
        siButton.style.position = "absolute";
        siButton.style.top = "30%"; // Mover hacia arriba
        siButton.style.left = "50%"; // Centrar
        siButton.style.transform = "translateX(-50%)";
    }

    // 🔻 Reducir el tamaño del botón "No"
    let widthNo = noButton.offsetWidth || 50;
    let heightNo = noButton.offsetHeight || 50;
    let newWidthNo = Math.max(10, widthNo * 0.8); // Mínimo 10px de ancho
    let newHeightNo = Math.max(10, heightNo * 0.8);

    noButton.style.width = newWidthNo + 'px';
    noButton.style.height = newHeightNo + 'px';

    // Reducir fuente del botón "No"
    let fontSizeNo = parseInt(window.getComputedStyle(noButton).fontSize) || 16;
    noButton.style.fontSize = Math.max(8, fontSizeNo * 0.8) + 'px';
}



function getSizeByText(size) {
    return parseInt(size.replace('px', ''), 10);
}


function si() {
    let siButton = document.getElementById('si');
    let noButton = document.getElementById('no');
    siButton.style.display = 'none';
    noButton.style.display = 'none';
    let titulo = document.getElementById('titulo');
    titulo.innerText = '¡¡LO SABÍA!!'
    let footer = document.getElementById('footer');
    footer.innerText = 'TE AMO MI BEBESITA'
    let imagen = document.getElementById('imagen');
    imagen.src = 'https://i.pinimg.com/originals/88/14/9b/88149b0400750578f4d07d9bc3fb0fee.gif'
}

