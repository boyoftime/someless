document.addEventListener('DOMContentLoaded', function () {
    const softwareItems = [
        {
            name: 'WinRAR Full activated',
            image: 'images/winrar.jfif',
            size: 6,
            description: JSON.stringify({
                about: 'WinRAR is a powerful archive manager for Windows, used to compress and extract files efficiently.',
                features: ['File compression', 'File extraction', 'Support for multiple archive formats', 'Password protection', 'User-friendly interface'],
                platforms: ['Windows']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/sig2llyidt8siln/WinRAR+v7.01+Final.zip/file'
        },
        
        {
            name: 'Filmora 10(X) Wondershare video editor (Full activated)',
            image: 'images/filmora10.jfif',
            size: 236, 
            description: JSON.stringify({
                about: 'Filmora 10 is a powerful video editor for Windows, with a lot of features like keyframe and much more.',
                features: ['Keyframe animation', 'Video effects', 'Audio editing', 'User-friendly interface', 'High-quality output'],
                platforms: ['Windows 8','Windows 10', 'Windows 11']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/1ztbnwt8d54wcs8/fILMORA_X.zip/file'
        },
        
        {
            name: 'God of War 2',
            image: 'images/gow2.jfif', 
            size: 3989, 
            description: JSON.stringify({
                about: 'God of War 2 is an adventure and fantasy game for the PS2 console, featuring a captivating story rooted in mythology.',
                features: ['Epic adventure gameplay', 'Mythological storyline', 'Stunning graphics for PS2', 'Challenging puzzles and battles'],
                platforms: ['PS2']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/lfva4hyciwu01hi/God_of_War2_0622352503.iso/file'
        },
        
        {
            name: 'USB Util Games',
            image: 'images/usbutil.png',
            size: 3.4, 
            description: JSON.stringify({
                about: 'USB Util Games is a PS2 games software to make games and convert them into ISO files or segments to read from USB or flash drives on PS2.',
                features: ['Convert games to ISO files', 'Segment games for USB or flash drives', 'User-friendly interface', 'Supports PS2 games'],
                platforms: ['Windows']
            }),
            price: 5000,
            downloadLink: 'https://www.mediafire.com/file/8nf95lt87vdy6hc/USBUTIL_v2.2_rev1.0_EN.zip/file'
        },
        
        {
            name: 'Textify Free',
            image: 'images/textify.jfif',
            size: 0.5, 
            description: JSON.stringify({
                about: 'Textify is a Windows program to copy Windows texts that cannot be copied normally.',
                features: ['Copy unselectable text', 'Easy to use', 'Supports various applications', 'Lightweight'],
                platforms: ['Windows']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/ufa8ob8ctmb3r4a/textify_setup.exe/file'
        },
        
        {
            name: 'Super Copier Full activated (Free to use)',
            image: 'images/supercopy.jfif',
            size: 0.4, 
            description: JSON.stringify({
                about: 'Super Copier is a powerful program for Windows to copy files at speed and manage them faster.',
                features: ['High-speed file copying', 'File management', 'User-friendly interface', 'Queue management', 'Error recovery'],
                platforms: ['Windows']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/kud3q9chtbdxor1/SuperCopier22beta.exe/file'
        },
        
        {
            name: 'Virtual Dj 2020 Full activated (Free to use)',
            image: 'images/virtual2020.jpg', 
            size: 38.5, 
            description: JSON.stringify({
                about: 'Virtual Dj 2020 is a powerful tool for studio DJs, mixing music, making mega mixes, beats, and more.',
                features: ['Professional DJ mixing', 'Create mega mixes', 'Beat making', 'User-friendly interface', 'Advanced audio effects'],
                platforms: ['Windows']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/am2uxptmvw8nu6h/install_virtualdj_2020_b5630_pc64.msi/file'
        },
        
        {
            name: 'Office 2019 Activator Script (Free)',
            image: 'images/office2019script.jfif', 
            size: 0.075, 
            description: JSON.stringify({
                about: 'Office 2019 Activator Script is a text document (.txt) used to activate Office 2019 online using CMD on a computer.',
                features: ['Activate Office 2019', 'Easy to use script', 'Uses CMD for activation', 'Online activation'],
                platforms: ['Windows']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/lonrhesuur5ymw8/office_2019_activator.txt/file'
        },
        
        {
            name: 'LetStudy Free (E-Learning app let study)',
            image: 'images/letstudy.jfif',
            size: 77.99, 
            description: JSON.stringify({
                about: 'LetStudy is an application for students to learn different subjects for free, like mathematics, physics, biology, chemistry, civics, history, and much more.',
                features: ['Learn various subjects for free', 'Subjects include mathematics, physics, biology, chemistry, civics, history, and more', 'User-friendly interface', 'Access to educational resources'],
                platforms: ['Android']
            }),
            price:0,
            downloadLink: 'https://www.mediafire.com/file/hn32rag6zq78x16/LetStudy.apk/file'
        },
        
{
    name: 'VideoScribe Full version (Crack) Activated',
    image: 'images/videoscribe.jfif',
    size: 76.44, 
    description: JSON.stringify({
        about: 'VideoScribe is a user-friendly animation tool. It’s easy to create captivating animated videos, no matter your skill level, thanks to our intuitive interface and powerful features. Whether you’re a marketer, educator, or small business, our video animation tools will enhance your communications and save you time.',
        features: ['User-friendly interface', 'Create captivating animated videos', 'Suitable for all skill levels', 'Powerful features', 'Ideal for marketers, educators, and small businesses'],
        platforms: ['Windows 8','Windows 10', 'Windows 11']
    }),
    price: 15000,
    downloadLink: 'https://www.mediafire.com/file/oa6lmus7zybfewt/VIDEOSCRIBE_FULL.zip/file'
},
        

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
    name: 'Everything (Searching tool Free to use)',
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