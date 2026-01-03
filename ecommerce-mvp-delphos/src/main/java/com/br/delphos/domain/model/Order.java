package com.br.delphos.domain.model;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "tb_orders")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userId;
    private LocalDateTime orderDate;
    private BigDecimal totalValue;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private List<OrderItem> items;
}
