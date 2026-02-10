const busca = document.getElementById("busca");
const cards = document.querySelectorAll(".card");

busca.addEventListener("input", () => {
  const texto = busca.value.toLowerCase();

  cards.forEach(card => {
    const nome = card.textContent.toLowerCase();

    if (nome.includes(texto)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
