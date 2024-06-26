// Example: Dynamically load news articles (replace with your actual content)
const newsSection = document.getElementById('news');

fetch('news-data.json') // Fetch articles from a JSON file
    .then(response => response.json())
    .then(articles => {
        articles.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
            `;
            newsSection.appendChild(articleElement);
        });
    });
