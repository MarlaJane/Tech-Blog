const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 1,
        comment_text: "This is crazy!"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "I know, right!"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "I've always wondered about this."
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "So Neat!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "FINALLY! We have been waiting for yearssss!"
    },
    {
        user_id: 2,
        post_id: 5,
        comment_text: "Why am I not surprised you posted this?"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "I actually saw this game! And I can't help it! #crazycatlady"
    },
    {
        user_id: 1,
        post_id: 5,
        comment_text: "We don't deserve cats. Oh, man. So adorable."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;