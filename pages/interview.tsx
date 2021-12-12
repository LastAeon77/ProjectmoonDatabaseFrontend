import React, { useState, useEffect } from "react";
import axios from "axios";
import { interview_lite } from "../components/types";
import { List } from "@mui/material";

function Interview() {
  const [interviews, setinterviews] = useState<Array<interview_lite>>();
  useEffect(() => {
    axios
      .get(`api/interview`)
      .then((res) =>
        setinterviews(
          res.data.sort((a: interview_lite, b: interview_lite) =>
            a.date < b.date ? 1 : b.date < a.date ? -1 : 0
          ) as Array<interview_lite>
        )
      )
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="bg-lor bg-fixed overflow-auto bg-contain h-screen items-center">
      <div className="flex flex-row items-center justify-center w-5/6">
        <List>
          <div className="flex flex-row">
            <div>ID</div>
            <div>Name</div>
            <div>Last Modified</div>
            <div>Date</div>
          </div>
          {interviews?.map((object, i) => (
            <div className="flex flex-row">
              <div>{object.id}</div>
              <div>{object.name}</div>
              <div>{object.last_modified}</div>
              <div>{object.date}</div>
            </div>
          ))}
        </List>
      </div>
    </div>
  );
}

export default Interview;
