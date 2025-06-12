const sequelize = require('./config/db.js');
const User = require('./models/user.js');

async function init() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');

    await sequelize.sync(); // { force: true } to reset table
    console.log('🛠️ All models were synchronized successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
}

init();
