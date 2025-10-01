import axios from 'axios';

async function getUsers() {
  return getAxios(`https://jsonplaceholder.typicode.com/users`);
}

async function getUserPosts(userID) {
  return getFetch(`https://jsonplaceholder.typicode.com/posts`, {
    userId: userID
  });
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

// for the function that calls getFetch and getAxios,
// must see them in the same way, this is the objective of facade
async function getFetch(url, params = {}) {
  const queryString = Object.entries(params).map(param => {
    return `${param[0]}=${param[1]}`;
  }).join('&');
  return fetch(`${url}?${queryString}`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  }).then((res) => res.json());
}

async function getAxios(url, params = {}) {
  return axios({
    url,
    params,
    method: 'GET'
  }).then((res) => res.data);
}
