# Desbravador Desafio - Mobile
Nosso desafio de desenvolvimento mobile com React-native é um simples "Dev Tracker". Os usuários devem poder buscar outros desenvolvedores no Github, visualizar o número de seguidores, número de seguidos, imagem do avatar, e-mail e bio. 


```
Importante: Certifique-se de usar ReactNative e Redux.
Verifique sua solução no github com um arquivo readme.md detalhando as instruções
sobre como colocar o aplicativo em funcionamento.
```

# Design e recursos sugeridos

Você pode encontrar abaixo um protótipo para o desafio. Sinta-se à vontade para usá-lo ou criar o seu próprio:
[Figma](https://www.figma.com/proto/SJMnBYvDQuAuDim3ehSxBj/Doctor-App---Freebies-(Community)-(Community)?page-id=1%3A499&type=design&node-id=30-506&viewport=985%2C-468%2C1.22&scaling=min-zoom&starting-point-node-id=26%3A2)

Para os assests, recomendamos os ícones do Material:
https://material.io/resources/icons/?style=baseline

# Principais recursos do aplicativo

### 1) Buscar por um usuário
* Eu, como usuário, desejo **buscar** por um usuário do GitHub;
* [https://api.github.com/users/{username}](https://api.github.com/users/{username})

### 2) Ver detalhes do usuário buscado
* Eu, como usuário, desejo **ver os detalhes do usuário** buscado (número de seguidores, número de seguidos, imagem do avatar, e-mail e bio);

### 3) Ver listgem dos repositórios do usuário buscao
* Eu, como usuário, desejo **ver a listagem dos repositórios** desse usuário que foi buscado, ordenados pelo número decrescente de estrelas;
* Repositórios de um usuário: [https://api.github.com/users/{username}/repos](https://api.github.com/users/{username}/repos)

### 4) Ordernar listagem dos repositórios
* Eu, como usuário, desejo poder **alterar a ordem da listagem** de repositórios;

### 5) Ver detalhes de um repositório
* Eu, como usuário, desejo ver uma **página com os detalhes** de um repositório (nome, descrição, ,número de estrelas, linguagem e um link externo para a página do repositório no GitHub), que pode ser clicado na listagem dos repositórios;
* Detalhes de um repositório: [https://api.github.com/repos/{full_name}](https://api.github.com/repos/{full_name})

# Critério de avaliação

* Compreensão dos principais conceitos de Javascript
* Compreensão dos frameworks ReactNative e Redux
* Reutilização/extensibilidade de código e componentes
* **Organização do projeto**: Avalia a estrutura do projeto, documentação e uso de controle de versão;
* **Inovação tecnológica**: Avalia o uso de tecnologias mais recentes, como novas características ES6 da linguagem;
* **Coerência**: Avalia se os requisitos foram atendidos;
* **Boas práticas**: Avalia se o projeto segue boas práticas de desenvolvimento, incluindo segurança e otimização;
* A performance e a adequação dos recursos serão considerados durante o processo de avaliação. Alem disso, a avaliação ocorrerá em todos os componentes do projeto.


# **Processo de submissão**

O desafio deve ser entregue pelo [GitHub](http://github.com/), com README de instalação, start do projeto e visualização da demo.

Qualquer dúvida em relação ao desafio, responderemos por e-mail.

Bom trabalho!
