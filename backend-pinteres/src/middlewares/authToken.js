const jwt = require("jsonwebtoken");

//-* VERIFICA SI TIENES TOKEN
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



//-* ACCESO DE ADMINTOKEN  =>  ADMIN_ROLE
exports.token_ADMIN_ROLE = (req, res, next) => {
  try {
    if (req.user.role !== "ADMIN_ROLE") {
      res.json({ ok: false, message: 'Error: user no tiene role de Administrador' });
    } else {
      next()
    }
  } catch (error) {
    res.json({ ok: false, error });
    next();
  }
};



//-* ACCESO DE SENTOKEN  =>  SEN_ROLE
exports.token_SEN_ROLE = (req, res, next) => {
  try {
    if (req.user.role !== "SEN_ROLE") {
      res.json({ ok: false, message: 'Error: user no tiene role de SEN' });
    } else {
      next()
    }
  } catch (error) {
    res.json({ ok: false, error });
    next();
  }
};