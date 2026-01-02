package com.br.delphos.infrastructure.persistence.mapper;

import com.br.delphos.domain.model.Balance;
import com.br.delphos.domain.model.CashMovement;
import com.br.delphos.domain.model.Money;
import com.br.delphos.domain.model.TreasuryAccount;
import com.br.delphos.infrastructure.persistence.entity.TreasuryAccountEntity;

import java.util.Currency;
import java.util.stream.Collectors;

public class TreasuryAccountMapper {

    public static TreasuryAccount toDomain(TreasuryAccountEntity entity) {

        Money money = new Money(
                java.math.BigDecimal.valueOf(entity.getBalance()),
                Currency.getInstance(entity.getCurrency())
        );

        TreasuryAccount account =
                new TreasuryAccount(entity.getId(), new Balance(money));

        entity.getMovements().forEach(m -> {
            CashMovement movement =
                    new CashMovement(
                            // id não é exposto no domínio nesse exemplo
                            new Money(
                                    java.math.BigDecimal.valueOf(m.getAmount()),
                                    Currency.getInstance(entity.getCurrency())
                            ),
                            m.getType(),
                            m.getSource(),
                            m.getOriginId(),
                            m.getAccountingDate()
                    );
            // normalmente você adicionaria via método de fábrica controlado
        });

        return account;
    }

    public static TreasuryAccountEntity toEntity(TreasuryAccount domain) {

        TreasuryAccountEntity entity =
                new TreasuryAccountEntity(
                        domain.getId(),
                        domain.getBalance().getCurrent().getCurrency().getCurrencyCode(),
                        domain.getBalance().getCurrent().getValue().doubleValue()
                );

        domain.getBalance(); // saldo já sincronizado

        domain
                .getBalance(); // movimentos são adicionados via aggregate

        return entity;
    }
}
