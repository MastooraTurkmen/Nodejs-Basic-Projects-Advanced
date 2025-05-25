// Many documents relate to many others.

// Student Schema

const studentSchema = new mongoose.Schema({
    name: String,
    courses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }
})


// Course Schema

const courseSchema = new mongoose.Schema({
    title: String,
    students: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }
})