package com.br.delphos.domain.model;

import java.math.BigDecimal;
import java.util.Currency;

public class Money {

    private final BigDecimal value;
    private final Currency currency;

    public Money(BigDecimal value, Currency currency) {
        this.value = value;
        this.currency = currency;
    }

    public BigDecimal getValue() {
        return value;
    }

    public Currency getCurrency() {
        return currency;
    }

    public Money negate() {
        return new Money(value.negate(), currency);
    }
}
