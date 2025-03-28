const quantity = document.querySelectorAll('.item');
console.log('Кількість категорій:', quantity.length);

quantity.forEach((quant) => {
  const title = quant.querySelector('h2').textContent;
  const lengthCategory = quant.querySelectorAll('ul li').length;

  console.log(`"Категорія:", ${title}`);
  console.log(`"Кількість елементів:", ${lengthCategory}`);
});
