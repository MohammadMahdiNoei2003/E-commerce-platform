import app from './src/app';
import dotenv  from 'dotenv';

dotenv.config();

const PORT = process.env.PORT ;
const IP = process.env.IP;

app.listen(PORT, () => {
    console.log(`server running on http://${IP}:${PORT}`);
})

