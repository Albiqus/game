create table best_scores (
    id BIGSERIAL NOT NULL PRIMARY KEY,
	nick_name VARCHAR(10) NOT NULL,
	best_score VARCHAR(10) NOT NULL
);

create table players (
    id BIGSERIAL NOT NULL PRIMARY KEY,
	nick_name VARCHAR(10) NOT NULL
);

create table scores (
    id INTEGER NOT NULL,
    nick_name VARCHAR(10) NOT NULL,
	score VARCHAR(10) NOT NULL
);