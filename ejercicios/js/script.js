console.log('Working')

window.addEventListener("load", () => {
    loadData();
  });

const loadData = () => {
    fetch("http://localhost:4000/random")
      .then((response) => response.json())
      .then((randomJoke) => {
        const container = document.querySelector("#jkList");
        container.innerHTML = `<h3>${randomJoke.joke}</h3>`;
      });
  };