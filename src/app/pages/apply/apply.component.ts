import { Component, inject } from '@angular/core';
import { ApplyService } from '../../services/apply.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.scss'
})
export class ApplyComponent {
  applyService:ApplyService=inject(ApplyService);

  apply$:Observable<object>=this.applyService.getApply();

}
