window.onload = function () {
  setTimeout(checkAndAddButton, 3000); // Wait for 3 seconds after the page has loaded (lazy hack)
};

function checkAndAddButton() {
  // Extract the chapter from the URL
  const url = window.location.href;
  const match = url.match(/martial-peak-(\d+)/);
  if (!match) {
    console.error('Chapter ID not found in the URL');
    return;
  }
  const currentChapterId = parseInt(match[1]);

  // Create next chapter button element
  const nextChapterButton = document.createElement('button');
  // add this static class
  nextChapterButton.class = 'U4UjyH'
  nextChapterButton.textContent = 'Next Chapter';
  nextChapterButton.style.color = 'white'; 
  nextChapterButton.style.cursor = 'pointer';
  nextChapterButton.style.marginLeft = 'auto'; // Align the button all the way to the right

  // Find the element with class "U4UjyH" (Share via link button)
  const linkButton = document.querySelector('.U4UjyH[aria-label="Share via link"]');

  // Insert the "Next Chapter" button after the "Share via link" button
  linkButton.parentNode.insertBefore(nextChapterButton, linkButton.nextSibling);

  // Add a click event listener to the "Next Chapter" button
  nextChapterButton.addEventListener('click', function () {
    // Increment the chapter and update the URL
    const nextChapterId = currentChapterId + 1;
    const nextUrl = url.replace(/martial-peak-(\d+)/, `martial-peak-${nextChapterId}`);
    window.location.href = nextUrl; 
}
