// document selectors
const blogsList = document.querySelector(".blogsList");

// fetching blogs from '/blogs'
const test = async () => {
    return await fetch('/blogs')
        .then(data => data.json());
}

// insert blogs to DOM
let blogs = test().then(data => {
    if (data.blogs.length > 0) {
        data.blogs.forEach(blog => {
            blogsList.innerHTML += 
            `<li>
                <h3>${blog.title}</h3>
                <p>${blog.snippet}</p>
            </li>`;
        });
    } else {
        blogsList.innerHTML = `No Blogs Available`;
    }
});