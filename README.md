# Coin Crypto!

Boas vindas ao projeto Coin Crypto! Este projeto utiliza React + Vite para criar uma aplicação que consome a API marketcap.com. Este README fornecerá informações sobre como começar a usar o projeto.

## Configuração Inicial

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-seu-projeto.git
cd nome-do-seu-projeto
```

2. Instale as dependências
```bash
npm install
```

## Configurando a API marketcap.com
Para usar a API marketcap.com, você precisará obter uma chave de API. Siga estas etapas:

1. Vá para marketcap.com.
   * Crie uma conta ou faça login, se já tiver uma.
   * Navegue até a seção de API e obtenha sua chave de API.

2. Configurando a Aplicação
     * Crie um arquivo ```.env``` na raiz do projeto e adicione sua chave de API: ```API_KEY=your_api_key```
  
Obs: Essa API é server side programmig por isso os passos abaixo:

3. Inicie o servidor
   * ```node server.js```
   * E depois a aplicação ```npm run dev```
