require('dotenv').config();
const app = require('./app').default;

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(
    `CRA Server listening on port ${PORT} with env ${process.env.NODE_ENV}!`
  );
});

module.exports = app;
