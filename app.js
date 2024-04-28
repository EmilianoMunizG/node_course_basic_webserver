import  express from 'express'
import url from 'url';
import hbs from 'hbs';
import path from 'path';
import 'dotenv/config'

const app = express()
const port = process.env.PORT
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));  //add this to __dirname to work properly

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use( express.static('public') )

app.get('/',  (req, res) => {
  res.render('home', {
    name: 'Emiliano Muniz'
  })
})

app.get('/generic',  (req, res) => {
  res.render('generic')
})

app.get('/elements',  (req, res) => {
  res.render('elements')
})

app.get('/bye',  (req, res) => {
    res.send('bye World')
  })



app.get('*',  (req, res) => {
    res.sendFile(__dirname+'public/404.html')
  })
app.listen(port, () => {
  console.log('Listening to port'+port)
})