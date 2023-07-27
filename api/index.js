const path = require("path");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "database.json"));
const middlewares = jsonServer.defaults();

const port = process.env.MOCK_API_SERVER_PORT || 8081;

function findAndReplaceServerURI(value) {
  return value.replace(/\${SERVER_URI}/g, `http://localhost:${port}`);
}

function replaceServerURIPlaceholderInResponseData(data) {
  return JSON.parse(findAndReplaceServerURI(JSON.stringify(data)));
}

router.render = (req, res) => {
  const data = replaceServerURIPlaceholderInResponseData(res.locals.data);
  res.jsonp(data);
};

server.use(middlewares);
server.use(router);

server.listen(port || 8081, () => {
  console.log("Mock API server is running");
});
