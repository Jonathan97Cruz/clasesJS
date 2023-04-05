const Users = require('./user.model');

const User = {
    list: async(req,res) => {//Esta funcion obtiene la peticion y responde al cliente (endpoint)
        const users = await Users.find();//Encontrar todos los usuarios en la BD
        res.status(200).send(users);//Enviamos estatus de que no hay problemas    
    },
    create: async(req,res) => {//obtener lo que el cliente nos mande
        const user = new Users(req.body);//creando el objeto usuario
        const saveUser = await user.save();//Guardar en la bd
        res.status(201).send(saveUser._id);
        //console.log(req.body)//capturando el body
    },
    get: async(req,res) => {//obtener lo que el cliente nos mande
        //console.log(req.params);
        const { id } = req.params;
        const user = await Users.findOne({_id: id}) //busca mediante el id que tenga el mismo id
        res.status(200).send(user);
        //console.log(req.body)//capturando el body
    },
    update: async(req,res) => {//obtener lo que el cliente nos mande
        //obtener id
        const { id } = req.params;
        const user = await Users.findOne({_id: id}) //busca mediante el id que tenga el mismo id
        //Actualizar datos
        Object.assign(user, req.body);
        await user.save();
        res.sendStatus(204);
        //console.log(req.body)//capturando el body
    },
    delete: async(req,res) => {//obtener lo que el cliente nos mande
        //obtener id
        const { id } = req.params;
        const user = await Users.findOne({_id: id}) //busca mediante el id que tenga el mismo id
        //Eliminar datos
        if(user){
            user.deleteOne({_id:id});
        }
        res.sendStatus(204);
        //console.log(req.body)//capturando el body
    },


} 

module.exports = User;