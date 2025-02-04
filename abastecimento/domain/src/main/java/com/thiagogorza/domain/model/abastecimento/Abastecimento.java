package com.thiagogorza.domain.model.abastecimento;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "abastecimento")
@Getter
@Setter
public class Abastecimento {

    @Id
    @GeneratedValue
    private UUID id;

    private String placa;

    private Integer quilometragem;

    private Double valorTotal;

    private LocalDateTime dataHora;
}