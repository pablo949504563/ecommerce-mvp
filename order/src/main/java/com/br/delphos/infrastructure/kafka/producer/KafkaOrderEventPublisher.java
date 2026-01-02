package com.br.delphos.infrastructure.kafka.producer;

import com.br.delphos.application.event.OrderCreatedEvent;
import com.br.delphos.application.port.out.OrderEventPublisher;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class KafkaOrderEventPublisher implements OrderEventPublisher {

    private final KafkaTemplate<String, OrderCreatedEvent> kafkaTemplate;

    @Value("${topic.order-created}")
    private String topic;

    @Override
    public void publish(OrderCreatedEvent event) {
        kafkaTemplate.send(topic, event);
    }
}

