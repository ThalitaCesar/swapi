# SWAPI - Um Projeto do Star Wars

![pngegg (2)](https://github.com/user-attachments/assets/def41bc1-18d2-407f-a5c2-f06fe14fabc2)

## 📌 Visão Geral

Este projeto é parte do Desafio de Desenvolvimento Web para Hubbi. Ele visa demonstrar a aplicação prática dos conhecimentos adquiridos na construção de uma aplicação web utilizando tecnologias modernas. [Documentação do Desafio](https://drive.google.com/file/d/1FIkXvwZoCpDOfaddE-XAStRrE_86FDIg/view?pli=1) 

## 📝 Resumo do Projeto

A Swapi é uma api pública do Star Wars que lista os personagens, as naves, os planetas, filmes, etc. . O projeto Swapi é uma aplicação web desenvolvida como parte do Desafio de Desenvolvimento Web Frontend. Utiliza a API do Star Wars ([SWAPI](https://swapi.dev/)) para exibir informações sobre personagens da saga e informações das naves.

## 📝 Requisitos

- [Node.js](https://nodejs.org/en/) 

## 🔍 Tecnologias

- [React](https://pt-br.reactjs.org) para construção da interface do usuário.
- [Vite](https://vitejs.dev/) para o site react.
- [React Router](https://reactrouter.com) para gerenciamento de rotas na aplicação.
- [Redux](https://redux.js.org) para gerenciamento de estado global.
- [Tailwind CSS](https://tailwindcss.com/) lib para estilização.
- [SASS](https://sass-lang.com/) para estilização css.
- [JWT](https://jwt.io/) para autenticação de login.


### Funcionalidades

- **Página Inicial (Home)**
  - Apresenta uma visão geral do projeto e um menu com links para outras seções.
    
![Captura de Tela (1)](https://github.com/user-attachments/assets/b21d4d21-e406-42eb-930f-8f4bd2218cea)

  
- **Página de Listagem de Personagens (Search)**
  - Lista todos os personagens disponíveis através da API SWAPI.
  - Permite filtrar personagens por nome.
  - Fornece detalhes completos de cada personagem ao clicar em um card.

![Captura de Tela (2)](https://github.com/user-attachments/assets/ba25caa5-555b-4366-a7aa-fde8b7a5d5cc)


- **Login**
  - Página com auteticação jwt para dar acesso aos detalhes dos personagens e naves. Não há um backend integrado no projeto, ele está apenas com um token que tem duração de 1 hora. Ao clicar em leia mais o usuário vai ser direcionado para a página de login. Onde pode ser inserido qualquer usuário e senha.
 
![Captura de Tela (5)](https://github.com/user-attachments/assets/08058145-fabb-4a33-b7bf-0ac45acb4d12)

  
- **Página de Detalhes do Personagem (Character)**
  - Exibe informações detalhadas de um personagem específico, como filmes associados e detalhes pessoais.
    
![Captura de Tela (3)](https://github.com/user-attachments/assets/88456a54-83d9-4f19-9e3a-40ff419ecd6a)

    
- **Modal de caracteristicas da Nave**
  - Exibe informações detalhadas de uma nave epecífica.

![Captura de Tela (4)](https://github.com/user-attachments/assets/6a80573b-8f20-4d15-94c6-aa6a055b31ee)


## ⚙️ Configuração

1. **Clonar o Repositório:**

   ```bash
   git clone [https://github.com/seu-usuario/swapi.git](https://github.com/ThalitaCesar/swapi.git)
   ```

2. **Instalar Dependências:**

   ```bash
   npm install
   ```

3. **Iniciar o Servidor de Desenvolvimento:**

   ```bash
   npm run dev
   ```
## 📌 Responsividade

![Captura de Tela (10)](https://github.com/user-attachments/assets/8a110857-422d-4056-bf7f-36c36cd849ff)
![Captura de Tela (11)](https://github.com/user-attachments/assets/99e00ddb-6566-41a1-86ab-81169fd7a40d)
![Captura de Tela (12)](https://github.com/user-attachments/assets/98067042-34d6-4b3c-a575-2e06f426c7cd)
![Captura de Tela (8)](https://github.com/user-attachments/assets/c2642aed-e711-4bcb-a953-5837c529bb3a)
![Captura de Tela (9)](https://github.com/user-attachments/assets/3287a836-9b10-43d8-9bfc-e3b05bf65af7)




