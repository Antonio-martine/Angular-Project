import { Component, OnInit} from '@angular/core';
import { ServicesAuthService } from 'src/app/services/services-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public authService: ServicesAuthService){}

  ngOnInit(): void {
    
  }

}
