const employeeServices = require("../services/employee.services")

const employeesControllers = {
    getEmployees: async (req, res) => {
        try {
            const employees = await employeeServices.getEmployees()
            res.json(employees)
        } catch (error) {
            res.status(500).json({ error: error.message})
        }
        
    },

    createEmployee: async (req, res) => {
        try {
            const employee = await employeeServices.createEmployee(req.body)
            res.json(employee)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    deleteEmployee: async (req, res) => {
        try {
            const employee = employeeServices.deleteEmployee(req.params.id)
            res.json( employee )
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    modifyEmployee: async(req, res) => {
        try {
            const employee = await employeeServices.modifyEmployee(req.params.id, req.body)
            res.json(employee)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }


}

module.exports = employeesControllers