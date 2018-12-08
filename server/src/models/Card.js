module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    term: DataTypes.STRING,
    answer: DataTypes.TEXT,
    moreInfoURL: DataTypes.TEXT
  })

  return Card
}
