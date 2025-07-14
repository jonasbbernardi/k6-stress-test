FROM alpine:3.21
RUN apk add --no-cache chromium nss freetype fontconfig harfbuzz openjdk17-jre-headless ca-certificates
RUN adduser -D -u 1001 -g 1001 k6
COPY --from=k6-build /tmp/k6 /usr/bin/k6
USER 1001
WORKDIR /app
COPY ./src ./src
COPY ./run.ts ./
ENTRYPOINT ["k6", "run", "--out", "xk6-influxdb", "/app/run.ts"]