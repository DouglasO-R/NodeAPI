const customExpress = require('./config/customExpress')
const connection = require('./infra/connection');
const Tabelas = require('./infra/tabelas');


connection.connect((erro) => {
    if (erro) {
        console.log('erro na conexao');
    } else {
        console.log('conectado com sucesso');

        Tabelas.init(connection);

        const app = customExpress()

        app.listen(3000, () => console.log('servidor on'));
    }
});



