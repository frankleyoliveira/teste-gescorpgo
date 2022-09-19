import { Router } from 'express'
import { selectTabela } from './controller/tabela.js'

const router = Router()

router.get('/', selectTabela)

export default router