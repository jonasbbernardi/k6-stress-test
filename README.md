
# Grafana K6

Projeto para execução de stress teste usando grafana/k6 em docker.

## Run

```bash
docker build --rm -t k6-test .
docker run --rm -i -v $PWD:/app k6-test
```

### Docker parameters

Docker build:

- `--rm` - Remove imagem antiga
- `-t`   - Define um nome (tag) para a imagem.

Docker run:

- `--rm` - Remove o container criado após a execução;
- `-i`   - Executa em modo interativo;
- `-v`   - Monta um volume a partir de uma pasta local (Formato `<pasta local>:<volume no container>`).

## InfluxDb

Run commands to start influxdb locally:

```bash
# Pull influxdb image
docker pull influxdb:2
# Run on port 8086
docker run -d --name=influxdb2 -p 8086:8086 influxdb:2
```

Then access UI and run the "get started" on browser to configure it.

## References

Influxdb on docker: <https://medium.com/@techworldthink/installing-influxdb-v2-with-docker-on-ubuntu-39a974c3cb40>
