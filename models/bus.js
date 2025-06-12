module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Bus', {
    busNumber: DataTypes.STRING,
    totalSeats: DataTypes.INTEGER,
    availableSeats: DataTypes.INTEGER
  });
};
