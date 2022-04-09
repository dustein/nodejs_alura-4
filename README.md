Curso ORM Sequelize com MySQL

mysql -u 'root' -p
show databases;
create database escola_ingles;



Sequelize:
npx sequelize-cli init
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
npx sedquelize-cli db:migrate
npx sequelize-cli seed:generate --name demo-pessoa
npx sequelize-cli db:seed:all


Aulas Alura desatualizadas com o ES6. Consegui resolver problema so Sequelize usando Babel.
