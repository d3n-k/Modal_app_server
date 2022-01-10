require('dotenv').config();
const express = require('express');
const cors = require("cors");
const path = require("path");
const fs = require('fs');
const carbone = require('carbone');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

// таблица6

app.post("/create-pdf6", (req, res) => {
    console.log(req.body);
  
    const data = req.body;
  
    var options = {
      convertTo : 'pdf' 
    };
  
    carbone.render('./files/table6.odt', data, options, function(err, result){
      if (err) {
        res.send(Promise.reject());
        console.log(err);
        
      }
      fs.writeFileSync(path.resolve(__dirname,'table6.pdf'), result);
      res.send(Promise.resolve());
      
    });
    
  });
  
  app.get("/table6", (req, res) => {
    res.sendFile(`${__dirname}/table6.pdf`);
  });

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));