package com.br.delphos.application.port.in;


import com.br.delphos.application.dto.RegisterCashOutCommand;

public interface RegisterCashOutInputPort {
    void execute(RegisterCashOutCommand command);
}
