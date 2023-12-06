const getProducts = async () => {
  try {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value.trim();

    if (!query) {
      console.log("Please enter a search query.");
      return;
    }

    const apiUrl = `https://dummyjson.com/products/search?q=${query}`;

    const response = await axios.get(apiUrl);
    console.log("Products:", response.data);
  } catch (error) {
    console.log(error);
  }
};


            