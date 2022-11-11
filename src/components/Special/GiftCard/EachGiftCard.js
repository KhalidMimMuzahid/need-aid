import React from "react";

const EachGiftCard = ({ giftCard }) => {
  const { cardBody, fromDonorEmail, fromDonorName, fromDonorUserPhoto, _id } =
    giftCard;
  return (
    <section>
      <div className="container py-0">
        <div className="row justify-content-center mb-3">
          <div className="col-md-12 col-xl-10">
            <div className="card shadow-0 border rounded-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                      <img src={fromDonorUserPhoto} className="w-100" />
                    </div>
                  </div>
                  <div className="col-md-9 col-lg-9 col-xl-9">
                    <h6>
                      <b>sender name:</b> {fromDonorName}
                    </h6>
                    <h6>
                      <b>sender email:</b> {fromDonorEmail}
                    </h6>

                    <p className="text-truncate mb-4 mb-md-0">
                      <b>Message:</b> {cardBody}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EachGiftCard;
