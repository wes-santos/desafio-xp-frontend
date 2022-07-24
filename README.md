# Desafio de Mobile/Front-end XP Inc.
Este projeto foi desenvolvido como um desafio técnico para o processo seletivo da [XP Inc.](https://xpinc.com) feito em parceria com a [Trybe](https://betrybe.com) para o cargo de Software Engineer I como Desenvolvedor Mobile.

Nessa lógica, em linhas gerais, ele consiste em um aplicativo desenvolvido com o conceito de Mobile First que simula o investimento em ações com algumas funcionalidades de uma conta digital.

Somado a isso, seu design foi inspirado no aplicativo de investimentos da própria XP, bem como a escolha de cores e o uso de elementos próprios da empresa, como a própria logo.

Dessa forma, o aplicativo tem as seguintes páginas: login, ações disponíveis, compra e venda de ações, página de conta com opção de depósito ou retirada de dinheiro e uma página inicial simples.

## Como a aplicação funciona?
O aplicativo esta dividido em diferentes telas, sendo que cada uma delas tem uma funcionalidade específica na aplicação. 

### Tela de login
Ao acessar a aplicação, o usuário se depara com uma tela de login contendo um campo para digitação do e-mail e um outro para a senha.

Inicialmente, o botão de acesso está desabilitado e não pode ser clicado até que os campos de e-mail e senha sejam preenchidos de forma válida. Desse modo, o e-mail precisa ter um formato válido, como email@email.com, e a senha precisa ter ao menos seis caracteres.

Após preencher os dados corretamente, o botão de acesso é habilitado e ao clicar nele o usuário é direcionado para a página inicial do aplicativo.

### Página inicial
Nesta página, há uma mensagem inicial de boas vindas e um pequeno trecho de texto sugerindo a escolha de um dos atalhos logo abaixo dele para começar a utilizar a aplicação. 

Basicamente, esses atalhos podem levar o usuário rapidamente para a página de ações ou de depósito. Além disso, há uma opção para o usuário sair da aplicação rapidamente, caso ele deseje, sendo redirecionado para a tela de login novamente.

No canto superior direito da aplicação, há um ícone no qual o usuário pode clicar para que um menu lateral seja aberto. Neste menu, há opções para que o usuário possa ir para qualquer uma das páginas da aplicação de forma fácil e rápida.

### Página de ações
Nesta página, é possível visualizar tanto as ações disponíveis para investimento no aplicativo quanto as ações que já foram compradas pelo usuário.

De início, independentemente do e-mail ou senha que utilizar para entrar, o usuário começa com uma unidade de três ações diferentes: Azul, Petrobras e Vale.

Basicamente, cada ativo tem as seguintes características: código, preço, quantidade, imagem e subtítulo. O código é um identificador único da ação, como 'PETR4' para Petrobras.

O subtítulo é uma descrição maior do ativo, como 'Petrobras Pn N2' para a ação de código 'PETR4'. Nessa lógica, ele indica que 'PETR4' é uma ação preferencial (Pn) da Petrobras e quem tem um nível N2, que é como se fosse um "selo" atribuído as empresas pela Bovespa para indicar a adoção de boas práticas.

A quantidade de ações que o usuário tem de um ativo específico naquele momento é exibida logo acima do preço em um número de cor verde.

Dessa maneira, sempre que comprar ou vender uma ação, este número será alterado para a quantidade de ações que tiver. A imagem é simplesmente uma representação visual da empresa em questão.

### Página de negociação
Ao clicar em uma das ações disponíveis na página anterior, o usuário é direcionado para a página de negociação.

Nesta página, é possível visualizar o valor disponível em conta para investir, o preço da ação que clicou, a quantidade já comprada e algumas coisas a mais.

De início,  o botão de compra vem selecionado por padrão, mas o usuário pode clicar no botão de vender caso ele deseje realizar a ação contrária.

Logo abaixo, há um campo que pode ser alterado para que o usuário indique quantas ações do ativo que ele escolheu ele deseja comprar ou vender (de acordo com o botão de escolha).

Nesse ponto, a alteração pode ser feita tanto por meio de digitação quanto pelo clique ou toque em um dos botões laterais de adição ou subtração. Aqui, não é possível selecionar um valor menor do que 1.

Em seguida, há um campo para exibição do preço de compra da ação e do preço total de acordo com a quantidade de ações que deseja comprar ou vender. Um ponto importante é que esses dois campos não podem ser alterados, estão ali apenas para visualização do usuário.

Logo após, há um botão para confirmar a compra ou venda e um outro para voltar a página de ações.

Caso escolha uma quantidade de ações cujo preço total ultrapasse o valor disponível em conta, a transação não será realizada e uma mensagem aparecerá na tela para alertar do ocorrido e dar como opção para o usuário depositar mais dinheiro ou voltar para a página de negociação.

O mesmo ocorre caso tente vender um ativo que ainda não comprou, apenas com uma mensagem um pouco diferente.

Quando o preço é compatível com o valor em conta, a transação é realizada, sua quantidade é alterada e o saldo da conta é subtraído do valor do investimento.

### Página de depósito e retirada
A página de depósito e retirada pode ser acessada na aplicação por meio da página inicial, do menu lateral ou do aviso recebido ao tentar realizar uma transação inválida na página de negociação.

Nela, é possível visualizar o saldo disponível em conta e adicionar mais dinheiro ou remover dinheiro da conta. De início, o botão de depósito vem selecionado e ele indica que o usuário deseja acrescentar dinheiro ao saldo.

Para isso, basta inserir o valor desejado no campo indicado e depois clicar no botão de confirmar. Caso tente retirar mais dinheiro do que tem disponível em conta, um alerta é exibido na tela dizendo que não tem dinheiro suficiente para realizar a transação. 

Ao clicar no botão de voltar, o usuário é redirecionado para a página inicial do aplicativo.

## Tecnologias usadas
### React


### React Router


### React Testing Library


### Redux


### Styled Components


### Axios


### ESLint


### JavaScript ES6


## Como executar o projeto?


## Execução de testes
* Uma vez que já tenha instalado as dependências do projeto, para rodar todos os testes basta executar o seguinte comando:
```bash
npm test
```
- Caso queira checar a cobertura de testes:
```bash
npm run test:coverage
```

## Próximos passos pensados para a continuidade do desenvolvimento


## Referências
Durante o desenvolvimento do projeto, naturalmente algumas dificuldades foram surgindo, principalmente para execução de ações que ainda não sabia claramente como fazer.

Por isso, para algumas features, foram consumidos os seguintes conteúdos:
- [Criação de uma sidebar](https://www.youtube.com/watch?v=Sl_tsr2gEhE);
- [Utilização do redux com hooks](https://www.youtube.com/watch?v=7L7MhxjI4PE);
- [Configuração do configureStore](https://www.youtube.com/watch?v=GpAAQnrxiGQ);
- [Regex para validação do e-mail](https://www.w3resource.com/javascript/form/email-validation.php);
- [Hook useRef em inputs](https://www.youtube.com/watch?v=lA8o3kUl1TA);
- [Uso do handleFocus para selecionar o conteúdo de um input](https://stackoverflow.com/questions/36051883/how-to-select-all-text-in-input-with-reactjs-when-it-focused);
- [Método clear para o userEvent](https://stackoverflow.com/questions/62258250/why-clear-method-not-exist-on-testing-library-user-event);
- [Criação de uma função para renderização de um componente com Router e Redux para testes em RTL](https://stackoverflow.com/questions/67017951/how-to-render-with-router-as-well-as-with-redux-for-react-testing-library);
- [Começar a partir de uma rota específica no RTL](https://v5.reactrouter.com/web/guides/testing);
- [Criação de script para obter a cobertura de testes](https://stackoverflow.com/questions/57886008/how-to-get-code-coverage-in-react-with-react-testing-library).