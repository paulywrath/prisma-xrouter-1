const prisma = require('./client.cjs');

const playerExists = async(username) => {
  try {
    const foundPlayer = await prisma.player.findUnique({
      where: {
        username: `${username}`
      }
    })
    return foundPlayer !== null;
  } catch (error) {
    console.log(error);
  }
} 

const createChessClub = async(name, meetsWhen, hostUsername, venueName) => {
  try {
    await prisma.chessClub.create({
      data: {
        name: `${name}`,
        meetsWhen: `${meetsWhen}`,
        host: {
          create: {
            username: `${hostUsername}`
          }
        },
        venue: {
          create: {
            name: `${venueName}`
          }
        }
      }
    })
  } catch (error) {
    console.log(error);
  }
}

const updateChessClub = async(id, meetsWhen, hostUsername, venueName) => {
  try {
    const updatedChessClub = await prisma.chessClub.update({
      where: {
        id: id
      },
      data: {
        meetsWhen: `${meetsWhen}`,
        host: {
          connect: {
            username: `${hostUsername}`
          }
        },
        venue: {
          connect: {
            name: `${venueName}`
          }
        }
      }
    })
    return updatedChessClub;
  } catch (error) {
    return error;
  }
}

const getChessClubs = async() => {
  try {
    const allChessClubs = await prisma.chessClub.findMany();
    return allChessClubs;
  } catch (error) {
    console.log(error);
  }
}

const getSpecificChessClub = async(id) => {
  try {
    const specificChessClub = await prisma.chessClub.findUniqueOrThrow({
      where: {
        id: id
      }
    });
    return specificChessClub;
  } catch (error) {
    return error;
  }
}

module.exports = { createChessClub, playerExists, getChessClubs, getSpecificChessClub, updateChessClub }