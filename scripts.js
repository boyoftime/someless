document.addEventListener('DOMContentLoaded', function () {
    const softwareItems = [
        { name: 'WinRAR', image: 'images/winrar.jfif' },
        { name: 'WinRAR', image: 'images/winrar.jfif' },
        { name: 'WinRAR', image: 'images/winrar.jfif' },
        { name: 'WinRAR', image: 'images/winrar.jfif' },
        { name: 'WinRAR', image: 'images/winrar.jfif' },
        { name: 'WinRAR', image: 'images/winrar.jfif' },
        { name: 'WinRAR', image: 'images/winrar.jfif' },
        { name: 'WinRAR', image: 'images/winrar.jfif' },
        { name: 'WinRAR', image: 'images/winrar.jfif' },
        { name: 'WinRAR', image: 'images/winrar.jfif' },
        { name: 'WinRAR', image: 'images/winrar.jfif' },
        { name: 'WinRAR', image: 'images/winrar.jfif' },
        { name: 'WinRAR', image: 'images/winrar.jfif' },
        { name: 'WinRAR', image: 'images/winrar.jfif' },
        { name: 'WinRAR', image: 'images/winrar.jfif' },
    ];

    const itemsPerPage = 12;
    let currentPage = 0;

    function displayItems(page) {
        const softwareList = document.getElementById('software-list');
        softwareList.innerHTML = '';
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = softwareItems.slice(start, end);

        paginatedItems.forEach(item => {
            const softwareItem = document.createElement('div');
            softwareItem.className = 'software-item';
            softwareItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="software-image">
                <p>${item.name}</p>
            `;
            softwareList.appendChild(softwareItem);
        });

        document.getElementById('prev-btn').disabled = page === 0;
        document.getElementById('next-btn').disabled = end >= softwareItems.length;
    }

    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            displayItems(currentPage);
        }
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        if ((currentPage + 1) * itemsPerPage < softwareItems.length) {
            currentPage++;
            displayItems(currentPage);
        }
    });

    displayItems(currentPage);
});
