import { configureStore } from "@reduxjs/toolkit";
import Users from "./reducer/users";

export const store = configureStore({
  reducer: {
    users: Users,
  },
});
