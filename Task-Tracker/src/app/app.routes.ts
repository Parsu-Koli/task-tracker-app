import { Routes } from '@angular/router';
import{ NavbarComponent } from './navbar/navbar.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { DashbordComponent } from './dashbord/dashbord.component';

export const routes: Routes = [


    {
        path:'task-form/:id',
        component: TaskFormComponent
    },
    {
        path:'task-form',
        component: TaskFormComponent
    },
    {
        path:'Nevbar',
        component: NavbarComponent
    },
    {
        path:'task-list',
        component: TaskListComponent
    },
    {
        path:'dashbord',
        component: DashbordComponent
    }

];
