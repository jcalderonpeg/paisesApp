import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();
  param: string = '';

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    } )
  }

  teclaPresionada(){

    this.debouncer.next( this.param );
  }

  buscar(){
    this.onEnter.emit( this.param );
  }

}
