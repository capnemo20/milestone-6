function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

// steps to show  data in the UI
// 1. get the container element where you want to add the new element
// 2. create child element
// 3. set InnerText or innerHTML
// 4. appendChild

function displayPosts(posts) {
  const postContainer = document.getElementById("posts-container");
  for (const post of posts) {
    console.log(post);
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
    
    <h4>User- ${post.id}</h4>
    <h5>Post: ${post.title} </h5>
    <p>Post Description: ${post.body} </p>
    `;
    postContainer.appendChild(postDiv);
  }
}

loadPosts();
