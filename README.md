# myJobs
**Exemplo de implementação de api com nodejs + mongodb**

# Documentção API
[Apiary](docs.myjobs2.apiary.io)

# Clonar o repositório:
git clone https://github.com/rodrigoboni/myJobs.git

# Pré requisitos:
Npm
Node.js
Mongodb

# Dependências:
`npm install`

# Executar:
`sudo service mongod start`
`npm start`

# Debug:
`sudo service mongod start`
`DEBUG=myjobs:* npm start`

# Notas sobre os modelos de dados:
-**Employers**
  -__name__ Nome do empregador
  -__city__ Cidade do empregador, para filtrar empregadores por cidade / região etc
  -__obs__ Notas do empregador, como detalhes de exigências etc
  
-**Jobs**
  -__title__ Título da vaga / palavras chave p/ identificar a vaga
  -__description__ Descrição da vaga, indicando de forma resumida o trabalho solicitado
  -___employer__ Empregador que está solicitando a vaga (cada empregador pode definir n vagas)
  -__weekdays__ Indica se o trabalho deve ser realizado em dias de semana
  -__weekends__ Indica se o trabalho deve ser realizado aos finais de semana
  -__hoursDay__ Indica a carga horária em horas por dia de trabalho
  -__wage__ Indica o valor pago para trabalhar a quantidade de horas diárias em dias de semana e / ou finais de semana
  -__previousExperience__ Indica se o candidato deve ter experência prévia na função
  -__obs__ Detalhes e notas sobre a vaga