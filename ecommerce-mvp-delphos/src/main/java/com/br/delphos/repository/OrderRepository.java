package com.br.delphos.repository;

import com.br.delphos.domain.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserId(String userId);
}
