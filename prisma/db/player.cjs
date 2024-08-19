const prisma = require('./client.cjs');

const createPlayer = async(username) => {
  try {
    await prisma.player.create({
      data: {
        username: `${username}`
      }
    })
  } catch (error) {
    console.log(error);
  }
}

module.exports = { createPlayer }