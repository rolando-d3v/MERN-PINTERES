const jwt = require("jsonwebtoken");

exports.verificaToken = (req, res, next) => {
  try {
    //si existe el token
    const existeToken = req.header("Authorization");
    if (!existeToken) {
      res.json({ ok: false, message: "Acceso denegado: por falta de token" });
    }

    //verifica si el token es valido
    jwt.verify(existeToken, process.env.SECRET, (err, userToken) => {
      if (err) {
        res.json({ ok: false, message: "Error: su token no es valido" });
        // throw err;
      } else {
        req.user = userToken;
        console.log(userToken);
        next();
      }
    });
  } catch (error) {
    res.json({ ok: false, error });
    next();
  }
};
