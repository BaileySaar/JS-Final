const router = require('express').Router()

const { MongoClient, ObjectId } = require('mongodb')

const url = process.env.MONGODB_URI || require('./secrets/mongodb.json').url
const client = new MongoClient(url)

const getCollection = async (dbName, collectionName) => {
    await client.connect()
    return client.db(dbName).collection(collectionName)
}

router.get('/', async (_, response) => {
    const collection = await getCollection('Final-Project-Api', 'menu')
    const menuItem = await collection.find({}).toArray()
    response.json(menuItem)
})

router.post('/', async (request, response) => {
    const { name, description, price } = request.body
    const collection = await getCollection('Final-Project-Api', 'menu')
    await collection.insertOne({ name, description, price })
    response.send('New menu item made')
})

router.put('/:id', async (request, response) => {
    const { id } = request.params;
    const { name, description, price } = request.body;
    const collection = await getCollection('Final-Project-Api', 'menu');
    collection.findOneAndUpdate(
        { _id: id },
        { $set: { name, description, price } },
        { returnOriginal: false }    )
        response.send('Menu item updated')
})

router.delete('/:id', async (request, response) => {
    const { id } = request.params;
    const collection = await getCollection('Final-Project-Api', 'menu');
    collection.deleteOne({ _id: new ObjectId(id) })
    response.send('Menu item deleted')
 })
module.exports = router ;