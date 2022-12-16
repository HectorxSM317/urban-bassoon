const Employee = require('../models/Employee')

const employeeServices = {
    getEmployees: async() => {
       return await Employee.findAll()
    },
    createEmployee: async(employee) => {
        const employee = await Employee.create({
            firstName: employee.firstName,
            lastName: employee.lastName,
            rut: employee.rut,
            dateBirth: employee.dateBirth,
            email: employee.email,
            phone: employee.phone,
            sex: employee.sex,
            position: employee.position
        })
        if(!employee) throw new Error('No se pudo crear el empleado')
        return employee
    },
    deleteEmployee: async(id) => {
        return await Employee.destroy({ where: {id}})
    },
    // modifyEmployee: async(id, employee) => {
    //     return await Employee.upsert({ 
    //         id,
    //         firstName : req.body.firstName || employee.firstName,
    //         lastName : req.body.lastName || employee.lastName,
    //         rut : req.body.rut || employee.rut,
    //         dateBirth : req.body.dateBirth || employee.dateBirth,
    //         email : req.body.email || employee.email,
    //         phone : req.body.phone || employee.phone,
    //         sex : req.body.sex || employee.sex,
    //         position : req.body.sex || employee.position,
            
    //     })
    // }
}

module.exports = employeeServices