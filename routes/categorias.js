const express = require('express')
const router = express.Router()
const controller = require('../controllers/categorias')

//incluir dados
router.get('/nova', controller.novaForm)

router.post('/nova', controller.nova)

// listar dados
router.get('/', controller.list)

//excluir dados
router.get('/excluir/:id', controller.excluir )

//editar dados
router.get('/editar/:id', controller.editarForm)

router.post('/editar/:id', controller.editar)

module.exports = router 