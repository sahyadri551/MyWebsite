const promise1 = new Promise( function(resolve, reject) {
    // do an async tasks like:
    // - fetching data
    // - network request
    // - timeout
    // - file read
    // - file write
    // - crypytography
    setTimeout(() => {
        console.log("Promise 1 resolved");
        resolve();
    }, 2000);
    
})

promise1.then((value) => {
    console.log("Promise consumed value:", value);
})

new Promise( function(resolve, reject) {
    setTimeout(() => {
        console.log("Promise 2");
        resolve("Resolved value");
    }, 2000);
    
}).then((value) => {
    console.log("Promise consumed value:", value);
})

promise3 = new Promise( function(resolve, reject) {
    setTimeout(() => {
        error=false;
        if (error) {
            reject("Something went wrong");
        } else {
            resolve({username: "John", useremail: "K9TtW@example.com"});
        }
    }, 2000);
    
})

promise3.then((value) => {
    console.log("Promise consumed value:", value);
    return value.username;
}).then((value) => {
    console.log("username:", value);
}).catch((error) => {
    console.log("Error:", error);
}).finally(() => {
    console.log("Promise finished executing(either resolved or rejected).");
})

const promise4 = new Promise( function(resolve, reject) {
    setTimeout(() => {
        error=false;
        if (error) {
            reject("Something went wrong");
        } else {
            resolve({username: "John", useremail: "K9TtW@example.com"});
        }
    }, 2000);
    
})

async function consumePromise() {
    try {
        const value = await promise4;
        console.log("Promise consumed value:", value);
        const username = await value.username;
        console.log("username:", username);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Promise finished executing(either resolved or rejected).");
    }
}

consumePromise();

// handling api

// async function consumeApi() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error);
//     } finally {
//         console.log("Promise finished executing(either resolved or rejected).");
//     }
    
// }

async function consumeApi() {
    await fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log("Error:", error);
        })
        .finally(() => {
            console.log("Promise finished executing(either resolved or rejected).");
        })
    
}

consumeApi();