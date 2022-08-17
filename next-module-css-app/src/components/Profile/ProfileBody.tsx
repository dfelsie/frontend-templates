import React, { useEffect, useState } from "react";
import localStyles from "./Profile.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import FancyCard from "../../widgets/FancyCard/FancyCard";
import FancyOverviewCard from "../../widgets/FancyCard/FancyOverviewCard";
type Props = {
  userEmail?: string;
};
export default function ProfileBody({}: Props) {
  return (
    <div>
      <FancyCard />
      <div
        style={{
          height: "100px",
        }}
      ></div>
      <FancyOverviewCard />
    </div>
  );
}
