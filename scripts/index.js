import getData from "./getData.js";

const btnSearch = document.querySelector('.btn-search');
const descriptionCard = document.getElementById('description-card');

function loadSeriesInfo() {
  getData(`/series/phrase`)
      .then(data => {
        descriptionCard.innerHTML = `
              <img src="${data.poster}" alt="${data.title}" />
              <div>
                  <h2>${data.title}</h2>
                  <div class="description-text">
                      <p><i>"${data.phrase}"</i></p>
                      <p><b>Quoted by: </b> ${data.character}</p>
                  </div>
              </div>
          `;
      })
      .catch(error => {
          console.error('Error getting series information:', error);
      });
}


window.onload = loadSeriesInfo();
btnSearch.addEventListener('click', loadSeriesInfo);