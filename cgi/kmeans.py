#!/usr/bin/python

import pandas as pd
import mysql.connector
from sklearn.cluster import KMeans
import warnings

#évite l'affichage d'erreur
warnings.filterwarnings('ignore') 

def F2_Preparation_Data_Pour_Classification(data, nombre_de_valeur):
    # On prépare le tableau qu'on va utiliser pour k-Means
    data_pos =pd.DataFrame(data=data, columns= ["lati", "longi"]).head(nombre_de_valeur)
    return data_pos

def F2_Affichage_kMeans_Auto(data_pos, nombre_clusters):
    # Créer un objet KMeans avec le nombre de clusters souhaité
    kmeans = KMeans(n_clusters=nombre_clusters)
    # Appliquer K-means sur les données
    kmeans.fit(data_pos)
    # Obtenir les labels des clusters pour chaque échantillon
    labels = kmeans.labels_
    return labels

mydatabase = mysql.connector.connect(
    username = 'etu746',
    password = 'mxpgltvv',
    host = 'localhost',
    database = 'etu746'
)

query = "SELECT lati, longi FROM accident;"

# Exécuter la requête SQL et récupérer les résultats dans un DataFrame
data = pd.read_sql(query, con=mydatabase)
a = F2_Preparation_Data_Pour_Classification(data,data.shape[0])

#ajout d'une colonne contenant le cluster d'appartenance
data = data.assign(cluster = F2_Affichage_kMeans_Auto(a, 13))

#json_data = data.to_json(orient='records')
json_data = data.to_json(orient='split')

# Affichage du JSON

with open('output.json', 'w') as file:
    file.write(json_data)
mydatabase.close()
