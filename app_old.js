import http, {createServer} from 'http'

console.log('WebServer Liano')

const server = http.createServer((req, res) => {

    //res.writeHead(200, { 'Content-Type': 'text/plain' })
   //res.setHeader('Content-Disposition', 'attachment; filenam=aa.csv' )
    //res.writeHead(200, { 'Content-Type': 'plain/text' })
    res.write('tu vieja')
    
    res.end()
})
server.listen( 8080 )

console.log(`Listening to port 8080`)