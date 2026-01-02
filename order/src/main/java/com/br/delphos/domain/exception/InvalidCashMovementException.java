package com.br.delphos.domain.exception;

public class InvalidCashMovementException extends RuntimeException {
    public InvalidCashMovementException(String message) {
        super(message);
    }
}
