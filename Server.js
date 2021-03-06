const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'Client/build')));

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "Client/build/index.html"));
})

app.listen(PORT, () => {
    console.log("server is running...");
})

