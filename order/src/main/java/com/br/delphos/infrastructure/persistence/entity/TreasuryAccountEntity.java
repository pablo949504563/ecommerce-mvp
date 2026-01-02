package com.br.delphos.infrastructure.persistence.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "treasury_account")
public class TreasuryAccountEntity {

    @Id
    private String id;

    private String currency;

    private double balance;

    @OneToMany(
            mappedBy = "treasuryAccount",
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.LAZY
    )
    private List<CashMovementEntity> movements = new ArrayList<>();

    protected TreasuryAccountEntity() {
    }

    public TreasuryAccountEntity(String id, String currency, double balance) {
        this.id = id;
        this.currency = currency;
        this.balance = balance;
    }

    public String getId() {
        return id;
    }

    public String getCurrency() {
        return currency;
    }

    public double getBalance() {
        return balance;
    }

    public List<CashMovementEntity> getMovements() {
        return movements;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
}
