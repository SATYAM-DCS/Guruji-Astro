
# Guruji-Astro Assessment
# Node.js RESTful API for Todo App with JWT Authentication
# Requirements:
1. Implement a RESTful API using Node.js and Express to manage tasks in a Todo App.
2. Users should be able to create, read, update, and delete tasks using appropriate HTTP methods (POST, GET, PUT, DELETE).
3. Use MongoDB as the database to store task information, including task names, descriptions, and statuses (e.g., completed,
pending).
4. Implement JWT authentication using jsonwebtoken .
5. Users should be able to register, log in, and receive a JWT upon successful authentication.
6. Implement authorization to ensure that only authenticated users can perform CRUD operations on their own tasks.

# Tech Stack 
Nodejs, Express, MongoDB, jsonwebtoken





## Screenshots

[Register user -[POST] http://localhost:5000/api/v1/user/register][![registeruser.png](https://i.postimg.cc/N0wcB2RN/registeruser.png)](https://postimg.cc/mPVqSDXM)

[Login user -[POST] http://localhost:5000/api/v1/user/login]
[![login-User.png](https://i.postimg.cc/52ftSrR9/login-User.png)](https://postimg.cc/7fQDxK4j)

[createTask -[POST] http://localhost:5000/api/v1/task/create]
[![create-Task.png](https://i.postimg.cc/44zZ25tY/create-Task.png)](https://postimg.cc/c64VrfFW)

[getAllTask -[GET] http://localhost:5000/api/v1/task/get/all]
[![allTask.png](https://i.postimg.cc/BZCk1wHB/allTask.png)](https://postimg.cc/hhfpksCX)

[updateTask -[PUT] http://localhost:5000/api/v1/task/update/:id]
[![update-Task.png](https://i.postimg.cc/htRmWMZN/update-Task.png)](https://postimg.cc/8jwcLdSb)

[deleteTask -[DELETE] http://localhost:5000/api/v1/task/delete/:id]
[![delete-Task.png](https://i.postimg.cc/ryCsRcfZ/delete-Task.png)](https://postimg.cc/Z0n41kt6)
## Run Locally

Clone the project

```bash
  git clone https://github.com/SATYAM-DCS/Guruji-Astro.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm  start or node index.js
```
Open postman and check all routes
