import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AbastecimentoService} from '../abastecimento/abastecimento.service';
import {AbastecimentoModel} from '../abastecimento/abastecimento.model';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbar} from '@angular/material/toolbar';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInput, MatInputModule} from '@angular/material/input';
import {RouterLink} from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-abastecimento-list',
  standalone: true,
  templateUrl: './abastecimento-list.component.html',
  styleUrls: ['./abastecimento-list.component.css'],
  imports: [
    MatPaginator,
    MatFormField,
    MatToolbar,
    MatSidenavContent,
    MatSidenav,
    MatSidenavContainer,
    MatHeaderRow,
    MatRow,
    MatCell,
    MatHeaderCell,
    MatRowDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatHeaderCellDef,
    MatButton,
    MatTable,
    FormsModule,
    MatInput,
    RouterLink,
    MatSort,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ]
})
export class AbastecimentoListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['placa', 'quilometragem', 'valorTotal', 'acoes'];
  dataSource = new MatTableDataSource<AbastecimentoModel>([]); // Agora usamos dataSource

  placaFilter: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private abastecimentoService: AbastecimentoService) {
  }

  ngOnInit(): void {
    this.carregarAbastecimentos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  carregarAbastecimentos(): void {
    this.abastecimentoService.listar(this.placaFilter).subscribe((data) => {
      this.dataSource.data = data; // Define os dados corretamente
    });
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }

  removerAbastecimento(id: string): void {
    if (confirm('Deseja realmente remover este abastecimento?')) {
      this.abastecimentoService.remover(id).subscribe(() => {
        this.carregarAbastecimentos();
      });
    }
  }
}
