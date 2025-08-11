import 'reflect-metadata'
import * as dotenv from 'dotenv'
dotenv.config()

import { NestFactory } from '@nestjs/core'
import { AppModule } from './module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  const port = process.env.PORT || 4000
  await app.listen(port as number)
  // eslint-disable-next-line no-console
  console.log(`API listening on http://localhost:${port}`)
}
bootstrap()
