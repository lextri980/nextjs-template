"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { ExampleActions } from "@/store/exampleStore/ExampleReducer";
import { useEffect } from "react";
import { AppContainer } from "./style";

export default function Home() {
  const exampleState = useAppSelector((state) => state.example);
  const dispatch = useAppDispatch();

  console.log(exampleState);

  useEffect(() => {
    dispatch(ExampleActions.exampleAction("payload"));
  }, []);

  return (
    <AppContainer>
      <h1>This is my Component</h1>
    </AppContainer>
  );
}
