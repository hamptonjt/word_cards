const fastify = require('fastify')({
  logger: true
})

fastify.register(require('fastify-cors'), {
  origin: '*'
})

fastify.register(require('./db_connector'))
fastify.register(require('./words'))

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
