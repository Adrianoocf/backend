const MacaddressValidation = (req, res, next) => {
    if (!req.body.macaddress)
        return res.status(400).json({ error: 'Macadrres é obrigatório.' })
    else
        next()
}

module.exports = MacaddressValidation