const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/'));

app.use(expressLayouts);
app.set('layout', './index');
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index', {title: 'HOLLYS'});
})

app.listen(port, ()=>{
    console.log(`${port}로 서버실행중...`);
})