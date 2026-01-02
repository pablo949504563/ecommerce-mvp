package com.br.delphos.infrastructure.persistence.repository;

import com.br.delphos.application.port.out.TreasuryAccountPersistencePort;
import com.br.delphos.domain.model.TreasuryAccount;
import com.br.delphos.infrastructure.persistence.entity.TreasuryAccountEntity;
import com.br.delphos.infrastructure.persistence.mapper.TreasuryAccountMapper;
import org.springframework.stereotype.Repository;

@Repository
public class JpaTreasuryAccountRepository
        implements TreasuryAccountPersistencePort {

    private final SpringDataTreasuryAccountRepository repository;

    public JpaTreasuryAccountRepository(
            SpringDataTreasuryAccountRepository repository
    ) {
        this.repository = repository;
    }

    @Override
    public TreasuryAccount findById(String id) {
        TreasuryAccountEntity entity =
                repository.findById(id)
                        .orElseThrow(() ->
                                new IllegalArgumentException("Conta não encontrada"));

        return TreasuryAccountMapper.toDomain(entity);
    }

    @Override
    public void save(TreasuryAccount account) {
        TreasuryAccountEntity entity =
                TreasuryAccountMapper.toEntity(account);
        repository.save(entity);
    }
}
