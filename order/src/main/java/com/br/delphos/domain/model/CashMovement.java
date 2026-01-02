package com.br.delphos.domain.model;

import com.br.delphos.domain.model.enums.MovementSource;
import com.br.delphos.domain.model.enums.MovementStatus;
import com.br.delphos.domain.model.enums.MovementType;

import java.time.LocalDate;
import java.util.UUID;

public class CashMovement {

    private final String id;
    private final Money amount;
    private final MovementType type;
    private final MovementSource source;
    private final String originId;
    private final LocalDate accountingDate;
    private MovementStatus status;

    private CashMovement(
            Money amount,
            MovementType type,
            MovementSource source,
            String originId,
            LocalDate accountingDate
    ) {
        this.id = UUID.randomUUID().toString();
        this.amount = amount;
        this.type = type;
        this.source = source;
        this.originId = originId;
        this.accountingDate = accountingDate;
        this.status = MovementStatus.CONFIRMED;
    }

    public static CashMovement cashOut(
            Money amount,
            MovementSource source,
            String originId,
            LocalDate accountingDate
    ) {
        return new CashMovement(
                amount,
                MovementType.OUT,
                source,
                originId,
                accountingDate
        );
    }

    public Money getAmount() {
        return amount;
    }

    public MovementType getType() {
        return type;
    }

    public String getOriginId() {
        return originId;
    }
}
