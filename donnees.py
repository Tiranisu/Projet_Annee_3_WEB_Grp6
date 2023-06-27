import pandas as pd
import mysql.connector
from datetime import datetime


#préparation de la Date
def Format_Date(data):
    # Mettre la date qui est au format (MM/DD/YY hh:mm:ss) au format numérique : YMMDDhh
    #data["date"] = (data["date"].str.split('/').str[2].str.split(" ").str[0] +
    #                data["date"].str.split('/').str[0].str.split("(").str[1] + data["date"].str.split('/').str[1] +
    #                data["date"].str.split('/').str[2].str.split(" ").str[1].str.split(":").str[0]).astype(int)

    dates = []
    heures = []
    format_donnees = "(%m/%d/%y %H:%M:%S)"

    # Traitement de chaque élément de la série
    for donnee in data["date"]:
        # Conversion en date et heure
        date_heure = datetime.strptime(donnee, format_donnees)

        # Extraction de la date et de l'heure
        date = date_heure.date()
        heure = date_heure.time().hour

        # Ajout des résultats aux listes
        dates.append(date)
        heures.append(heure)
    
    data["date"] = dates
    data = data.assign(heure = heures)
    return data



data = pd.read_csv('export.csv', dtype={0: str})
data = Format_Date(data) 
data = data.head(70000)

mydatabase = mysql.connector.connect(
    username = 'etu746',
    password = 'mxpgltvv',
    host = 'localhost',
    database = 'etu746'
)

mycursor = mydatabase.cursor()
for index, ligne in data.iterrows():
    sql = "INSERT INTO accident(age, date, heure,ville, longi,lati,added_status,id_gravite,id_descr_lum,id_descr_surface,id_descr_secu,id_descr_type_col,id_descr_intersection,id_descr_agglo,id_descr_cat_veh,code_insee,id_descr_athmo) VALUES (%s, %s, %s,%s, %s, %s,%s, %s, %s,%s, %s, %s,%s, %s, %s,%s, %s)"
    val = ligne['age'], ligne['date'], ligne['heure'],ligne['ville'],ligne['longitude'],ligne['latitude'],0,ligne['descr_grav'],ligne['descr_lum'],ligne['descr_etat_surf'],ligne['descr_dispo_secu'],ligne['descr_type_col'],ligne['description_intersection'],ligne['descr_agglo'],ligne['descr_cat_veh'],ligne['id_code_insee'],ligne['descr_athmo']
    mycursor.execute(sql, val)
mydatabase.commit()

