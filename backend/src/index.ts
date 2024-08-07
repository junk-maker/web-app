import 'dotenv/config';
import App from './app';
import 'module-alias/register';
import UserController from './resources/user/user.controller';

const app = new App(
    [
        new UserController()
    ],
    Number(process.env.PORT)
);

app.listen();