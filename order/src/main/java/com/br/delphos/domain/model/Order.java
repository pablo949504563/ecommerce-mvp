package com.br.delphos.domain.model;

import java.math.BigDecimal;

public class Order {

    private final Long id;
    private final String customerEmail;
    private final BigDecimal total;

    public Order(Long id, String customerEmail, BigDecimal total) {
        if (total.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Total inválido");
        }
        this.id = id;
        this.customerEmail = customerEmail;
        this.total = total;
    }

    public Long getId() { return id; }
    public String getCustomerEmail() { return customerEmail; }
    public BigDecimal getTotal() { return total; }
}
