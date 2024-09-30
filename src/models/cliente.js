const smc = require('simple-mongoose-creator');
// clientes: nome da coleção
// {}: esquema, as informações
smc.smc('clientes', {
    nome:{ 
        type: String,
        require: true,
        // corte dos espaços
      //   trim:trim
     },
     email: {
      type: String, 
      required: true,
      trim: true
  },
     telefone: {
        type:String,
        require:true
     }
})

module.exports = smc;
