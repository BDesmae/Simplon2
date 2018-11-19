function compare(choix1, choix2){
    if (typeof choix1 == typeof choix2){
            return "Le type est le même";
        }else{
            return "Le type n'est pas le même";
        }
    }

// à tester dans la console : taper compare(1, "ee")