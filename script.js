// script.js
window.onload = function () {
    AOS.init();

    let title = document.getElementById('title');
    let paragraph = document.getElementById('paragraph');
    let titleLines = title.innerHTML.split('<br>'); // Split the title into lines
    let paragraphText = paragraph.innerHTML;

    title.innerHTML = '';
    paragraph.innerHTML = '';

    let i = 0;
    let j = 0;
    let lineIndex = 0;

    function typeWriterTitle() {
        if (lineIndex < titleLines.length) {
            if (i < titleLines[lineIndex].length) {
                title.innerHTML += titleLines[lineIndex].charAt(i);
                i++;
                setTimeout(typeWriterTitle, 80);
            } else {
                title.innerHTML += '<br>'; // Add a line break after each line
                i = 0;
                lineIndex++;
                setTimeout(typeWriterTitle, 80);
            }
        } else {
            setTimeout(function () {
                document.querySelector('.titleLogo').classList.add('visible'); // Make the rocket visible with animation
                setTimeout(typeWriterParagraph, 1500); // Delay the start of the paragraph animation
            }, 400); // Delay before making the rocket visible
        }
    }

    function typeWriterParagraph() {
        if (j < paragraphText.length) {
            paragraph.innerHTML += paragraphText.charAt(j);
            j++;
            setTimeout(typeWriterParagraph, 20);
        }
    }

    typeWriterTitle(); // Start the title animation when the page loads
}