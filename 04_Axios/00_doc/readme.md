# How to make http requests with axios

The most common way for frontend programs to communicate with servers is through the http protocol. Below interfaces are usually used to fetch resources and make http requests:

- Fetch API

- XMLHttpRequest

Axios : client HTTP API based on the XMLHttpRequest interface provided by browsers.

## Why Axios ?

As with Fetch, Axios is promise-based. However, it provides a more powerful and flexible feature set. Advantages over the native Fetch API include:

- Request and response interception

- Streamlined error handling

- Protection against XSRF

- Support for upload progress

- Response timeout

- The ability to cancel the request

- Automatic JSON data transforming

## Installation

- Using npm:

    ```
    npm install axios
    ```

- Or a CDN:

    ```
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    ```

## Making requests

Making an HTTP request is as easy as passing a config object to the Axios function. 

In its simplest form, the object must have a url property; if no method is provided, GET will be used as the default value. Let’s look at a simple example:

```
// send a POST request
axios({
    method: 'POST',
    url: '/login',
    data: {
        firstName: "Nguyen",
        lastName: "Hoai Phuong"
    }
})
```

## Shorthand methods

Axios also provides a set of shorthand methods for performing different types of requests:

*   ```
    axios.request(config)
    ```

*   ```
    axios.get(url[, config])
    ```

*   ```
    axios.delete(url[, config])
    ```

*   ```
    axios.head(url[, config])
    ```

*   ```
    axios.options(url[, config])
    ```

*   ```
    axios.post(url[, config])
    ```

*   ```
    axios.put(url[, config])
    ```

*   ```
    axios.patch(url[, config])
    ```

For instance, previous example could be written using the axios.post method:

```
axios.post('/login', {
    firstName: "Nguyen",
    lastName: "Hoai Phuong"
});
```

## Handling the response

Once an HTTP request is made, Axios returns a promise that is either fulfilled or rejected, depending on the response from the backend service. To handle the result, you can use the then() method like this:

```
axios.post('/login', {
    firstName: "Nguyen",
    lastName: "Hoai Phuong"
}).then((response) => {
    console.log(respose)
}, (error) => {
    console.log(error)
});
```


