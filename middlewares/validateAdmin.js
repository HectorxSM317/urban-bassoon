const _allowedAdminsRoles = ['admin']

const validateAdmin = (req, res, next) => {
    if(!req.user || !_allowedAdminsRoles.includes(req.user.role)){
        return res.status(401).json({ error: 'Permission denied.'})
    } 
    next()
}

module.exports = { validateAdmin }