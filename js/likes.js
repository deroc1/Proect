document.addEventListener("DOMContentLoaded", function() {
    // Select the like button and the like count display
    const likeButton = document.getElementById('like-button');
    const likeCountDisplay = document.getElementById('like-count');
  
    // Initialize like count based on current display
    let likeCount = parseInt(likeCountDisplay.textContent);
  
    // Add event listener for the like button
    likeButton.addEventListener('click', function() {
      // Increment the like count
      likeCount++;
      
      // Update the displayed like count
      likeCountDisplay.textContent = likeCount;
    });
  });
  