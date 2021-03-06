import { WorkoutLog } from "./data/firebase";
import React, { useState } from "react";

function AddWorkout() {


    
      const [isSaving, setIsSaving] = useState(false);
      const [formMessage, setFormMessage] = useState("");
    
      const onMoveSumbit = async (dateAdded, focus, moves, reps, timing, notes) => {
        //alert(`You want to add: ${title}, ${rating}, ${releaseYear}.`);
    
        setIsSaving(true);
        setFormMessage("");
    
        try {
          await workoutLog.add({
            dateAdded,
            focus,
            moves,
            reps,
            timing,
            notes
          });
          setFormMessage("Saved Successfully!");
          console.log("Saved");
        } catch (error) {
          setFormMessage("Something went wrong. Please try again!");
          console.error(error);
        }
    
        setIsSaving(false);
      };
    
      return (
        <div className="add-container">
          <h1>Add Movie</h1>
          <WorkoutLog onSubmit={onMoveSumbit} isSaving={isSaving} message={formMessage} />
        </div>
      );
    }

export default AddWorkout;