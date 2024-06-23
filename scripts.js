document.addEventListener('DOMContentLoaded', function () {
    const softwareItems = [
        // Example entry for a software item in scripts.js
{
    name: 'Adobe Photoshop CC2019 Full activated)',
    image: 'images/photoshop2019.png',
    size: 1650,
    description: JSON.stringify({
        about: 'Adobe Photoshop is an essential tool for photographers and graphic designers.',
        features: ['Advanced editing tools', 'Layer management', 'Smart object support'],
        platforms: ['Windows 8','Windows 10', 'Windows 11']
    }),
    price: 0,
    downloadLink: 'https://www.mediafire.com/file/2o8epf7o4k9n9n9/Adobe_Photoshop_CC_2019_20.0.7.28362x64_Multilingual.rar/file'
},


{
    name: 'DRPU Bulk SMS Software Full version (Activated)',
    image: 'images/drpu.jfif',
    size: 5.4,
    description: JSON.stringify({
        about: 'DRPU Bulk SMS is a powerful tool for sending bulk messages from your computer to mobile phones.',
        features: ['Send bulk messages', 'Supports multiple languages', 'Delivery reports', 'Group messaging', 'Import contacts from Excel'],
        platforms: ['Windows 7','Windows 8','Windows 10', 'Windows 11' ]
    }),
    price: 20000,
    downloadLink: 'https://www.mediafire.com/file/3qz60ts8sac8nmy/DRPU_FULL_VERSION.zip/file'
},

{
    name: 'Everything (Searching tool Free)',
    image: 'images/everything.png',
    size: 1.71,
    description: JSON.stringify({
        about: 'Everything is a program used to search for files on the computer very fast.',
        features: ['Instant file search', 'Minimal resource usage', 'Real-time updating', 'Support for NTFS indexing', 'Advanced search capabilities'],
        platforms: ['Windows 7','Windows 8','Windows 10', 'Windows 11']
    }),
    price: 0,
    downloadLink: 'https://www.mediafire.com/file/bxpf3p7i7913i85/Everything-1.4.1.1022.x86-Setup.exe/file'
},

{
    name: 'Smule Full version Free',
    image: 'images/smule.jfif', // Ensure the path matches where you've saved the image
    size: 60.6,
    description: JSON.stringify({
        about: 'Smule is an Android app for singing and making collaborations.',
        features: ['Karaoke with friends', 'Record and edit songs', 'Collaborate with other users', 'Special audio effects', 'Large song library'],
        platforms: ['Android']
    }),
    price: 0,
    downloadLink: 'https://www.mediafire.com/file/ztria67no9qumyf/Smule_v7.4.3.1_MOD_apkmody.io.apk/file'
}

    
    ];

    const itemsPerPage = 12;
    let currentPage = 0;
    let filteredItems = softwareItems;
    let activeItem = null;

    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function displayItems(page) {
        const softwareList = document.getElementById('software-list');
        softwareList.innerHTML = '';
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = filteredItems.slice(start, end);

        paginatedItems.forEach(item => {
            const softwareItem = document.createElement('div');
            softwareItem.className = 'software-item';
            softwareItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="software-image">
                <p>${item.name}</p>
            `;
            softwareItem.addEventListener('click', () => {
                if (activeItem) {
                    activeItem.classList.remove('active');
                }
                softwareItem.classList.add('active');
                activeItem = softwareItem;
                window.location.href = `download.html?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}&size=${encodeURIComponent(item.size)}&description=${encodeURIComponent(item.description)}&price=${encodeURIComponent(formatPrice(item.price))}&downloadLink=${encodeURIComponent(item.downloadLink)}`;
            });
            softwareList.appendChild(softwareItem);
        });

        document.getElementById('prev-btn').disabled = page === 0;
        document.getElementById('next-btn').disabled = end >= filteredItems.length;
    }

    function searchItems(query) {
        filteredItems = softwareItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
        currentPage = 0;
        displayItems(currentPage);
        document.getElementById('no-results-message').style.display = filteredItems.length ? 'none' : 'block';
    }

    document.getElementById('searchButton').addEventListener('click', () => {
        const query = document.getElementById('searchBar').value;
        searchItems(query);
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            displayItems(currentPage);
        }
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        if ((currentPage + 1) * itemsPerPage < filteredItems.length) {
            currentPage++;
            displayItems(currentPage);
        }
    });

    displayItems(currentPage);
});

// Add event listener for the request program button
document.getElementById('requestProgramButton').addEventListener('click', function () {
    // WhatsApp link with predefined message
    const phoneNumber = '+255620428389';
    const message = encodeURIComponent('Hello Someless, I would like to request a program.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
});