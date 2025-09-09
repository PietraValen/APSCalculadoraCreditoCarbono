# Wiki de Documentação do Projeto

## Sumário

1. [Visão Geral do Projeto](#visão-geral-do-projeto)
   - [Propósito](#propósito)
   - [Funcionalidades Principais](#funcionalidades-principais)
2. [Pilha de Tecnologias (Tech Stack)](#pilha-de-tecnologias-tech-stack)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Começando](#começando)
   - [Pré-requisitos](#pré-requisitos)
   - [Instalação](#instalação)
   - [Executando o Projeto](#executando-o-projeto)
5. [Scripts Disponíveis](#scripts-disponíveis)
6. [Páginas e Componentes](#páginas-e-componentes)
   - [Componentes](#componentes)
   - [Páginas](#páginas)
7. [Internacionalização (i18n)](#internacionalização-i18n)
8. [Como a Calculadora Funciona](#como-a-calculadora-funciona)
   - [Fatores de Emissão](#fatores-de-emissão)
   - [Lógica de Cálculo](#lógica-de-cálculo)
9. [Geração de PDF](#geração-de-pdf)
10. [Contribuição](#contribuição)

---

## 1. Visão Geral do Projeto

### Propósito

O **Calculadora de Crédito de Carbono** é uma aplicação web de código aberto projetada para aumentar a conscientização sobre as emissões de carbono e capacitar usuários a calcular sua pegada de carbono. A aplicação fornece uma ferramenta interativa para estimar as emissões em vários setores, como transporte, consumo de energia e processos industriais.

Além do cálculo, a ferramenta sugere a quantidade de créditos de carbono que um usuário precisaria adquirir para compensar suas emissões, oferecendo um passo acionável em direção à neutralidade de carbono.

### Funcionalidades Principais

- **Cálculo de Emissões Multi-Setorial**: Calcula as emissões de carbono para os setores de Transporte, Energia, Industrial e Resíduos.
- **Formulários Dinâmicos**: A interface do usuário se adapta com base nas seleções do usuário para coletar os dados relevantes para cada tipo de cálculo.
- **Visualização de Resultados**: Apresenta os resultados em um formato claro e compreensível, incluindo emissões totais em kg de CO2 e o número de créditos de carbono sugeridos.
- **Gráficos Interativos**: Usa gráficos de barras para visualizar a divisão das emissões e créditos.
- **Relatórios em PDF**: Gera um relatório em PDF para download com um resumo dos cálculos e dos dados de entrada.
- **Suporte a Múltiplos Idiomas**: A interface está disponível em Português e Inglês.
- **Tema Escuro/Claro**: Oferece um seletor de tema para conforto visual do usuário.

## 2. Pilha de Tecnologias (Tech Stack)

Este projeto é construído com um conjunto de tecnologias web modernas para garantir uma experiência de usuário robusta, escalável e de fácil manutenção.

- **Framework Frontend**: [React](https://reactjs.org/) (v18.2.0)
- **Ferramenta de Build**: [Vite](https://vitejs.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**:
  - [Tailwind CSS](https://tailwindcss.com/): Uma framework CSS utilitária para prototipagem rápida.
  - [Material-UI (MUI)](https://mui.com/): Uma biblioteca de componentes de UI para React.
- **Roteamento**: [React Router DOM](https://reactrouter.com/) (v6)
- **Internacionalização**: [i18next](https://www.i18next.com/) com [react-i18next](https://react.i18next.com/)
- **Gráficos**: [Chart.js](https://www.chartjs.org/) com [react-chartjs-2](https://react-chartjs-2.js.org/)
- **Geração de PDF**: [jsPDF](https://github.com/parallax/jsPDF)
- **Linting**: [ESLint](https://eslint.org/)

## 3. Estrutura do Projeto

O código-fonte é organizado em uma estrutura de pastas modular para promover a separação de preocupações e a escalabilidade.

```
/
├── public/
│   └── (Recursos estáticos)
├── src/
│   ├── assets/
│   │   └── (Imagens, logos, etc.)
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── locales/
│   │   ├── en.json
│   │   └── pt.json
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Articles.tsx
│   │   ├── Calculator.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── i18n.ts
├── .gitignore
├── package.json
├── README.md
└── vite.config.ts
```

- **`public/`**: Contém ativos estáticos que não são processados pelo Vite.
- **`src/assets/`**: Armazena imagens e outros ativos que são importados diretamente nos componentes.
- **`src/components/`**: Contém componentes React reutilizáveis (ex: `Header`, `Footer`).
- **`src/locales/`**: Armazena os arquivos de tradução JSON para o i18n.
- **`src/pages/`**: Cada arquivo `.tsx` aqui representa uma rota/página na aplicação.
- **`src/App.tsx`**: O componente raiz que configura o roteamento e o layout principal.
- **`src/main.tsx`**: O ponto de entrada da aplicação que renderiza o componente `App`.
- **`src/i18n.ts`**: Arquivo de configuração para a biblioteca `i18next`.

## 4. Começando

Para executar uma cópia local deste projeto, siga os passos abaixo.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18.x ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

### Instalação

1.  **Clone o repositório:**
    ```sh
    git clone https://github.com/seu-usuario/carbon-credit-calculator.git
    cd carbon-credit-calculator
    ```

2.  **Instale as dependências:**
    Execute o seguinte comando na raiz do projeto para instalar todos os pacotes necessários listados no `package.json`.
    ```sh
    npm install
    ```

### Executando o Projeto

Após a conclusão da instalação, você pode iniciar o servidor de desenvolvimento local:

```sh
npm run dev
```

Isso iniciará a aplicação no modo de desenvolvimento com o Vite. Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal) para ver a aplicação em execução.

## 5. Scripts Disponíveis

No `package.json`, você encontrará os seguintes scripts:

- **`npm run dev`**: Inicia o servidor de desenvolvimento do Vite com Hot Module Replacement (HMR).
- **`npm run build`**: Compila a aplicação TypeScript e a empacota para produção no diretório `dist/`.
- **`npm run lint`**: Executa o ESLint para analisar o código em busca de erros de linting e problemas de estilo.
- **`npm run preview`**: Inicia um servidor local para pré-visualizar o build de produção a partir do diretório `dist/`.

## 6. Páginas e Componentes

### Componentes

- **`Header.tsx`**:
  - Exibe o logo da aplicação e os links de navegação.
  - Contém o seletor de idioma (Português/Inglês).
  - Inclui o botão para alternar entre os modos claro e escuro.
- **`Footer.tsx`**:
  - Exibe informações de direitos autorais e links para redes sociais ou informações de contato.

### Páginas

- **`Home.tsx`**: A página inicial da aplicação, fornecendo uma introdução à calculadora de carbono.
- **`About.tsx`**: Uma página que descreve o propósito do projeto, a equipe por trás dele e sua missão.
- **`Articles.tsx`**: Uma seção para artigos, notícias ou posts de blog relacionados à sustentabilidade e créditos de carbono.
- **`Contact.tsx`**: Um formulário ou informações de contato para os usuários entrarem em contato.
- **`Calculator.tsx`**: A página principal da aplicação, onde os usuários podem calcular sua pegada de carbono.

## 7. Internacionalização (i18n)

O projeto usa `i18next` para gerenciar o conteúdo em múltiplos idiomas.

- **Arquivos de Tradução**: As traduções são armazenadas em `src/locales/`. Cada idioma tem seu próprio arquivo JSON (`en.json`, `pt.json`).
- **Adicionando um Novo Idioma**:
  1. Crie um novo arquivo `xx.json` em `src/locales/`, onde `xx` é o código do idioma.
  2. Adicione as chaves de tradução a este arquivo.
  3. Importe e adicione o novo recurso de idioma no arquivo de configuração `src/i18n.ts`.
- **Usando Traduções**:
  Nos componentes React, use o hook `useTranslation` para acessar a função `t`:
  ```tsx
  import { useTranslation } from 'react-i18next';

  const { t } = useTranslation();
  // ...
  return <h1>{t('welcomeMessage')}</h1>;
  ```

## 8. Como a Calculadora Funciona

A funcionalidade principal da aplicação reside na página `Calculator.tsx`. O cálculo é baseado em fatores de emissão pré-definidos.

### Fatores de Emissão

Os fatores de emissão são valores codificados no componente `Calculator.tsx` que representam a quantidade de CO2 emitida por unidade de atividade.

Exemplo de estrutura de dados:
```javascript
const emissionFactors = {
  transportation: {
    gasoline: 2.31, // kg CO2 por litro
    diesel: 2.68,   // kg CO2 por litro
    // ...
  },
  energy: {
    coal: 0.937,    // kg CO2 por kWh
    // ...
  },
  // ...
};
```

### Lógica de Cálculo

1.  **Seleção de Setor**: O usuário primeiro seleciona um setor (Transporte, Energia, etc.).
2.  **Entrada de Dados**: Com base no setor, um formulário dinâmico solicita dados relevantes (ex: distância percorrida, consumo de combustível, uso de eletricidade).
3.  **Cálculo**: Quando o formulário é enviado, a aplicação multiplica os dados de entrada pelos fatores de emissão correspondentes para calcular as emissões totais em kg de CO2.
    - **Fórmula Exemplo (Transporte)**: `Emissões = Distância * Fator_de_Emissão_do_Veículo`
4.  **Conversão para Créditos**: O total de emissões em kg é dividido por 1000 para determinar o número de créditos de carbono, já que 1 crédito de carbono equivale a 1 tonelada de CO2.

## 9. Geração de PDF

Os usuários podem baixar um relatório de suas emissões.

- **Biblioteca**: `jsPDF` é usada para criar o documento PDF no lado do cliente.
- **Funcionalidade**: Após um cálculo bem-sucedido, um botão "Baixar PDF" aparece.
- **Conteúdo**: O PDF inclui:
  - Um título e a data do relatório.
  - O total de emissões de carbono.
  - O número de créditos de carbono sugeridos.
  - Uma tabela com os dados de entrada fornecidos pelo usuário.

## 10. Contribuição

Contribuições para este projeto são bem-vindas. Por favor, siga estas diretrizes:

1.  **Faça um Fork do Repositório**: Crie sua própria cópia do projeto.
2.  **Crie uma Branch**: Crie uma nova branch para suas alterações (`git checkout -b feature/minha-feature`).
3.  **Faça as Alterações**: Implemente sua funcionalidade ou correção de bug.
4.  **Execute o Lint**: Certifique-se de que seu código segue as diretrizes de estilo executando `npm run lint`.
5.  **Faça o Commit**: Faça o commit de suas alterações com uma mensagem clara e descritiva.
6.  **Envie para a Branch**: Envie suas alterações para o seu fork (`git push origin feature/minha-feature`).
7.  **Abra um Pull Request**: Abra um Pull Request do seu fork para o repositório principal.
