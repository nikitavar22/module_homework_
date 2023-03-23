const button = document.querySelector("button");

button.addEventListener('click', () => {
    alert(`Ширина: ${window.screen.width}. Высота: ${window.screen.height}.`);
});