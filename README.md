
# Introdução

Projeto para execução de stress teste usando grafana/k6 em docker.

# Run K6

```bash
docker build --rm -t k6-test .
docker run --rm -i -v $PWD:/app k6-test
```

## Parâmetros docker

Docker build:

- `--rm` - Remove imagem antiga
- `-t`   - Define um nome (tag) para a imagem.

Docker run:

- `--rm` - Remove o container criado após a execução;
- `-i`   - Executa em modo interativo;
- `-v`   - Monta um volume a partir de uma pasta local (Formato `<pasta local>:<volume no container>`).

# InfluxDb

user: admin
pass: Duo@1234
