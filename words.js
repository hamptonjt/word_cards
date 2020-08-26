async function routes (fastify, options) {
  const words_collection = fastify.mongo.db.collection('words')

  fastify.get('/words', async (request, reply) => {
    const result = await words_collection.find().toArray()
    if (result.length === 0) {
      throw new Error('No documents found')
    }
    return result
  })

  fastify.get('/words/:word', async (request, reply) => {
    const result = await words_collection.findOne({ word: request.params.word })
    if (result.length === null) {
      throw new Error('Invalid value')
    }
    return result
  })

  fastify.get('/words/set', async (request, reply) => {
    const result = await words_collection.find().toArray()
    let setResult = []
    if (result.length === 0) {
      throw new Error('No documents found!')
    } else {
      result.map(word => {
        if (!setResult.includes(word.set)) {
          setResult.push(word.set)
        }
      })
    }
    return setResult
  })

  fastify.get('/words/set/:id', async (request, reply) => {
    setId = Number(request.params.id)
    const result = await words_collection.find({ set: setId }).toArray()
    if (result.length === 0) {
      throw new Error('No documents found for set!')
    }
    return result
  })

  fastify.post('/words', async (request, reply) => {
    const word = request.body.word
    const set = request.body.set

    const result = await words_collection.insertOne({word, set})
    
    return result.insertedCount
  })

}

module.exports = routes
