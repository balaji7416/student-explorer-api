
```markdown
# 🎓 Student Explorer API

A simple RESTful API built using **Express.js** for performing full CRUD operations on a collection of students. This project was created as part of an Express.js learning journey.

---

## 🚀 Features

- Get all students ✅
- Get a single student by ID ✅
- Add a new student ✅
- Update student info ✅
- Delete a student ✅
- Express Router-based modular structure ✅
- Handles invalid routes with a 404 response ✅

---

## 📂 Project Structure

```
student-explorer-api/
├── controllers/
│   └── studentController.js
├── routes/
│   └── students.js
├── app.js
└── package.json
```

---

## 📦 Tech Stack

- Node.js
- Express.js
- thunder client (for testing API)

---

## 📌 API Endpoints

| Method | Route              | Description            |
|--------|-------------------|------------------------|
| GET    | `/students`        | Get all students       |
| GET    | `/students/:id`    | Get a student by ID    |
| POST   | `/students`        | Add a new student      |
| PUT    | `/students/:id`    | Update student by ID   |
| DELETE | `/students/:id`    | Delete student by ID   |

---

## 🐞 Bug Encountered (and Slayed)

### ❌ Problem:
While starting the server, the following error was thrown:
```
TypeError: Missing parameter name at 1: https://git.new/pathToRegexpError
```

### 🔍 Cause:
The issue was caused by an **incompatible Express version (`5.x`)**, which had internal changes involving route parsing and `path-to-regexp`.

### ✅ Solution:
Downgraded Express to a stable `4.x` version:
```bash
npm install express@4
```
Problem solved. The app ran smoothly after that! 😎

---

## 📣 Author

**Ramala Karthik**  
Learning full-stack development & building cool stuff along the way.

---

## 🧠 Extra Notes

This project is purely backend. You can test the API using thunder client.

