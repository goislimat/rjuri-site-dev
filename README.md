# Site RJuri Dev

Versão de desenvolvedor do site RJuri

## Instruções de uso

Submissão de novas imagens acontecem na pasta `src/images`

Submissão de novos ícones acontemcem na pasta `src/images/icons`

A maior parte dos dados passivos de mudança se encontram no arquivo `src/components/blocks/data.js`

Para começar a rodar essa aplicação, clone o repositório ou faça download no botão verde no topo direito da página.

```
git clone https://github.com/goislimat/rjuri-site-dev.git
cd rjuti-site-dev
npm install
npm run start
```

O servidor ficará lodando nesse endereço [http://localhost:3000](http://localhost:3000) e toda vez que você fizer alguma alteração, ela será refletida no servidor.

Obs 1: git clone s funcionará se você tiver o Git instalado na máquina, caso contrário opte por fazer download.
Obs 2: é necessário tem node e npm instalados na máquina para poder instalar, testar e recompilar a aplicação. Para isso, siga as instruções [nesse link](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm).

## Adicionando/Editando dados

A maior parte das informações que você pode querer editar, estão no arquivo `data.js` vou explicar como funciona as informações nele funcionam.

```javascript
// Esses imports, representam boa parte das imagens usadas ao longo do sistema.
// (Salvo execessões de imagens de fundo que ficam em seus respectivos arquivos)
// Para adicionar novas imagens, basta copiar a estrutura do import, mudando apenas o nome e a
// extensão do arquivo (se necessário)
// PS: NÃO UTILIZE ESPAÇO NO NOME DAS IMAGENS

// Esses são os ícones do primeiro carousel (slideshow)
import maisTempo from "../../images/icons/mais-tempo.svg";
import atendimentoHumanizado from "../../images/icons/atendimento-humanizado.svg";
import coCriacao from "../../images/icons/co-criacao.svg";
import tranquilidade from "../../images/icons/tranquilidade.svg";
import organizacao from "../../images/icons/organizacao.svg";
import seguranca from "../../images/icons/seguranca.svg";

// Esses são os ícones da seção "Um Software Completo"
import processos from "../../images/icons/processos.svg";
import financeiro from "../../images/icons/financeiro.svg";
import ged from "../../images/icons/ged.svg";
import agenda from "../../images/icons/agenda.svg";
import gdec from "../../images/icons/gdec.svg";
import relatorios from "../../images/icons/relatorios.svg";

// Esses são os ícones dos cards com animação de entrada lateral
import crm from "../../images/icons/crm.svg";
import googleCalendar from "../../images/icons/google-calendar.svg";
import businessInteligence from "../../images/icons/business-inteligence.svg";
import cobranca from "../../images/icons/cobranca.svg";

// Essas são as imagens dos advogados
import lawyer1 from "../../images/lawyer-1.png";
import lawyer2 from "../../images/lawyer-2.jpg";
import lawyer3 from "../../images/lawyer-3.jpg";
import lawyer4 from "../../images/lawyer-4.jpg";
import lawyer5 from "../../images/lawyer-5.jpg";

// Essas são as imagens do segunda seção de card com as atividades do RJuri
import pushAndamentos from "../../images/icons/push-andamentos.svg";
import diarioOficial from "../../images/icons/diario-oficial.svg";
import sms from "../../images/icons/sms.svg";

// Esses são os ícones com as qualidades da equipe de atendimento
import atendimentoHumanizado2 from "../../images/icons/atendimento-humanizado-2.png";
import contratacaoFacultativa from "../../images/icons/contratacao-facultativa.png";
import equipeQualificada from "../../images/icons/equipe-qualificada.png";

import colors from "../../helpers/colors";

// A partir daqui começa-se a construção dos dados
// Para adicionar uma nova informação, basta replicar a estrutura entre chaves 
// de cada um dos objetos

// Itens do primeiro slideshow
export const firstCarouselData = [
  {
    id: 2,
    icon: atendimentoHumanizado,
    title: "Atendimento Humanizado",
    text:
      "Sempre que precisar, você contará com um suporte técnico humanizado, qualificado e pró ativo, que oferece a tranquilidade necessária para a utilização contínua e efetiva de nossas soluções."
  },
  {
    id: 3,
    icon: coCriacao,
    title: "Co-criação",
    text:
      "Todos os clientes contribuem para a constante evolução do sistema. Sua sugestão é crítica é sempre bem-vinda para o aprimoramento do sistema."
  },
  {
    id: 4,
    icon: tranquilidade,
    title: "Tranquilidade",
    text:
      "Não se preocupe em memorizar datas e prazos. Você será avisado de todos os compromissos e prazos mesmo quando está fora do escritório de trabalho."
  },
  {
    id: 5,
    icon: organizacao,
    title: "Organização",
    text:
      "Encontrar a informação desejada se tornará uma tarefa bem simples é rápida"
  },
  {
    id: 6,
    icon: seguranca,
    title: "Segurança",
    text:
      "Seus dados ficam armazenados com toda a segurança em seu próprio computador"
  },
  {
    id: 1,
    icon: maisTempo,
    title: "Mais tempo",
    text:
      "Potencialize ao máximo a gestão do seu escritório, reduzindo tempo e esforço para as tarefas do dia a dia."
  }
];

// Itens da seção "Um Software Completo" aqui ainda chama carousel porque antes era um slideshow 
export const secondCarouselData = [
  {
    id: 1,
    color: colors.azulEscuro,
    icon: processos,
    title: "PROCESSOS",
    text: "Localize rapidamente as informações e arquivos processuais."
  },
  {
    id: 2,
    color: colors.verde,
    icon: ged,
    title: "GED",
    text: "Armezene seus documentos de forma organizada e fácil localização."
  },
  {
    id: 3,
    color: colors.cinzaEscuro,
    icon: financeiro,
    title: "FINANCEIRO",
    text:
      "Controle financeiro completo, com contas a pagar, receber, reembolsos, fluxo de caixa, etc."
  },
  {
    id: 4,
    color: colors.vermelho,
    icon: agenda,
    title: "AGENDA",
    text:
      "Calendário de compromissos com diversos formas de visualização e lembretes automatizados."
  },
  {
    id: 5,
    color: colors.azulClaro,
    icon: gdec,
    title: "G-DEC",
    text:
      "Gere declarações, procurações, contratos, ou qualquer outro documento do MS-Word."
  },
  {
    id: 6,
    color: colors.cinzaMedio,
    icon: relatorios,
    title: "RELATÓRIOS",
    text:
      "São mais de 20 opções de relatórios, que poderão ser exportados em pdf, docx, xlsx."
  }
];

// Dados dos primeiros cards
export const FirstCardsData = [
  {
    id: 1,
    color: colors.cinzaMedio,
    icon: crm,
    title: "CRM",
    text:
      "Atenda melhor e mais rápido seu cliente. A automatização de processos e personalização do atendimento faz com que o cliente perceba valor na sua empresa."
  },
  {
    id: 2,
    color: colors.vermelho,
    icon: googleCalendar,
    title: "GOOGLE CALENDAR",
    text:
      "O RJURI sincroniza todas os compromissos com o Google Calendar. Assim, você terá acesso aos compromissos, de qualquer lugar, em seu computador, tablet ou smartphone."
  },
  {
    id: 3,
    color: colors.cinzaEscuro,
    icon: businessInteligence,
    title: "BUSINESS INTELLIGENCE",
    text:
      "Os dados inseridos no RJURI são transformados em comparativos analíticos, e enviados periodicamente para seu e-mail, tornando o acompanhamento simples e prático."
  },
  {
    id: 4,
    color: colors.verde,
    icon: cobranca,
    title: "COBRANÇA",
    text:
      "Os dados inseridos no RJURI são transformados em comparativos analíticos, e enviados periodicamente para seu e-mail, tornando o acompanhamento simples e prático."
  }
];

// Dados dos segundo cards com as atividades do RJuri
export const secondCardsData = [
  {
    id: 1,
    color: colors.azulMedioClaro,
    icon: pushAndamentos,
    title: "PUSH ANDAMENTOS",
    text:
      "Receba os andamentos de seus processos diretamente no RJURI. O sistema permite o agendamento de prazos, envio de informativos aos clientes, entre outras funcionalidades."
  },
  {
    id: 2,
    color: colors.azulEscuro,
    icon: diarioOficial,
    title: "DIÁRIO OFICIAL DA ROMASOFT",
    text:
      "O D.O.R. é 100% automatizado, não sendo necessário acessar nenhum programa para receber suas publicações. O serviço baixa automaticamente e lhe avisa do recebimento."
  },
  {
    id: 3,
    color: colors.vermelho,
    icon: sms,
    title: "SMS",
    text:
      "O que acha de agendar o envio de um sms lembrando seu cliente horas antes da audiência, diminuindo assim a chance de perda de compromissos?"
  }
];

// Dados de depoimentos
export const testimonials = [
  {
    id: 1,
    image: lawyer1,
    text:
      "Quando comecei a utilizar o sistema RJuri, procurava um sistema que coubesse em meu orçamento e que tivesse ferramentas para controlar meu pequeno escritório. Antes já havia investido em sistemas caros e complexos, que para minha frustração, não consegui ter resultados. Com o RJuri, já consegui utilizar todos os recursos do sistema já na primeira semana, pois são fáceis, práticos e intuitivos. Além disso, o suporte é muito atencioso e resolve as minhas dúvidas. Consigo acompanhar todos os Diários da Justiça dos Estados em que funciono. Consigo acompanhar os movimentos dos processos de maneira simples e prática, antes mesmo das publicações serem realizadas, o que me proporciona mais tempo para fazer um trabalho melhor. Com a geração automática de Procuração e Contratos, a facilidade e rapidez para criar esses documentos me permite um grande auxílio. O Suporte também recebe e atende a maioria de nossas solicitações quanto a recursos que por ventura não existem no sistema. Por tudo isso, o preço é justo e muito menor do que se vê no mercado. Eu recomendo.",
    author: "Cil Farney Assis Rodrigues",
    from: "Rio Branco - AC"
  },
  {
    id: 2,
    image: lawyer2,
    text:
      "Ao longo dos anos de nossa parceria, a Romasoft, por meio do seu RJURI, tem facilitado o nosso dia-a-dia não só no acompanhamento processual das ações, mas também no controle financeiro e de compromissos sendo um verdadeiro gestor do escritório!",
    author: "Giancarlo Pacheco",
    from: "Recife - PE"
  },
  {
    id: 3,
    image: lawyer3,
    text:
      "Estamos com o sistema Romasoft já tem alguns anos. Na época em decorrência da necessidade de melhorar a infraestrutura do nosso escritório Rocha & Mouta Advogados, passamos a pesquisar vários (sistemas) softwares jurídicos, que dentre eles tivemos contato com o Romualdo, fundador do Romasoft, pois bem, através do custo e benefícios, formalizados o contrato de prestação de serviços.  Sem dúvidas fizemos uma ótima aquisição, RECOMENDO.",
    author: "Valquiria Rocha Batista",
    from: "São Paulo - SP"
  },
  {
    id: 4,
    image: lawyer4,
    text:
      "Após ampla pesquisa de mercado, apostamos no RJuri como o programa de gestão jurídica e financeira de nosso escritório, e ele atendeu completamente nossas expectativas, tendo excelente relação custo x benefício. O ambiente é amigável e intuitivo, facilitando o treinamento dos novos colaboradores, sendo as atualizações e melhorias realizadas de forma contínua. O atendimento da Romasoft é sempre ágil e prestativo, solucionando rapidamente as questões que surgem com o uso cotidiano do programa. Em cinco anos de relacionamento, estamos plenamente satisfeitos com o programa e a empresa.",
    author: "Daniel de Mello Massimino",
    from: "Schroeder - SC"
  },
  {
    id: 5,
    image: lawyer5,
    text:
      "Nosso escritório é um dos pioneiros a utilizar o sistema Romasoft. Quando fomos procurados, acreditamos na ideia e hoje é nossa principal ferramenta de trabalho, tanto no plano processual, quanto organizacional. ",
    author: "Dr. Vinicius Avila Moy",
    from: "Porto Alegre - RS"
  }
];

// Dados da qualidade do atendimento
export const staffQualities = [
  {
    id: 1,
    icon: equipeQualificada,
    text: "Equipe qualificada e pró-ativa"
  },
  {
    id: 2,
    icon: atendimentoHumanizado2,
    text: "Atendimento humanizado"
  },
  {
    id: 3,
    icon: contratacaoFacultativa,
    text: "Contratação facultativa"
  }
];

```

## Adicionando atualizações

Depois que as alterações estiverem de acordo com o planejado, recompile os arquivos (esse processo é importante para que os arquivos fiquem mais leves e o site possa ser carregado mais rapidamente).

De dentro da pasta rjuri-site-dev, faça:

```
npm run build
```

Uma pasta build será criada, então basta copiá-la e substituir os dados antigos do site existentes no servidor.

### Nota adicional

Algumas alteração podem não aparecer imediatamente após serem submetidas no navegador por questões de cache de navegador. Se algo não atualizar, tente limpar o cache ou abrir o site em um janela anônima.
