document.addEventListener('DOMContentLoaded', function () {
    
    const softwareItems = [
        

         {
            name: 'Angry Bird 2 MS PATCHER', // Changed name
            image: 'images/angrybird2new.jpg',
            size: 105.08,
            description: JSON.stringify({
                about: 'MS Patcher for Angry bird 2. help you to patch game data in one click', // Rephrased
                features: [
                    'Unlimited gems', 
                    'Unlimited hats',  
                    'Antban--No ban online',     
                ],
                platforms: ['Windows PC Only']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/x7dnf59jj9ubu9t/MS+Patcher+Angry+Bird2.exe/file'
        },

        {
            name: 'Offroad Racing PC Unlimited', // Changed name
            image: 'images/offroad.png',
            size: 0.08,
            description: JSON.stringify({
                about: 'Combining beautiful HD graphics, realistic physics and easy-to-use controls, Offroad Racing is a unique and fun racing game for Windows. Collect coins to upgrade your vehicles and unlock new levels. Perform stunts to earn extra coins. With loads of exciting and tricky levels, Offroad Racing provides you endless hours of fun.', // Rephrased
                features: [
                    'Unlimited coins',        
                ],
                platforms: ['Windows PC Only']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/k2rbby1dqwjc75t/DRPU+Bulk+sms+complete+2025.zip/file'
        },

        {
            name: 'DRPU BULK SMS PRO FULL VERSION CRACK 2025', // Changed name
            image: 'images/drpu pro.jpg',
            size: 20.11,
            description: JSON.stringify({
                about: 'DRPU Bulk SMS is a software solution for sending large volumes of text messages from a computer to mobile phones without needing internet connectivity. It allows users to send customized text messages to individuals or groups, using various methods like USB modems, GSM, or Android/Windows-based mobile phones. The software is designed for businesses and organizations to quickly communicate with customers, clients, or other contacts. ', // Rephrased
                features: [
                    'Pro features Unlocked',             // Rephrased
                    'Unlimited access',           // Rephrased
                    'No payment needed', // Rephrased
                ],
                platforms: ['Windows PC Only']
            }),
            price: 25000,
            downloadLink: 'https://www.mediafire.com/file/k2rbby1dqwjc75t/DRPU+Bulk+sms+complete+2025.zip/file'
        },


        {
            name: 'Angry Birds 2 (Enhanced Gameplay Data)', // Changed name
            image: 'images/angrybird2.jpg',
            size: 0.38,
            description: JSON.stringify({
                about: 'Experience Angry Birds 2 with this update data! Enjoy new levels, enhanced physics, and improved graphics. Take on challenging puzzles with unique bird characters in this enhanced gameplay experience.', // Rephrased
                features: [
                    'Access Bonus Gems',             // Rephrased
                    'Includes Extra Hats',           // Rephrased
                    'Online Play with Enhanced Abilities', // Rephrased
                    'Advanced Gameplay Features Enabled' // Rephrased
                ],
                platforms: ['Windows PC Only']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/vfae8fbpi6xjy42/Angry_Bird2_SDF.zip/file'
        },
        {
            name: 'Beach Buggy Racing - 2025 Premium Datafile', // Changed name
            image: 'images/beach-buggy.jpg',
            size: 0.98,
            description: JSON.stringify({
                about: 'Get the latest update data for Beach Buggy Racing, featuring access to more cars and levels. Enjoy this popular kart racing game with its beautiful maps and unique features. This data file enhances your game with extended resources like Coins, Gems, and Tickets.', // Rephrased
                features: [
                    'Enhanced Coins',                 // Rephrased
                    'Bonus Gems',                    // Rephrased
                    'Continuous Play Tickets',         // Rephrased
                    'Access to All In-Game Cars',    // Rephrased
                    'Killawatt Vehicle Accessible',    // Rephrased
                    'Split-Screen Mode Accessible'     // Rephrased
                ],
                platforms: ['Windows PC Only']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/dg8247t3hf6xluw/Beach_Buggy_Racing_Updated_Data_2025.zip/file'
        },
        {
            name: 'Hill Climb Racing (Enhanced Resources Data)', // Changed name
            image: 'images/hill climb.jpeg',
            size: 0.49,
            description: JSON.stringify({
                about: 'This data enhances your Hill Climb Racing experience on PC by providing extended access to in-game Coins and Diamonds.', // Rephrased
                features: [
                    'Enhanced Coins Supply',         // Rephrased
                    'Bonus Diamonds Included'         // Rephrased
                ],
                platforms: ['Windows PC Only']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/lqyizk98ekq8o4b/Hill_Climb_Racing_Data.zip/file'
        },
        {
            name: 'UltraViewer 6.6 Remote Support', // Changed name slightly
            image: 'images/utra.jpg',
            size: 0.00, // Assuming 0 means very small or negligible for display
            description: JSON.stringify({
                about: 'A user-friendly remote sharing software, available for free download. Version 6.6.', // Rephrased
                features: ['Full Remote Access Capabilities'], // Rephrased
                platforms: ['Windows 8, 10, 11']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/c7liy5eebztjrzs/UltraViewer_setup_6.6.110_en.exe/file'
        },
        {
            name: 'Beach Buggy Racing - 2024 Enhanced Datafile', // Changed name
            image: 'images/beach-buggy.jpg',
            size: 0.73,
            description: JSON.stringify({
                about: 'Enhance your Beach Buggy Racing game with this 2024 data file. Access extended resources like Coins, Gems, and continuous play tickets.', // Rephrased
                features: [
                    'Enhanced Coins',                // Rephrased
                    'Bonus Gems',                   // Rephrased
                    'Continuous Play Tickets',        // Rephrased
                    'Access to All In-Game Cars',   // Rephrased
                    'Killawatt Vehicle Accessible',   // Rephrased
                    'Split-Screen Mode Accessible'    // Rephrased
                ],
                platforms: ['Windows 8, 10, 11']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/iqrx9jrdhyzmgca/beach-buggy-data.zip/file'
        },
        {
            name: 'Mantis Gamepad PRO Mapping Tool', // Changed name
            image: 'images/mantis.jfif',
            size: 75,
            description: JSON.stringify({
                about: 'Mantis helps you play Android games using various gamepads (PS2, PS3, PS4, PC controllers) by mapping controls effectively.', // Rephrased
                features: ['Powerful Control Mapping', 'Easy to Use Interface', 'Supports Many Games'],
                platforms: ['Android']
            }),
            price: 10000,
            downloadLink: 'https://www.mediafire.com/file/s9q9u3jlb2d0o3e/Mantis_Gamepad_Pro.apk/file'
        },
        {
            name: 'Internet Download Manager (IDM) - Extended Use Version', // Changed name
            image: 'images/idm.webp',
            size: 11,
            description: JSON.stringify({
                about: 'IDM is a powerful tool that accelerates download speeds from the internet. It integrates with browsers via extensions for efficient downloading. This version offers extended usage.', // Rephrased
                features: ['Accelerated Downloading', 'Multiple File Management', 'Robust Download Engine', 'User-Friendly Interface', 'Multi-Language Support'], // Slightly rephrased
                platforms: ['Windows 7', 'Windows 8','Windows 10', 'Windows 11']
            }),
            price: 10000,
            downloadLink: 'https://www.mediafire.com/file/zule7pjpxyt67lc/idman642build14.zip/file'
        },
        {
            name: 'KMS Configuration Tool for Windows/Office', // Changed name significantly
            image: 'images/kmsauto.jfif',
            size: 10,
            description: JSON.stringify({
                about: 'A utility tool designed to assist with the setup and configuration process for certain versions of Windows and Office.', // Rephrased carefully
                features: [
                    'Assists Windows 10 Configuration', // Rephrased
                    'Assists Office 2016 Configuration', // Rephrased
                    'Simple User Interface',
                    'Automated Configuration Steps', // Rephrased
                    'Multi-Language Options'
                    ],
                platforms: ['Windows']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/m31jkrnwodomyrw/KMSAuto-Net.zip/file'
        },
        {
            name: 'Microsoft Office 2016 Professional Plus', // Changed name
            image: 'images/office2016.jfif',
            size: 2560,
            description: JSON.stringify({
                about: 'A comprehensive suite of productivity software including Word, Excel, PowerPoint, Outlook, and more. Ideal for professional and personal use.', // Added detail
                features: ['Word Processing (Word)', 'Spreadsheet Management (Excel)', 'Presentation Creation (PowerPoint)', 'Email & Calendar (Outlook)', 'Collaboration Tools'],
                platforms: ['Windows']
            }),
            price: 15000,
            downloadLink: 'https://www.mediafire.com/file/4b4mci3uiwq656o/Microsoft_Office_2016.zip/file'
        },
        {
            name: 'WinRAR Archiver (Registered Info Included)', // Changed name
            image: 'images/winrar.jfif',
            size: 6,
            description: JSON.stringify({
                about: 'WinRAR is a powerful archive manager for Windows, used to compress and extract files efficiently. Includes registration details.', // Rephrased
                features: ['File Compression (RAR, ZIP)', 'File Extraction (Multiple Formats)', 'Archive Management', 'Optional Password Protection', 'User-Friendly Interface'],
                platforms: ['Windows']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/sig2llyidt8siln/WinRAR+v7.01+Final.zip/file'
        },
        {
            name: 'Filmora X Wondershare Video Editor (Premium Features)', // Changed name
            image: 'images/filmora10.jfif',
            size: 236,
            description: JSON.stringify({
                about: 'Filmora X is a powerful yet user-friendly video editor for Windows, offering features like keyframe animation, effects, and more for creating high-quality videos.', // Rephrased
                features: ['Keyframe Animation', 'Extensive Video Effects Library', 'Audio Editing & Mixing', 'Intuitive User Interface', 'High-Quality Export Options'],
                platforms: ['Windows 8','Windows 10', 'Windows 11']
            }),
            price: 0, // Assuming free despite "Premium Features" label
            downloadLink: 'https://www.mediafire.com/file/1ztbnwt8d54wcs8/fILMORA_X.zip/file'
        },
        {
            name: 'God of War 2 (PS2 Classic)', // Added clarification
            image: 'images/gow2.jfif',
            size: 3989,
            description: JSON.stringify({
                about: 'God of War 2 is an acclaimed adventure and fantasy game for the PS2 console, featuring a captivating story rooted in mythology.', // Kept as is, seems fine
                features: ['Epic Adventure Gameplay', 'Mythological Storyline', 'Impressive Graphics for PS2', 'Challenging Puzzles and Battles'],
                platforms: ['PS2 (Requires compatible emulator or console)'] // Added requirement note
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/lfva4hyciwu01hi/God_of_War2_0622352503.iso/file'
        },
        {
            name: 'USB Utility for PS2 Games', // Slightly changed name
            image: 'images/usbutil.png',
            size: 3.4,
            description: JSON.stringify({
                about: 'A utility software for managing PS2 game files, allowing conversion to ISO or segment formats suitable for loading from USB devices on a PS2 console.', // Rephrased
                features: ['Convert Game Formats', 'Prepare Games for USB Loading', 'User-Friendly Interface', 'Supports PS2 Game Management'],
                platforms: ['Windows']
            }),
            price: 5000,
            downloadLink: 'https://www.mediafire.com/file/8nf95lt87vdy6hc/USBUTIL_v2.2_rev1.0_EN.zip/file'
        },
        {
            name: 'Textify Text Capture Tool (Free)', // Changed name
            image: 'images/textify.jfif',
            size: 0.5,
            description: JSON.stringify({
                about: 'Textify is a free Windows utility that allows you to copy text from dialog boxes and windows where standard text selection is not possible.', // Rephrased
                features: ['Copy Unselectable Text', 'Simple Point-and-Click Use', 'Supports Various Applications', 'Lightweight Utility'],
                platforms: ['Windows']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/ufa8ob8ctmb3r4a/textify_setup.exe/file'
        },
        {
            name: 'Super Copier - Enhanced File Copy Utility', // Changed name
            image: 'images/supercopy.jfif',
            size: 0.4,
            description: JSON.stringify({
                about: 'Super Copier is a free Windows program designed to provide faster and more manageable file copying and moving operations.', // Rephrased
                features: ['Accelerated File Copying/Moving', 'Transfer Management (Pause/Resume)', 'User-Friendly Interface', 'Copy Queue Management', 'Error Recovery Options'],
                platforms: ['Windows']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/kud3q9chtbdxor1/SuperCopier22beta.exe/file'
        },
        {
            name: 'Virtual DJ 2020 - DJ Software Suite', // Changed name
            image: 'images/virtual2020.jpg',
            size: 38.5,
            description: JSON.stringify({
                about: 'Virtual DJ 2020 is a comprehensive tool for DJs, suitable for mixing music, creating mega mixes, beat matching, and live performance.', // Rephrased
                features: ['Professional DJ Mixing Interface', 'Mega Mix Creation Tools', 'Beat Matching & Syncing', 'Extensive Audio Effects', 'Supports Various Controllers'],
                platforms: ['Windows']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/am2uxptmvw8nu6h/install_virtualdj_2020_b5630_pc64.msi/file'
        },
        {
            name: 'Office 2019 CMD Configuration Script (Free)', // Changed name carefully
            image: 'images/office2019script.jfif',
            size: 0.075,
            description: JSON.stringify({
                about: 'A command-line script (.txt format) designed to assist with the online setup and configuration process for Office 2019 on a computer using CMD.', // Rephrased carefully
                features: [
                    'Assists Office 2019 Setup', // Rephrased
                    'Simple Script Execution',
                    'Uses CMD for Configuration', // Rephrased
                    'Requires Online Connection During Setup' // Rephrased
                    ],
                platforms: ['Windows']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/lonrhesuur5ymw8/office_2019_activator.txt/file'
        },
        {
            name: 'LetStudy E-Learning App (Free)', // Kept similar
            image: 'images/letstudy.jfif',
            size: 77.99,
            description: JSON.stringify({
                about: 'LetStudy is a free educational application for students to learn various subjects including Mathematics, Physics, Biology, Chemistry, Civics, History, and more.', // Kept similar
                features: ['Free Access to Various Subjects', 'Covers Maths, Physics, Bio, Chem, Civics, History+', 'User-Friendly Learning Interface', 'Educational Resource Hub'],
                platforms: ['Android']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/hn32rag6zq78x16/LetStudy.apk/file'
        },
        {
            name: 'VideoScribe Whiteboard Animator (Pro Features)', // Changed name
            image: 'images/videoscribe.jfif',
            size: 76.44,
            description: JSON.stringify({
                about: 'VideoScribe is an intuitive tool for creating engaging whiteboard animation videos. Suitable for marketers, educators, and businesses looking to enhance communications visually.', // Rephrased
                features: ['Intuitive Whiteboard Animation Interface', 'Create Captivating Animated Videos', 'Suitable for Various Skill Levels', 'Powerful Creation Features', 'Ideal for Marketing & Education'],
                platforms: ['Windows 8','Windows 10', 'Windows 11']
            }),
            price: 15000,
            downloadLink: 'https://www.mediafire.com/file/oa6lmus7zybfewt/VIDEOSCRIBE_FULL.zip/file'
        },
        {
            name: 'Adobe Photoshop CC 2019 (Extended Edition)', // Changed name
            image: 'images/photoshop2019.png',
            size: 1650,
            description: JSON.stringify({
                about: 'Adobe Photoshop CC 2019 remains a cornerstone tool for photographers, graphic designers, and digital artists, offering extensive editing capabilities.', // Rephrased
                features: ['Advanced Photo Editing Tools', 'Sophisticated Layer Management', 'Smart Object Functionality', 'Wide Range of Filters & Effects', 'Industry Standard for Image Manipulation'],
                platforms: ['Windows 8','Windows 10', 'Windows 11']
            }),
            price: 0, // Assuming free despite "Extended Edition"
            downloadLink: 'https://www.mediafire.com/file/2o8epf7o4k9n9n9/Adobe_Photoshop_CC_2019_20.0.7.28362x64_Multilingual.rar/file'
        },
        {
            name: 'DRPU Bulk SMS Software (Professional Edition)', // Changed name
            image: 'images/drpu.jfif',
            size: 5.4,
            description: JSON.stringify({
                about: 'DRPU Bulk SMS provides a robust solution for sending bulk SMS messages directly from your computer to mobile phones using connected devices or gateways.', // Rephrased
                features: ['Bulk SMS Sending Capability', 'Multi-Language Message Support', 'Delivery Status Reports', 'Group Messaging Options', 'Import Contacts from Excel/Files'],
                platforms: ['Windows 7','Windows 8','Windows 10', 'Windows 11']
            }),
            price: 20000,
            downloadLink: 'https://www.mediafire.com/file/3qz60ts8sac8nmy/DRPU_FULL_VERSION.zip/file'
        },
        {
            name: 'Everything - Instant File Search Utility (Free)', // Changed name
            image: 'images/everything.png',
            size: 1.71,
            description: JSON.stringify({
                about: 'Everything is a free Windows utility that provides incredibly fast searching for files and folders by name across your drives.', // Rephrased
                features: ['Instant File Name Search', 'Minimal System Resource Usage', 'Real-Time Index Updating', 'Supports NTFS Volumes', 'Advanced Search Syntax Options'],
                platforms: ['Windows 7','Windows 8','Windows 10', 'Windows 11']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/bxpf3p7i7913i85/Everything-1.4.1.1022.x86-Setup.exe/file'
        },
        {
            name: 'Smule Karaoke App (Enhanced Access)', // Changed name
            image: 'images/smule.jfif',
            size: 60.6,
            description: JSON.stringify({
                about: 'Smule is a popular Android application for singing karaoke-style songs, recording performances, and collaborating with others online.', // Rephrased
                features: ['Sing Karaoke with Friends', 'Record & Edit Vocal Performances', 'Collaborate with Users Worldwide', 'Apply Special Audio Effects', 'Access a Large Song Library'],
                platforms: ['Android']
            }),
            price: 0,
            downloadLink: 'https://www.mediafire.com/file/ztria67no9qumyf/Smule_v7.4.3.1_MOD_apkmody.io.apk/file'
        }
    ];

    // --- Rest of the code remains the same ---

    const itemsPerPage = 12;
    let currentPage = 0;
    let filteredItems = softwareItems;
    let activeItem = null;

    function formatPrice(price) {
        // Format TZS price or return "Free"
        if (price === 0) {
            return "Free";
        }
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " TZS";
    }

    function displayItems(page) {
        const softwareList = document.getElementById('software-list');
        softwareList.innerHTML = ''; // Clear existing items
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = filteredItems.slice(start, end);

        if (paginatedItems.length === 0 && page === 0) {
             document.getElementById('no-results-message').style.display = 'block';
        } else {
             document.getElementById('no-results-message').style.display = 'none';
        }


        paginatedItems.forEach(item => {
            const softwareItem = document.createElement('div');
            softwareItem.className = 'software-item';

            // Add price display to the card itself
            const priceText = formatPrice(item.price);
            const priceClass = item.price === 0 ? 'price-free' : 'price-paid';

            softwareItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="software-image">
                <p class="item-name">${item.name}</p>
                <p class="item-price ${priceClass}">${priceText}</p> <!-- Added Price Display -->
            `;
            softwareItem.addEventListener('click', () => {
                // Optional: Add active class styling if needed
                // if (activeItem) {
                //     activeItem.classList.remove('active');
                // }
                // softwareItem.classList.add('active');
                // activeItem = softwareItem;

                // Navigate to download page
                window.location.href = `download.html?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}&size=${encodeURIComponent(item.size)}&description=${encodeURIComponent(item.description)}&price=${encodeURIComponent(formatPrice(item.price))}&downloadLink=${encodeURIComponent(item.downloadLink)}`;
            });
            softwareList.appendChild(softwareItem);
        });

        // Update pagination button states
        document.getElementById('prev-btn').disabled = page === 0;
        document.getElementById('next-btn').disabled = end >= filteredItems.length;
    }

    function searchItems(query) {
        const lowerCaseQuery = query.toLowerCase().trim();
        if (lowerCaseQuery === '') {
             filteredItems = softwareItems; // Show all if search is empty
        } else {
            filteredItems = softwareItems.filter(item =>
                item.name.toLowerCase().includes(lowerCaseQuery)
            );
        }
        currentPage = 0; // Reset to first page for new search
        displayItems(currentPage); // Display filtered results
    }

    // Event listener for search button
    document.getElementById('searchButton').addEventListener('click', () => {
        const query = document.getElementById('searchBar').value;
        searchItems(query);
    });

    // Optional: Add listener for Enter key in search bar
     document.getElementById('searchBar').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission if it were a form
            searchItems(this.value);
        }
     });

    // Event listener for Previous button
    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            displayItems(currentPage);
        }
    });

    // Event listener for Next button
    document.getElementById('next-btn').addEventListener('click', () => {
        const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        if (currentPage < totalPages - 1) {
            currentPage++;
            displayItems(currentPage);
        }
    });

    // Initial display of items on page load
    displayItems(currentPage);

    // Add event listener for the request program button
    document.getElementById('requestProgramButton').addEventListener('click', function () {
        // WhatsApp link with predefined message
        const phoneNumber = '+255620428389'; // Keep primary number
        const message = encodeURIComponent('Hello Someless, I would like to request a specific program.'); // Slightly more specific message
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        // Use window.open for potentially better compatibility, especially on mobile
        window.open(whatsappUrl, '_blank');
    });

});