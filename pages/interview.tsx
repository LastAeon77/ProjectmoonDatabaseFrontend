import React, { useState, useEffect } from "react";
import axios from "axios";
import { interview_lite } from "../components/types";
import { List } from "@mui/material";
import Link from "next/link";

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
    <div className="bg-void bg-cover overflow-auto h-screen items-center">
      <div className="flex flex-col items-center justify-center w-5/6">
        <List
          sx={{ width: "100%", maxWidth: 1800, bgcolor: "#272B30" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <div className="flex flex-row w-full justify-center items-center bg-gray-400">
            <div className="w-2/12">ID</div>
            <div className="w-4/12">Name</div>
            <div className="w-3/12">Last Modified</div>
            <div className="w-3/12">Date</div>
          </div>
          {interviews?.map((object, i) => (
            <Link passHref href={`abno/${object.id}`}>
              <div
                className="flex flex-row w-full justify-center items-center bg-gray-400"
                key={i}
              >
                <div className="w-2/12">{object.id}</div>
                <div className="w-4/12">{object.name}</div>
                <div className="w-3/12">{object.last_modified}</div>
                <div className="w-3/12">{object.date}</div>
              </div>
            </Link>
          ))}
        </List>
      </div>
    </div>
  );
}

export default Interview;
