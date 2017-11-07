import { Action } from '@ngrx/store';

export const INCREMENTAR = 'INCREMENTAR';
export const DECREMENTAR = 'DECREMENTAR';

export class Incrementar implements Action {
    readonly type = INCREMENTAR;
}

export class Decrementar implements Action {
    readonly type = DECREMENTAR;
}

export type All = Incrementar | Decrementar;
