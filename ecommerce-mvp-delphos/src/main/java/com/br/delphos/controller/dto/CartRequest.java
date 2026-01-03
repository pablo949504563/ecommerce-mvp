package com.br.delphos.controller.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record CartRequest(
        @NotNull Long productId,
        @NotNull @Positive Integer quantity
) {}
