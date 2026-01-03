package com.br.delphos.controller;

import com.br.delphos.domain.model.Order;
import com.br.delphos.service.OrderService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
@Tag(name = "Orders", description = "Finalização de pedidos e checkout")
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/checkout/{userId}")
    public ResponseEntity<Order> checkout(@PathVariable String userId) {
        return ResponseEntity.ok(orderService.checkout(userId));
    }
}
