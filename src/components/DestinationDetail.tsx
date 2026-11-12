"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { categoryName } from "@/lib/categories";
import type { Destination } from "@/lib/types";

export default function DestinationDetail({ destination }: { destination: Destination }) {
  const { language, t } = useLanguage();
  const copy = t.place;
  const money = new Intl.NumberFormat(language === "hi" ? "hi-IN" : "en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });
  const missing: ReactNode = <span className="text-stone-500">{copy.notYetConfirmed}</span>;
  const budget = destination.estimatedBudgetPerPersonInr;
  const mapsUrl =
    destination.latitude !== null && destination.longitude !== null
      ? `https://www.google.com/maps/search/?api=1&query=${destination.latitude},${destination.longitude}`
      : null;

  const facts: { label: string; value: ReactNode }[] = [
    { label: copy.labels.district, value: destination.district },
    { label: copy.labels.state, value: destination.state },
    { label: copy.labels.village, value: destination.village ?? missing },
    { label: copy.labels.bestTime, value: destination.bestTimeToVisit ?? missing },
    { label: copy.labels.roadAccess, value: destination.roadAccess ?? missing },
    { label: copy.labels.railway, value: destination.nearestRailwayStation ?? missing },
    { label: copy.labels.airport, value: destination.nearestAirport ?? missing },
    { label: copy.labels.connectivity, value: destination.networkConnectivity ?? missing },
    {
      label: copy.labels.difficultyLabel,
      value: destination.travelDifficulty ? copy.difficulty[destination.travelDifficulty] : missing,
    },
    {
      label: copy.labels.budget,
      value: budget
        ? `${money.format(budget.min)} – ${money.format(budget.max)} ${copy.perPerson}`
        : missing,
    },
  ];

  const details: { title: string; body: ReactNode }[] = [
    {
      title: copy.labels.distances,
      body:
        destination.distancesFromCities.length > 0 ? (
          <ul className="space-y-1">
            {destination.distancesFromCities.map((item) => (
              <li key={item.city}>
                {item.city}: {item.kilometres} km
              </li>
            ))}
          </ul>
        ) : (
          missing
        ),
    },
    {
      title: copy.labels.attractions,
      body:
        destination.nearbyAttractions.length > 0 ? (
          <ul className="space-y-1">
            {destination.nearbyAttractions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          missing
        ),
    },
    { title: copy.labels.trekking, body: destination.trekkingOpportunities ?? missing },
    { title: copy.labels.culture, body: destination.localCulture ?? missing },
    { title: copy.labels.food, body: destination.foodExperiences ?? missing },
    {
      title: copy.labels.facilities,
      body:
        destination.facilities.length > 0 ? (
          <ul className="space-y-1">
            {destination.facilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          missing
        ),
    },
  ];

  return (
    <article className="space-y-10">
      <div>
        <Link
          href="/destinations"
          className="text-sm font-medium text-forest-700 underline-offset-4 hover:underline"
        >
          {copy.backToList}
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-copper-600">
          {destination.district}, {destination.state}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-forest-900 md:text-4xl">
          {destination.name}
        </h1>
        {destination.categories.length > 0 ? (
          <ul aria-label={copy.labels.categories} className="mt-4 flex flex-wrap gap-2">
            {destination.categories.map((slug) => (
              <li
                key={slug}
                className="rounded-full bg-forest-50 px-3 py-1 text-xs font-medium text-forest-800"
              >
                {categoryName(slug, language)}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-5">
          {mapsUrl ? (
            <a
              href={mapsUrl}
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-forest-700 px-4 py-2 text-sm font-semibold text-forest-900 transition-colors hover:bg-forest-50"
            >
              {copy.openMap}
            </a>
          ) : (
            <p className="text-sm text-stone-500">{copy.locationNotConfirmed}</p>
          )}
        </div>
      </div>

      {destination.description ? (
        <section className="max-w-3xl">
          <h2 className="text-xl font-semibold text-forest-900">{copy.about}</h2>
          <p className="mt-3 leading-relaxed text-stone-700">{destination.description}</p>
        </section>
      ) : null}

      <section>
        <h2 className="text-xl font-semibold text-forest-900">{copy.practical}</h2>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-ivory-200 bg-white p-4">
              <dt className="text-sm font-medium text-stone-500">{fact.label}</dt>
              <dd className="mt-1 text-forest-900">{fact.value}</dd>
            </div>
          ))}
        </dl>
        {budget ? <p className="mt-3 text-sm text-stone-600">{copy.estimateNote}</p> : null}
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        {details.map((detail) => (
          <section key={detail.title}>
            <h2 className="text-xl font-semibold text-forest-900">{detail.title}</h2>
            <div className="mt-3 leading-relaxed text-stone-700">{detail.body}</div>
          </section>
        ))}
      </div>
    </article>
  );
}
