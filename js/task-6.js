function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  let size = 30;
  const elements = Array.from({ length: amount }, () => {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    return box;
  });

  controls.boxes.append(...elements);
}

controls.createBtn.addEventListener('click', () => {
  const amount = Number(controls.input.value);
  if (amount < 1 || amount > 100) return;

  controls.boxes.innerHTML = '';
  createBoxes(amount);
  controls.input.value = '';
});

controls.destroyBtn.addEventListener('click', () => {
  controls.boxes.innerHTML = '';
});
