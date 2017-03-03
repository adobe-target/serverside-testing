const http = require('http');
const server = http.createServer(handleRequest);
const PORT = 5001;

function getData() {
  return {content: "<img src=\"https://dummyimage.com/940x400/fff/000.png&text=Image+from+mock+server\"/>"}
}

function handleRequest(request, response){
  const data = getData();

  response.writeHead(200);
  response.end(JSON.stringify(data));
}

server.listen(PORT, function(){
  console.log('Server listening on: http://localhost:%s', PORT);
});
