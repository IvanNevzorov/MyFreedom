// Fetch (URL, Method, Body, Headers)
// fetch("https://jsonplaceholder.typicode.com/posts/1").then().catch()

function customFetch(url, { method = "GET", body = null, headers = {} }) {
  const _promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.send(body);

    xhr.onload = (event) => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
      reject(xhr.status);
    };

    xhr.onerror = (error) => {
      reject(error);
    };
  });

  return _promise;
}

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => console.log(data));

// () => {}; // возвращает undefined

// () => {
//   return 1;
// }; // возвращает 1

// () => 1; // возвращает 1

// let result = () =>  1;
// console.log(result());

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response1) => response1.text())
  .then((data1) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/1/${data1}`);
  })
  .then((response2) => response2.json())
  .then((data2) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/1/${data2}`);
  })
  .then((response2) => response2.blob())
  .then((data2) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/1/${data2}`);
  });
