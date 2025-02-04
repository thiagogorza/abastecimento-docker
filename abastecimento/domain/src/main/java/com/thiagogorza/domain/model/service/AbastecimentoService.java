package com.thiagogorza.domain.model.service;

import com.thiagogorza.domain.model.abastecimento.Abastecimento;
import com.thiagogorza.domain.model.abastecimento.AbastecimentoRequest;
import com.thiagogorza.domain.model.abastecimento.AbastecimentoResponse;
import com.thiagogorza.domain.model.repository.AbastecimentoRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class AbastecimentoService {

    private final AbastecimentoRepository repository;

    public AbastecimentoService(AbastecimentoRepository repository) {
        this.repository = repository;
    }

    public List<AbastecimentoResponse> listar(String placa) {
        List<Abastecimento> abastecimentos;

        if (placa == null || placa.isBlank()) {
            abastecimentos = repository.findAll();
        } else {
            abastecimentos = repository.findByPlacaContainingIgnoreCase(placa)
                    .map(List::of)
                    .orElseGet(Collections::emptyList);
        }

        return abastecimentos.stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }


    public AbastecimentoResponse salvar(AbastecimentoRequest request) {
        Abastecimento abastecimento = toEntity(request);
        return toResponse(repository.save(abastecimento));
    }

    public void remover(UUID id) {
        repository.deleteById(id);
    }

    private Abastecimento toEntity(AbastecimentoRequest request) {
        Abastecimento abastecimento = new Abastecimento();
        abastecimento.setPlaca(request.placa());
        abastecimento.setQuilometragem(request.quilometragem());
        abastecimento.setValorTotal(request.valorTotal());
        abastecimento.setDataHora(request.dataHora());
        return abastecimento;
    }

    private AbastecimentoResponse toResponse(Abastecimento abastecimento) {
        return new AbastecimentoResponse(
                abastecimento.getId(),
                abastecimento.getPlaca(),
                abastecimento.getQuilometragem(),
                abastecimento.getValorTotal(),
                abastecimento.getDataHora()
        );
    }
}
