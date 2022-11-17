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
import Profile from "../components/Profile/Profile";
import Special from "../components/Special/Special";
import RaffleDraw from "../components/Special/RaffleDraw/RaffleDraw";
import TShirtAdopt from "../components/Special/TShirtAdopt/TShirtAdopt";
import GiftCard from "../components/Special/GiftCard/GiftCard";
import PrivetRoutes from "./PrivetRoutes";
import RickshawMainPage from "../components/RickshawMainPage/RickshawMainPage";
import RaffleMainPage from "../components/RaffleMainPage/RaffleMainPage";
import HomeMainBelow from "../components/Home/HomeMainBelow";
import HomeMainUp from "../components/Home/HomeMainUp";
import Contact from "../components/Home/HomeMain/Contact";
import Gallary from "../components/Home/HomeMain/Gallary";
import ManageAdv from "../components/AdminManager/ManageAdv";
import ManageRaffle from "../components/AdminManager/ManageRaffle";
import RaffleResult from "../components/Special/RaffleDraw/RaffleResult";
import Sponsorship from "../components/Sponsorship/Sponsorship";

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
        path: "/about",
        element: <HomeMainUp />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/populer-work",
        element: <PopulerWork />,
      },
      {
        path: "/gallery",
        element: <Gallary />,
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
        path: "/giftCard/:id",
        loader: async ({ params }) =>
          fetch(`https://need-aid.vercel.app/giftcard/${params.id}`),
        element: <GiftCard />,
      },
      {
        path: "/manageraffle",
        element: (
          <PrivetRoutes>
            <ManageRaffle />
          </PrivetRoutes>
        ),
      },
      {
        path: "/manageadvertisement",
        element: (
          <PrivetRoutes>
            <ManageAdv />
          </PrivetRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoutes>
            <Profile />
          </PrivetRoutes>
        ),
      },
      {
        path: "/rickshaw",
        element: <RickshawMainPage />,
      },
      {
        path: "/raffle",
        element: (
          <PrivetRoutes>
            <RaffleMainPage />
          </PrivetRoutes>
        ),
      },
      {
        path: "/special/raffleresult",
        element: <RaffleResult />,
      },
      {
        path: "/sponsership",
        element: <Sponsorship />,
      },
      {
        path: "/viewour",
        element: <ViewOur />,
        children: [
          {
            path: "/viewour/top-donor",
            loader: async () =>
              fetch("https://need-aid.vercel.app/topdonorlist"),
            element: (
              <PrivetRoutes>
                <TopDonor />
              </PrivetRoutes>
            ),
          },
          {
            path: "/viewour/total-fund",
            element: <TotalFund />,
          },
        ],
      },
      {
        path: "/special",
        element: <Special />,
        children: [
          {
            path: "/special/raffle",
            element: (
              <PrivetRoutes>
                <RaffleDraw />
              </PrivetRoutes>
            ),
          },
          {
            path: "/special/tshirtadopt",
            element: <TShirtAdopt />,
          },
          {
            path: "/special/giftcard/:id",
            loader: async ({ params }) =>
              fetch(`https://need-aid.vercel.app/giftcards/${params.id}`),
            element: (
              <PrivetRoutes>
                <GiftCard />
              </PrivetRoutes>
            ),
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
