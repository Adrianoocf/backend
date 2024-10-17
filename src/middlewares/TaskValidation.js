const TaskModel = require('../models/TaskModel')
const { isPast } = require('date-fns')

const TaskValidation = async (req, res, next) => {
    const { macaddress, type, title, description, when } = req.body;
    if (!macaddress)
        return res.status(400).json({ error: "macaddres é obrigatório" })
    else if (!type)
        return res.status(400).json({ error: "type é obrigatório" })
    else if (!title)
        return res.status(400).json({ error: "title é obrigatório" })
    else if (!description)
        return res.status(400).json({ error: "description é obrigatório" })
    else if (!when)
        return res.status(400).json({ error: "Data e hora são obrigatórios" })
    else if (isPast(new Date(when)))
        return res.status(400).json({ error: "Escolha data e hora futura" })
    else {
        let exists;

        if (req.params.id) {
            exists = await TaskModel.
                findOne({
                    '_id': { '$ne': req.params.id }, // ignora haver um id e autoriza atualizar ele mesmo
                    'when': { '$eq': new Date(when) },
                    'macaddress': { '$in': macaddress }
                })
        }
        else {
            exists = await TaskModel.
                findOne({
                    'when': { '$eq': new Date(when) },
                    'macaddress': { '$in': macaddress }
                })
            if (exists)
                return res.status(400).json({ error: "Já existe uma tarefa para essa data e hora em seu dispositivo" })
        }
        next()
    }
}

module.exports = TaskValidation