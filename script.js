document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("video");
  var btnAnterior = document.getElementById("anterior");
  var btnSiguiente = document.getElementById("siguiente");
  var listaCapitulos = document.getElementById("capitulos");

  var videos = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4"
    // Agrega aquí los nombres de los archivos de vídeo que desees
  ];

  var indiceVideoActual = 0;

  function cargarVideo(indice) {
    if (indice >= 0 && indice < videos.length) {
      video.src = videos[indice];
      video.play();
      indiceVideoActual = indice;
    }
  }

  function cargarVideoDesdeCapitulo(event) {
    event.preventDefault();
    var indice = parseInt(event.target.getAttribute("data-index"));
    cargarVideo(indice);
  }

  btnAnterior.addEventListener("click", function() {
    cargarVideo(indiceVideoActual - 1);
  });

  btnSiguiente.addEventListener("click", function() {
    cargarVideo(indiceVideoActual + 1);
  });

  listaCapitulos.addEventListener("click", cargarVideoDesdeCapitulo);

  cargarVideo(indiceVideoActual);
});
// Datos de ejemplo de anime
const animeList = [
    "Naruto",
    "One Piece",
    "Attack on Titan",
    "Death Note",
    "Dragon Ball"
    // Agrega más nombres de anime si lo deseas
];

// Función para realizar la búsqueda
function searchAnime(query) {
    const results = animeList.filter(anime => anime.toLowerCase().includes(query.toLowerCase()));
    return results;
}

// Función para mostrar los resultados de la búsqueda
function displayResults(results) {
    const resultList = document.getElementById("results-list");
    resultList.innerHTML = "";
    results.forEach(result => {
        const listItem = document.createElement("li");
        listItem.textContent = result;
        resultList.appendChild(listItem);
    });
    document.getElementById("search-results").style.display = "block";
}

// Evento clic en el ícono de búsqueda
document.getElementById("search-icon").addEventListener("click", function() {
    const query = prompt("Ingrese el nombre del anime a buscar:");
    if (query) {
        const results = searchAnime(query);
        displayResults(results);
    }
});