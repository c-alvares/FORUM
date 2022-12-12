drop database if exists dolceAmore;
create database dolceAmore charset=utf8 collate utf8_general_ci;
use dolceAmore;

create table cargos(
    id integer not null primary key auto_increment,
    tipo varchar(20) not null
);

create table user(
    id_user integer auto_increment not null primary key,
    user_name varchar(30) not null,
    nome varchar(30) not null, 
    email varchar(40) not null,
    senha varchar(30) not null,
    img varchar(30),
    id_role integer not null,

    CONSTRAINT fk_role foreign key (id_role) references cargos(id)
);

create table temas(
    id integer auto_increment not null primary key,
    nome varchar(150) not null,
    foto varchar(40) not null
);

create table publicacoes(
    id_publi integer not null auto_increment primary key,
    id_user integer not null,
    id_tema integer not null,
    publicacoes varchar(250) not null,
    CONSTRAINT fk_user foreign key (id_user) references user(id_user),
    CONSTRAINT fk_tema foreign key (id_tema) references temas(id)
);

create table favoritos(
    id_user integer not null,
    id_publi integer not null,
    CONSTRAINT fk_userf foreign key (id_user) references user(id_user),
    CONSTRAINT fk_publif foreign key (id_publi) references publicacoes(id_publi)

);

create table respostas(
    id_resposta integer auto_increment not null primary key,
    id_publi integer not null,
    resposta varchar(250),
    CONSTRAINT fk_publi foreign key (id_publi) references publicacoes(id_publi)
);

create table respostas_resp(
    id_comentario integer auto_increment not null primary key,
    id_resposta integer not null,
    resposta_res varchar(250),
    CONSTRAINT fk_resp foreign key (id_resposta) references respostas(id_resposta)
);

insert into cargos value (default, "admin");
insert into cargos value (default, "user");

SELECT * FROM cargos;


insert into user value(default, 'MMA12', 'Matheus', 'matheus@gmail.com', 'mat1234', 'matt.png', 1 );
insert into user value(default, 'Jurandir', 'Jurandir', 'jurandir@ig.com.br', 'mat1234', "jurandir.png",  2);

SELECT * FROM user;


insert into temas value(default, 'Bolos', 'bolo.png'), (default, 'Tortas', 'torta.png');

SELECT * FROM temas;


insert into publicacoes value(default, 2, 1, 'O bolo nao cresceu, um ultraje ! quero reembolso' );
insert into publicacoes value(default, 2, 2, 'A massa queimou !' );

SELECT * FROM publicacoes;


insert into respostas value(default, 1, 'Você abriu o forno antes de 20 minutos?');
insert into respostas value(default, 2, 'Vish, sinto muito...');
SELECT * FROM respostas;


insert into respostas_resp value(default, 1, 'Sim, cara. Fui fiscalizar...');
insert into respostas_resp value(default, 1, 'Provavelmente foi por isso. ');
insert into respostas_resp value(default, 2, 'Tenta novamente ');

SELECT * FROM respostas_resp;


insert into favoritos value(1,2);
SELECT * FROM favoritos;


SELECT * FROM user INNER JOIN favoritos ON user.id_user = favoritos.id_user;