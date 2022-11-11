import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EachGiftCard from "./EachGiftCard";

const GiftCard = () => {
  const giftCards = useLoaderData();
  console.log("cards", giftCards);

  return (
    <div>
      {giftCards.map((giftCard) => (
        <EachGiftCard key={giftCard._id} giftCard={giftCard}></EachGiftCard>
      ))}
    </div>
  );
};

export default GiftCard;
