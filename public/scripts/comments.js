const loadButton = document.getElementById("load-btn");
const commentsSection = document.getElementById("comments-container");

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
  const response = await fetch("/comments");
  const data = await response.json();

  const commentsListElement = displayComments(data);
  commentsSection.innerHTML = "";
  commentsSection.appendChild(commentsListElement);
}

loadButton.addEventListener("click", fetchComments);
