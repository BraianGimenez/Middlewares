module.exports = (req, res, next) => {
    let admin = ["Ada", "Greta", "Vim", "Tim"];
    if (admin.includes(req.body.name)) {
          res.send("bien");
    } else {
          res.send("Nop tiene acceso");
    }
    res.send(req.body.name);
};