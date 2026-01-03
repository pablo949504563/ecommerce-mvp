package com.br.delphos.domain.model;

import com.br.delphos.domain.Product;
import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;

@Entity
@Table(name = "tb_cart_items")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Em um MVP, identificamos o carrinho pelo ID do cliente (String ou Long)
    @Column(nullable = false)
    private String userId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private Integer quantity;

    public BigDecimal getSubtotal() {
        return product.getPrice().multiply(BigDecimal.valueOf(quantity));
    }
}
