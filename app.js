const express           = require('express');
const path              = require('path');
const livereload        = require('livereload');
const connectLivereload = require('connect-livereload');

const app  = express();
const PORT = 3000;

// Stebi public/ katalogą – kai pakeičiamas failas, naršyklė atsinaujina automatiškai
const lrServer = livereload.createServer();
lrServer.watch(path.join(__dirname, 'public'));

app.use(connectLivereload());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('');
  console.log('  🎮  Žaidimas:   http://localhost:' + PORT);
  console.log('  📡  Livereload: įjungtas – naršyklė atsinaujina automatiškai');
  console.log('');
});
