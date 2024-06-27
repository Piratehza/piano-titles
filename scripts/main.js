// JavaScript pour le jeu Piano Tiles
// Exemple simple pour détecter les clics sur les tuiles
document.addEventListener('DOMContentLoaded', function() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.addEventListener('click', function() {
            playSound(tile.dataset.sound);
            tile.classList.add('active');
            setTimeout(() => tile.classList.remove('active'), 200);
        });
    });
});

function playSound(sound) {
    const audio = new Audio(`../assets/sounds/${sound}.mp3`);
    audio.play();
}
