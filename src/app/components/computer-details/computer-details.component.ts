import { Computer } from './../../models/computer';
import { ComputerService } from './../../service/computer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-computer-details',
  templateUrl: './computer-details.component.html',
  styleUrls: ['./computer-details.component.css']
})
export class ComputerDetailsComponent implements OnInit {
  idComputer: number;
  computer: Computer;
  isLoading: boolean;
  constructor( private route: ActivatedRoute, private computerService: ComputerService) { }

  ngOnInit(): void {
    this.idComputer = + this.route.snapshot.paramMap.get('id');
    this.getComputerById();
  }
  getComputerById() {
    this.isLoading = true;
    this.computerService.getComputerById(this.idComputer).subscribe((data: Computer) => {
      this.computer = data;
      this.isLoading = false;
    });
  }

}
