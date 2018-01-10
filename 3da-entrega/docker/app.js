'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3001

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var assert = require('assert');
var url = "mongodb://mongo:27017/todos";
var db;
var collection;


app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

MongoClient.connect(url, (err,res)=>{
    assert.equal(null, err);
    if(err){
        console.log("Coudln't connect to mongo. Error"+err);
    } else{
        db = res;
        collection = db.collection('todos');
        console.log('Conexion establecida a mongo')
        app.listen(port, () => {
            console.log(`Api rest corriendo en localhost:${port}`)
        })
    }
});

app.get('/v1/todos',(req,res) => {
    console.log('GET /v1/todos')
    collection.find({}).toArray(function(err, todos) {
        assert.equal(err, null);
        if(err) return res.status(500).send({ mensaje:' hubo un error al hacer la peticion' })
        if(!todos) return res.status(404).send({ mensaje:' no existe' })
        res.status(200).json(todos);
    })
})

app.post('/v1/todos', (req, res) => {
    var f = new Date();
    var fechaa = f.getFullYear() + "-" + (f.getMonth() +1) + "-" +f.getDate()  +" "+ f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()  ;
    console.log('POST /v1/todos')
    console.log(req.body)
    collection.insert({nombre:req.body.nombre, descripcion:req.body.descripcion, lista:null, completada:false, fecha:fechaa},
    function(err, docs) {
            assert.equal(err, null);
            assert.equal(1, docs.result.n);
            assert.equal(1, docs.ops.length);
            console.log("Insertada la colección.");
            res.status(200).json(docs.ops)
            if(err) return res.status(500).send({ mensaje:' hubo un error al hacer la peticion' })
    })
})

app.delete('/v1/todos/:id',(req,res) => {
    console.log('DELETE /v1/todos/:id')
    collection.deleteOne({_id: new mongodb.ObjectID(req.params.id)}, function(err, results) {
        assert.equal(err, null);
        if(err) return res.status(500).send({ mensaje:' hubo un error al hacer la peticion' })
        if(!results) return res.status(404).send("TODO no encontrado")
        console.log("eliminada la colección.")
        res.status(200).send("Eliminado")
    })
})

app.put('/v1/todos/:id',(req,res) => {
    console.log('PUT /v1/todos/:id')
    var completa=req.body.completada;
        console.log(req.body);
    if((req.body.completada != false) && (req.body.completada != true))
	return res.status(500).send({ mensaje:' hubo un error al hacer la peticion' })
    collection.update({_id: new mongodb.ObjectID(req.params.id)},
    { $set: {nombre:req.body.nombre, descripcion:req.body.descripcion, completada:completa}}
    ,function(err, results) {
        assert.equal(err, null);
        if(err) return res.status(500).send({ mensaje:' hubo un error al hacer la peticion' })
        if(!results) return res.status(404).send("TODO no entontrado")
        console.log("actualizada la colección.")
        res.status(200).send("Modificado")
     })
})

app.put('/v1/todos/:id/alterar-completado',(req,res) => {
    console.log('PUT /v1/todos/:id/alterar-completado')
    collection.find({_id: new mongodb.ObjectID(req.params.id)}).toArray(function(err, todos) {
          if(err) return res.status(500).send({ mensaje:' hubo un error al hacer la peticion' })
          if(!todos) return res.status(404).send("TODO no entontrado")
          var completa;
          if(todos[0].completada == false)completa=true;
          if(todos[0].completada == true) completa=false;
          collection.update({_id: new mongodb.ObjectID(req.params.id)},
          { $set: {completada:completa}}
          ,function(err, results) {
                assert.equal(err, null);
                if(err) return res.status(500).send({ mensaje:' hubo un error al hacer la peticion' })
                if(!results) return res.status(404).send("TODO no entontrado")
                console.log("actualizada la colección.")
                res.status(200).send("Alterado")
          })
    })
})
