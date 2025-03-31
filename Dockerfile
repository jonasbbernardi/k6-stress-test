FROM grafana/k6:master-with-browser

WORKDIR /app

COPY ./src ./src
COPY ./run.ts ./

RUN mkdir /app/results

# ENTRYPOINT [ "k6", "run", "/app/run.ts" ]
ENTRYPOINT [ "k6", "run", "--out", "json=results/test.json", "/app/run.ts" ]
# ENTRYPOINT [ "k6", "run", "--http-debug", "/app/run.ts" ]