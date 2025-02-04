package com.thiagogorza.api.abastecimento;

import com.thiagogorza.domain.model.abastecimento.Abastecimento;
import com.thiagogorza.domain.model.abastecimento.AbastecimentoRequest;
import com.thiagogorza.domain.model.repository.AbastecimentoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
class AbastecimentoControllerIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private AbastecimentoRepository repository;

    @Test
    void deveSalvarERecuperarAbastecimento() {
        AbastecimentoRequest request = new AbastecimentoRequest(
                "AAA-1234",
                1000,
                50.0,
                LocalDateTime.now()
        );

        ResponseEntity<Void> response = restTemplate.postForEntity("/abastecimentos", request, Void.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);

        Abastecimento abastecimento = repository.findByPlacaContainingIgnoreCase("AAA-1234")
                .orElseThrow(() -> new AssertionError("Abastecimento não encontrado"));
        assertThat(abastecimento.getPlaca()).isEqualTo("AAA-1234");
        assertThat(abastecimento.getQuilometragem()).isEqualTo(1000);
        assertThat(abastecimento.getValorTotal()).isEqualTo(50.0);
    }
}