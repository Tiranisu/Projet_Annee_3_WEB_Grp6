#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------

DROP TABLE IF EXISTS comprend CASCADE;
DROP TABLE IF EXISTS accident CASCADE;
DROP TABLE IF EXISTS ville CASCADE;
DROP TABLE IF EXISTS descr_athmo CASCADE;
DROP TABLE IF EXISTS descr_surface CASCADE;
DROP TABLE IF EXISTS descr_secu CASCADE;
DROP TABLE IF EXISTS descr_lum CASCADE;
DROP TABLE IF EXISTS descr_cat_veh CASCADE;
DROP TABLE IF EXISTS descr_intersection CASCADE;
DROP TABLE IF EXISTS descr_agglo CASCADE;
DROP TABLE IF EXISTS descr_type_col CASCADE;
DROP TABLE IF EXISTS gravite CASCADE;

#------------------------------------------------------------
# Table: descr_athmo
#------------------------------------------------------------

CREATE TABLE descr_athmo(
        id_descr_athmo Numeric NOT NULL ,
        nom            Varchar (50) NOT NULL
	,CONSTRAINT descr_athmo_PK PRIMARY KEY (id_descr_athmo)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: descr_surface
#------------------------------------------------------------

CREATE TABLE descr_surface(
        id_descr_surface Numeric NOT NULL ,
        nom              Varchar (50) NOT NULL
	,CONSTRAINT descr_surface_PK PRIMARY KEY (id_descr_surface)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: descr_secu
#------------------------------------------------------------

CREATE TABLE descr_secu(
        id_descr_secu Numeric NOT NULL ,
        nom           Varchar (100) NOT NULL
	,CONSTRAINT descr_secu_PK PRIMARY KEY (id_descr_secu)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: descr_lum
#------------------------------------------------------------

CREATE TABLE descr_lum(
        id_descr_lum Numeric NOT NULL ,
        nom          Varchar (50) NOT NULL
	,CONSTRAINT descr_lum_PK PRIMARY KEY (id_descr_lum)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: descr_cat_veh
#------------------------------------------------------------

CREATE TABLE descr_cat_veh(
        id_descr_cat_veh Numeric NOT NULL ,
        nom              Varchar (100) NOT NULL
	,CONSTRAINT descr_cat_veh_PK PRIMARY KEY (id_descr_cat_veh)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: descr_intersection
#------------------------------------------------------------

CREATE TABLE descr_intersection(
        id_descr_intersection Numeric NOT NULL ,
        nom                   Varchar (50) NOT NULL
	,CONSTRAINT descr_intersection_PK PRIMARY KEY (id_descr_intersection)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: descr_agglo
#------------------------------------------------------------

CREATE TABLE descr_agglo(
        id_descr_agglo Numeric NOT NULL ,
        nom            Varchar (50) NOT NULL
	,CONSTRAINT descr_agglo_PK PRIMARY KEY (id_descr_agglo)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: descr_type_col
#------------------------------------------------------------

CREATE TABLE descr_type_col(
        id_descr_type_col Numeric NOT NULL ,
        nom               Varchar (50) NOT NULL
	,CONSTRAINT descr_type_col_PK PRIMARY KEY (id_descr_type_col)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: gravite
#------------------------------------------------------------

CREATE TABLE gravite(
        id_gravite Numeric NOT NULL ,
        nom        Varchar (50) NOT NULL
	,CONSTRAINT gravite_PK PRIMARY KEY (id_gravite)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: ville
#------------------------------------------------------------

CREATE TABLE ville(
        code_insee Numeric NOT NULL ,
        nom_ville  Varchar (50) NOT NULL
	,CONSTRAINT ville_PK PRIMARY KEY (code_insee)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: accident
#------------------------------------------------------------

CREATE TABLE accident(
        id_accident           Int  Auto_increment  NOT NULL ,
        age                   Numeric NOT NULL ,
        date                  Date NOT NULL ,
        heure                 Numeric NOT NULL ,
        ville                 Varchar (50) NOT NULL ,
        longi                 Float NOT NULL ,
        lati                  Float NOT NULL ,
        added_status          Bool NOT NULL ,
        id_gravite            Numeric ,
        id_descr_lum          Numeric NOT NULL ,
        id_descr_surface      Numeric NOT NULL ,
        id_descr_secu         Numeric NOT NULL ,
        id_descr_type_col     Numeric NOT NULL ,
        id_descr_intersection Numeric NOT NULL ,
        id_descr_agglo        Numeric NOT NULL ,
        id_descr_cat_veh      Numeric NOT NULL ,
        code_insee            Numeric NOT NULL ,
        id_descr_athmo        Numeric NOT NULL
	,CONSTRAINT accident_PK PRIMARY KEY (id_accident)

	,CONSTRAINT accident_gravite_FK FOREIGN KEY (id_gravite) REFERENCES gravite(id_gravite)
	,CONSTRAINT accident_descr_lum0_FK FOREIGN KEY (id_descr_lum) REFERENCES descr_lum(id_descr_lum)
	,CONSTRAINT accident_descr_surface1_FK FOREIGN KEY (id_descr_surface) REFERENCES descr_surface(id_descr_surface)
	,CONSTRAINT accident_descr_secu2_FK FOREIGN KEY (id_descr_secu) REFERENCES descr_secu(id_descr_secu)
	,CONSTRAINT accident_descr_type_col3_FK FOREIGN KEY (id_descr_type_col) REFERENCES descr_type_col(id_descr_type_col)
	,CONSTRAINT accident_descr_intersection4_FK FOREIGN KEY (id_descr_intersection) REFERENCES descr_intersection(id_descr_intersection)
	,CONSTRAINT accident_descr_agglo5_FK FOREIGN KEY (id_descr_agglo) REFERENCES descr_agglo(id_descr_agglo)
	,CONSTRAINT accident_descr_cat_veh6_FK FOREIGN KEY (id_descr_cat_veh) REFERENCES descr_cat_veh(id_descr_cat_veh)
	,CONSTRAINT accident_ville7_FK FOREIGN KEY (code_insee) REFERENCES ville(code_insee)
	,CONSTRAINT accident_descr_athmo8_FK FOREIGN KEY (id_descr_athmo) REFERENCES descr_athmo(id_descr_athmo)
)ENGINE=InnoDB;

