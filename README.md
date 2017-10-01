# myJobs
**Exemplo de implementação de api com nodejs + mongodb**

# Documentção API
[Apiary](http://docs.myjobs2.apiary.io)

# Clonar o repositório:
`git clone https://github.com/rodrigoboni/myJobs.git`

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

  -*name* Nome do empregador

  -*city* Cidade do empregador, para filtrar empregadores por cidade / região etc

  -*obs* Notas do empregador, como detalhes de exigências etc




-**Jobs**

  -*title* Título da vaga / palavras chave p/ identificar a vaga

  -*description* Descrição da vaga, indicando de forma resumida o trabalho solicitado

  -*_employer* Empregador que está solicitando a vaga (cada empregador pode definir n vagas)

  -*weekdays* Indica se o trabalho deve ser realizado em dias de semana

  -*weekends* Indica se o trabalho deve ser realizado aos finais de semana

  -*hoursDay* Indica a carga horária em horas por dia de trabalho

  -*wage* Indica o valor pago para trabalhar a quantidade de horas diárias em dias de semana e / ou finais de semana

  -*previousExperience* Indica se o candidato deve ter experência prévia na função

  -*obs* Detalhes e notas sobre a vaga
