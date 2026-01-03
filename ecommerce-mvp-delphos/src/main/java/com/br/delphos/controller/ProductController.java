package com.br.delphos.controller;

import com.br.delphos.controller.dto.ProductRequest;
import com.br.delphos.domain.Product;
import com.br.delphos.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@Tag(name = "Products", description = "Gerenciamento de produtos do catálogo")
public class ProductController {

    private final ProductService productService;

    @GetMapping
    @Operation(summary = "Lista todos os produtos disponíveis")
    public ResponseEntity<List<Product>> listAll() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @PostMapping
    @Operation(summary = "Cadastra um novo produto no sistema")
    public ResponseEntity<Product> create(@RequestBody @Valid ProductRequest request) {
        Product product = Product.builder()
                .name(request.name())
                .description(request.description())
                .price(request.price())
                .stockQuantity(request.stockQuantity())
                .build();

        return ResponseEntity.status(HttpStatus.CREATED).body(productService.createProduct(product));
    }
}
