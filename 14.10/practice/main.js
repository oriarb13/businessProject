console.log('main.js');

const postListElement = document.querySelector('#post-list');

const getAllPosts = async () => {
    try {
      const { data: fetchedData } = await axios.get('https://api-playground-ten.vercel.app/posts');
      localStorage.setItem("database-data",  JSON.stringify(fetchedData))
      fetchedData.forEach((post) => {
            // console.log(post.title);
            // localStorage.setItem(`post-${post._id}`, JSON.stringify(post));
            postListElement.innerHTML += (`
                <li>
                    <div>
                        <h2>${post.title}</h2>
                        <p>${post.content}</p>
                    </div>
                </li>    
            `)
        });
    } catch (error) {
      console.error('Error fetching posts:', error.response?.data || error.message);
    }
  };

getAllPosts(); 

//11
document.getElementById('createPostForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    fetch('https://api.example.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
    }).then(response => response.json())
      .then(data => {
          document.getElementById('successMessage').innerText = 'Post created successfully!';
          document.getElementById('title').value = '';
          document.getElementById('content').value = '';
      }).catch(error => {
          document.getElementById('errorMessage').innerText = error.message;
      });
});

// 12
document.getElementById('updatePostForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementById('postId').value;
    const title = document.getElementById('newTitle').value;
    const content = document.getElementById('newContent').value;

    fetch(`https://api.example.com/posts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
    }).then(response => response.json())
      .then(data => {
          document.getElementById('successMessage').innerText = 'Post updated successfully!';
      }).catch(error => {
          document.getElementById('errorMessage').innerText = error.message;
      });
});

// 13
document.getElementById('deletePostButton').addEventListener('click', function () {
    const id = document.getElementById('deletePostId').value;

    fetch(`https://api.example.com/posts/${id}`, {
        method: 'DELETE',
    }).then(response => response.json())
      .then(data => {
          document.getElementById('successMessage').innerText = 'Post deleted successfully!';
      }).catch(error => {
          document.getElementById('errorMessage').innerText = error.message;
      });
});

// 14: Add a Loading Indicator
function toggleLoading(show) {
    document.getElementById('loading').style.display = show ? 'block' : 'none';
}

// 18
let offset = 0;
const limit = 5;

function fetchPosts() {
    toggleLoading(true);
    fetch(`https://api.example.com/posts?_start=${offset}&_limit=${limit}`)
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.innerText = post.title;
                document.getElementById('postsContainer').appendChild(postDiv);
            });
            offset += limit;
        }).finally(() => toggleLoading(false));
}

document.getElementById('showMoreButton').addEventListener('click', fetchPosts);
fetchPosts();







const { contact: { phone} } = {
    name: 'John Doe',
    age: 25,
    email: 'banana@gmail.com',
    contact: {
        phone: '0585109829'
    }
}

// console.log(user.name);

console.log(phone);

