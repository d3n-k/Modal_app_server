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

  //таблица5

  app.post("/create-pdf5", (req, res) => {
    console.log(req.body);
  
    const data = req.body;
  
    var options = {
      convertTo : 'pdf' 
    };
  
    carbone.render('./files/table5.odt', data, options, function(err, result){
      if (err) {
        res.send(Promise.reject());
        console.log(err);
        
      }
      fs.writeFileSync(path.resolve(__dirname,'table5.pdf'), result);
      res.send(Promise.resolve());
      
    });
    
  });
  
  app.get("/table5", (req, res) => {
    res.sendFile(`${__dirname}/table5.pdf`);
  });

  //таблица1

  app.post("/create-pdf1", (req, res) => {
    console.log(req.body);
  
    const data = req.body;
  
    var options = {
      convertTo : 'pdf' 
    };
  
    carbone.render('./files/table1.odt', data, options, function(err, result){
      if (err) {
        res.send(Promise.reject());
        console.log(err);
        
      }
      fs.writeFileSync(path.resolve(__dirname,'table1.pdf'), result);
      res.send(Promise.resolve());
      
    });
    
  });
  
  app.get("/table1", (req, res) => {
    res.sendFile(`${__dirname}/table1.pdf`);
  });

  //таблица2

  app.post("/create-pdf2", (req, res) => {
    console.log(req.body);
  
    const data = req.body;
  
    var options = {
      convertTo : 'pdf' 
    };
  
    carbone.render('./files/table2.odt', data, options, function(err, result){
      if (err) {
        res.send(Promise.reject());
        console.log(err);
        
      }
      fs.writeFileSync(path.resolve(__dirname,'table2.pdf'), result);
      res.send(Promise.resolve());
      
    });
    
  });
  
  app.get("/table2", (req, res) => {
    res.sendFile(`${__dirname}/table2.pdf`);
  });


  //таблица3

  app.post("/create-pdf3", (req, res) => {
    console.log(req.body);
  
    const data = req.body;
  
    var options = {
      convertTo : 'pdf' 
    };
  
    carbone.render('./files/table3.odt', data, options, function(err, result){
      if (err) {
        res.send(Promise.reject());
        console.log(err);
        
      }
      fs.writeFileSync(path.resolve(__dirname,'table3.pdf'), result);
      res.send(Promise.resolve());
      
    });
    
  });
  
  app.get("/table3", (req, res) => {
    res.sendFile(`${__dirname}/table3.pdf`);
  });


  //таблица4

  app.post("/create-pdf4", (req, res) => {
    console.log(req.body);
  
    const data = req.body;
  
    var options = {
      convertTo : 'pdf' 
    };
  
    carbone.render('./files/table4.odt', data, options, function(err, result){
      if (err) {
        res.send(Promise.reject());
        console.log(err);
        
      }
      fs.writeFileSync(path.resolve(__dirname,'table4.pdf'), result);
      res.send(Promise.resolve());
      
    });
    
  });
  
  app.get("/table4", (req, res) => {
    res.sendFile(`${__dirname}/table4.pdf`);
  });

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));