package com.br.delphos.controller;

import com.br.delphos.domain.model.Order;
import com.br.delphos.service.OrderService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
@Tag(name = "Orders", description = "Finalização de pedidos e checkout")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/checkout/{userId}")
    public ResponseEntity<Order> checkout(@PathVariable String userId) {
        return ResponseEntity.ok(orderService.checkout(userId));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUser(@PathVariable String userId) {
        System.out.println("--- CHAMADA RECEBIDA: Buscando histórico do usuário: " + userId + " ---");
        List<Order> orders = orderService.getOrdersByUser(userId);
        System.out.println("--- Pedidos encontrados: " + orders.size() + " ---");
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/teste")
    public String teste() {
        return "O Controller está funcionando!";
    }
}
