package com.br.delphos.infrastructure.persistence.repository;

import com.br.delphos.infrastructure.persistence.entity.TreasuryAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpringDataTreasuryAccountRepository
        extends JpaRepository<TreasuryAccountEntity, String> {
}
