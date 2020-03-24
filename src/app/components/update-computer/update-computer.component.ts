import { ToastrService } from 'ngx-toastr';
import { Computer } from './../../models/computer';
import { ComputerService } from './../../service/computer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-computer',
  templateUrl: './update-computer.component.html',
  styleUrls: ['./update-computer.component.css']
})
export class UpdateComputerComponent implements OnInit {
  computerToUpdate: Computer;
  idComputerToUpdate: number;
  isLoading: boolean;
  marques: string[];
  types: string[];
  categories: string[];
  constructor(private router: Router, private route: ActivatedRoute, private computerService: ComputerService,
              private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.marques = this.computerService.computerMarque;
    this.types = this.computerService.computerType;
    this.categories = this.computerService.computerCategorie;
    this.idComputerToUpdate = + this.route.snapshot.paramMap.get('id');
    this.isLoading = true;
    this.computerService.getComputerById(this.idComputerToUpdate).subscribe((data: Computer) => {
      this.computerToUpdate = data;
      this.isLoading = false;
    });
  }
  updateComputer() {
    this.computerService.updateComputer(this.computerToUpdate).subscribe((then => {
      this.toastr.success('Odrinateur mis a jour', 'Effectué');
      this.router.navigate(['/home']);
    }));
  }

}
