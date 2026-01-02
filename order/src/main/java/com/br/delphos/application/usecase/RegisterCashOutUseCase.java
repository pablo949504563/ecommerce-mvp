package com.br.delphos.application.usecase;

import com.br.delphos.application.dto.RegisterCashOutCommand;
import com.br.delphos.application.port.in.RegisterCashOutInputPort;
import com.br.delphos.application.port.out.EventPublisherPort;
import com.br.delphos.application.port.out.TreasuryAccountPersistencePort;
import com.br.delphos.domain.event.CashOutRegisteredEvent;
import com.br.delphos.domain.model.CashMovement;
import com.br.delphos.domain.model.TreasuryAccount;

import java.util.Currency;

public class RegisterCashOutUseCase
        implements RegisterCashOutInputPort {

    private final TreasuryAccountPersistencePort repository;
    private final EventPublisherPort eventPublisher;

    public RegisterCashOutUseCase(
            TreasuryAccountPersistencePort repository,
            EventPublisherPort eventPublisher
    ) {
        this.repository = repository;
        this.eventPublisher = eventPublisher;
    }

    @Override
    public void execute(RegisterCashOutCommand command) {

        TreasuryAccount account =
                repository.findById(command.getTreasuryAccountId());

        Money money = new Money(
                command.getAmount(),
                Currency.getInstance(command.getCurrency())
        );

        CashMovement movement =
                CashMovement.cashOut(
                        money,
                        MovementSource.valueOf(command.getSource()),
                        command.getOriginId(),
                        command.getAccountingDate()
                );

        account.registerCashOut(movement);

        repository.save(account);

        eventPublisher.publish(movement);
    }
}