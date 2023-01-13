db.produtos.updateMany({ nome: "Big Mac" }, 
    { $set: { ultimaModificacao: Date() } });

db.produtos.find({ nome: "Big Mac" }, { _id: 0, nome: 1 });
