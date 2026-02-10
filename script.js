const busca = document.getElementById("busca");
const cards = document.querySelectorAll(".card");

busca.addEventListener("keyup", () => {
  const texto = busca.value.toLowerCase();

  cards.forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(texto)
      ? "block"
      : "none";
  });
});
