console.log('Working')

window.addEventListener("load", () => {
    loadData();
  });

const loadData = () => {
    fetch("http://localhost:5500/random")
      .then((response) => response.json())
      .then((randomJoke) => {
        const container = document.querySelector("#jkList");
        container.innerHTML = `<h3>${randomJoke.joke}</h3>`;
      });
  };