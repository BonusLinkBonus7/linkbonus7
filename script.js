const busca = document.getElementById("busca");
const cards = document.querySelectorAll(".card");

busca.addEventListener("input", () => {
  const texto = busca.value.toLowerCase();

  cards.forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(texto)
      ? "block"
      : "none";
  });
});
#cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
}

.card {
  background: #111;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}


.card img { width: 80px; }
