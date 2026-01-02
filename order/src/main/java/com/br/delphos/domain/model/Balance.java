package com.br.delphos.domain.model;

import java.math.BigDecimal;

public class Balance {

    private Money current;

    public Balance(Money current) {
        this.current = current;
    }

    public Money getCurrent() {
        return current;
    }

    public void decrease(Money amount) {
        current = new Money(
                current.getValue().subtract(amount.getValue()),
                current.getCurrency()
        );
    }

    public void increase(Money amount) {
        current = new Money(
                current.getValue().add(amount.getValue()),
                current.getCurrency()
        );
    }

    public boolean willBeNegative(Money amount) {
        BigDecimal result =
                current.getValue().subtract(amount.getValue());
        return result.compareTo(BigDecimal.ZERO) < 0;
    }
}
