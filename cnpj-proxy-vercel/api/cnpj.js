// api/cnpj.js

const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const { cnpj } = req.query;

  if (!cnpj) {
    return res.status(400).json({ error: "CNPJ não informado" });
  }

  try {
    const response = await fetch(`https://receitaws.com.br/v1/cnpj/${cnpj}`);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar CNPJ" });
  }
};
