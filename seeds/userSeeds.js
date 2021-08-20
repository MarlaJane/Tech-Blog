const { User } = require('../models');

const userData = [
    {
        username: "TECHnicole",
        email: "nicolejones@gmail.com",
        password: "il0v3code!"
    },
    {
        username: "orbitalmap",
        email: "rperron@gmail.com",
        password: "eev33Lut10n"
    },
    {
        username: "sashagems",
        email: "scrossgems@gmail.com",
        password: "kitty731!"
    },


]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;