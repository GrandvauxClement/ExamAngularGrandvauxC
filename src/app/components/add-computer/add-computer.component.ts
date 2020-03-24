import { ComputerService } from './../../service/computer.service';
import { Computer } from './../../models/computer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
  computerToAdd = new Computer();
  marques: string[];
  types: string[];
  categories: string[];
  constructor(private computerService: ComputerService, private route: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.marques = this.computerService.computerMarque;
    this.types = this.computerService.computerType;
    this.categories = this.computerService.computerCategorie;
    this.computerToAdd.dateEntreStock = new Date();
  }
  addComputer() {
    this.computerService.addComputer(this.computerToAdd).subscribe((then => {
      this.toastr.success('Nouvel Ordi ajouté', 'Effectué');
      this.route.navigate(['/home']);
    }));
  }

}
