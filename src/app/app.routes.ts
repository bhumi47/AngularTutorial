import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './directive/structural-dir/structural-dir.component';
import { IfelseComponent } from './controlFlow/ifelse/ifelse.component';
import { ForComponent } from './controlFlow/for/for.component';
import { SwitchComponent } from './controlFlow/switch/switch.component';

export const routes: Routes = [
    {
        path: 'add-emp',
        component: AddEmployeeComponent,
        
    },
    {
        path :'data-binding',
        component: DatabindingComponent
    },
    {
        path : 'emp-list',
        component : EmployeeListComponent
    },
    {
        path : 'structural-dir',
        component: StructuralDirComponent
    },
    {
        path : 'if-else',
        component: IfelseComponent
    },
    {
        path : 'for',
        component : ForComponent
    },
    {
        path: 'switch-case',
        component: SwitchComponent
    }
];
