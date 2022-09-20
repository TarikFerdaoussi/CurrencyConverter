# CurrencyConverter

5. S'assurer de la continuité des valeurs (si le switch est activé, la nouvelle entrée devient l'ancienne
sortie)
6. Ajouter un champ permettant de fixer (force) un taux de change
7. Désactiver le taux de change fixe (si actif) lors d'une variation de plus de 2% avec le taux réel. La
conversion sera alors effectuée en prenant en compte le taux réel.
8. Ajouter un tableau d’historique des 5 dernières demandes de conversion calculées. Le tableau
affichera le taux réel, le taux saisi, la valeur initiale avec la devise associée et la valeur calculée
avec la devise associée.


# UX

- Améliorer le SCSS , utiliser grid system / Flex au lieux des margins


# Code

- Ajout des test unitaire
- Extraire les inputs dans un module/ component à part 
- Ajout d'un model transaction qui permetterait de garder l'historique des converstions effectuées


