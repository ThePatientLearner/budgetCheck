import { Routes } from '@angular/router';
import { ExpendituresComponent } from './expenditures/expenditures.component';
import { OpcionesMenuComponent } from './opciones-menu/opciones-menu.component';
import { StockpricesComponent } from './stockprices/stockprices.component';



export const routes: Routes = [
    { path: '', redirectTo: '/Expenditures', pathMatch: 'full' }, // esto es para que inicie en esta ruta la pagina
    {
        
        path: "Expenditures", component:ExpendituresComponent
    },
    {
        path: "Options", component:OpcionesMenuComponent
    },
    {
        path: "Markets", component:StockpricesComponent
    }
];
