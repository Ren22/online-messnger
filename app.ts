const express = require('express');
const history_fallback = require('connect-history-api-fallback');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(history_fallback());
app.use(express.static(`${__dirname}/dist`));

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}!`);
});
