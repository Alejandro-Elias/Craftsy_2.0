const { leerJSON } = require("../data");

module.exports = {
    index :  function(req, res) {
        
        const productos = leerJSON('productos');
        const tutoriales = leerJSON('tutoriales');
        const banner = leerJSON('banner')

        return res.render('index', { 
            productos,
            tutoriales,
            banner
        });
      },
      detail : (req,res) => {

        const {id} = req.params;

        const productos = leerJSON("productos");

        const producto = productos.find((producto) => producto.id === +id)

        return res.render('productDetail', {...producto})
      }
}