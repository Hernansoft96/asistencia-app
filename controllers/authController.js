exports.login = (req, res) => {
  const { usuario, contrasena } = req.body;
  if (usuario === 'admin' && contrasena === '123') {
    res.send('Bienvenido Administrador');
  } else {
    res.status(401).send('Credenciales inválidas');
  }
};