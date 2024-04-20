"use client";
import { useAppDispatch } from "@/hooks";
import { ExampleActions } from "@/store/exampleStore/ExampleReducer";
import React, { useEffect } from "react";
import { Button } from "@nextui-org/button";

export default function TodoList() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(ExampleActions.getPostRequest());
  }, []);

  return (
    <div className="todo-container">
      TodoList
      <Button>Text</Button>
    </div>
  );
}
