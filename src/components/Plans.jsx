import React from "react";
import { websitePackages } from "../data/services.js";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Plans() {
  return (
    <>
      <section className="pricing section" id="pricing">
        <span className="section__subtitle" data-aos="fade-up">Pricing</span>
        <h2 className="section__title" data-aos="fade-up">Choose Your Plan</h2>

        <p className="plan_type section__title" data-aos="fade-up">One Time Plans</p>
        <div className="pricing__container container" >
          <div className="pricing__cards" data-aos="zoom-in">
            {websitePackages.oneTime.map((plan) => (
              <div className="pricing__card">
                <h3 className="pricing__title">{plan.name}</h3>
                <p className="pricing__price">{plan.price}</p>
                <ul className="pricing__list">
                  {plan.whatYouGet.map((item) => (
                    <li className="tick">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919382426273?text=Hi%20Hamim%2C%20I%20want%20The%20Starter%20plan."
                  target="_blank"
                  className="button pricing__button"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
        <p className="plan_type Subscription  section__title" data-aos="fade-up">Subscription Based Plans</p>
        <div className="pricing__container container" data-aos="zoom-in">
          <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
            {websitePackages.subscription.map((plan, index) => (
              <div className="pricing__card">
                <h3 className="pricing__title">{plan.name}</h3>
                <span className="oneTIME">One Time:</span>
                <p className="pricing__price">{plan.firstMonthPrice}</p>
                <span className="oneTIME">After that:</span>
                <p className="monthly__rice">{plan.monthlyPrice}</p>
                <ul className="pricing__list">
                  {plan.whatYouGet.map((item) => (
                    <li className="tick"><CheckCircleIcon className="w-5 h-5 text-green-500" />{item}</li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919382426273?text=Hi%20Hamim%2C%20I%20want%20The%20Starter%20plan."
                  target="_blank"
                  className="button pricing__button"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
