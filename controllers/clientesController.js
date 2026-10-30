const getClientes = (req, res) => {
    req.send("Busca todos os clientes")
}
const getClienteById = (req, res) => {
    req.send("Busca 1 cliente pelo id")
}
const createCliente = (req, res) => {
    req.send("Cadastra 1 cliente")
}
const updateCliente = (req, res) => {
    req.send("Altera 1 cliente")
}
export {
    getClientes,
    getClienteById,
    createCliente,
    updateCliente
}