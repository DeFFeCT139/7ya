import { configureStore } from "@reduxjs/toolkit";
import pageSlise from "../components/features/page";
import itemSlise from "../components/features/item";

export const store = configureStore({
  reducer: {
    page: pageSlise,
    item: itemSlise
  },
})