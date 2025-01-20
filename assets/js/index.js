function mostrarApi() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts/";
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        listadoPost(response);
        console.log(response);
      });
  } catch (error) {
    console.error("Error de red:", error);
  }
}

function listadoPost(posts) {
  let htmlPost = "";
  const divPost = document.getElementById("posts");
  for (const post of posts) {
    htmlPost += `
    <div class="col-sm-12 col-md-4" >
        <div class="card mb-1 mt-1" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${post.id}-${post.title}</h5>
                <p class="card-text">${post.body}</p>
                <a href="#" class="card-link">Like</a>
                <a href="#" class="card-link">Comment</a>
            </div>
        </div>
    </div>
        `;
  }
  divPost.innerHTML = htmlPost;
}
