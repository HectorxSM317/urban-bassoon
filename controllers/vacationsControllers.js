const vacationsServices = require("../services/vacations.service")


const vacationsControllers = {
    vacationsRequest: async (req, res) => {
        try {
            const { dateStart, dateEnd } = req.query
            const userId = req.user.id
            const request = await vacationsServices.vacationsRequest({ userId, dateStart, dateEnd})
            res.json( request )
        } catch (error) {
            res.status(500).json({ error: error.message })
        }

    }
}

module.exports = vacationsControllers