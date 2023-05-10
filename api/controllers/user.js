import { db } from "../db.js";

//recebe a chamda de getUsers passa a requisição e o response
export const getUsers = (_, res) => {
  //seleciona todos os campos
  const q = "SELECT * FROM usuarios";
  // faz verificação e retorna erro ou status code
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

//função para retorna erro ou status code
export const addUser = (req, res) => {
  //insere dados dentro da tabela
  const q =
    "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES (?)";

  //pega os valores da tabela
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];
  // faz verificação e retorna o status
  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário cadastrado com sucesso!");
  });
};

export const updateUser = (req, res) => {
  //atualiza dados dentro da tabela
  const q =
    "UPDATE usuarios SET nome =?, `email` =?, `fone` =?, `data_nascimento` =?, WHERE `id` = ?";

  //pega os valores da tabela
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  //recebe os dados e retor status
  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso!");
  });
};

export const deleteUser = (req, res) => {
  //deleta dados dentro da tabela
  const q = "DELETE FROM usuarios WHERE id =?";

  db.query(q, [req.params.id], (err) =>{
    if (err) return res.json(err);
    return res.status(200).json("Usuário deletado com sucesso!");
  })
}