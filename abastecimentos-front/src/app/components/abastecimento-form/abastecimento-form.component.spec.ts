// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AbastecimentoFormComponent } from './abastecimento-form.component';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { FormsModule } from '@angular/forms';
//
//
// import { of } from 'rxjs';
// import { provideHttpClientTesting } from '@angular/common/http/testing';
// import {AbastecimentoService} from '../abastecimento-list/abastecimento.service';
//
// describe('AbastecimentoFormComponent', () => {
//   let component: AbastecimentoFormComponent;
//   let fixture: ComponentFixture<AbastecimentoFormComponent>;
//   let abastecimentoServiceSpy: jasmine.SpyObj<AbastecimentoService>;
//
//   beforeEach(async () => {
//     const spy = jasmine.createSpyObj('AbastecimentoService', ['salvar']);
//
//     await TestBed.configureTestingModule({
//       declarations: [AbastecimentoFormComponent],
//       imports: [MatInputModule, MatButtonModule, FormsModule],
//       providers: [
//         { provide: AbastecimentoService, useValue: spy },
//         provideHttpClientTesting()
//       ],
//     }).compileComponents();
//
//     fixture = TestBed.createComponent(AbastecimentoFormComponent);
//     component = fixture.componentInstance;
//     abastecimentoServiceSpy = TestBed.inject(AbastecimentoService) as jasmine.SpyObj<AbastecimentoService>;
//   });
//
//   it('deve validar campos obrigatórios', () => {
//     component.abastecimento = {
//       placa: '',
//       quilometragem: 0,
//       valorTotal: 0,
//       dataHora: ''
//     };
//
//     expect(component.validar()).toBeFalse();
//   });
//
//   it('deve salvar um abastecimento válido', () => {
//     const mockAbastecimento = {
//       placa: 'AAA-1234',
//       quilometragem: 1000,
//       valorTotal: 50.0,
//       dataHora: '2025-01-08T10:00:00'
//     };
//
//     abastecimentoServiceSpy.salvar.and.returnValue(of(mockAbastecimento));
//
//     component.abastecimento = mockAbastecimento;
//     component.salvar();
//
//     expect(abastecimentoServiceSpy.salvar).toHaveBeenCalledWith(mockAbastecimento);
//   });
// });
