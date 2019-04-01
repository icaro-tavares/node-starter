import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { } from 'dotenv/config'

import routes from '@/routes'

let app = express()

if ((process.env.NODE_ENV === 'development')) app.use(morgan('dev'))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', routes)

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Servidor inicializado!`)
  console.log(`Host: ${process.env.APP_HOST}`)
  console.log(`Port: ${process.env.APP_PORT}`)
})

module.exports = app
