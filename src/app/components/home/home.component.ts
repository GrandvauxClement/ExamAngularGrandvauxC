import { ToastrService } from 'ngx-toastr';
import { Computer } from './../../models/computer';
import { ComputerService } from './../../service/computer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  computers: Computer[] = [];
  isLoading: boolean;
  constructor(private computerService: ComputerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getComputer();
  }
  getComputer() {
    this.isLoading = true;
    this.computerService.getComputer().subscribe((data: Computer[]) => {
      this.computers = data;
      this.isLoading = false;
    } );
  }
  deleteComputer(idComputerToDelete: number) {
    this.computerService.deleteComputer(idComputerToDelete).subscribe((then => {
      this.toastr.warning('Ordinateur effacé', 'Effectué');
      this.getComputer();
    }));
  }

}
