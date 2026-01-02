package com.br.delphos.domain.model;


import com.br.delphos.domain.exception.InsufficientFundsException;

import java.util.ArrayList;
import java.util.List;

public class TreasuryAccount {

    private final String id;
    private Balance balance;
    private final List<CashMovement> movements = new ArrayList<>();

    public TreasuryAccount(String id, Balance balance) {
        this.id = id;
        this.balance = balance;
    }

    public void registerCashOut(CashMovement movement) {

        if (balance.willBeNegative(movement.getAmount())) {
            throw new InsufficientFundsException();
        }

        balance.decrease(movement.getAmount());
        movements.add(movement);
    }

    public String getId() {
        return id;
    }

    public Balance getBalance() {
        return balance;
    }
}
