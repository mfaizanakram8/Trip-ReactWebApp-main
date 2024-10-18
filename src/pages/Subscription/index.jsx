import React, { useState } from "react";
import LogoBack from "../../Components/LogoBack";
import { useNavigate } from "react-router-dom";
import "./subscription.css";
import Button from '../../Components/Button';
import PopUp from '../../Components/PopUp';

function SubscriptionPage() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [showPopUp, setShowPopUp] = useState(false); 

  const handleBack = () => {
    navigate(-1);
  };

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const handleBillingToggle = () => {
    setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly");
  };

  const handleContinue = () => {
    setShowPopUp(true); 
  };

  const handleClosePopUp = () => {
    setShowPopUp(false); 
  };

  return (
    <div className="accommodation-page">
      <div>
        <div className="main-cont">
          <LogoBack onClick={handleBack} />
          <div className="step-text1">Skip for now</div>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="title-text1">Choose Your Subscription Plan</h1>
          <p className="find-deals-text1">
            Lorem ipsum dolor sit amet, consectetuer adipiscing{" "}
          </p>
        </div>

        <div className="toggle-billing">
          <div className="billing-toggle" onClick={handleBillingToggle}>
            <div
              className="billing-switch"
              style={{
                left: billingPeriod === "yearly" ? "50%" : "0%",
              }}
            ></div>
            <div className="billing-text">
              <span className={billingPeriod === "monthly" ? "active" : ""}>
                Monthly
              </span>
              <span className={billingPeriod === "yearly" ? "active" : ""}>
                Yearly (-20%)
              </span>
            </div>
          </div>
        </div>

        <div className="m2-s">
          {/* Plans ko select karna */}
          <div
            className="div-3"
            style={{
              backgroundColor: selectedPlan === "free" ? "#EFE8FE" : "#fff",
            }}
            onClick={() => handlePlanClick("free")}
          >
            <img
              src="/abc-2.png"
              alt="crown"
              className="hello"
              width={60}
              height={60}
              style={{
                backgroundColor: selectedPlan === "free" ? "#EFE8FE" : "#fff",
              }}
            />
            <h1
              className="title-text2"
              style={{
                backgroundColor: selectedPlan === "free" ? "#EFE8FE" : "#fff",
              }}
            >
              Free
            </h1>
            <h2
              className="title-text3"
              style={{
                backgroundColor: selectedPlan === "free" ? "#EFE8FE" : "#fff",
              }}
            >
              $0/ mo
            </h2>
            <p
              className="paragraph"
              style={{
                backgroundColor: selectedPlan === "free" ? "#EFE8FE" : "#fff",
              }}
            >
              Lorem ipsum dolor sit amet,{" "}
              <span
                className="blo"
                style={{
                  backgroundColor: selectedPlan === "free" ? "#EFE8FE" : "#fff",
                }}
              >
                consectetuer adipiscing
              </span>
            </p>
          </div>

          <div
            className="div-3"
            style={{
              backgroundColor: selectedPlan === "premium" ? "#EFE8FE" : "#fff",
            }}
            onClick={() => handlePlanClick("premium")}
          >
            <img
              src="/abc-1.png"
              alt="crown"
              className="hello"
              width={60}
              height={60}
              style={{
                backgroundColor:
                  selectedPlan === "premium" ? "#EFE8FE" : "#fff",
              }}
            />
            <h1
              className="title-text2"
              style={{
                backgroundColor:
                  selectedPlan === "premium" ? "#EFE8FE" : "#fff",
              }}
            >
              Premium
            </h1>
            <h2
              className="title-text3"
              style={{
                backgroundColor:
                  selectedPlan === "premium" ? "#EFE8FE" : "#fff",
              }}
            >
              $400/ mo
            </h2>
            <p
              className="paragraph"
              style={{
                backgroundColor:
                  selectedPlan === "premium" ? "#EFE8FE" : "#fff",
              }}
            >
              Lorem ipsum dolor sit amet,{" "}
              <span
                className="blo"
                style={{
                  backgroundColor:
                    selectedPlan === "premium" ? "#EFE8FE" : "#fff",
                }}
              >
                consectetuer adipiscing
              </span>
            </p>
          </div>

          <div
            className="div-3"
            style={{
              backgroundColor: selectedPlan === "elite" ? "#EFE8FE" : "#fff",
            }}
            onClick={() => handlePlanClick("elite")}
          >
            <img
              src="/crown.png"
              alt="crown"
              className="hello"
              width={60}
              height={60}
              style={{
                backgroundColor: selectedPlan === "elite" ? "#EFE8FE" : "#fff",
              }}
            />
            <h1
              className="title-text2"
              style={{
                backgroundColor: selectedPlan === "elite" ? "#EFE8FE" : "#fff",
              }}
            >
              Elite
            </h1>
            <h2
              className="title-text3"
              style={{
                backgroundColor: selectedPlan === "elite" ? "#EFE8FE" : "#fff",
              }}
            >
              $700/ mo
            </h2>
            <p
              className="paragraph"
              style={{
                backgroundColor: selectedPlan === "elite" ? "#EFE8FE" : "#fff",
              }}
            >
              Lorem ipsum dolor sit amet,{" "}
              <span
                className="blo"
                style={{
                  backgroundColor:
                    selectedPlan === "elite" ? "#EFE8FE" : "#fff",
                }}
              >
                consectetuer adipiscing
              </span>
            </p>
          </div>
        </div>

      
        <div className="pricing-table">
          <div className="table-header">
            <div></div>
            <h2>Free</h2>
            <h2>Premium</h2>
            <h2>Elite</h2>
          </div>
          <div className="table-row">
            <p className="lorem">Lorem Ipsum</p>
            <div className="tick">&#10003;</div>
            <div className="tick">&#10003;</div> 
            <div className="tick">&#10003;</div> 
          </div>
          <div className="table-row">
            <p className="lorem">Lorem Ipsum</p>
            <div className="empty"></div> 
            <div className="tick">&#10003;</div> 
            <div className="tick">&#10003;</div> 
          </div>
          <div className="table-row">
            <p className="lorem">Lorem Ipsum</p>
            <div className="empty"></div> 
            <div className="empty"></div> 
            <div className="tick">&#10003;</div> 
          </div>
        </div>
      </div>

      <div>
        {selectedPlan && ( 
          <Button onClick={handleContinue} className="continue-button1">
            Continue
          </Button>
        )}
      </div>

     
      {showPopUp && <PopUp onClose={handleClosePopUp} />} 
    </div>
  );
}

export default SubscriptionPage;
