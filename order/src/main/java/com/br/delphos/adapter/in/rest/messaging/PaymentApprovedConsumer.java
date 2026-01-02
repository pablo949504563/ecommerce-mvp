package com.br.delphos.adapter.in.rest.messaging;

import com.br.delphos.application.port.in.RegisterCashOutInputPort;
import org.springframework.stereotype.Component;

@Component
public class PaymentApprovedConsumer {

    private final RegisterCashOutInputPort useCase;

    public PaymentApprovedConsumer(RegisterCashOutInputPort useCase) {
        this.useCase = useCase;
    }

    @KafkaListener(topics = "payment-approved")
    public void consume(PaymentApprovedEvent event) {

        RegisterCashOutCommand command =
                new RegisterCashOutCommand(
                        event.getTreasuryAccountId(),
                        event.getAmount(),
                        event.getCurrency(),
                        event.getAccountingDate(),
                        "PAYABLE",
                        event.getPaymentId()
                );

        useCase.execute(command);
    }
}
