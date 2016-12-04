import { Component } from '@angular/core';
import { TodosComponent } from './components/todos.component';

import { TodoService } from './services/todo.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [TodoService]
})
export class AppComponent { }
