package com.br.delphos.application.port.out;

public interface EventPublisherPort {
    void publish(Object event);
}
