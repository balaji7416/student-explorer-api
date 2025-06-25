//connecting to lowdb
import db from "../data/db.js"

// get all users (with optional filtering by course)
async function getAllUsers(req, res) {
    await db.read();
    let {course} = req.query;
    let result = db.data.students;

    if(course)
        result = result.filter(s => s.course.toLocaleLowerCase() === course.toLocaleLowerCase());

    res.json(result);
}

//get student by id
async function getUserById(req, res){
    await db.read();
    let id = parseInt(req.params.id);
    let user = db.data.students.find(s => s.id === id);
    
    if(!user) 
        return res.status(404).send("entry not found");

    res.json(user);
}

//add a new user
async function addUser(req, res){
    await db.read();

    let id = db.data.students.length > 0 ? db.data.students[db.data.students.length - 1].id + 1 : 1;
    let {name, age, course} = req.body;

    if(!name || !age || !course)
        return res.status(400).send("all fields are required");

    const user = {
        id: id,
        name: name,
        age: age,
        course: course
    };

    db.data.students.push(user);
    await db.write();

    res.status(201).json({message: "user added successFully", user: user});
}

//update user by id
async function updateUserbyId(req, res){
    await db.read();
    let id = parseInt(req.params.id);
    let user = db.data.students.find(s => s.id === id);

    if(!user) return res.status(404).send("user not found");
    let initialName = user.name;
    let initialAge = user.age;
    let initialcourse = user.course;

    const {name, age, course} = req.body;
    user.id = id;
    user.name = name || initialName;
    user.age = age || initialAge;
    user.course = course || initialcourse;

    await db.write();
    res.json({message:"user updated successfully", user:user});
}

//delete user by id
async function deleteUserbyId(req, res){
    await db.read();
    let id = parseInt(req.params.id);
    let userIndex = db.data.students.findIndex(s => s.id === id);

    if(userIndex === -1)
        return res.status(404).send("student not found");

    let removed = db.data.students.splice(userIndex,1);
    await db.write();
    res.json({message: "user removed successfully", user: removed});
}

export {
    getAllUsers,
    getUserById,
    addUser,
    updateUserbyId,
    deleteUserbyId
};