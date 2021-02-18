---
layout: default
---

# Apache Kafka

Offical API documentation: https://kafka.apache.org/documentation

## Key concepts

### Distributed messaging system
See video "Messaging queue basics".

## Docker images
- Kafka + Zookeeper (*Obsidiandynamics*): [DockerHub](https://hub.docker.com/r/obsidiandynamics/kafka)
- Kafdrop, a Kafka web UI (*Obsidiandynamics*): [DockerHub](https://hub.docker.com/r/obsidiandynamics/kafdrop)

## Docker compose

<details>
<summary>Kafka + Zookeeper + Kafdrop</summary>

```
version: "2"
services:
  kafdrop:
    image: obsidiandynamics/kafdrop
    restart: "no"
    ports:
      - "9000:9000"
    environment:
      KAFKA_BROKERCONNECT: "kafka:29092"
    depends_on:
      - "kafka"
  kafka:
    image: obsidiandynamics/kafka
    restart: "no"
    ports:
      - "2181:2181"
      - "9092:9092"
    environment:
      KAFKA_LISTENERS: "INTERNAL://:29092,EXTERNAL://:9092"
      KAFKA_ADVERTISED_LISTENERS: "INTERNAL://kafka:29092,EXTERNAL://localhost:9092"
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: "INTERNAL:PLAINTEXT,EXTERNAL:PLAINTEXT"
      KAFKA_INTER_BROKER_LISTENER_NAME: "INTERNAL"
```
</details>

## Clients

### Python
 - Confluent's Python client, for `>= 0.8`: [Github](https://github.com/confluentinc/confluent-kafka-python)

## External links and resources

### Articles
 - Kafka for beginner (*Medium*): [External link](https://medium.com/@rinu.gour123/kafka-for-beginners-74ec101bc82d) - [Local copy](https://static.joffreybvn.be/file/joffreybvn/articles/kafka-for-beginners.html)
 - Kafka in a nutshell + Quickstart Docker (*Medium*): [External link](https://medium.com/swlh/apache-kafka-in-a-nutshell-5782b01d9ffb) - [Local copy](https://static.joffreybvn.be/file/joffreybvn/articles/apache-kafka-in-a-nutshell.html)

### Videos
 - Messaging queue basics (*Youtube*): [External link](https://www.youtube.com/watch?v=sfQwMu0SCT8)
