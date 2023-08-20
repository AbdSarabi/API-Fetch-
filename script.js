async function fetchData() {
  let url = 'https://jsonplaceholder.typicode.com/posts'
  let response = await fetch(url)
  let posts = await response.json()

  let arr = [...posts]
  console.log(arr);
  let pContainer = document.querySelector(".container")
  arr.map(post => {
    pContainer.innerHTML += `
    <li style = "border: solid; padding: 20px; list-style-type: none; margin:4vh auto;" >
        <h2>${post.id} - ${post.userId}</h2>
        <div>
          <h2>Title:</h2>
          <p>
            ${post.title}
          </p>
        </div>
        <div>
          <h2>Body:</h2>
          <p>
           ${post.body}
          </p>
        </div>
      </li>
      `
  })
}

fetchData()


// style for li
//   style="
// border: solid;
// padding: 20px;
// list - style - type: none;
// margin: 4vh auto;
// "










