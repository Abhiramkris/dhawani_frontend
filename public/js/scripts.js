const articles = [
    { title: "Blog Title 1", author: "Jane Doe", date: "2024-11-01" },
    { title: "Blog Title 2", author: "Sam Smith", date: "2024-11-05" },
    { title: "Blog Title 3", author: "Alex White", date: "2024-11-08" },
    { title: "Blog Title 4", author: "Sarah Parker", date: "2024-11-10" },
    { title: "Blog Title 5", author: "John Doe", date: "2024-11-12" },
    { title: "Blog Title 6", author: "Emma Watson", date: "2024-11-14" },
    { title: "Blog Title 7", author: "Mark Twain", date: "2024-11-16" },
    { title: "Blog Title 8", author: "Emily Bronte", date: "2024-11-18" },
    { title: "Blog Title 9", author: "Leo Tolstoy", date: "2024-11-20" }
];

const blogContent = document.getElementById("blog-content");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pageNumbers = document.getElementById("page-numbers");

let currentPage = 1;
const articlesPerPage = [4, 6]; // First page 4 (1 big + 3 small), others 6
let totalPages = Math.ceil((articles.length - 4) / 6) + 1;

// Render the current page
function renderPage(page) {
    blogContent.innerHTML = "";
    const startIndex = page === 1 ? 0 : 4 + (page - 2) * 6;
    const endIndex = page === 1 ? 4 : startIndex + 6;

    // For page 1, render 1 big card and 3 small cards
    if (page === 1) {
        const bigCard = articles[0];
        const bigCardDiv = document.createElement("div");
        bigCardDiv.className = "blog-layout";
        bigCardDiv.innerHTML = `
            <div class="left-card">
                <div class="blog-card large-card">
                    <h2>${bigCard.title}</h2>
                    <p>Author: ${bigCard.author}</p>
                    <p>${bigCard.date}</p>
                </div>
            </div>
            <div class="right-cards">
                ${articles.slice(1, 4).map(article => `
                    <div class="blog-card">
                        <h3>${article.title}</h3>
                        <p>Author: ${article.author}</p>
                    </div>
                `).join("")}
            </div>
        `;
        blogContent.appendChild(bigCardDiv);
    } else {
        // Render grid for other pages
        const gridDiv = document.createElement("div");
        gridDiv.className = "blog-grid";
        articles.slice(startIndex, endIndex).forEach(article => {
            const card = document.createElement("div");
            card.className = "blog-card";
            card.innerHTML = `
                <h3>${article.title}</h3>
                <p>Author: ${article.author}</p>
                <p>${article.date}</p>
            `;
            gridDiv.appendChild(card);
        });
        blogContent.appendChild(gridDiv);
    }
    renderPagination();
}

// Render pagination buttons
function renderPagination() {
    pageNumbers.textContent = `${currentPage} / ${totalPages}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

// Handle pagination clicks
prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
});

nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
    }
});

// Initial render
renderPage(currentPage);