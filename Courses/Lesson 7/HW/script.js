document.addEventListener("DOMContentLoaded", function (event) {
    let yearSpan = document.getElementById("copyright__year");
    let currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;


    let button = document.getElementsByClassName("post__button")[0];
    button.addEventListener("click", function (event) {
        let allBlog = document.getElementById("all_blog");
        let item = document.createElement("li");
        let blogPost = document.getElementsByClassName("text__blog")[0];
        let itemText = document.createTextNode(blogPost.value);
        item.appendChild(itemText);
        allBlog.appendChild(item);
        blogPost.value = "";
    })

});
