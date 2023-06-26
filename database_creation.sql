#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


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
        nom           Varchar (50) NOT NULL
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
        nom              Varchar (50) NOT NULL
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
# Table: accident
#------------------------------------------------------------

CREATE TABLE accident(
        id_accident  Int  Auto_increment  NOT NULL ,
        age          Numeric NOT NULL ,
        date         Date NOT NULL ,
        heure        Numeric NOT NULL ,
        ville        Varchar (50) NOT NULL ,
        longi        Float NOT NULL ,
        lati         Float NOT NULL ,
        added_status Bool NOT NULL ,
        id_gravite   Numeric
	,CONSTRAINT accident_PK PRIMARY KEY (id_accident)

	,CONSTRAINT accident_gravite_FK FOREIGN KEY (id_gravite) REFERENCES gravite(id_gravite)
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
# Table: comprend
#------------------------------------------------------------

CREATE TABLE comprend(
        id_descr_athmo        Numeric NOT NULL ,
        id_descr_cat_veh      Numeric NOT NULL ,
        id_accident           Int NOT NULL ,
        id_descr_intersection Numeric NOT NULL ,
        id_descr_agglo        Numeric NOT NULL ,
        id_descr_type_col     Numeric NOT NULL ,
        id_descr_secu         Numeric NOT NULL ,
        id_descr_lum          Numeric NOT NULL ,
        id_descr_surface      Numeric NOT NULL ,
        code_insee            Numeric NOT NULL
	,CONSTRAINT comprend_PK PRIMARY KEY (id_descr_athmo,id_descr_cat_veh,id_accident,id_descr_intersection,id_descr_agglo,id_descr_type_col,id_descr_secu,id_descr_lum,id_descr_surface,code_insee)

	,CONSTRAINT comprend_descr_athmo_FK FOREIGN KEY (id_descr_athmo) REFERENCES descr_athmo(id_descr_athmo)
	,CONSTRAINT comprend_descr_cat_veh0_FK FOREIGN KEY (id_descr_cat_veh) REFERENCES descr_cat_veh(id_descr_cat_veh)
	,CONSTRAINT comprend_accident1_FK FOREIGN KEY (id_accident) REFERENCES accident(id_accident)
	,CONSTRAINT comprend_descr_intersection2_FK FOREIGN KEY (id_descr_intersection) REFERENCES descr_intersection(id_descr_intersection)
	,CONSTRAINT comprend_descr_agglo3_FK FOREIGN KEY (id_descr_agglo) REFERENCES descr_agglo(id_descr_agglo)
	,CONSTRAINT comprend_descr_type_col4_FK FOREIGN KEY (id_descr_type_col) REFERENCES descr_type_col(id_descr_type_col)
	,CONSTRAINT comprend_descr_secu5_FK FOREIGN KEY (id_descr_secu) REFERENCES descr_secu(id_descr_secu)
	,CONSTRAINT comprend_descr_lum6_FK FOREIGN KEY (id_descr_lum) REFERENCES descr_lum(id_descr_lum)
	,CONSTRAINT comprend_descr_surface7_FK FOREIGN KEY (id_descr_surface) REFERENCES descr_surface(id_descr_surface)
	,CONSTRAINT comprend_ville8_FK FOREIGN KEY (code_insee) REFERENCES ville(code_insee)
)ENGINE=InnoDB;

