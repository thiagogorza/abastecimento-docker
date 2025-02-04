package com.thiagogorza.domain.model.abastecimento;

import jakarta.validation.constraints.*;

import java.time.LocalDateTime;

public record AbastecimentoRequest(

        @NotBlank(message = "A placa do veículo é obrigatória.")
        @Pattern(regexp = "^[A-Z]{3}-\\d{4}$|^[A-Z]{3}\\d[A-Z]\\d{2}$", message = "A placa deve estar no formato AAA-1234 ou ABC1D23.")
        String placa,

        @NotNull(message = "A quilometragem é obrigatória.")
        @Positive(message = "A quilometragem deve ser maior que zero.")
        Integer quilometragem,

        @NotNull(message = "O valor total é obrigatório.")
        @DecimalMin(value = "0.01", message = "O valor total deve ser maior que zero.")
        Double valorTotal,

        @NotNull(message = "A data e hora são obrigatórias.")
        @PastOrPresent(message = "A data e hora não podem estar no futuro.")
        LocalDateTime dataHora
) {
}
