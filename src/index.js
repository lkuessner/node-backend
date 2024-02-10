require('dotenv').config()
const express = require('express');
const path = require('path');

const app = express();
const SECRET = process.env.SECRET_KEY
app.use(express.json()) // for parsing application/json
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/index.html'));
});

app.post('/cv', (request, response) => {
    // console.log(request.body)
    // response.send(request)
    const password = request.body.password
    const isAuthorized = SECRET == request.body.password
    console.log(process.env.SECRET_KEY)
    if(password == null){
        response.status(400).json({message: "Mandatory field: password is missing."})
    } else if(!isAuthorized) {
        response.status(403).json({message: 'Authorization: Unauthorized access.'})
    } else {
        response.status(200).sendFile(path.join(__dirname, '/public/files/CV_leon_kuessner.pdf'));
    }
    // response.sendFile(path.join(__dirname, '/assets/CV_leon_kuessner.pdf'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});