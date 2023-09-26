const {check} = require('express-validator');

module.exports = [
    check("title")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio"),

    check("rating")
    .notEmpty()
    .withMessage("El rating es obligatorio")
    .isNumeric()
    .withMessage("El rating debe ser un número válido"),

    check("awards")
    .notEmpty()
    .withMessage("Ingresar '0' si no posee premios ")
    .isNumeric()
    .withMessage("El ranking debe ser un número válido"),

    check("release_date")
    .notEmpty()
    .withMessage("La fecha de estreno es obligatoria"),

    check("length")
    .notEmpty()
    .withMessage("La duración es obligatorio")
    .isNumeric()
    .withMessage("La duración debe ser un número válido")
]