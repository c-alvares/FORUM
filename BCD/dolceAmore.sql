drop database if exists dolceAmore;
create database dolceAmore charset=utf8 collate utf8_general_ci;
use dolceAmore;

create table user(
    id_user integer auto_increment not null primary key,
    user_name varchar(30) not null,
    nome varchar(30) not null, 
    email varchar(40) not null,
    senha varchar(30) not null,
    favoritos varchar(40)
);

create table Publicacoes(
    id_publi integer not null auto_increment primary key,
    id_user integer not null,
    tema varchar(30) not null,
    favoritos varchar(40),
    publicacoes varchar(250) not null,

    foreign key (id_user) references user(id_user)
);

create table Respostas(
    id_resposta integer auto_increment not null primary key,
    id_publi integer not null,
    resposta varchar(250),
   
    foreign key (id_publi) references Publicacoes(id_publi)
);

create table Respostas_resp(
    id_comentario integer auto_increment not null primary key,
    id_resposta integer not null,
    resposta_res varchar(250),

    foreign key (id_resposta) references Respostas(id_resposta)
);

insert into user value(default, 'MMA12', 'Matheus', 'matheus@gmail.com', 'mat1234');
insert into Publicacoes value(default, 1,'Pães', 'Como posso fazer um pão ficar fofinho e leve?' );
insert into Respostas value(default, 1, 'É simples, o leite tem que estar morno, e deixar descansar por no minimo 1h30 ajuda bastante.');
insert into Respostas_resp value(default, 1, 'Muito Obrigado!!');
