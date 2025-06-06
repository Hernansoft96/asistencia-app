exports.registrarAsistencia = (req, res) => {
  const { estudiante, fecha } = req.body;
  res.send(`Asistencia registrada para ${estudiante} en la fecha ${fecha}`);
};