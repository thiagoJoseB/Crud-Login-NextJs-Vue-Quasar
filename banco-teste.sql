create database BD_CRUD_LOGIN;
 USE BD_CRUD_LOGIN;

 
create table Usuarios(
id int not null auto_increment primary key,
nome varchar(100) not null,
email varchar(32) not null,
senha varchar(255) not null
)

select * from Usuarios;

