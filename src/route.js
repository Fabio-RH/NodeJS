import { Router } from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'

const router = Router()

// LISTAR TODAS AS SELEÇÕES
router.get('/selecoes', SelecaoController.index)

// LISTAR POR ID
router.get('/selecoes/:id', SelecaoController.show)

// CRIAR
router.post('/selecoes', SelecaoController.store)

// ATUALIZAR
router.put('/selecoes/:id', SelecaoController.update)

// DELETAR
router.delete('/selecoes/:id', SelecaoController.delete)

// EXTRA - LISTAR POR GRUPO
router.get('/selecoes/grupo/:grupo', SelecaoController.showByGroup)

export default router
