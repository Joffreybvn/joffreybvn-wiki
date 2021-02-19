---
layout: default
---

# Apache Kafka

Offical API documentation: https://kafka.apache.org/documentation

Distributed messaging system created by Linkedin, under Apache licence, maintained by a company called "Confluent".

## Key concepts

- Kafka in a nutshell + Quickstart Docker (*Medium*): [External link](https://medium.com/swlh/apache-kafka-in-a-nutshell-5782b01d9ffb) - [Local copy](https://static.joffreybvn.be/file/joffreybvn/articles/apache-kafka-in-a-nutshell.html)

### Distributed messaging system
Messaging queue basics (*< 5 min*): [Youtube](https://www.youtube.com/watch?v=sfQwMu0SCT8)

### Kafka beginner video tutorial

- Typical Kafka architecture in enterprise (*< 5 min*): [Youtube](https://youtu.be/_-hhNqAlvKk)
- Kafka Topics and partitions (*< 5 min*): [Youtube](https://youtu.be/wwSePGvYcNE)
- Kafka Brokers and replications over topics/partitions (*< 5 min*): [Youtube](https://youtu.be/ZOU7PJWZU9w)
- Kafka Producer and messages keys importance (*< 5 min*): [Youtube](https://youtu.be/lh_tjm0yPz4)
- Kafka Consumer, consumer group and offsets (*< 5 min*): [Youtube](https://youtu.be/lAdG16KaHLs)

## Docker 

### Docker images
- Kafka + Zookeeper (*Obsidiandynamics*): [DockerHub](https://hub.docker.com/r/obsidiandynamics/kafka)
- Kafdrop, a Kafka web UI (*Obsidiandynamics*): [DockerHub](https://hub.docker.com/r/obsidiandynamics/kafdrop)


### Docker compose

<details>
<summary>Kafka + Zookeeper + Kafdrop</summary>

```text
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


## Kafka clients

### Python
 - Confluent's Python client, for `>= 0.8`: [Github](https://github.com/confluentinc/confluent-kafka-python)

## Flafka - Flume meet Kafka

A [Kafka Channel](http://flume.apache.org/FlumeUserGuide.html#kafka-channel) is a type of [Flume Channel](http://flume.apache.org/FlumeUserGuide.html#flume-channels). Apache [Flume](https://flume.apache.org/) is an alternative to Kafka.

### Why using Flume channels ?

From the [Flume Docs](https://flume.apache.org/FlumeUserGuide.html#architecture):

![Flume](../assets/images/flume.png)

When a Flume source receives an event, it stores it into one or more channels. The channel is a passive store that keeps the event until it’s consumed by a Flume sink. The file channel is one example – it is backed by the local filesystem. The sink **removes the event from the channel** and puts it into an external repository like HDFS (via Flume HDFS sink) or forwards it to the Flume source of the next Flume agent (next hop) in the flow.

The key point here is that: "*The sink removes the event from the channel*". In pure Kafka, data is kept in the topic for 2 weeks (by default).

### Kafka and Flume

- Advantages of Flume and Kafka together: [Cloudera](https://blog.cloudera.com/flafka-apache-flume-meets-apache-kafka-for-event-processing/) - [Local copy](https://static.joffreybvn.be/file/joffreybvn/articles/flafka-apache-flume-meets-apache-kafka.html)
- Deploying Kafka + Flume and uses cases: [BigData MadeSimple](https://bigdata-madesimple.com/what-is-apache-flafka-how-to-use-it-with-flume-for-data-ingestion-tutorial/) - [Local copy](https://static.joffreybvn.be/file/joffreybvn/articles/what-is-apache-flafka-how-to-use-it-with-flume.html)

## Other resources

 - Kafka for beginner: [Medium](https://medium.com/@rinu.gour123/kafka-for-beginners-74ec101bc82d) - [Local copy](https://static.joffreybvn.be/file/joffreybvn/articles/kafka-for-beginners.html)


