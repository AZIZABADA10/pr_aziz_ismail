const images = [
    "les photo/gaza-3829403_1920.jpg",
    "les photo/leo-3968916_1920.jpg",
    "les photo/lion-3605850_1920.jpg",
    "les photo/man-6860633_1920.jpg",
    "les photo/man-6860636_1920.jpg",
    "les photo/palestine-7360944_1920.jpg",
    "les photo/téléchargement.jpeg"
];
let currentIndex = 0;


const articleImage = document.getElementById("article-image");
const articleImage2 = document.getElementById("article-image2");
articleImage2.addEventListener("click",()=>{
    currentIndex=(currentIndex+2)%images.length;
    articleImage2.src=images[currentIndex];
});

articleImage.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  articleImage.src = images[currentIndex];
});
