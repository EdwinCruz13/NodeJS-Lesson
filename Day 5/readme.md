# NodeJS-Lesson - Non-Blocking and Blocking code

<details open="">
  <summary><h2>✨Overview</h2></summary>
    <p dir="auto">
        One of the features which distinguishes Node.js is that it uses non-blocking code. Node is assumed to prevent blocking code by using a single-threaded event loop, a good idea in order to increase the performents in your application but, but, but.... 😫 😫 😫
        <br>
        🧐 Consider some scenarios in your application what it is necessary wait for any result of section of code as:
        <br>

- [x] Consume any REST API and waiting for results.
        <br>
- [x] Reading or Writing some data to a DB.
        <br>
- [x] Reading or Writing data from a file on FileSystem.
        <br>
<a href="#"> So, in this page, we will discuss the pro and cons using the non-blocking code and when we have to execute the application with blocking Code.</a>
        <br>  
    </p>

    <p dir="auto">
 **Firstly, define some concepts:**
        <br>
- Non-blocking Code: The function whose execution is not affected by other functions/tasks or in simple terms which are asynchronous in nature comes under non-blocking code.
        <br>
- Blocking Code : The function whose execution is affected by other functions/tasks or in simple terms which are synchronous in nature comes under blocking code.
     </p>
     <br>
     <img src = "https://github.com/EdwinCruz13/NodeJS-Lesson/blob/main/Day%205/resources/blocking%20and%20non%20blocking.png?raw=true" width = "100%" height="480">
</details>
