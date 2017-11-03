import * as ContadorActions from './contador.actions';

export type Action = ContadorActions.All;

export function contadorReducer(state: number = 0, action: Action) {

    switch (action.type) {
        case ContadorActions.INCREMENTAR:
            return state + 1;

        case ContadorActions.DECREMENTAR:
            return state - 1;

        default:
            return state;
    }

}
