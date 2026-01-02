package com.br.delphos.infrastructure.persistence.entity;

import com.br.delphos.domain.model.enums.MovementSource;
import com.br.delphos.domain.model.enums.MovementType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name = "cash_movement")
public class CashMovementEntity {

    @Id
    private String id;

    private double amount;

    @Enumerated(EnumType.STRING)
    private MovementType type;

    @Enumerated(EnumType.STRING)
    private MovementSource source;

    private String originId;

    private LocalDate accountingDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "treasury_account_id")
    private TreasuryAccountEntity treasuryAccount;

    protected CashMovementEntity() {
    }

    public CashMovementEntity(
            String id,
            double amount,
            MovementType type,
            MovementSource source,
            String originId,
            LocalDate accountingDate,
            TreasuryAccountEntity treasuryAccount
    ) {
        this.id = id;
        this.amount = amount;
        this.type = type;
        this.source = source;
        this.originId = originId;
        this.accountingDate = accountingDate;
        this.treasuryAccount = treasuryAccount;
    }

    public String getId() {
        return id;
    }

    public double getAmount() {
        return amount;
    }

    public MovementType getType() {
        return type;
    }

    public MovementSource getSource() {
        return source;
    }

    public String getOriginId() {
        return originId;
    }

    public LocalDate getAccountingDate() {
        return accountingDate;
    }
}
