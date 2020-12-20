const mongoose = require('mongoose');
const Department = require('./Department').schema;

const courseSchema = new mongoose.Schema({
    id: {
        type: String,
        unique:true
    },
    name :{ 
        type: String
    },
    department_name: {
        type: String
    },
    course_coverage: {
        type: Number
    
    },
    academic_coordinator_id: {
        type: String
    },
    slots: {
        type: []       //[slot]
    },
    numberOfAssignedSlots:{
        type: Number,
        default: 0
    },
    numberOfUnassignedSlots:{
        type: Number,
        default: 0
    }

    

})

module.exports = mongoose.model('course ashraf', courseSchema)
