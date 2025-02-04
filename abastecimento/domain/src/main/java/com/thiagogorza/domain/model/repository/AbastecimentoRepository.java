package com.thiagogorza.domain.model.repository;


import com.thiagogorza.domain.model.abastecimento.Abastecimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface AbastecimentoRepository extends JpaRepository<Abastecimento, UUID> {
    Optional<Abastecimento> findByPlacaContainingIgnoreCase(String placa);
}