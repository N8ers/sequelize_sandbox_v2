// operators
const { Op } = require('sequelize');

Post.findAll({
  where: {
    [Op.and]: [{ a: 5 }, { b: 6 }], // (a = 5) AND (b = 6)
    [Op.or]: [{ a: 5 }, { b: 6 }], // (a = 5) OR (b = 6)
  },
  someAttribute: {
    // Basics
    [Op.eq]: 3, // = 3
    [Op.ne]: 20, // != 20
    [Op.is]: null, // IS NULL
    [Op.not]: true, // IS NOT TRUE
    [Op.or]: [5, 6], // (someAttribute = 5) OR (someAttribute = 6)
  },
});
