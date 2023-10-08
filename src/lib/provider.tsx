"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
}
