const app = require('express')();
const PORTA = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORTA,'localhost',()=>{
    console.log('Servidor de pé em http://localhost:8080');
    console.log('Para desligar o servidor: Crtl + c');
})
