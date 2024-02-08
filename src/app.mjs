import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
const PORT = process.env.PORT || 8800;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => res.send("Node server is running!"));

app.get("/values", async (req, res) => {

  // show the page
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const _retfile = path.join(__dirname, 'values.html');

  res.sendFile(_retfile);
});

app.get("/pv", async (req, res) => {

  // show the page
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const _retfile = path.join(__dirname, 'pv.html');

  res.sendFile(_retfile);
});

app.listen(PORT, () => console.log(`Server up at PORT:${PORT}`));
