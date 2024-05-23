document.addEventListener('DOMContentLoaded', function() {
    fetchMarketNews();
});

async function fetchMarketNews() {
    try {
        const response = await fetch('https://api.example.com/market-news');
        const news = await response.json();
        displayMarketNews(news);
    } catch (error) {
        console.error('Error fetching market news:', error);
    }
}

function displayMarketNews(news) {
    const newsContainer = document.querySelector('.news-card-container');
    newsContainer.innerHTML = ''; // Clear any existing news
    news.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');
        newsCard.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsContainer.appendChild(newsCard);
    });
}
