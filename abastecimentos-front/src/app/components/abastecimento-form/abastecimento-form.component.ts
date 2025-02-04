import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AbastecimentoService} from '../abastecimento/abastecimento.service';
import {AbastecimentoModel} from '../abastecimento/abastecimento.model';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-abastecimento-form',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule, RouterLink],
  templateUrl: './abastecimento-form.component.html',
  styleUrls: ['./abastecimento-form.component.css']
})
export class AbastecimentoFormComponent {
  abastecimento: AbastecimentoModel = {
    placa: '',
    quilometragem: 0,
    valorTotal: 0,
    dataHora: ''
  };

  constructor(private abastecimentoService: AbastecimentoService, private router: Router) {
  }

  salvar(): void {
    if (this.validar()) {
      this.abastecimentoService.salvar(this.abastecimento).subscribe(() => {
        alert('Abastecimento salvo com sucesso!');
        this.router.navigate(['/']);
      });
    }
  }

  validar(): boolean {
    if (!this.abastecimento.placa.match(/^[A-Z]{3}-\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$/)) {
      alert('A placa deve estar no formato AAA-1234 ou ABC1D23.');
      return false;
    }
    if (this.abastecimento.quilometragem <= 0) {
      alert('A quilometragem deve ser maior que zero.');
      return false;
    }
    if (this.abastecimento.valorTotal <= 0) {
      alert('O valor total deve ser maior que zero.');
      return false;
    }
    if (!this.abastecimento.dataHora) {
      alert('A data e hora são obrigatórias.');
      return false;
    }

    const dataAtual = new Date();
    const dataHora = new Date(this.abastecimento.dataHora);

    if (dataHora > dataAtual) {
      alert('A data e hora não podem estar no futuro.');
      return false;
    }

    return true;
  }
}
