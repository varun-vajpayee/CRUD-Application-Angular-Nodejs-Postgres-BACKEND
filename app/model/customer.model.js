module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        }
    });

    return Customer;
}