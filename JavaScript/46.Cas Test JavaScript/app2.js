const fetchQuotes3 = async () => {
  try {
    const input = document.getElementById("search");
    const response = await fetch(
      `https://dummyjson.com/products${input.value}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
