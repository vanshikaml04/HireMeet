"use client";
import ActionCard from "@/components/ActionCard";
import { QUICK_ACTIONS } from "@/constants";
import { useUserRole } from "@/hooks/useUserRole"
import { useQuery } from "convex/react";
import { useState } from "react";
import {api} from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";
import LoaderUI from "@/components/LoaderUI";

export default function Home(){

  const {isCandidate,isInterviewer,isLoading } = useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);
  const router = useRouter();
  const [showModal,setShowModal] = useState(false);
  const [modalType,setModalType] = useState<"start" | "join">();

  const handleQuickAction = (title:string)=>{
    switch(title){
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  }

  if(isLoading){
      return <LoaderUI />
    }




    return(
      <div className="container max-w-7xl mx-auto p-6">
        {/** Welcome section */}

        <div className="rounded-lg bg-card p-6 border shadow-sm md-10">
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-orange-500 to-rose-400 bg-clip-text text-transparent">
          Welcome Back!!
        </h1>
        <p className="text-muted-foreground mt-2">
          {isInterviewer 
          ? "Manage your interviews and candidates effectively" 
          : "Access your upcoming interviews and preparations"}

        </p>
        </div>

        {isInterviewer?(
          <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_ACTIONS.map((action)=>(
              <ActionCard 
                key={action.title}
                action={action}
                onClick = {()=>handleQuickAction(action.title)}

              />
            ))}
          </div>
            <MeetingModal
              isOpen = {showModal}
              onClose = {()=>setShowModal(false)}
              title = {modalType === "join" ? "Join Interview" : "Start New Call"}
              isJoinMeeting = {modalType === "join"}
            />

          </>
        ):(
          <>
          <div>
            candidiate view goes here
          </div>
          </>
        )
        }
      </div>
    )
}