require('dotenv').config()
const Redis = require('ioredis')

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379')

async function main() {
  console.log('Worker connected to', redis.options.host)
  // Placeholder: consume a queue later (BullMQ, etc.)
  setInterval(() => console.log('worker heartbeat'), 10000)
}
main().catch(console.error)
