import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EstadoFazendaModel } from 'src/app/models/estado-fazenda.model';
import { SportiModel } from 'src/app/models/sporti.model';
import { InitialPageService } from 'src/app/services/initial-page.service';

@Component({
  selector: 'initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  data: Array<SportiModel>;
  dataSource: MatTableDataSource<SportiModel>;
  displayedColumns: string[] = ['id', 'nome', 'sexo', 'uf', 'valorMinimo', 'valorMaximo'];
  constructor(private initialPageService: InitialPageService) {

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<SportiModel>(this.data);
    this.getData();
  }

  public async getData() {
    await this.initialPageService.returnData().subscribe(data => {
      this.data = data.obterPorEstadoFazendaResult.map(result => { return result as SportiModel; });
      this.dataSource = new MatTableDataSource<SportiModel>(this.data);
    });
  }
}
