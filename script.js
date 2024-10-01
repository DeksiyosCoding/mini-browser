function search() {
    const input = document.getElementById('urlInput').value;
    const frame = document.getElementById('browserFrame');
    
    // If the input is a valid URL, load it directly
    if (input.startsWith('http://') || input.startsWith('https://')) {
        frame.src = input;
    } 
    // Otherwise, assume it is a search term and search via Bing
    else {
        frame.src = 'https://www.bing.com/search?q=' + encodeURIComponent(input);
    }
}

