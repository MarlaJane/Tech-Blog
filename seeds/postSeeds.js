const { Post } = require('../models');

const postData = [
    {
        title: "How Will Police Solve Murders on Mars?",
        post_content: "Mars P.D. will have to deal with new blood-spatter patterns, different body decay rates, and space-suit sabotage—and they won’t be able to fire guns indoors.",
        user_id: 3,
    },
    {
        title: "Why Printers Add Secret Tracking Dots",
        post_content: "They’re almost invisible but contain a hidden code – and their presence on a leaked document has sparked speculation about their usefulness to FBI investigators.",
        user_id: 1,
    },
    {
        title: "The 'Weirdest' Matter, Made of Partial Particles, Defies Description",
        post_content: "Theorists are in a frenzy over “fractons,” bizarre, but potentially useful, hypothetical particles that can only move in combination with one another.",
        user_id: 2,

    },
    {
        title: "Bleach Season 17",
        post_content: "Bleach season 17 directed by Noriyuki Abe is confirmed and finally coming to Netflix very soon in 2021. The Japanese anime TV series is based on a manga series of the same name written by Masashi Sogo, Tsuyoshi Kida, and Kento Shimoyama. It is one of those series that fans can not let go of. You probably remember that Ichigo Kurosaki once ruled at the top of the Shonen industry and fans don’t want to see an end of this anime.",
        user_id: 2,
    },
    {
        title: "What We Can Learn From A Cat Charging Into a Baseball Game?",
        post_content: "A demonstration of grace, even in the most baffling of circumstances. Early this month, a cat found its way onto the baseball diamond towards the end of a Yankees-Orioles game.",
        user_id: 3,
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;