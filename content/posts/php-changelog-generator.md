---
title: 'PHP Changelog Generator : Automatisez vos changelogs et respectez SemVer'
date: 2025-06-24T21:24:00+02:00
tags: [php]
---
Vous maintenez des librairies PHP et vous perdez du temps à analyser manuellement vos changements pour respecter le versioning sémantique ? Vous
connaissez les règles SemVer : les changements cassants (breaking changes) imposent une incrémentation majeure, les nouvelles fonctionnalités une
version mineure, et les corrections de bugs une version patch. Cette discipline, indispensable pour la stabilité de vos dépendances, nécessite une
analyse minutieuse de chaque modification de votre API publique. C'est pour automatiser cette procédure que j'ai
créé [PHP Changelog Generator](https://github.com/xavierleune/php-changelog-generator), un outil open source sous licence MIT qui détecte
automatiquement les changements API et génère des changelogs conformes aux principes SemVer.

L'outil analyse automatiquement les éléments publics de votre projet PHP (classes, interfaces, méthodes, fonctions, constantes) en comparant deux
versions de votre code source. Il détecte les modifications compatibles et incompatibles, vous suggère automatiquement la version cible selon les
règles SemVer, et génère un changelog pré-rédigé en markdown. L'installation s'effectue via `composer install`, et l'utilisation de base ne nécessite
qu'une commande : `./bin/changelog-generator /path/to/old/version /path/to/new/version`. Vous pouvez également exclure des patterns spécifiques (
`-i "*/vendor/*"`), générer des rapports JSON (`-f json`), ou activer un mode strict pour les versions pré-1.0.0 (`--strict-semver`). Le mode
`--dry-run` vous permet de prévisualiser les changements sans écrire de fichier, pratique pour l'intégration dans vos workflows CI/CD.

Le véritable atout de PHP Changelog Generator réside dans son approche hybride : plutôt que de générer un changelog définitif, il produit une base
structurée que vous pouvez enrichir avec vos explications contextuelles. Cette philosophie respecte le fait qu'un bon changelog nécessite souvent vos
commentaires sur l'impact métier des changements techniques. L'outil fonctionne avec PHP 8.3+ pour l'exécution mais peut analyser vos projets écrits
dès PHP 7.4, offrant ainsi une compatibilité étendue. Que vous mainteniez des SDKs publics ou des librairies internes, je pense que cet outil peut 
considérablement accélérer votre processus de release tout en réduisant vos erreurs de versioning.

[Testez-le dès maintenant](https://github.com/xavierleune/php-changelog-generator) et n'hésitez pas à mettre une étoile si vous appréciez le 
projet ou à contribuer en cas de besoin !