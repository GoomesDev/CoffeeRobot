const { NlpManager } = require('node-nlp')
const manager = new NlpManager({ languages: ['pt-br'] })
const readline = require('readline')
const express = require('express')

manager.load('./model.nlp')


// Terminal test
const main = async() => {
	const rl = readline.createInterface({
        	input: process.stdin,
        	output: process.stdout
   	 })
	rl.question('\n\nQual a sua dúvida sobre café?\n\n', async (query) => {
        rl.close()
        const res = await manager.process('pt-br', query)
        console.log(res.answer)
    })
}

main()


// API's area
// const app = express()
// app.use(express.json())
// const port = 8000

// app.post('/run', async (req, res) => {
// 	try {
// 		const { input } = req.body
// 		let response = await manager.process('pt-br', input)
// 		res.json({ answer: response.answer })
// 	} catch (error) {
// 		res.status(500).json({ error: 'Ocorreu um erro ao processar a requisição.' })
// 	}
// })

// app.listen(port, () => {
// 	console.log(`CoffeeRobot is running on ${port}`)
// })
