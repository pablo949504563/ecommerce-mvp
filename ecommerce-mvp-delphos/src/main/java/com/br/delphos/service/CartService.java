package com.br.delphos.service;

import com.br.delphos.domain.model.CartItem;
import com.br.delphos.repository.CartItemRepository;
import com.br.delphos.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartItemRepository cartRepository;
    private final ProductRepository productRepository;

    public List<CartItem> getCart(String userId) {
        return cartRepository.findByUserId(userId);
    }

    @Transactional
    public CartItem addItem(String userId, Long productId, Integer quantity) {
        var product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        var existingItem = cartRepository.findByUserIdAndProductId(userId, productId);

        if (existingItem.isPresent()) {
            CartItem item = existingItem.get();
            item.setQuantity(item.getQuantity() + quantity);
            return cartRepository.save(item);
        }

        CartItem newItem = CartItem.builder()
                .userId(userId)
                .product(product)
                .quantity(quantity)
                .build();

        return cartRepository.save(newItem);
    }

    @Transactional
    public void clearCart(String userId) {
        cartRepository.deleteByUserId(userId);
    }
}
