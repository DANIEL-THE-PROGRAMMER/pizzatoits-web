/* eslint-disable react/no-unescaped-entities */
"use client";
import { Video } from "../components/video";
import { Team } from "../components/view/about/team";

export default function About() {
  return (
    <div className="">
      <section>
        <Video name="/assets/full.webm" />
      </section>
      <div className="font-neue   text-[52px] text-textb w-[94vw] mx-auto mgbtm">
        <small className="text-accent text-base mr-[80px]">WELCOME</small>{" "}
        <span>
          Let's hold on to to be, For you, a cornerstone For All that is That
          regard the plant engineering, the bathroom furniture, The comfort
          environment And The treatment of water. We are a team Of experts And
          Everything is fine day, through there advice, there training or The
          Work on the field, we find that That more Yes suitable at yours needs
        </span>
      </div>
      <Team />
    </div>
  );
}
