window.onload = function() {
  // Check if the URL contains 'opac/opac_details/'
  if (window.location.pathname.includes('/opac/opac_details/')) {
    // Get the book title from the element with class 'book-title-trd'
    const bookTitleElement = document.querySelector('.book-title-trd');
    if (bookTitleElement) {
      const bookTitle = bookTitleElement.textContent.trim();
      if (bookTitle) {
        // Create the Amazon search URL
        const amazonSearchUrl = `https://www.amazon.co.jp/s?k=${encodeURIComponent(bookTitle)}&i=stripbooks`;

        // Create a new element to display the Amazon search link
        const linkElement = document.createElement('a');
        linkElement.href = amazonSearchUrl;
        linkElement.textContent = 'この本をAmazonで検索する';
        linkElement.style.display = 'block';
        linkElement.style.marginBottom = '10px';

        // Insert the new element before the element with class 'book-title'
        const bookTitleContainer = document.querySelector('.book-title');
        if (bookTitleContainer) {
          bookTitleContainer.parentNode.insertBefore(linkElement, bookTitleContainer);
        }
      }
    }
  }
};
