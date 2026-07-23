# Perennial — site vitrine

Site statique de l'application **Perennial**, hébergé sur GitHub Pages au domaine
[perennial-app.com](https://perennial-app.com). Il sert de page d'accueil et
héberge les pages légales (politique de confidentialité, mentions légales) exigées
par l'App Store.

## Structure

```
index.html         page d'accueil (hero « strates », texte de l'onboarding, bouton App Store)
privacy.html       politique de confidentialité  ⚠️ à relire avant publication
terms.html         conditions d'utilisation      ⚠️ à compléter
styles.css         styles (palette + tokens repris du design system de l'app, thème clair)
assets/strata.svg  le motif « strates » (identique au splash/logo de l'app)
assets/lang.js     bascule de langue EN/FR (défaut : anglais, mémorisé en localStorage)
CNAME              domaine personnalisé (perennial-app.com)
.nojekyll          sert le HTML tel quel, sans traitement Jekyll
```

Aucun build : ce sont des fichiers statiques servis directement.

- **Bilingue** : anglais par défaut, bouton EN/FR en haut à droite. Chaque page contient
  les deux versions (`.lang-en` / `.lang-fr`), affichées via CSS selon `<html lang>`.
- **Bouton App Store** : `index.html` contient un `href="#"` — le remplacer par le lien
  réel une fois l'app publiée (marqué par un commentaire TODO).

## Aperçu en local

```sh
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Déploiement (GitHub Pages)

1. Créer un repo GitHub (ex. `perennial-site`) et y pousser ce dossier.
2. Repo → **Settings → Pages** → *Source* : `Deploy from a branch`, branche `main`,
   dossier `/ (root)`.
3. Dans **Pages → Custom domain**, saisir `perennial-app.com` (le fichier `CNAME`
   le fait aussi automatiquement), puis cocher **Enforce HTTPS** une fois le
   certificat émis.
4. Chez le registrar du domaine, configurer les DNS :
   - 4 enregistrements **A** pour l'apex `perennial-app.com` vers les IP de
     GitHub Pages : `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153` ;
   - un enregistrement **AAAA** (IPv6) optionnel : `2606:50c0:8000::153`, etc. ;
   - un enregistrement **CNAME** pour `www` vers `<user>.github.io`.

## À faire avant la mise en ligne

- [ ] Relire `privacy.html` (EN + FR) et l'aligner sur le comportement réel publié.
- [ ] Compléter `terms.html` (EN + FR : statut de l'éditeur, hébergeur, conditions d'abonnement).
- [ ] Remplacer le `href="#"` du bouton App Store dans `index.html` par le vrai lien.
- [ ] Vérifier le rendu du hero sur mobile et desktop.
