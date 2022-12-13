const Employee = require('../models/Employee')

const employeesControllers = {
    getEmployees: async (req, res) => {
        try {
            const employees = await Employee.findAll()
            res.json(employees)
            
        } catch (error) {
            res.status(500).json({ error: error.message})
        }
        
    },

    createEmployee: async (req, res) => {
        console.log("req",req.body)
        try {
            const employee = await Employee.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                rut: req.body.rut,
                dateBirth: req.body.dateBirth,
                email: req.body.email,
                phone: req.body.phone,
                sex: req.body.sex,
                position: req.body.position
            })
            if(!employee) throw new Error('No se pudo crear el empleado')
            res.json(employee)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    deleteEmployee: async (req, res) => {
        try {
            const employee = Employee.destroy({ where: {id : req.params.id}})
            res.json( employee )
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    modifyEmployee: async(req, res) => {
        console.log("up",req.body)
        try {
            const employee = await Employee.upsert({ 
                id : req.params.id,
                firstName : req.body.firstName || employee.firstName,
                lastName : req.body.lastName || employee.lastName,
                rut : req.body.rut || employee.rut,
                dateBirth : req.body.dateBirth || employee.dateBirth,
                email : req.body.email || employee.email,
                phone : req.body.phone || employee.phone,
                sex : req.body.sex || employee.sex,
                position : req.body.sex || employee.position,
                
            })
            res.json(employee)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }


}

module.exports = employeesControllers