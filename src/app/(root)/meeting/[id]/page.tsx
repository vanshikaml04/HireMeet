"use client"

import LoaderUI from "@/components/LoaderUI";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useState } from "react";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";
import useGetCallById from "@/hooks/useGetCallById";


function MeetingPage(){
  const { id } = useParams();
  const {isLoaded} = useUser();
  const [isSetupComplete,setIsSetupComplete] = useState(false);
  const {call,isCallLoading} = useGetCallById(id);

  if(!isLoaded || isCallLoading) return <LoaderUI/>

  if(!call){
    return(
      <div className="h-screen flex items-center justify-center">
        <p className="text-2xl font-semibold">Meeting Not Found</p>
      </div>
    );
  }

    return(
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup onSetupComplete={()=>setIsSetupComplete(true)} />
          ) : (
            <MeetingRoom/>
          )}
        </StreamTheme>
      </StreamCall>
    )
}

export default MeetingPage;