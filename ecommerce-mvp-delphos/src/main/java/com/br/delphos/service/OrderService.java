package com.br.delphos.service;

import com.br.delphos.domain.Product;
import com.br.delphos.domain.model.*;
import com.br.delphos.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final CartItemRepository cartRepository;
    private final ProductRepository productRepository;

    @Transactional
    public Order checkout(String userId) {
        // 1. Recupera itens do carrinho
        List<CartItem> cartItems = cartRepository.findByUserId(userId);
        System.out.println(">>> Itens encontrados no carrinho: " + cartItems.size());

        if (cartItems.isEmpty()) throw new RuntimeException("Carrinho vazio");

        // 2. Converte CartItems em OrderItems e valida estoque
        List<OrderItem> orderItems = cartItems.stream().map(cartItem -> {
            Product product = cartItem.getProduct();
            System.out.println(">>> Processando produto: " + product.getName() + " (Estoque: " + product.getStockQuantity() + ")");

            if (product.getStockQuantity() < cartItem.getQuantity()) {
                System.out.println("XXX ERRO: Estoque insuficiente para " + product.getName());
                throw new RuntimeException("Estoque insuficiente para o produto: " + product.getName());
            }

            // Baixa no estoque
            product.setStockQuantity(product.getStockQuantity() - cartItem.getQuantity());
            productRepository.save(product);

            return OrderItem.builder()
                    .productId(product.getId())
                    .quantity(cartItem.getQuantity())
                    .priceAtPurchase(product.getPrice())
                    .build();
        }).toList();

        // 3. Calcula total e cria o Pedido
        BigDecimal total = orderItems.stream()
                .map(item -> item.getPriceAtPurchase().multiply(BigDecimal.valueOf(item.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        Order order = Order.builder()
                .userId(userId)
                .orderDate(LocalDateTime.now())
                .items(orderItems)
                .totalValue(total)
                .build();

        // 4. Salva o pedido e limpa o carrinho
        Order savedOrder = orderRepository.save(order);
        System.out.println(">>> Pedido #" + savedOrder.getId() + " salvo com sucesso!");
        cartRepository.deleteByUserId(userId);
        System.out.println(">>> Carrinho do usuário " + userId + " foi limpo.");
        return savedOrder;

    }
    public List<Order> getOrdersByUser(String userId) {
        return orderRepository.findByUserId(userId);
    }
}
