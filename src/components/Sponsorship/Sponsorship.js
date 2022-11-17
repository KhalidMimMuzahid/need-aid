import React from "react";
import { toast } from "react-toastify";

const Sponsorship = () => {
  const handleSponsorship = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const firstBanner = form.firstBanner.value;
    const secondBanner = form.secondBanner.value;
    const sponsorship = { phone, firstBanner, secondBanner };
    fetch("https://need-aid.vercel.app/setsponsorship", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sponsorship),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("sponsorship sent succesfully");
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleSponsorship}>
        <label htmlFor="">your phone</label>
        <input
          name="phone"
          type="text"
          placeholder="your phone"
          className="w-full d-block"
          required
        />
        <label htmlFor="">product Link</label>
        <input
          name="firstBanner"
          type="text"
          placeholder="peaste you first product photo link here"
          className="w-full d-block"
          required
        />
        <label htmlFor="">product Link</label>
        <input
          name="secondBanner"
          type="text"
          placeholder="peaste you second product photo link here"
          className="w-full d-block"
          required
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Sponsorship;
