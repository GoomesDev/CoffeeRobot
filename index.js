const { NlpManager } = require('node-nlp')
const readline = require('readline')
const manager = new NlpManager({ languages: ['pt-br'] })

manager.load('./model.nlp')

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
