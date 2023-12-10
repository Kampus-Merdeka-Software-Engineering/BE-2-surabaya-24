module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Feedback", {
      feedbackId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      feedbackName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      feedbackEmail: {
        type: Sequelize.STRING,
      },
      feedbackComment: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      feedbackImg: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Feedback");
  },
};
