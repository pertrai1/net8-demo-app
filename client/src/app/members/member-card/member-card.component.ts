import { Component, input, ViewEncapsulation } from '@angular/core';
import { Member } from '../../_models/member';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCarComponent {
  member = input.required<Member>();
}
