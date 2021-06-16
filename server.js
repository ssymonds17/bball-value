const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
