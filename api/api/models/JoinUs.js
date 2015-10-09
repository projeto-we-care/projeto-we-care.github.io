/**
* JoinUs.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    nome: {
      type: "string",
      required: true
    },
    email: {
      type: "string",
      required: true
    },
    telefone: {
      type: "string",
      required: true,
      minLength: 8
    },
    mensagem: {
      type: "string",
      required: true
    },

    toJSON: function () {
        var obj = this.toObject();
        // delete obj.password;
        return obj;
    }
  }

};

