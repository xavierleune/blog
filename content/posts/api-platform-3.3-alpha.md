+++
title = 'Api Platform 3.3 Alpha'
date = 2024-01-22T08:31:50+01:00
+++

La première pré-release d'API Platform 3.3 a été publiée la semaine dernière, sous la forme d'une alpha-1.

Si cette version n'apporte que quelques nouveautés, elle marque surtout la préparation de la séparation en composants 
d'api platform. Pour cette raison, plusieurs namespaces sont désormais dépréciés au profit de `ApiPlatform\Metadata` et seront supprimés dans la version 4:
- `ApiPlatform\Api`
- `ApiPlatform\Exception`
- `ApiPlatform\Problem`
- `ApiPlatform\Action`
- `ApiPlatform\Util`

Les repos des différents composants existent depuis un moment mais restent pour le moment encore vides, on remarque cependant
que les composer.json sont présents depuis quelques versions dans le [repository principal d'API Platform](https://github.com/api-platform/core): 
- api-platform/hydra
- api-platform/json-schema
- api-platform/ramsey-uuid
- api-platform/graphql
- api-platform/jsonld
- api-platform/http-cache
- api-platform/serializer
- api-platform/documentation
- api-platform/openapi
- api-platform/elasticsearch
- api-platform/symfony
- api-platform/state
- api-platform/doctrine-common
- api-platform/doctrine-orm
- api-platform/doctrine-odm
- api-platform/metadata
- api-platform/parameter-validator
- api-platform/validator
- api-platform/playground
- api-platform/core

La version 3.3 d'API Platform devrait être distribuée dans le courant du mois de février 2024.