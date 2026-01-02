package com.br.delphos.domain.event;

import java.math.BigDecimal;

public class OrderCreatedEvent {

    private final Long orderId;
    private final String email;
    private final BigDecimal total;

    public OrderCreatedEvent(Long orderId, String email, BigDecimal total) {
        this.orderId = orderId;
        this.email = email;
        this.total = total;
    }

    public Long getOrderId() { return orderId; }
    public String getEmail() { return email; }
    public BigDecimal getTotal() { return total; }
}

