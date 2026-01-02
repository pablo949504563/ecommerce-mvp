package com.br.delphos.application.port.out;

import com.br.delphos.domain.model.TreasuryAccount;

public interface TreasuryAccountPersistencePort {

    TreasuryAccount findById(String id);

    void save(TreasuryAccount account);
}
