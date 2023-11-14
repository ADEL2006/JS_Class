const express = require('express');
const nunjcucks = require('nunjcucks');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'html');
nunjcucks.config('views', {
    express: app,
    watch: true,
});
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false
    }
}));