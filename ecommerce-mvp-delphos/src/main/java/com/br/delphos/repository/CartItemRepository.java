package com.br.delphos.repository;

import com.br.delphos.domain.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByUserId(String userId);
    Optional<CartItem> findByUserIdAndProductId(String userId, Long productId);
    void deleteByUserId(String userId);
}
