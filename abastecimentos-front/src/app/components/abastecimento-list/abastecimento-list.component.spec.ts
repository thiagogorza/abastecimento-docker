// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AbastecimentoListComponent } from './abastecimento-list.component';
// import { provideHttpClientTesting } from '@angular/common/http/testing';
// import { MatTableModule } from '@angular/material/table';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { By } from '@angular/platform-browser';
// import { of } from 'rxjs';
// import {AbastecimentoService} from './abastecimento.service';
//
// describe('AbastecimentoListComponent', () => {
//   let component: AbastecimentoListComponent;
//   let fixture: ComponentFixture<AbastecimentoListComponent>;
//   let abastecimentoServiceSpy: jasmine.SpyObj<AbastecimentoService>;
//
//   beforeEach(async () => {
//     const spy = jasmine.createSpyObj('AbastecimentoService', ['listar', 'remover']);
//
//     await TestBed.configureTestingModule({
//       declarations: [AbastecimentoListComponent],
//       imports: [MatTableModule, MatButtonModule, MatInputModule],
//       providers: [
//         { provide: AbastecimentoService, useValue: spy },
//         provideHttpClientTesting() // Substitui o HttpClientTestingModule
//       ],
//     }).compileComponents();
//
//     fixture = TestBed.createComponent(AbastecimentoListComponent);
//     component = fixture.componentInstance;
//     abastecimentoServiceSpy = TestBed.inject(AbastecimentoService) as jasmine.SpyObj<AbastecimentoService>;
//   });
//
//   it('deve carregar abastecimentos ao iniciar', () => {
//     const mockAbastecimentos = [
//       { placa: 'AAA-1234', quilometragem: 1000, valorTotal: 50.0, dataHora: '2025-01-08T10:00:00' },
//       { placa: 'BBB-5678', quilometragem: 1500, valorTotal: 75.0, dataHora: '2025-01-08T11:00:00' },
//     ];
//     abastecimentoServiceSpy.listar.and.returnValue(of(mockAbastecimentos));
//
//     fixture.detectChanges();
//
//     expect(component.abastecimentos.length).toBe(2);
//     expect(component.abastecimentos[0].placa).toBe('AAA-1234');
//     expect(component.abastecimentos[1].placa).toBe('BBB-5678');
//   });
//
//   it('deve remover um abastecimento', () => {
//     const mockAbastecimentos = [
//       { placa: 'AAA-1234', quilometragem: 1000, valorTotal: 50.0, dataHora: '2025-01-08T10:00:00', id: '1' },
//       { placa: 'BBB-5678', quilometragem: 1500, valorTotal: 75.0, dataHora: '2025-01-08T11:00:00', id: '2' },
//     ];
//     abastecimentoServiceSpy.listar.and.returnValue(of(mockAbastecimentos));
//     abastecimentoServiceSpy.remover.and.returnValue(of(undefined));
//
//     fixture.detectChanges();
//
//     const removeButton = fixture.debugElement.query(By.css('button')).nativeElement;
//     removeButton.click();
//
//     expect(abastecimentoServiceSpy.remover).toHaveBeenCalledWith('1');
//   });
// });
