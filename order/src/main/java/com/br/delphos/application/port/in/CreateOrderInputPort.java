package com.br.delphos.application.port.in;

import com.br.delphos.domain.model.Order;

public interface CreateOrderInputPort {
    void execute(Order order);
}
