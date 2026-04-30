// DOM 요소 선택
const heartIcon = document.querySelector('.heart-icon');
const bookmarkIcon = document.querySelector('.bookmark-icon');
const heartCount = document.getElementById('heart-count');

// 좋아요 클릭
heartIcon.addEventListener('click', function() {
    this.classList.toggle('hearted');

    // 좋아요 수 업데이트
    let hearts = parseInt(heartCount.textContent);
    if (this.classList.contains('hearted')) {
        hearts++;
    } else {
        hearts--;
    }
    heartCount.textContent = hearts;
});

// 북마크 클릭
bookmarkIcon.addEventListener('click', function() {
    this.classList.toggle('bookmarked');
});

// post-content
const fullContent = "넥스지 쇼케이스에 다녀왔어요! 이번 'Mmchk' 활동도 화이팅 🐹 #NEXZ #Mmchk #HYPEMAN"
const limit = 20;
const mainText = document.querySelector('.post-content'); 
const moreBtn = document.querySelector('.more-content');
const lessBtn = document.querySelector('.less-content');

mainText.textContent = fullContent.slice(0, limit);

moreBtn.addEventListener('click', function() {
    mainText.textContent = fullContent;
    this.style.display = 'none';
    lessBtn.style.display = 'inline';
});

lessBtn.addEventListener('click', function() {
    mainText.textContent = fullContent.slice(0, limit);
    this.style.display = 'none';
    moreBtn.style.display = 'inline';
});
