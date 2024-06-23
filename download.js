document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const programName = urlParams.get('name');
    const programImage = urlParams.get('image');
    const programSize = urlParams.get('size');
    const programDescription = JSON.parse(urlParams.get('description')); // Parse JSON description
    const programPrice = urlParams.get('price');
    const downloadLink = urlParams.get('downloadLink');

    document.getElementById('program-name').textContent = programName;
    document.getElementById('program-thumbnail').src = programImage;
    document.getElementById('program-size').textContent = `Size: ${programSize} MB`;
    document.getElementById('program-price').textContent = `Price: ${programPrice} TZS`;
    document.getElementById('download-link').href = downloadLink;

    // Display description details
    if (programDescription) {
        document.getElementById('program-about').textContent = programDescription.about || '';
        document.getElementById('program-features').innerHTML = programDescription.features
            ? programDescription.features.map(feature => `<li>${feature}</li>`).join('')
            : '';
        document.getElementById('program-platforms').innerHTML = programDescription.platforms
            ? programDescription.platforms.map(platform => `<li>${platform}</li>`).join('')
            : '';
    }
});
