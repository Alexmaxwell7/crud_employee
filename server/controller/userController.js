const Employee = require('../model/user');
const mongoose = require ('mongoose');
//insert employee 
exports.insertEmployee = async(req,res)=>{
    const emp = req.body;
    const employee = new Employee(emp);
    try{
        await employee.save();
        res.status(201).json({msg: 'success',employee});
    }catch(error){
        res.status(400).json({message:error.message});
    }
}
//get employee details
exports.getEmployee = async(req,res)=>{
    try{
        const employee  = await Employee.find({ isView: true });
        res.status(200).json(employee);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}
//get employeeby id
exports.getEmployeeById = async(req,res)=>{
    try{
        const employee  = await Employee.find({ _id:mongoose.Types.ObjectId(req.params.id)});
        res.status(200).json(employee);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}

//update employee details
exports.updateEmployee = async(req,res)=>{
    var employeeToUpdate = req.params.id;
    var emp_data=req.body;
  
    Employee.update({ _id:mongoose.Types.ObjectId(employeeToUpdate)}, emp_data,  (err, result)=> {
        res.send(
            (err === null) ? {msg: 'sucess',emp_data } : {msg: err}
        );
    });
}
//remove employee details
exports.removeEmployee = async(req,res)=>{

    var employeeToUpdate = req.params.id;
    var emp_data=req.body;
  
    Employee.update({ _id:mongoose.Types.ObjectId(employeeToUpdate)}, emp_data,  (err, result)=> {
        res.send(
            (err === null) ? {msg: 'sucess',emp_data } : {msg: err}
        );
    });
}