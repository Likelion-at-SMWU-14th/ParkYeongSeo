const searchSinger = document.getElementById("searchInput");
const container = document.getElementById("musicContainer");


const button = document.querySelector(".searchButton");
button.addEventListener("click", () => {
  console.log("검색 버튼이 클릭되었습니다.");
  const searchInput = document.getElementById("searchInput").value;
  fetchMusic(searchInput);
});

async function fetchMusic(keyword) {
  try {
    const response = await fetch(`https://api.manana.kr/karaoke/singer/${keyword}.json`);
    const musicList = await response.json();
    container.innerHTML = "";
    
    musicList.forEach((music) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
      <div class="card-body">
        <h2 class="card-title">${music.title}</h2>
        <p class="card-singer">${music.singer}</p>
        <p class="card-description">${music.no}</p>
        <p class="card-description">${music.lyricist}</p>
        <p class="card-description">${music.composer}</p>
        <p class="card-description">${music.release}</p>
      </div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.log("에러 발생:", error);
  }
}