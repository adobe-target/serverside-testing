const http = require('http');
const server = http.createServer(handleRequest);
const PORT = 5001;

function getData() {
  return {content: "<img src=\"http://www.hdwallpapersfreedownload.com/uploads/large/super-heroes/bumblebee-transformers-wallpaper-hd-free.jpg\"/>"}
}

function handleRequest(request, response){
  const data = getData();

  response.writeHead(200);
  response.end(JSON.stringify(data));
}

server.listen(PORT, function(){
  console.log('Server listening on: http://localhost:%s', PORT);
});
