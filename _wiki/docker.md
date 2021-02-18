---
layout: default
---


# Docker

## Installation

### Install Docker
Use the convenience script: [Github](https://github.com/docker/docker-install)

### Install Docker-compose
Source: [Docker](https://docs.docker.com/compose/install/)

**Step 1**: Download the last version of Docker Compose
```shell
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

**Step 2**: Apply executable permissions to the binary
```shell
sudo chmod +x /usr/local/bin/docker-compose
```

**Step 3**: Test the installation
```shell
docker-compose --version
```
