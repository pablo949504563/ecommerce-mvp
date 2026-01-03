package com.br.delphos.service;

import com.br.delphos.domain.Product;
import com.br.delphos.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Transactional
    public Product createProduct(Product product) {
        // Aqui entrariam regras de negócio (ex: validar se nome já existe)
        return productRepository.save(product);
    }
}
