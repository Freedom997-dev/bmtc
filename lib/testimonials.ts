export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Cleanest lot I've found on the East Coast and the parking is wide enough you can actually swing in without a fight. I plan my runs to stop here.",
    name: "Mike",
    context: "OTR driver, I-81",
  },
  {
    quote:
      "Pulled in at 2 a.m., the diesel lane was open, the coffee was hot, and the lot was lit up. Exactly what you want on a long night.",
    name: "Carla",
    context: "Team driver, Midwest to East",
  },
  {
    quote:
      "We stop here every trip with the RV. Easy on, easy off, friendly staff, and the kids love the store. Best travel center on the route.",
    name: "The Patel family",
    context: "RV travelers, PA",
  },
];
