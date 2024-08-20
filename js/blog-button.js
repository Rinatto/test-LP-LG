document.querySelectorAll('.blog-title').forEach(function(element) {
    let text = element.textContent;
    if (text.length > 150) {
        element.textContent = text.substring(0, 150) + '…';
    }
});