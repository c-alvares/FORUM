drop database if exists dolceAmore;
create database dolceAmore charset=utf8 collate utf8_general_ci;
use dolceAmore;

create table user(
    id_user integer auto_increment not null primary key,
    user_name varchar(30) not null,
    nome varchar(30) not null, 
    email varchar(40) not null,
    senha varchar(30) not null
);

create table temas (
    id integer auto_increment not null primary key,
    nome varchar(150) not null
) ;

create table Publicacoes(
    id_publi integer not null auto_increment primary key,
    id_user integer not null,
    id_tema integer not null,
    publicacoes varchar(250) not null,
    foreign key (id_user) references user(id_user),
    foreign key (id_tema) references temas(id)
);

create table favoritos (
    id_user integer not null,
    id_publi integer not null,
    foreign key (id_publi) references Publicacoes(id_publi),
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
insert into user value(default, 'Jurandir', 'Jurandir', 'jurandir@ig.com.br', 'mat1234');
insert into temas value(default, 'Bolos'), (default, 'Tortas'), (default, 'Miojo');
insert into Publicacoes value(default, 1, 3, 'Porque meu miojo não fica soltinho ??' );
insert into Publicacoes value(default, 2, 1, 'O bolo não cresceu, um ultraje ! quero reembolso' );
insert into Publicacoes value(default, 2, 2, 'A massa queimou !' );
insert into Respostas value(default, 1, 'É simples, o leite tem que estar morno, e deixar descansar por no minimo 1h30 ajuda bastante.');
insert into Respostas_resp value(default, 1, 'Muito Obrigado!!');
insert into favoritos value(1,2);

SELECT * FROM user INNER JOIN favoritos ON user.id_user = favoritos.id_user;

SELECT * FROM user;
SELECT * FROM Publicacoes;
SELECT * FROM Respostas;
SELECT * FROM Respostas_resp;

