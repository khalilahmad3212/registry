const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')

const app = express()

const numberSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }, 
    phone: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Number = mongoose.model("Number", numberSchema)

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


const MONGO_URI = 'mongodb+srv://khalil:raeela123@cluster0.zd8175o.mongodb.net/registry?retryWrites=true&w=majority'

const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Database Connected');
        })
}
connectDatabase();


let env = 'production'

if (env === 'production') {
    app.use(express.static(path.join(__dirname,'..', '/frontend/build')))

    app.get('*', (req, res) => {
        // refering to frontend project
        res.sendFile(path.join(__dirname,'..', 'frontend', 'build', 'index.html'))
    });
    app.get('/', (req, res) => {
        res.json({
            ok: true,
            message: 'Server is Running!'
        })
    })
} else {
    app.get('/', (req, res) => {
        res.send('Server is Running! 🚀');
    });
}


app.post('/number', async (req, res) => {

    const { firstName, lastName, phone } = req.body

    const result = await Number.create({
        firstName,
        lastName,
        phone
    })

    res.json({ number: result })
})

app.get('/number', async (req, res) => {

    const result = await Number.find()

    res.json({numbers: result})
})
const PORT = 4000
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))