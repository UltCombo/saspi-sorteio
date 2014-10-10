# saspi-sorteio

Código do programa de sorteio da SASPI 5 IFSul.

# Instruções

São necessários 2 arquivos não disponibilizados no repositório para executar o programa:

- `presentes.json`: arquivo JSON que alimenta o sorteador. Seu formato é um array de objetos com propriedades `id` e `nome`, por exemplo:
```json
[
  {
    "id": 1,
    "nome": "Participante 1"
  },
  {
    "id": 2,
    "nome": "Participante 2"
  }
]
```

- `sorteados.json`: arquivo JSON que contém um array de IDs de participantes a serem excluídos do sorteio. Quando um participante é sorteado, seu ID é automaticamente adicionado a este arquivo. O arquivo `sorteados.json` inicia vazio:
```json
[]
```

O script `atualizar_presentes.js` atualiza o arquivo `presentes.json` com a lista dos presentes na palestra atual. Este arquivo realiza uma chamada de API para o próprio site da SASPI que é integrado com o sistema de check-in, desta forma a criação desta lista é feita de forma privada. Ou seja, você não terá acesso a esta listagem pois ela só funciona no dia e hora da palestra e também porque o token de acesso da API não está disponível neste repositório, mas você pode analisar o código o script de busca e tratamento da resposta da API no arquivo `atualizar_presentes.js`.

Para testar o algoritmo de sorteio, crie seus próprios arquivos `presentes.json` e `sorteados.json` como nos exemplos apresentados anteriormente, e então execute o arquivo `index.js` via [Node.js](http://nodejs.org/).
