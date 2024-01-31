# Harry Potter

This resository has the following structure:

* [client](./client). The directory contains frontend service
* [server](./server). The directory contains backend service

## Required tools

* [Docker](https://docs.docker.com/engine/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)

## Prerequisites

* Before processing with the docker-compose setup, create an `.env` file:

```bash
cp .env.sample .env
```

and add/update the missing/incorrect values.

* Put PostgreSQL database dump in `sql` directory. Multiple files are supported. The scripts will be executed in alphanumeric order

## Docker

### Build arguments

The `ARG` instruction defines a variable that users can pass at build-time to the builder with the `docker build` command using the `--build-arg <varname>=<value>`

```bash
FROM busybox
ARG username
# ...
```

```bash
docker build --build-arg TZ=Europe/Kiyv -t portal:test -f dockerfiles/Dockerfile.portal .
```

### Environment variables

The environment variables set using `ENV` **will persist** when a container is run from the resulting image.

```bash
FROM busybox
ENV USERNAME=test
# ...
```

If you need to pass a specific variable that is only used at the build stage, will not be used later and may be sensitive, use `ARG` instead of `ENV`.

### Docker usage

To build Docker image locally you can use the following command:

```bash
docker build -t <image_name> -f <path/to/Dockerfile> <context_directory>
```

### Build using docker-compose

Use the following command to build the entire stack:

```bash
docker-compose build
```

Use the following command to build a specific service:

```bash
docker-compose build <service_name>
```

`args` can be set as a mapping or a list in the Compose file under the build key:

```bash
  client:
    build:
      context: .
      args:
        - NODE_ENV="development"
```

#### Environment variables

| Name                                      | Description                                                            | Default                                             |
| ----------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------- |
| `POSTGRES_PASSWORD`                   | PostgreSQL root password                                   | `postgres`                                              |
| `POSTGRES_USER`                      | PostgreSQL root user                                      | `postgres` |
| `POSTGRES_DB`                    | Default PostgreSQL database name | `hp`                             |
| `DB_HOST`                        | PostgreSQL hostname                               | `postgres`               |
| `API_HOSTNAME`                               | Default API hostname                                             | `backend`               |

### Run containers

Use the following command to run the containers:

```bash
docker-compose up -d
```

This command will use `docker-compose.yml` file to create Docker containers. The service configuration will be overrided with `docker-compose.override.yml` values

The deployed Stack can be accessed from a browser by connecting to the `client` service at `http://localhost:5000`.

Use the following command to stop and remove containers:

```bash
docker-compose down
```

Use the following command to stop, remove containers and named volumes declared in the `volumes` section:

```bash
docker-compose down -v