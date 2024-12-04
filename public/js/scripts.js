const articles = [{
    title: "Lorem ipsum dolor dolor sit amet, consectetur adipiscing",
    author: "Jane Doe",
    date: "2024-11-01",
    keywords: ["hello", "Keyword2"],
    imageUrl: "/public/img/2e.png",
    id: 1
  },
  {
    title: "Lorem ipsum dolor dolor sit amet, consectetur adipiscing",
    author: "Sam Smith",
    date: "2024-11-05",
    keywords: ["Keyword3", "Keyword4"],
    imageUrl: "/public/img/1e.png",
    id: 2
  },
  {
    title: "Lorem ipsum dolor dolor sit amet, consectetur adipiscing",
    author: "Alex White",
    date: "2024-11-08",
    imageUrl: "/public/img/1e.png",
    keywords: ["Keyword5", "Keyword6"],
    id: 3
  },
  {
    title: "Lorem ipsum dolor dolor sit amet, consectetur adipiscing",
    author: "Sarah Parker",
    date: "2024-11-10",
    imageUrl: "/public/img/1e.png",
    keywords: ["Keyword7", "Keyword8"],
    id: 4
  },
  {
    title: "Blog Title 5 already exists in the blog title",
    author: "John Doe",
    date: "2024-11-12",
    imageUrl: "/public/img/1e.png",
    keywords: ["Keyword9", "Keyword10"],
    id: 5
  },
  {
    title: "Blog Title 6 already exists in the blog title",
    author: "Emma Watson",
    date: "2024-11-14",
    imageUrl: "/public/img/1e.png",
    keywords: ["Keyword11", "Keyword12"],
    id: 6
  },
  {
    title: "Blog Title 7 Blog Title 5 Blog Title 5Blog Title 5",
    author: "Mark Twain",
    date: "2024-11-16",
    imageUrl: "/public/img/1e.png",
    keywords: ["Keyword13", "Keyword14"],
    id: 7
  },
  {
    title: "Blog Title 8 already exists in the blog title",
    author: "Emily Bronte",
    date: "2024-11-18",
    imageUrl: "/public/img/1e.png",
    keywords: ["Keyword15", "Keyword16"],
    id: 8
  },
  {
    title: "Blog Title 9 already exists in the blog title",
    author: "Leo Tolstoy",
    date: "2024-11-20",
    imageUrl: "/public/img/1e.png",
    keywords: ["Keyword17", "Keyword18"],
    id: 9
  },
  {
    title: "Blog Title 9 already exists in the blog title",
    author: "Leo Tolstoy",
    date: "2024-11-20",
    imageUrl: "/public/img/1e.png",
    keywords: ["Keyword17", "Keyword18"],
    id: 10
  },
  {
    title: "Blog Title 9 already exists in the blog title",
    author: "Leo Tolstoy",
    date: "2024-11-20",
    imageUrl: "/public/img/1e.png",
    keywords: ["Keyword17", "Keyword18"],
    id: 11
  },
  {
    title: "Blog Title 9 already exists in the blog title",
    author: "Leo Tolstoy",
    date: "2024-11-20",
    imageUrl: "/public/img/1e.png",
    keywords: ["Keyword17", "Keyword18"],
    id: 12
  }
];

const blogContent = document.getElementById("blog-content");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pageNumbers = document.getElementById("page-numbers");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const sortSelect = document.getElementById("sort-options");

let currentPage = 1;
let filteredArticles = [...articles];
let isSearchActive = false;

function renderPage(page) {
  blogContent.innerHTML = "";
  const startIndex = (page - 1) * 6;
  const endIndex = startIndex + 6;

  if (page === 1) {
    const bigCard = filteredArticles[0];
    const bigCardDiv = document.createElement("div");
    bigCardDiv.className = "blog-layout";
    bigCardDiv.innerHTML = ` 
            <div class="left-card">
<div class="blog-card large-card">
 
    <a href="blog-detail.html?id=${bigCard.id}">
        <div class="card-image">
            <img src="${bigCard.imageUrl}" alt="${bigCard.title}" />
        </div>
         <div class="largecon">
        <h2>${bigCard.title}</h2>
        <p>Author: ${bigCard.author}</p>
         </div>
    </a>
</div>
        </div>
          <div class="right-cards"> 
${filteredArticles.slice(1, 4).map(article => ` 
<div class="blog-card"> 
  <a href="blog-detail.html?id=${article.id}"> 
    <div class="card-image">
      <img src="${article.imageUrl}" alt="${article.title}" />
    </div>
    <div class="content">
      <h3>${article.title}</h3> 
      <p>Author: ${article.author}</p>
    </div>
  </a> 
</div> 
`).join("")} 
</div> </div>
        `;
    blogContent.appendChild(bigCardDiv);
  } else {
    const gridDiv = document.createElement("div");
    gridDiv.className = "blog-grid";
    filteredArticles.slice(startIndex, endIndex).forEach(article => {
      const card = document.createElement("div");
      // card.className = "blog-card";
      gridDiv.className = "blog-grid1";
      card.innerHTML = ` 
      <div class="blog-container1">
        <div class="right-cards1">
        <div class="blog-card1">
                <a href="blog-detail.html?id=${article.id}"> 
                   <div class="card-image">
       <img src="${article.imageUrl}" alt="${article.title}" />
    </div>
     <div class="content1">
                    <h3>${article.title}</h3> 
                    <p>Author: ${article.author}</p>  </div>
                </a> 
           </div> </div> `;
      gridDiv.appendChild(card);
    });
    blogContent.appendChild(gridDiv);
  }

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(filteredArticles.length / 6);
  pageNumbers.textContent = `${currentPage} / ${totalPages}`;
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

function sortArticles() {
  const sortOption = sortSelect.value;

  if (sortOption === "latest") {
    filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortOption === "oldest") {
    filteredArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortOption === "alphabetical") {
    filteredArticles.sort((a, b) => a.title.localeCompare(b.title));
  }

  renderPage(currentPage);
}


const clearSearchButton = document.getElementById("clear-search");
const sortButton = document.getElementById("sort-btn");
const sortOptions = document.getElementById("sort-options");


// Handle search on typing
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm) {
    clearSearchButton.style.display = "block"; // Show clear icon
  } else {
    clearSearchButton.style.display = "none";
  }

  filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm) ||
    article.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
  );

  currentPage = 1;
  renderPage(currentPage);
});

// Clear search input
clearSearchButton.addEventListener("click", () => {
  searchInput.value = "";
  clearSearchButton.style.display = "none";
  location.reload();
});

// Handle search on button click or Enter key
searchButton.addEventListener("click", toggleSearch);
searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    toggleSearch();
  }
});

// Toggle search
function toggleSearch() {
  if (!isSearchActive) {
    const searchTerm = searchInput.value.toLowerCase();

    filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
    );

    currentPage = 1;
    renderPage(currentPage);
    searchButton.textContent = "Cancel";
    isSearchActive = true;
  } else {
    location.reload();
  }
}

// Handle custom dropdown
sortButton.addEventListener("click", () => {
  sortOptions.style.display =
    sortOptions.style.display === "block" ? "none" : "block";
});

sortOptions.addEventListener("click", event => {
  const sortType = event.target.dataset.sort;
  sortArticles(sortType);
  sortOptions.style.display = "none";
});

sortSelect.addEventListener("change", sortArticles);

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPage);
  }
});

nextButton.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredArticles.length / 6);
  if (currentPage < totalPages) {
    currentPage++;
    renderPage(currentPage);
  }
});

renderPage(currentPage);


document.addEventListener("DOMContentLoaded", () => {
    const blogs = document.querySelectorAll(".blogs");
    let activeCard = document.querySelector(".blogs.active");
  
    blogs.forEach((blog) => {
      // Handle hover
      blog.addEventListener("mouseenter", () => {
        // Temporarily remove active class from the current active card
        if (activeCard) {
          activeCard.classList.remove("active");
        }
        // Add active class to the hovered card
        blog.classList.add("active");
      });
  
      blog.addEventListener("mouseleave", () => {
        // Remove active class from the hovered card
        blog.classList.remove("active");
  
        // Restore active class to the original active card
        if (activeCard) {
          activeCard.classList.add("active");
        }
      });
  
      // Handle click to set permanent active card
      blog.addEventListener("click", () => {
        // Remove active class from all cards
        blogs.forEach((b) => b.classList.remove("active"));
  
        // Set the clicked card as the new active card
        blog.classList.add("active");
        activeCard = blog; // Update the active card reference
      });
    });
  });
  
  



