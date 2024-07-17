import {defer, Observable} from "rxjs";

export function iif_then<T, F>(condition: () => boolean, trueResult: () => Observable<T>, falseResult: () => Observable<F>): Observable<T | F> {
    return defer(() => (condition() ? trueResult() : falseResult()));
}
