
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost/movies.php', true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        var movies = JSON.parse(xhr.responseText);
        // generateMovieList(movies);
        window.onload = generateMovieList(movies);
        console.log("MOVIE LIST", movies)
    } else {
        console.error('Failed to load movies');
    }
};

xhr.onerror = function () {
    console.error('Failed to load movies');
};

xhr.send();

function generateShowMovie(movies){
    var movieShowContainer = document.getElementById("list");
}
function generateMovieList(movies) {
    var movieContainer = document.getElementById("list");
    movieContainer.innerHTML = ""; // Xóa nội dung cũ của movieContainer trước khi tạo lại danh sách

    movies.forEach(function (movie) {
        // Tạo chuỗi HTML sử dụng template literals
        var movieHTML = `
            <div class="movie-card">
                <div class="poster">
                    <img src="${movie.image}" />
                </div>
                <div class="details">
                    <h3>${movie.title}</h3>
                    <div class="tags">
                        <span>${movie.type}</span>
                        <span>${movie.year}</span>
                    </div>
                    <div class="description">
                        <p>${movie.description}</p>
                    </div>
                </div>
            </div>
        `;

        // Thêm chuỗi HTML vào movieContainer
        movieContainer.insertAdjacentHTML("beforeend", movieHTML);
    });
}
