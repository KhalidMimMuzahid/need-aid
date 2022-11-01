import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import FireVictims from "../components/Donation/FireVictims/FireVictims";
import FloodRelief from "../components/Donation/FloodRelief/FloodRelief";
import BuildAMasjid from "../components/Donation/BuildAMasjid/BuildAMasjid";
import BuildAWaterWell from "../components/Donation/BuildAWaterWell/BuildAWaterWell";
import RamadanIfter from "../components/Donation/RamadanIfter/RamadanIfter";
import GiveZakat from "../components/Donation/GiveZakat/GiveZakat";
import Orphans from "../components/Donation/Orphans/Orphans";
import OldAgeHome from "../components/Donation/OldAgeHome/OldAgeHome";
import EyeSight from "../components/Donation/EyeSight/EyeSight";
import Disability from "../components/Donation/Disability/Disability";
import Education from "../components/Donation/Education/Education";
import TreePlantation from "../components/Donation/TreePlantation/TreePlantation";
import WinterAppearl from "../components/Donation/WinterAppearl/WinterAppearl";
import RickshawForOneThousand from "../components/Donation/RickshawForOneThousand/RickshawForOneThousand";
import Main from "../layout/Main";
import Fund from "../components/Donation/Fund/Fund";
import ViewOur from "../components/ViewOur/ViewOur";
import PopulerWork from "../components/ViewOur/PopulerWork/PopulerWork";
import TopDonor from "../components/ViewOur/TopDonor/TopDonor";
import TotalFund from "../components/ViewOur//TotalFund/TotalFund";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/viewour",
        element: <ViewOur />,
        children: [
          {
            path: "/viewour/populer-work",
            element: <PopulerWork />,
          },
          {
            path: "/viewour/top-donor",
            element: <TopDonor />,
          },
          {
            path: "/viewour/total-fund",
            element: <TotalFund />,
          },
        ],
      },
      {
        path: "/fund",
        element: <Fund />,
        children: [
          {
            path: "/fund/firevictims",
            element: <FireVictims></FireVictims>,
          },
          {
            path: "/fund/flood",
            element: <FloodRelief />,
          },
          {
            path: "/fund/mosjid",
            element: <BuildAMasjid />,
          },
          {
            path: "/fund/water-well",
            element: <BuildAWaterWell />,
          },
          {
            path: "/fund/iftar",
            element: <RamadanIfter />,
          },
          {
            path: "/fund/zakat",
            element: <GiveZakat />,
          },
          {
            path: "/fund/orphan",
            element: <Orphans />,
          },
          {
            path: "/fund/oldage-home",
            element: <OldAgeHome />,
          },
          {
            path: "/fund/eyesight",
            element: <EyeSight />,
          },
          {
            path: "/fund/disablity",
            element: <Disability />,
          },
          {
            path: "/fund/education",
            element: <Education />,
          },
          {
            path: "/fund/tree-plant",
            element: <TreePlantation />,
          },
          {
            path: "/fund/winter",
            element: <WinterAppearl />,
          },
          {
            path: "/fund/rickshaw",
            element: <RickshawForOneThousand />,
          },
        ],
      },
    ],
  },
]);
