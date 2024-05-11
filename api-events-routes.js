const router = require('express').Router()

const { MongoClient, ObjectId } = require('mongodb')

const url = process.env.MONGODB_URI || require('./secrets/mongodb.json').url
const client = new MongoClient(url)

const getCollection = async (dbName, collectionName) => {
    await client.connect()
    return client.db(dbName).collection(collectionName)
}

router.get('/', async (_, response) => {
    const collection = await getCollection('Final-Project-Api', 'events')
    const events = await collection.find({}).toArray()
    const filteredEvent = events.map(({ id, name }) => ({ id, name }))
    response.json(filteredEvent)
  })

  router.get('/:id', async (request, response) => {
    const { id } = request.params;
    const collection = await getCollection('Final-Project-Api', 'events')
    const event = await collection.findOne({ _id: new ObjectId(id) })
    const filteredEvent = {
      name: event.name, location: event.location,
      dates: event.dates, hours: event.hours
    }
    response.json(filteredEvent)
  })

router.post('/', async (request, response) => {
    const { name, location, dates, hours } = request.body
    const collection = await getCollection('Final-Project-Api', 'events')
    await collection.insertOne({ name, location, dates, hours })
    response.send('New event made')
})

router.put('/:id', async (request, response) => {
    const { id } = request.params;
    const { name, location, dates, hours } = request.body;
    const collection = await getCollection('Final-Project-Api', 'events');
    collection.findOneAndUpdate(
        { _id: id },
        { $set: { name, location, dates, hours } },
        { returnOriginal: false }    )
        response.send('Event updated')
})

router.delete('/:id', async (request, response) => {
    const { id } = request.params;
    const collection = await getCollection('Final-Project-Api', 'events');
    collection.deleteOne({ _id: new ObjectId(id) })
    response.send('Event deleted')
 })
module.exports = router