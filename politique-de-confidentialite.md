# Politique de confidentialité — PMR Parking

*Dernière mise à jour : 17 septembre 2026*

PMR Parking est une application mobile qui aide les personnes à mobilité réduite à localiser les places de stationnement réservées en France. Elle est éditée par **[Nom ou raison sociale de l'éditeur]**, joignable à **[adresse e-mail de contact]** (ci-après « nous »).

Cette politique explique quelles données l'application traite, pourquoi, avec qui elles sont partagées et quels sont vos droits, conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.

## 1. En résumé

- L'application **ne demande aucun compte** et ne vous identifie pas.
- Nous **n'exploitons aucun serveur** : l'application interroge directement des services tiers et ne nous transmet rien.
- Votre **position** est utilisée uniquement pour afficher les places autour de vous. Elle est envoyée, sous forme de coordonnées, aux services qui fournissent les données et la carte, jamais à nous.
- **Aucune publicité, aucun traceur, aucun outil d'analyse d'audience, aucun rapport de plantage.**
- Les données conservées sur votre téléphone (cache des places, historique de recherche) sont supprimées en désinstallant l'application.

## 2. Données traitées

### 2.1 Position géographique

**Ce que nous traitons :** vos coordonnées GPS, uniquement lorsque l'application est ouverte (« Lorsque l'app est active »). Aucune localisation en arrière-plan.

**Pourquoi :** centrer la carte sur votre position, charger les places de stationnement dans un rayon d'environ 1 à 2 km, et calculer la distance de chaque place dans la liste « À proximité ».

**Base légale :** votre consentement, recueilli par le système d'exploitation lorsque vous autorisez la localisation. Vous pouvez le retirer à tout moment dans les réglages de votre téléphone ; l'application reste utilisable avec la recherche par adresse.

**Où va cette donnée :** elle est envoyée sous forme de coordonnées, sans aucun identifiant vous concernant, aux services décrits à la section 3. Elle n'est jamais transmise à l'éditeur et n'est pas conservée par l'application au-delà de la session.

### 2.2 Adresses recherchées

**Ce que nous traitons :** le texte que vous saisissez dans l'écran « Recherche » et les adresses que vous sélectionnez.

**Pourquoi :** proposer des adresses au fur et à mesure de la saisie et centrer la carte sur l'adresse choisie. Les dix dernières adresses sélectionnées sont conservées sur votre téléphone pour vous les proposer à nouveau.

**Base légale :** l'exécution du service que vous demandez.

**Où va cette donnée :** le texte saisi est envoyé au service de géocodage de la Base Adresse Nationale (section 3.2). L'historique reste sur votre appareil.

### 2.3 Données conservées sur votre appareil

L'application stocke localement, sans les transmettre :

- le dernier jeu de places chargé, pour l'afficher en cas d'absence de réseau ;
- votre historique de recherche (dix entrées au maximum, avec leurs coordonnées).

Ces données sont effacées en désinstallant l'application. Aucune donnée n'est stockée ailleurs que sur votre téléphone.

### 2.4 Ce que nous ne collectons pas

Nom, adresse e-mail, numéro de téléphone, identifiant publicitaire, contacts, photos, historique de navigation, données de santé ou de handicap : rien de tout cela n'est collecté. L'application ne comporte aucun formulaire.

## 3. Services tiers

Pour fonctionner, l'application contacte directement les services suivants depuis votre téléphone. Chacun reçoit votre adresse IP, comme tout service en ligne, et les données indiquées ci-dessous. Chacun est responsable de son propre traitement et applique sa propre politique de confidentialité.

### 3.1 Données des places : OpenStreetMap via l'API Overpass

- **Opérateur :** instance publique `overpass-api.de`, opérée par FOSSGIS e.V. (Allemagne).
- **Données envoyées :** les coordonnées du centre de la zone affichée et un rayon.
- **Finalité :** obtenir la liste des places de stationnement réservées présentes dans OpenStreetMap.
- **Informations :** https://wiki.openstreetmap.org/wiki/Overpass_API et https://wiki.osmfoundation.org/wiki/Privacy_Policy

### 3.2 Adresses : Base Adresse Nationale (Géoplateforme IGN)

- **Opérateur :** Institut national de l'information géographique et forestière (IGN), France, service `data.geopf.fr`.
- **Données envoyées :** le texte de votre recherche, ou les coordonnées d'une place lorsque vous ouvrez sa fiche et qu'OpenStreetMap n'en connaît pas l'adresse.
- **Finalité :** transformer une adresse en coordonnées, et inversement.
- **Informations :** https://www.ign.fr/donnees-personnelles

### 3.3 Fond de carte

- **Sur iPhone et iPad :** Apple Plans. Les échanges nécessaires à l'affichage de la carte sont régis par la politique de confidentialité d'Apple : https://www.apple.com/legal/privacy/
- **Sur Android :** le SDK Google Maps. L'affichage de la carte implique des échanges avec Google, y compris la zone affichée, régis par la politique de confidentialité de Google : https://policies.google.com/privacy

### 3.4 Applications ouvertes à votre demande

Les boutons « Y aller » et « Partager » ouvrent une application de votre choix (Apple Plans, Google Maps, Waze, messagerie, etc.) et lui transmettent les coordonnées de la place. Ce qui se passe ensuite relève de l'application choisie et de vous.

## 4. Transferts hors de l'Union européenne

L'IGN est établi en France et FOSSGIS e.V. en Allemagne. Apple et Google peuvent traiter des données en dehors de l'Union européenne dans le cadre de leurs propres engagements (clauses contractuelles types, cadre de protection des données UE–États-Unis). Nous ne transférons nous-mêmes aucune donnée.

## 5. Durée de conservation

Nous ne conservons aucune donnée, faute de serveur. Sur votre appareil, le cache et l'historique sont conservés jusqu'à la désinstallation de l'application. Les services tiers conservent leurs journaux techniques selon leurs propres règles.

## 6. Sécurité

Tous les échanges avec les services tiers sont chiffrés (HTTPS). Les données locales sont stockées dans l'espace privé de l'application, protégé par le système d'exploitation.

## 7. Vos droits

Vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité sur vos données personnelles. Comme nous ne conservons aucune donnée vous concernant, l'exercice de ces droits se résume en pratique à :

- retirer l'autorisation de localisation dans les réglages de votre téléphone ;
- effacer les données locales en désinstallant l'application ;
- vous adresser directement aux services tiers pour les données qu'ils détiennent.

Pour toute question, écrivez-nous à **[adresse e-mail de contact]**. Vous pouvez aussi introduire une réclamation auprès de la CNIL : https://www.cnil.fr/fr/plaintes

## 8. Mineurs

L'application ne s'adresse pas spécifiquement aux mineurs et ne collecte aucune donnée permettant de les identifier.

## 9. Fiabilité des informations

Les places affichées proviennent de données contributives (OpenStreetMap) qui peuvent être incomplètes ou obsolètes. Elles sont fournies à titre informatif : la signalisation en place fait foi. Cette mention ne concerne pas vos données personnelles mais est rappelée ici par souci de transparence.

## 10. Modifications

Cette politique peut évoluer, notamment si l'application venait à utiliser un serveur propre pour fournir les données. Toute modification sera publiée à cette adresse avec sa date de mise à jour, et signalée dans l'application si elle change la nature des traitements.

---

## Annexe — déclarations pour les magasins d'applications

Cette annexe n'est pas destinée aux utilisateurs ; elle résume ce qu'il faut déclarer dans App Store Connect et Google Play Console de façon cohérente avec la politique ci-dessus.

### App Store — « Confidentialité de l'app »

| Type de donnée | Collectée ? | Liée à l'identité | Utilisée pour le suivi | Finalité |
|---|---|---|---|---|
| Localisation précise | Oui | Non | Non | Fonctionnalités de l'app |
| Historique de recherche | Non (stocké localement, jamais transmis à l'éditeur) | — | — | — |
| Identifiants, contacts, diagnostics, données d'usage | Non | — | — | — |

Au sens d'Apple, une donnée est « collectée » si elle quitte l'appareil, même vers un tiers. La position quitte l'appareil vers Overpass, l'IGN et Google/Apple : déclarer « Localisation précise, collectée, non liée à l'utilisateur, pas de suivi ».

### Google Play — « Sécurité des données »

- Collecte de données : **oui** — Localisation (précise), partagée avec des tiers (fournisseurs de carte et de données), finalité « Fonctionnalités de l'application », facultative (l'utilisateur peut refuser).
- Données chiffrées en transit : **oui**.
- Suppression possible : **oui**, en désinstallant l'application (aucune donnée côté serveur).
- Vente de données : **non**. Publicité : **non**. Analyse : **non**.
- Données de santé : **non** — l'application ne demande ni ne déduit de situation de handicap.
