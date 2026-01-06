# 🛒 Delphos E-commerce MVP
Este projeto é um MVP (Minimum Viable Product) de uma plataforma de e-commerce robusta, desenvolvida com Spring Boot 3 e MySQL. O foco principal foi aplicar padrões de arquitetura corporativa para garantir escalabilidade e segurança.

# 🚀 Tecnologias Utilizadas
Java 17: Linguagem robusta e performática.

Spring Boot 3.2.5: Framework core da aplicação.

Spring Data JPA: Abstração de persistência de dados.

MySQL: Banco de dados relacional para alta integridade.

Lombok: Redução de código boilerplate.

Swagger/OpenAPI: Documentação interativa da API.

Bean Validation: Validação rigorosa de inputs.

# 🏗️ Arquitetura
A aplicação segue o padrão de Arquitetura em Camadas, garantindo o desacoplamento entre as regras de negócio e a infraestrutura:

Controller: Gerencia os endpoints REST e DTOs.

Service: Orquestra as regras de negócio (Checkout, Estoque, Carrinho).

Repository: Interface de comunicação com o MySQL.

Domain/Model: Representação das entidades do negócio.

# 🛠️ Como Rodar o Projeto
Pré-requisitos
Java 17 instalado.

Maven 3.x.

MySQL rodando (Local ou Docker).

Configuração
Clone o repositório.

No arquivo src/main/resources/application.properties, ajuste as credenciais do seu MySQL:

Properties

spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
Execute o comando:

Bash

mvn spring-boot:run
## 📖 Documentação da API
Após iniciar a aplicação, você pode acessar a documentação interativa através do Swagger: 🔗 http://localhost:8080/api/swagger-ui.html

## 🌟 Diferenciais do Projeto
Atomicidade no Checkout: Uso da anotação @Transactional para garantir que o pedido só seja criado se houver estoque, revertendo a operação em caso de erro.

Global Exception Handler: Respostas de erro padronizadas em JSON, evitando vazamento de logs técnicos para o cliente.

Integridade de Histórico: Armazenamento do preço do produto no momento da compra (priceAtPurchase), protegendo o histórico do pedido contra alterações futuras de preço no catálogo.
