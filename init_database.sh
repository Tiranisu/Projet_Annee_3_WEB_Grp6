#!/bin/bash


echo '>Création bdd...'
mysql -u etu746 -p --password=mxpgltvv < database_creation.sql
echo '>Remplissage bdd...'
mysql -u etu746 -p --password=mxpgltvv < database_fill.sql
echo '>Remplissage bdd avec les données du .csv' 
python cgi/donnees.py
echo '>Base de donnée prête !'
