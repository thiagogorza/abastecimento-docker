package com.thiagogorza.api.abastecimento;

import com.thiagogorza.domain.model.abastecimento.AbastecimentoRequest;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

class AbastecimentoValidatorTest {

    private Validator validator;

    @BeforeEach
    void setUp() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }

    @Test
    void deveLancarErroParaDataFutura() {
        AbastecimentoRequest request = new AbastecimentoRequest(
                "AAA-1234",
                1000,
                50.0,
                LocalDateTime.now().plusDays(1)
        );

        Set<jakarta.validation.ConstraintViolation<AbastecimentoRequest>> violations = validator.validate(request);

        assertThat(violations).hasSize(1);
        assertThat(violations.iterator().next().getMessage()).isEqualTo("A data e hora não podem estar no futuro.");
    }

    @Test
    void deveLancarErroParaPlacaInvalida() {
        AbastecimentoRequest request = new AbastecimentoRequest(
                "123-ABCD", // Placa inválida
                1000,
                50.0,
                LocalDateTime.now()
        );

        Set<jakarta.validation.ConstraintViolation<AbastecimentoRequest>> violations = validator.validate(request);

        assertThat(violations).hasSize(1);
        assertThat(violations.iterator().next().getMessage()).isEqualTo("A placa deve estar no formato AAA-1234 ou ABC1D23.");
    }

    @Test
    void deveLancarErroParaValorTotalInvalido() {
        AbastecimentoRequest request = new AbastecimentoRequest(
                "AAA-1234",
                1000,
                0.0, // Valor inválido
                LocalDateTime.now()
        );

        Set<jakarta.validation.ConstraintViolation<AbastecimentoRequest>> violations = validator.validate(request);

        assertThat(violations).hasSize(1);
        assertThat(violations.iterator().next().getMessage()).isEqualTo("O valor total deve ser maior que zero.");
    }
}
