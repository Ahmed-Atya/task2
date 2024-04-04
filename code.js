function openTab(tabName) {
    var i, tabcontent;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "flex";
}

document.querySelectorAll('.slider-container').forEach(function(slider) {
    var isDragging = false,
        startPosition,
        currentTranslate = 0;

    slider.addEventListener('mousedown', function(event) {
        isDragging = true;
        startPosition = event.clientX;
    });

    slider.addEventListener('mousemove', function(event) {
        if (isDragging) {
            var diff = event.clientX - startPosition;
            currentTranslate += diff;
            this.style.transform = 'translateX(' + currentTranslate + 'px)';
            startPosition = event.clientX;
        }
    });

    slider.addEventListener('mouseup', function() {
        isDragging = false;
        revealHiddenCard(this);
    });

    slider.addEventListener('mouseleave', function() {
        isDragging = false;
        revealHiddenCard(this);
    });
});

function revealHiddenCard(slider) {
    var visibleCards = slider.querySelectorAll('.visible');
    var hiddenCards = slider.querySelectorAll('.hidden');
    
    if (hiddenCards.length > 0) {
        // Hide the first visible card
        visibleCards[0].classList.remove('visible');
        visibleCards[0].classList.add('hidden');

        // Show the first hidden card
        hiddenCards[0].classList.remove('hidden');
        hiddenCards[0].classList.add('visible');
    }
}
