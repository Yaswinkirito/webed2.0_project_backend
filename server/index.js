const express = require("express")
const cors = require("cors")
const app = express();
const dbConnect = require("./db/dbConnect.js")
const Routes = require("./routes/route.js")
const bodyParser = require("body-parser")
app.use(cors());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',Routes);
app.use(require("express-session")({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))
const PORT = 8000;
dbConnect();
app.listen(PORT, ()=>console.log(`Your server is running on port ${PORT}`)); 