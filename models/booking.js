module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Booking', {
    seatNumber: DataTypes.INTEGER
  });
};
