const loadButton = document.getElementById("load-btn");
const commentsContainer = document.getElementById("comments-container");
const commentsForm = document.getElementById("comments-form");
const commentName = document.getElementById("name");
const commentText = document.getElementById("comment");
const dialog = document.querySelector("dialog");
const dialogButton = document.getElementById("close-dialog");
const errorDescription = document.getElementById("error-description");

async function saveComment(event) {
  event.preventDefault();

  const userName = commentName.value;
  const userComment = commentText.value;

  const enteredComment = { name: userName, comment: userComment };

  try {
    const response = await fetch("/comments", {
      method: "POST",
      body: JSON.stringify(enteredComment),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      fetchComments();
    } else {
      errorDescription.textContent = "Could not send comment!";
      dialog.showModal();
    }
  } catch (error) {
    errorDescription.textContent =
      "Could not send request - try again later!";
    dialog.showModal();
  }
}

function displayComments(comments) {
  const commentsList = document.createElement("ul");
  for (const comment of comments) {
    const commentCard = document.createElement("li");
    commentCard.innerHTML = `
        <p><strong>${comment.name}</strong> - ${comment.comment} </p>
                `;
    commentsList.appendChild(commentCard);
  }
  return commentsList;
}

async function fetchComments() {
  try {
    const response = await fetch("/comments");
    if (!response.ok) {
      errorDescription.textContent = "Fetching comments failed!";
      dialog.showModal();
      return;
    }

    const data = await response.json();

    if (data && data.length > 0) {
      const commentsListElement = displayComments(data);
      commentsContainer.innerHTML = "";
      commentsContainer.appendChild(commentsListElement);
    } else {
      const emptyMessage = document.createElement("p");
      emptyMessage.textContent =
        "We could not find any comments yet. Be the first one to add one!";
      commentsContainer.appendChild(emptyMessage);
    }
  } catch (error) {
    errorDescription.textContent = "Fetching comments failed";
    dialog.showModal();
  }
}

dialogButton.addEventListener("click", () => {
  dialog.close();
});

commentsForm.addEventListener("submit", saveComment);
loadButton.addEventListener("click", fetchComments);
