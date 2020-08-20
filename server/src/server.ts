import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        { name: 'Gabriel', age: 21 },
        { name: 'Diego', age: 25 }
    ]

    return response.json([
        users
    ]);
})

app.listen(3333);