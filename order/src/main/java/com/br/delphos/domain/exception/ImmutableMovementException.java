package com.br.delphos.domain.exception;

public class ImmutableMovementException extends RuntimeException {
    public ImmutableMovementException() {
        super("Movimento confirmado não pode ser alterado.");
    }
}
