package com.br.delphos.repository;
import com.br.delphos.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // O JpaRepository já entrega métodos como save(), findAll(), findById() prontos.
}