import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  MessageCircle,
  Users,
} from "lucide-react";

import { SERVICE_CATEGORIES } from "@/lib/data";
import { SERVICE_LISTINGS } from "@/lib/listings";
import ListingEnquiryButton from "@/components/ListingEnquiryButton";
import ListingCardMedia from "@/components/ListingCardMedia";

export const instant = false;

export default async function ServiceListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = SERVICE_CATEGORIES.find(
    (item) =>
      item.id === slug ||
      (slug === "heritage-sightseeing" && item.id === "churches-chapels")
  );

  if (!category) notFound();

  const targetServiceId = category.id;
  const listings = SERVICE_LISTINGS.filter(
    (item) => item.serviceId === targetServiceId
  );

  return (
    <main className="min-h-screen bg-[#F8F7F2] text-forest-green">
      {/* HERO */}
      <section className="relative overflow-hidden bg-forest-green">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-adventure-orange/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-adventure-orange hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mt-10 max-w-3xl sm:mt-14">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-adventure-orange/40 bg-adventure-orange/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFAB70]">
              <MapPin className="h-3.5 w-3.5" />
              Discover Goa
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {category.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {category.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <p className="text-2xl font-extrabold text-white">
                  {listings.length}
                </p>
                <p className="mt-1 text-xs text-white/65">
                  Available experiences
                </p>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <p className="text-sm font-bold text-white">
                  Your next adventure
                </p>
                <p className="mt-1 text-xs text-white/65">
                  Explore experiences in Goa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-adventure-orange">
              Find Your Experience
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Explore Our Experiences
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-charcoal/65 sm:text-base">
              Find the experience that suits your trip and contact our team
              for booking enquiries.
            </p>
          </div>

          <span className="w-fit rounded-full border border-sand bg-white px-4 py-2 text-sm font-semibold text-forest-green">
            {listings.length}{" "}
            {listings.length === 1 ? "experience" : "experiences"}
          </span>
        </div>

        {listings.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
            {listings.map((listing) => (
              <article
                key={listing.id}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-sand bg-white shadow-[0_5px_25px_rgba(23,59,43,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#D7C8B6] hover:shadow-[0_18px_40px_rgba(23,59,43,0.12)]"
              >
                {/* IMAGE / CAROUSEL */}
                <ListingCardMedia
                  title={listing.title}
                  image={listing.image}
                  images={listing.images}
                  location={listing.location}
                />

                {/* DETAILS */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-extrabold leading-snug tracking-tight text-forest-green transition-colors group-hover:text-[#D95B0B]">
                    {listing.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-charcoal/70">
                    {listing.description}
                  </p>

                  {/* PRICE */}
                  <div className="mt-5 rounded-xl border border-sand bg-[#F8F7F2] p-4">
                    {listing.price !== undefined ? (
                      <>
                        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-charcoal/55">
                          Starting price
                        </p>

                        <div className="mt-1 flex flex-wrap items-baseline gap-1.5">
                          <span className="text-3xl font-black tracking-tight text-forest-green">
                            ₹{listing.price.toLocaleString("en-IN")}
                          </span>

                          {listing.priceUnit && (
                            <span className="text-sm font-medium text-charcoal/60">
                              / {listing.priceUnit === "per person" ? "person" : "group"}
                            </span>
                          )}
                        </div>
                      </>
                    ) : (
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-adventure-orange">
                          Package Enquiry
                        </p>
                        <p className="mt-1 text-2xl font-black text-forest-green">
                          Price on Request
                        </p>
                      </div>
                    )}

                    {/* Pricing Tiers / Options if available */}
                    {listing.pricingOptions && listing.pricingOptions.length > 0 && (
                      <div className="mt-3 flex flex-col gap-2 border-t border-sand pt-2.5">
                        {listing.pricingOptions.map((opt, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-1.5 text-xs font-semibold text-forest-green border border-sand/80"
                          >
                            <span className="text-charcoal/80 font-medium">
                              {opt.label}
                              {opt.unit ? ` (${opt.unit})` : ""}
                            </span>
                            <span className="font-extrabold text-adventure-orange">
                              ₹{opt.price.toLocaleString("en-IN")}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-3 flex items-start gap-2 border-t border-sand pt-3">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-adventure-orange" />
                      <div>
                        <p className="text-sm font-semibold text-forest-green">
                          {listing.groupLabel}
                        </p>

                        {listing.additionalMemberPrice !== undefined && (
                          <p className="mt-1 text-xs leading-5 text-charcoal/65">
                            Additional member: ₹
                            {listing.additionalMemberPrice.toLocaleString("en-IN")}{" "}
                            per person
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* ENQUIRY */}
                  <ListingEnquiryButton
                    title={listing.title}
                    className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-adventure-orange px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-forest-green focus:outline-none focus:ring-2 focus:ring-adventure-orange focus:ring-offset-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {category.tag === "Trek" ? "Enquire About This Trek" : "Book / Enquire Now"}
                    <ArrowRight className="h-4 w-4" />
                  </ListingEnquiryButton>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-sand bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-green/5">
              <MapPin className="h-6 w-6 text-adventure-orange" />
            </div>

            <h3 className="mt-5 text-2xl font-extrabold">
              Details Coming Soon
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-charcoal/65">
              We are preparing the experiences for this category. Contact
              our team for further information.
            </p>

            <ListingEnquiryButton
              title={category.title}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-adventure-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-forest-green"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire About This Service
            </ListingEnquiryButton>
          </div>
        )}
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 pb-14 sm:px-8 sm:pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-forest-green px-6 py-10 text-center sm:px-12 sm:py-14">
          <div className="absolute -right-12 -top-20 h-56 w-56 rounded-full bg-adventure-orange/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFAB70]">
              Let’s Plan Your Trip
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-black text-white sm:text-4xl">
              Need Help Choosing Your Adventure?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Contact our team for information about this experience and
              help planning your Goa trip.
            </p>

            <ListingEnquiryButton
              title={category.title}
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-adventure-orange px-7 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-forest-green"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire Now
              <ArrowRight className="h-4 w-4" />
            </ListingEnquiryButton>
          </div>
        </div>
      </section>
    </main>
  );
}