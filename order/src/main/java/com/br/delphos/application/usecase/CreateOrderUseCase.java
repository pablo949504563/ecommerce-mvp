package com.br.delphos.application.usecase;

import com.br.delphos.application.port.in.CreateOrderInputPort;
import com.br.delphos.application.port.out.OrderEventPublisher;
import com.br.delphos.domain.event.OrderCreatedEvent;
import com.br.delphos.domain.model.Order;

public class CreateOrderUseCase implements CreateOrderInputPort {

    private final OrderEventPublisher publisher;

    public CreateOrderUseCase(OrderEventPublisher publisher) {
        this.publisher = publisher;
    }

    @Override
    public void execute(Order order) {
        OrderCreatedEvent event = new OrderCreatedEvent(
                order.getId(),
                order.getCustomerEmail(),
                order.getTotal()
        );

        publisher.publish(event);
    }
}

