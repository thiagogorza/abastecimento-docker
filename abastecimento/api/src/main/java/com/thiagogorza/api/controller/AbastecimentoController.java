package com.thiagogorza.api.controller;


import com.thiagogorza.domain.model.abastecimento.AbastecimentoRequest;
import com.thiagogorza.domain.model.abastecimento.AbastecimentoResponse;
import com.thiagogorza.domain.model.service.AbastecimentoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/abastecimentos")
public class AbastecimentoController {

    private final AbastecimentoService service;

    public AbastecimentoController(AbastecimentoService service) {
        this.service = service;
    }

    @GetMapping
    public List<AbastecimentoResponse> listar(@RequestParam(required = false) String placa) {
        return service.listar(placa);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public AbastecimentoResponse salvar(@RequestBody @Valid AbastecimentoRequest request) {
        return service.salvar(request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void remover(@PathVariable UUID id) {
        service.remover(id);
    }
}