package com.br.delphos.controller;

import com.br.delphos.controller.dto.CartRequest;
import com.br.delphos.domain.model.CartItem;
import com.br.delphos.service.CartService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@RequiredArgsConstructor
@Tag(name = "Cart", description = "Gestão do carrinho de compras")
@CrossOrigin(origins = "http://localhost:5173")
public class CartController {

    private final CartService cartService;

    @GetMapping("/{userId}")
    @Operation(summary = "Visualiza os itens no carrinho do utilizador")
    public ResponseEntity<List<CartItem>> getCart(@PathVariable String userId) {
        return ResponseEntity.ok(cartService.getCart(userId));
    }

    @PostMapping("/{userId}/add")
    @Operation(summary = "Adiciona ou atualiza um produto no carrinho")
    public ResponseEntity<CartItem> addToCart(
            @PathVariable String userId,
            @RequestBody @Valid CartRequest request) {
        return ResponseEntity.ok(cartService.addItem(userId, request.productId(), request.quantity()));
    }

    @DeleteMapping("/{userId}")
    @Operation(summary = "Limpa todo o carrinho do utilizador")
    public ResponseEntity<Void> clear(@PathVariable String userId) {
        cartService.clearCart(userId);
        return ResponseEntity.noContent().build();
    }
}
