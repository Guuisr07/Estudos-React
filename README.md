# Estudos sobre React JS

Este repositorio contem alguns conceitos basicos sobre React JS, estou usando
estes conceitos e estudos para integrar a uma api rest feita separadamente.

# O que estou aprendendo:

## Metodos para criacao de um component

**Stateless Component**

- Usado o metodo stateless component para criar um componente sem o render, sendo ele igual a uma funcao.

**Pages**

- No react nos criamos uma configuracao para cada pagina, para que nao fique em apenas um local. Nessa parte do projeto deve se criar uma pagina para listar usuarios que foi acessado direto na API. exemplo:

```
pages/Main/index.js
```

## Como buscar dados de uma API

**Axios**

- Axios e utilizado para poder usar os dados da API na aplicacao React e deve ser adicionado com o seguinte comando:

```
yarn add axios
```

- Deve criar tambem uma pasta com o nome de services, para nela armazenarmos todas as configuracoes para conexao com a API usando
