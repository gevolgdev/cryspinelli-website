## Deploy

Criar build da imagem:

```shell
docker buildx build -t us-central1-docker.pkg.dev/crysmelo/cryspinelli/cryspinelli-web:new-tag --platform=linux/amd64 --push .
```

Push da imagem:

```shell
docker push us-central1-docker.pkg.dev/crysmelo/cryspinelli/cryspinelli-web:same-tag
```

## gcloud

Listar imagens

```shell
gcloud artifacts docker images list us-central1-docker.pkg.dev/crysmelo/cryspinelli
```

Deletar imagem

```shell
gcloud artifacts docker images delete \
  "us-central1-docker.pkg.dev/crysmelo/cryspinelli/image-name" \
  --delete-tags --quiet
```
