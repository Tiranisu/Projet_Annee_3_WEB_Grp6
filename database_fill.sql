DELETE FROM ville;
DELETE FROM descr_cat_veh;
DELETE FROM descr_agglo;
DELETE FROM descr_athmo;
DELETE FROM descr_lum;
DELETE FROM descr_surface;
DELETE FROM descr_intersection;
DELETE FROM descr_secu;
DELETE FROM descr_type_col;
DELETE FROM gravite;
#------------------------------------------------------------
# Values : requirements
#------------------------------------------------------------

LOAD DATA LOCAL INFILE 'insee.csv' INTO TABLE ville FIELDS TERMINATED BY ';' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS (code_insee,nom_ville);


INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (1,"PL seul > 7,5T");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (2,"VU seul 1,5T <= PTAC <= 3,5T avec ou sans remorque ");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (3,"VL seul");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (4,"Autocar");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (5,"PL > 3,5T + remorque");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (6,"Cyclomoteur <50cm3");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (7,"Motocyclette > 125 cm3");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (8,"Tracteur routier + semi-remorque");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (9,"Tracteur agricole");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (10,"PL seul 3,5T <PTCA <= 7,5T");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (11,"Autobus");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (12,"Scooter > 50 cm3 et <= 125 cm3");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (13,"Train");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (14,"Scooter > 125 cm3");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (15,"Scooter < 50 cm3");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (16,"Voiturette (Quadricycle à moteur carrossé) (anciennement voiturette ou tricycle à moteur)");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (17,"Autre véhicule");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (18,"Bicyclette");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (19,"Motocyclette > 50 cm3 et <= 125 cm3");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (20,"Engin spécial");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (21,"Quad lourd > 50 cm3 (Quadricycle à moteur non carrossé)");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (22,"Tramway");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (23,"Tracteur routier seul");
INSERT INTO descr_cat_veh(id_descr_cat_veh,nom) VALUES (24,"Quad léger <= 50 cm3 (Quadricycle à moteur non carrossé)");


INSERT INTO descr_agglo(id_descr_agglo,nom) VALUES (1,"Hors agglomération");
INSERT INTO descr_agglo(id_descr_agglo,nom) VALUES (2,"En agglomération");


INSERT INTO descr_athmo(id_descr_athmo,nom) VALUES (1,"Autre");
INSERT INTO descr_athmo(id_descr_athmo,nom) VALUES (2,"Brouillard - fumée");
INSERT INTO descr_athmo(id_descr_athmo,nom) VALUES (3,"Neige - grêle");
INSERT INTO descr_athmo(id_descr_athmo,nom) VALUES (4,"Normale");
INSERT INTO descr_athmo(id_descr_athmo,nom) VALUES (5,"Pluie forte");
INSERT INTO descr_athmo(id_descr_athmo,nom) VALUES (6,"Pluie légère");
INSERT INTO descr_athmo(id_descr_athmo,nom) VALUES (7,"Temps couvert");
INSERT INTO descr_athmo(id_descr_athmo,nom) VALUES (8,"Temps éblouissant");
INSERT INTO descr_athmo(id_descr_athmo,nom) VALUES (9,"Vent fort - tempête");


INSERT INTO descr_lum(id_descr_lum,nom) VALUES (1,"Crépuscule ou aube");
INSERT INTO descr_lum(id_descr_lum,nom) VALUES (2,"Nuit avec éclairage public allumé");
INSERT INTO descr_lum(id_descr_lum,nom) VALUES (3,"Nuit avec éclairage public non allumé");
INSERT INTO descr_lum(id_descr_lum,nom) VALUES (4,"Nuit sans éclairage public");
INSERT INTO descr_lum(id_descr_lum,nom) VALUES (5,"Plein jour");


INSERT INTO descr_surface(id_descr_surface,nom) VALUES (1,"Autre");
INSERT INTO descr_surface(id_descr_surface,nom) VALUES (2,"Boue");
INSERT INTO descr_surface(id_descr_surface,nom) VALUES (3,"Corps gras – huile");
INSERT INTO descr_surface(id_descr_surface,nom) VALUES (4,"Enneigée");
INSERT INTO descr_surface(id_descr_surface,nom) VALUES (5,"Flaques");
INSERT INTO descr_surface(id_descr_surface,nom) VALUES (6,"Inondée");
INSERT INTO descr_surface(id_descr_surface,nom) VALUES (7,"Mouillée");
INSERT INTO descr_surface(id_descr_surface,nom) VALUES (8,"Normale");
INSERT INTO descr_surface(id_descr_surface,nom) VALUES (9,"Verglacée");


INSERT INTO descr_intersection(id_descr_intersection,nom) VALUES (1,"Autre intersection");
INSERT INTO descr_intersection(id_descr_intersection,nom) VALUES (2,"Giratoire");
INSERT INTO descr_intersection(id_descr_intersection,nom) VALUES (3,"Hors intersection");
INSERT INTO descr_intersection(id_descr_intersection,nom) VALUES (4,"Intersection à plus de 4 branches");
INSERT INTO descr_intersection(id_descr_intersection,nom) VALUES (5,"Intersection en T");
INSERT INTO descr_intersection(id_descr_intersection,nom) VALUES (6,"Intersection en X");
INSERT INTO descr_intersection(id_descr_intersection,nom) VALUES (7,"Intersection en Y");
INSERT INTO descr_intersection(id_descr_intersection,nom) VALUES (8,"Passage à niveau");
INSERT INTO descr_intersection(id_descr_intersection,nom) VALUES (9,"Place");


INSERT INTO descr_secu(id_descr_secu,nom) VALUES (1,"Autre - Non déterminable");
INSERT INTO descr_secu(id_descr_secu,nom) VALUES (2,"Autre - Non utilisé");
INSERT INTO descr_secu(id_descr_secu,nom) VALUES (3,"Autre - Utilisé");
INSERT INTO descr_secu(id_descr_secu,nom) VALUES (4,"Présence de ceinture de sécurité non utilisée ");
INSERT INTO descr_secu(id_descr_secu,nom) VALUES (5,"Présence dispositif enfant - Utilisation non déterminable");
INSERT INTO descr_secu(id_descr_secu,nom) VALUES (6,"Présence d'un casque - Utilisation non déterminable");
INSERT INTO descr_secu(id_descr_secu,nom) VALUES (7,"Présence d'un casque non utilisé ");
INSERT INTO descr_secu(id_descr_secu,nom) VALUES (8,"Présence d'un dispositif enfant non utilisé");
INSERT INTO descr_secu(id_descr_secu,nom) VALUES (9,"Présence d'un équipement réfléchissant non utilisé");
INSERT INTO descr_secu(id_descr_secu,nom) VALUES (10,"Présence d'une ceinture de sécurité - Utilisation non déterminable");
INSERT INTO descr_secu(id_descr_secu,nom) VALUES (11,"Présence équipement réfléchissant - Utilisation non déterminable");
INSERT INTO descr_secu(id_descr_secu,nom) VALUES (12,"Utilisation d'un casque ");
INSERT INTO descr_secu(id_descr_secu,nom) VALUES (13,"Utilisation d'un dispositif enfant");
INSERT INTO descr_secu(id_descr_secu,nom) VALUES (14,"Utilisation d'un équipement réfléchissant ");
INSERT INTO descr_secu(id_descr_secu,nom) VALUES (15,"Utilisation d'une ceinture de sécurité ");


INSERT INTO descr_type_col(id_descr_type_col,nom) VALUES (1,"Autre collision");
INSERT INTO descr_type_col(id_descr_type_col,nom) VALUES (2,"Deux véhicules - Frontale");
INSERT INTO descr_type_col(id_descr_type_col,nom) VALUES (3,"Deux véhicules – Par l’arrière");
INSERT INTO descr_type_col(id_descr_type_col,nom) VALUES (4,"Deux véhicules – Par le coté");
INSERT INTO descr_type_col(id_descr_type_col,nom) VALUES (5,"Sans collision");
INSERT INTO descr_type_col(id_descr_type_col,nom) VALUES (6,"Trois véhicules et plus – Collisions multiples");
INSERT INTO descr_type_col(id_descr_type_col,nom) VALUES (7,"Trois véhicules et plus – En chaîne");

INSERT INTO gravite(id_gravite,nom) VALUES (0,"Indemne");
INSERT INTO gravite(id_gravite,nom) VALUES (1,"Blessé léger");
INSERT INTO gravite(id_gravite,nom) VALUES (2,"Blessé hospitalisé");
INSERT INTO gravite(id_gravite,nom) VALUES (3,"Tué");