(() => {
    function calculateLoadTime() {
        const pageEnd = performance.mark('pageEnd')
        const loadTime = pageEnd.startTime
        return loadTime;
    }

    function displayLoadStats() {
        const loadStats = document.createElement('div');
        loadStats.innerHTML = `Страница загрузилась за ${calculateLoadTime()} мс`;
        document.querySelector('footer').appendChild(loadStats);
    }

    window.addEventListener('load', () => {
        displayLoadStats();
    });
})();