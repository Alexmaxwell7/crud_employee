var express = require('express')
var router = express.Router()
const EmployeeController =require("../controller/userController");


//employee router define
router.get('/getemployee',EmployeeController.getEmployee);
router.get('/getemployeebyId/:id',EmployeeController.getEmployeeById);
router.put('/removeemployee/:id',EmployeeController.removeEmployee);
router.put('/updateemployee/:id',EmployeeController.updateEmployee);
router.post('/insertemployee',EmployeeController.insertEmployee);

module.exports = router
