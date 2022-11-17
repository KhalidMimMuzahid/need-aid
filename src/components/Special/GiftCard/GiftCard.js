import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EachGiftCard from "./EachGiftCard";

const GiftCard = () => {
  const giftCards = useLoaderData();
  console.log("cards", giftCards);

  return (
    <div>
      {giftCards.length ? (
        giftCards.map((giftCard) => (
          <EachGiftCard key={giftCard._id} giftCard={giftCard}></EachGiftCard>
        ))
      ) : (
        <p className="fs-1  m-5 p-5 text-center">you have no gift card</p>
      )}
    </div>
  );
};

export default GiftCard;

// {giftCards.map((giftCard) => (
//   <EachGiftCard key={giftCard._id} giftCard={giftCard}></EachGiftCard>
// ))}
