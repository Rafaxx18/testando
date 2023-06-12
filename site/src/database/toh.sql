drop database toh;
create database toh;
use toh;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
); 

create table quiz (
idQuiz int primary key auto_increment,
resultado varchar(45),
fkUsuario int,
constraint fkUsuarios foreign key (fkUsuario)
	references usuario(idUsuario)
);

create table votos (
idVoto int primary key auto_increment,
nome varchar(45),
qdtVotos int,
fkUsuario int,
constraint fkUsuariosVoto foreign key (fkUsuario)
	references usuario(idUsuario)
);

insert usuario values 
 (null,'Rocambole','ro@gmail.com','1111'),
 (null,'Marcy','stay@gmail.com','1500'),
 (null,'juju','ba@gmail.com','1232'),
 (null,'Dipper','falls@gmail.com','123'),
 (null,'Cipher','doritos@gmail.com','3333'),
 (null,'Emma','tpn@gmail.com','456');
 
 insert quiz values 
 ();
 
 insert votos values 
 (null,'Willow',1,1),
  (null,'Willow',1,2),
   (null,'luz',1,3),
    (null,'amity',1,4),
     (null,'Willow',1,5);
     
     select*from usuario;
     
        select*from usuario join votos on idUsuario = fkUsuario;
        select count('Willow') from votos;
        
        
     
     