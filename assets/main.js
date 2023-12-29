function updateTime() {
    const now = new Date();
    const dateStr = now.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('realtime').textContent = dateStr;
}

// Call updateTime once at the start to initialize the time
updateTime();

// Then update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

const loadTest = document.querySelector('.loading-text');
const content = document.querySelector('.container');

let load = 0;

let int = setInterval(blurring, 30);
function blurring(){
    load++;

    if(load > 99){
        clearInterval(int);
    }

    loadTest.innerText = `${load}%`;
    loadTest.style.opacity = scale(load, 0, 100, 1, 0)
    content.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}



function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

let currentIndex = 0;
const newsItems = document.querySelectorAll('.multi-news .small-news');
const newsContainer = document.getElementById('newsContainer');

function showNextNews() {
    const newsPerPage = 2;
    const totalNews = newsItems.length;
    const endIndex = currentIndex + newsPerPage;

    for (let i = 0; i < totalNews; i++) {
        if (i >= currentIndex && i < endIndex) {
            newsItems[i].style.display = 'block';
        } else {
            newsItems[i].style.display = 'none';
        }
    }

    currentIndex += newsPerPage;

    // If we reach the end, reset the index to show the first set of news
    if (currentIndex >= totalNews) {
        currentIndex = 0;
    }
}

// Show the initial set of news
showNextNews();


function showPreviousNews() {
    const newsPerPage = 2;
    currentIndex -= newsPerPage;

    // If we go before the first set, wrap around to the end
    if (currentIndex < 0) {
        currentIndex = Math.max(0, newsItems.length - newsPerPage);
    }

    const endIndex = currentIndex + newsPerPage;

    for (let i = 0; i < newsItems.length; i++) {
        if (i >= currentIndex && i < endIndex) {
            newsItems[i].style.display = 'block';
        } else {
            newsItems[i].style.display = 'none';
        }
    }
}




