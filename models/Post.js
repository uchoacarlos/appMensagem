const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

// Esta linha de comando só eé usada na criação do model
// Esta linha ficará comentada após seu uso para nao recriar a tabela e perdemos os dados anteriores.
//Post.sync({force: true});

module.exports = Post;