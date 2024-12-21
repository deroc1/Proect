// let commentForm = document.querySelector('.comment-form');
// let commentList = document.querySelector('.comment-list');
// let commentField = document.querySelector('.comment-field');
// let charCounter = document.querySelector('.char-counter');
// let submitButton = document.querySelector('.submit-button');
// commentList.append('Новий коментар');
// commentForm.addEventListener('submit', function(evt)) {
//     let newComment = document.createElement('li');
//     commentList.append(newComment);
// }

// Select the necessary elements from the DOM
// let commentField = document.querySelector('.new-comment input'); // Input field for new comments
// let commentList = document.querySelector('.comments'); // Container for comments
// let charCounter = document.createElement('div'); // Create a character counter element
// commentList.appendChild(charCounter); // Append the character counter to the comments section

// // Initialize character counter
// const maxChars = 200; // Maximum character limit
// commentField.addEventListener('input', function() {
//     let remainingChars = maxChars - commentField.value.length; // Calculate remaining characters
//     charCounter.textContent = `Characters remaining: ${remainingChars}`;
// });

// // Handle form submission (adding a new comment)
// commentField.addEventListener('keypress', function(evt) {
//     if (evt.key === 'Enter') { // Check if Enter key is pressed
//         evt.preventDefault(); // Prevent default behavior

//         let commentText = commentField.value.trim(); // Get and trim the input value

//         // Check if the comment is not empty
//         if (commentText) {
//             // Create a new div for the comment
//             let newComment = document.createElement('div');
//             newComment.classList.add('comment'); // Add class for styling
//             let commentNumber = document.createElement('span');
//             commentNumber.classList.add('comment-number');
//             commentNumber.textContent = `#${document.querySelectorAll('.comment').length + 1}`; // Incremental comment number
            
//             // Set the text of the new comment
//             newComment.appendChild(commentNumber);
//             newComment.append(` ${commentText}`);

//             // Append the new comment to the comments section
//             commentList.appendChild(newComment);

//             // Clear the input field and reset character counter
//             commentField.value = '';
//             charCounter.textContent = `Characters remaining: ${maxChars}`; // Reset counter
//         } else {
//             alert('Будь ласка, введіть коментар перед відправкою.'); // Alert for empty comments
//         }
//     }
// });

// Assuming this script is placed in js/index.js or similar

// document.addEventListener("DOMContentLoaded", function() {
//     // Select the form and comment list
//     const form = document.querySelector('.form');
//     const commentList = document.querySelector('.comment-list');
  
//     // Handle form submission
//     form.addEventListener('submit', function(event) {
//       event.preventDefault(); // Prevent the default form submission
  
//       // Get the input value
//       const input = form.querySelector('.input');
//       const commentText = input.value.trim();
  
//       // Check if the input is not empty
//       if (commentText) {
//         // Create a new list item for the comment
//         const newComment = document.createElement('li');
//         newComment.classList.add('comment-item'); // Optional: Add a class for styling
//         newComment.textContent = commentText; // Set the text content of the new comment
  
//         // Append the new comment to the comment list
//         commentList.appendChild(newComment);
  
//         // Clear the input field after submission
//         input.value = '';
//       } else {
//         alert("Будь ласка, введіть коментар."); // Alert if input is empty
//       }
//     });
//   });
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const input = document.querySelector('.input');
    const commentList = document.querySelector('.comment-list');
    const commentCounter = document.querySelector('.namber');

    let commentCount = 0; // Initialize comment count

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      const commentText = input.value.trim(); // Get input value and trim whitespace

      if (commentText) {
        // Create a new list item for the comment
        const newComment = document.createElement('li');
        newComment.textContent = commentText;

        // Append the new comment to the comment list
        commentList.appendChild(newComment);

        // Increment and update the comment count
        commentCount++;
        commentCounter.textContent = `#${commentCount}`;

        // Clear the input field
        input.value = '';
      } else {
        alert('Будь ласка, введіть коментар!'); // Alert if input is empty
      }
    });
  });