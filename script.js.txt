body {
  background: #0b3d2e;
  color: white;
  font-family: Arial, sans-serif;
  padding: 20px;
}

h1 { text-align: center; }

#busca {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  margin-bottom: 20px;
}

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