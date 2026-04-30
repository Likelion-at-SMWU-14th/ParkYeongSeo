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
