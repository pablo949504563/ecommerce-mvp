package com.br.delphos.domain.model;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;

@Entity
@Table(name = "tb_order_items")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long productId;
    private Integer quantity;
    private BigDecimal priceAtPurchase; // Importante: guarda o preço do dia da venda
}
