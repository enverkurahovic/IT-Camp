//
//
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json())
  .then((data) => console.log(data.weight))
  .catch((error) => console.error(error));

async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemon").value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const img = document.getElementById("pokemonSprite");

    img.src = pokemonSprite;
    img.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
