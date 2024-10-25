const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");


let mapedKeys = [];
let audio = new Audio("./src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");   
    }, 150);
   
//createConfettiEffect(); // Dispara o efeito festivo de confetes
triggerNewYearEffect(); // Dispara o efeito de réveillon
};

// Função para iniciar o efeito de réveillon
const triggerNewYearEffect = () => {
    startFireworks(); // Ativa os fogos de artifício
    startFlashingLights(); // Ativa luzes piscando ao fundo
};

// Função para fogos de artifício
const startFireworks = () => {
    const fireworksContainer = document.createElement("div");
    fireworksContainer.classList.add("fireworks-container");

    for (let i = 0; i < 10; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.animationDelay = `${Math.random() * 2}s`;
        fireworksContainer.appendChild(firework);
    }

    document.body.appendChild(fireworksContainer);

    setTimeout(() => {
        fireworksContainer.remove();
    }, 4000);
};

// Função para luzes piscando
const startFlashingLights = () => {
    const lightsOverlay = document.createElement("div");
    lightsOverlay.classList.add("newyear-lights-overlay");
    document.body.appendChild(lightsOverlay);

    setTimeout(() => {
        lightsOverlay.remove();
    }, 3000);
};

// Evento de clique para tocar o som da tecla
pianoKeys.forEach((key) => {
    key.addEventListener("click", () => 
    playTune(key.dataset.key));

    mapedKeys.push(key.dataset.key);
});

// Evento de tecla para tocar o som da tecla
document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
playTune(e.key);
    }
});

// Controla o volume do áudio
const handleVolume = (e) => {
    audio.volume = e.target.value;
    
}

// Mostra ou oculta as teclas
const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys);