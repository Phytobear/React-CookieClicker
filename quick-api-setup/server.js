import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));


const upgrades = [
    {
        id: 1,
        name: 'Wookie Apprentice',
        cost: 100,
        plusWPS: 1
      },
      {
        id: 2,
        name: 'Wookie Jedi',
        cost: 500,
        plusWPS: 5
      },
      {
        id: 3,
        name: 'I Find Your Lack of Wookies Disturbing',
        cost: 1000,
        plusWPS: 10
      },
      {
        id: 4,
        name: 'These Aren\'t the Wookies You\'re Looking For',
        cost: 5000,
        plusWPS: 50
      },
      {
        id: 5,
        name: 'Use the Wookie, Luke',
        cost: 10000,
        plusWPS: 100
      },
      {
        id: 6,
        name: 'No, I Am Your Wookie',
        cost: 50000,
        plusWPS: 500
      },
      {
        id: 7,
        name: 'Admiral Wookiebar',
        cost: 100000,
        plusWPS: 1000
      },
      {
        id: 8,
        name: 'Obi Wookie Kenobi',
        cost: 500000,
        plusWPS: 5000
      },
      {
        id: 9,
        name: 'Grand Moff Wookie',
        cost: 1000000,
        plusWPS: 10000
      },
      {
        id: 10,
        name: 'The Wookie Alliance',
        cost: 5000000,
        plusWPS: 50000
      },
      {
        id: 11,
        name: 'Deth Star Wookie',
        cost: 10000000,
        plusWPS: 100000
      },
      {
        id: 12,
        name: 'Wookie Shot First',
        cost: 50000000,
        plusWPS: 500000
      },
      {
        id: 13,
        name: 'Once Again, the Wookies Will Rule the Galaxy',
        cost: 100000000,
        plusWPS: 1000000
      }
    ]

app.get('/', (req, res) => {

    res.send('ye')
})

app.get('/api/upgrades', (req, res) => {

    console.log("API called");

    try {
        res.status(200).json(upgrades)
    } catch (err) {
        res.status(500).json({error: err})
    }
})

app.listen(8080, () => {
    console.log('running')
})