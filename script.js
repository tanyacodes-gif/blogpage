// Blog Data (Dynamic Content)
const posts = [
    {
        title: "Understanding Web Development",
        author: "Tanya Agarwal",
        date: "Feb 18, 2026",
        description: "Web development includes front-end and back-end technologies used to build modern websites."
    },
    {
        title: "Why Learn Java?",
        author: "Tanya Agarwal",
        date: "Feb 15, 2026",
        description: "Java is widely used for enterprise applications, Android apps, and backend systems."
    },
    {
        title: "Importance of DSA",
        author: "Tanya Agarwal",
        date: "Feb 10, 2026",
        description: "Data Structures and Algorithms help solve problems efficiently and improve logical thinking."
    }
];

// Render Blog Posts Dynamically
const container = document.getElementById("blog-container");

posts.forEach(post => {
    container.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="text-muted small">By ${post.author} | ${post.date}</p>
                    <p class="card-text">${post.description}</p>
                    <button class="btn btn-outline-primary btn-sm">Read More</button>
                </div>
            </div>
        </div>
    `;
});

// Simple Interaction
function showAlert() {
    alert("Thank you for subscribing to MyBlog!");
}
