module.exports = app => {
    const associadoS = require("../service/associado.service.js");
    var router = require("express").Router();
    // Create a new Associado
    router.post("/", async (req, res, next) => {
   
      const data = req.body;
      try {
       ;
        const novoAssociado = await associadoS.createAssociado(data);
   
        res.status(201).json(novoAssociado);
      } catch (e) {
       
        res.status(400).json({error: e});
        
      }
    });
    // Retrieve all Associado
    router.get("/", async (req, res, next) => {
      try {
        const associados = await associadoS.findAllAssociados();
    
        res.status(201).json(associados);
      } catch (e) {
        res.status(400).send("Não foi possível encontrar associados");
    
      }
    }) ;



    router.post("/login", async (req, res, next) => {
      const data = req.body;
      
      try {
        const token = await associadoS.loginAssociado(data);
        res.status(200).json(token);
      } catch (e) {
        
        res.status(400).json({error: e});
    
        
        //send(e);
        
        //
      }
    })


    
  
    app.use('/api/associado', router);
  };