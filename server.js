import http from 'http';
const PORT = 4000;

const server = http.createServer((req, res) =>{
    res.write('Hello, Gidayi');
    res.end();
});

server.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
});