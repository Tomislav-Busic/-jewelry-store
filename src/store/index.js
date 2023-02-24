import { Iterable } from "immutable";
import {
  configureStore,
  createSerializableStateInvariantMiddleware,
} from "@reduxjs/toolkit";
import { loginSlice } from "./slice/login-slice";
import { dataSlice } from "./slice/data-slice";

// I found a solution but I don't know how exactly it works??? :))) (from line 10 t 34)
//https://redux-toolkit.js.org/api/serializabilityMiddleware
function isPlain(val) {
  return (
    typeof val === "undefined" ||
    val === null ||
    typeof val === "string" ||
    typeof val === "boolean" ||
    typeof val === "number" ||
    Array.isArray(val) ||
    Object.values(val) //its work like this...
  );
}

// Augment middleware to consider Immutable.JS iterables serializable
const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value);

const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value);

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
});

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    data: dataSlice.reducer,
  },
  middleware: [serializableMiddleware],
});
