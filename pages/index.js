import React from "react";
import AlertExample from "./AlertExample";
import ProgressExample from "./ProgressExample";
import SkeletonExample from "./SkeletonExample";
import SpinnerExample from "./SpinnerExample";
import ToastExample from "./ToastExample";
// Start editing here, save and see your changes.
export default function App() {
  return (
    <div>
      <center>
        <h1>Alert</h1>
      <AlertExample/>
        <h1>Progress</h1>
      <ProgressExample/>
        <h1>Skeleton</h1>
      <SkeletonExample/>
        <h1>Spinner</h1>
      <SpinnerExample/>
        <h1>Toast</h1>
      <ToastExample/>
      </center>
    </div>
    
  );
}
