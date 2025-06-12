module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Payment', {
    amountPaid: DataTypes.FLOAT,
    paymentStatus: DataTypes.STRING
  });
};
