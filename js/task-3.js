const inp = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inp.addEventListener("input", () => {
  const trimmOf = inp.value.trim();
  output.textContent = trimmOf || "Anonymous";
});