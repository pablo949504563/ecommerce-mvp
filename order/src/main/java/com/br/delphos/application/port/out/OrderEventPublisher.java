package com.br.delphos.application.port.out;

import com.br.delphos.domain.event.OrderCreatedEvent;

public interface OrderEventPublisher {
    void publish(OrderCreatedEvent event);
}

