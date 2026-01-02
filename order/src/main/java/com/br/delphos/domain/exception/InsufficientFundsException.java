package com.br.delphos.domain.exception;

public class InsufficientFundsException extends RuntimeException {
    public InsufficientFundsException() {
        super("Saldo insuficiente para realizar a operação.");
    }
}
