package com.thiagogorza.domain.model.abastecimento;

import java.time.LocalDateTime;
import java.util.UUID;

public record AbastecimentoResponse(
        UUID id,
        String placa,
        Integer quilometragem,
        Double valorTotal,
        LocalDateTime dataHora
) {
}
