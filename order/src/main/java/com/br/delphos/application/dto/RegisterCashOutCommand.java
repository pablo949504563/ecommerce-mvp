package com.br.delphos.application.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public class RegisterCashOutCommand {

    private final String treasuryAccountId;
    private final BigDecimal amount;
    private final String currency;
    private final LocalDate accountingDate;
    private final String source;
    private final String originId;

    public RegisterCashOutCommand(
            String treasuryAccountId,
            BigDecimal amount,
            String currency,
            LocalDate accountingDate,
            String source,
            String originId
    ) {
        this.treasuryAccountId = treasuryAccountId;
        this.amount = amount;
        this.currency = currency;
        this.accountingDate = accountingDate;
        this.source = source;
        this.originId = originId;
    }

    public String getTreasuryAccountId() {
        return treasuryAccountId;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public String getCurrency() {
        return currency;
    }

    public LocalDate getAccountingDate() {
        return accountingDate;
    }

    public String getSource() {
        return source;
    }

    public String getOriginId() {
        return originId;
    }
}