"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { ExampleActions } from "@/store/exampleStore/example.reducer";
import React, { useEffect } from "react";
import { ExampleContainer } from "./style";

export default function Example() {
  const exampleState = useAppSelector((state) => state.example);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(ExampleActions.getPostRequest());
  }, []);

  return (
    <ExampleContainer>
      Example page
      <div className="post-display">
        {exampleState.postList?.map((item, index) => (
          <div className="post-single" key={index}>
            <span>{index + 1}</span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </ExampleContainer>
  );
}
