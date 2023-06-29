from sklearn.utils import shuffle
import numpy as np
import sys
import pandas as pd
import json
from statistics import mode
from joblib import dump, load

def classification_haut_niveau_for_web(data, method):
    if(method=="SVM"):
            #Récupère le modèle contenu dans le fichier SVM.joblib
        clf = load("../cgi/Support_Vector_Machine.joblib")

    elif(method=="RF"):
        clf = load("../cgi/Random_Forest.joblib")

    elif(method=="MLP"):
        clf = load("../cgi/Multilayer_Perceptro.joblib")

    else:
        print("Il y a un probleme avec la methode de classification rentrer !")
        return    
    #Prédit la gravité de l'accident avec l'algorithme choisi
    pred = clf.predict(data)
    print(pred[0])
    value={"descr_grav":pred[0].astype(str)}
    
    #Transforme le résultat en json et l'écrit dans le fichier predict_haut_niveau.json
    json_object =json.dumps(value)
    with open("./predict_haut_niveau.json", "w") as outfile:
        outfile.write(json_object)
    
# Pour tester la fonction, nous retourne bien 1
# classification_haut_niveau_for_web([[10,2,1,1,1,14,2,2]], 'RF')

# Appel de la fonction pour le site web
classification_haut_niveau_for_web([[int(sys.argv[1]),int(sys.argv[2]),int(sys.argv[3]),int(sys.argv[4]),int(sys.argv[5]),int(sys.argv[6]),int(sys.argv[7]),int(sys.argv[8])]], sys.argv[9])