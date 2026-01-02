package com.br.delphos.adapter.in.rest.messaging;

import com.br.delphos.application.dto.RegisterCashOutCommand;
import com.br.delphos.application.port.in.RegisterCashOutInputPort;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class AccountsPayableConsumer {

    private final RegisterCashOutInputPort useCase;

    public AccountsPayableConsumer(RegisterCashOutInputPort useCase) {
        this.useCase = useCase;
    }

    @KafkaListener(topics = "payment-approved")
    public void consume(String paymentId) {

        RegisterCashOutCommand command =
                new RegisterCashOutCommand(
                        "TREASURY-001",
                        java.math.BigDecimal.valueOf(100),
                        "BRL",
                        LocalDate.now(),
                        "PAYABLE",
                        paymentId
                );

        useCase.execute(command);
    }
}