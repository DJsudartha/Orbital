import { Dispatch, SetStateAction } from "react";
/**
 * A hook that creates a nullable state.
 * @param initialState Optional initial state, defaults to null.
 * @returns a stateful value, and a function to update it.
 */
declare const useNullableState: <Type>(initialState?: Type | null | (() => Type | null)) => [Type | null, Dispatch<SetStateAction<Type | null>>];
export { useNullableState };
//# sourceMappingURL=use-nullable-state.d.ts.map