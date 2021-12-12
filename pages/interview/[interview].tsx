import React, { useState, useEffect } from "react";
import axios from "axios";
import { interview } from "../../components/types";
import parse from "html-react-parser";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
const Interview = () => {
  const router = useRouter();
  const [interview, setinterview] = useState<interview>();
  useEffect(() => {
    const pid = router.query.interview as string;
    axios
      .get(`api/interview/${pid}`)
      .then((res) => setinterview(res.data as interview))
      .catch((error) => console.log(error));
  }, []);
  if (interview) {
    return (
      <div className="bg-lor bg-fixed overflow-auto bg-contain h-screen items-center">
        <div className="flex flex-row items-center justify-center w-5/6">
          <Box
            sx={{
              height: "screen",
              backgroundColor: "black",
            }}
          >
            <div className="flex flex-col text-white justify-center items-center bg-gray-400">
              <div>{interview?.name}</div>
              <div>{parse(interview?.body)}</div>
            </div>
          </Box>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-lor bg-fixed overflow-auto bg-contain h-screen items-center"></div>
    );
  }
};

export default Interview;
