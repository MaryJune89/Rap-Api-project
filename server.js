const express = require('express')
const app = express()
const PORT = 8000


const rappers = {
    '21 savage': {
        'birthLocation': 'London, England',
        'birthName': 'Shabram Issa Lee',
        'age': 29
    },

    'g herbo': {
        'birthLocation': 'ChiRaq',
        'birthName': 'Chancellor T. Collins',
        'age': 30
    },

    'lil wayne': {
        'birthLocation': 'New Orleans, LA',
        'birthName': 'Dewayne Carter',
        'age': '38'
    },

    'unknown': {
        'birthLocation': 'unknown',
        'birthName': 'unknown',
        'age': 0
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')

})

app.listen(PORT, () => {
    console.log(`Hey! The server is running on port ${PORT}, go catch it!`)
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }

})
