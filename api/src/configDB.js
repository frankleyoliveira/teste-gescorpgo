import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export async function openDb() {
  return open({
    filename: './banco_sqlite.db',
    driver: sqlite3.Database
  })
}