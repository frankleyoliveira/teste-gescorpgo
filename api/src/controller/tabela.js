import { openDb } from '../configDB.js'

export async function selectTabela(req, res) {
  openDb().then(db => {
    db.all('SELECT * FROM tabela')
    .then(registros => res.json(registros))
  })
}