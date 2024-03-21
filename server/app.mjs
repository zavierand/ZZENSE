import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const serverPort = 8080;

app.get('/', (req, res) => {
    res.send('ZZENSE homepage');
});

app.listen(serverPort, () => {
    console.log('listening on port ', serverPort);
});
