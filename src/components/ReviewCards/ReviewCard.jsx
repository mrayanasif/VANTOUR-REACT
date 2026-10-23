
import React from "react";
import "./Review.css";

const reviews = [
  {
    id: 1,
    name: "Ahmed Khan",
    initials: "AK",
    product: "Classic Luxury Watch",
    rating: 5,
    date: "October 12, 2026",
    review:
      "The watch looks even better in person. The finish is clean, it feels comfortable on my wrist, and it works perfectly with both formal and casual outfits.",
  },
  {
    id: 2,
    name: "Hamza Ali",
    initials: "HA",
    product: "Signature Eau de Parfum",
    rating: 5,
    date: "October 10, 2026",
    review:
      "Really liked the fragrance. It has a sophisticated scent without being too overpowering. The bottle also looks great on my dresser. Definitely a good addition to my collection.",
  },
  {
    id: 3,
    name: "Usman Malik",
    initials: "UM",
    product: "Premium Leather Loafers",
    rating: 4,
    date: "October 8, 2026",
    review:
      "The shoes have a classy design and look great with dress trousers. They needed a little time to break in, but overall I'm happy with the style and quality.",
  },
  {
    id: 4,
    name: "Bilal Ahmed",
    initials: "BA",
    product: "Midnight Black Watch",
    rating: 5,
    date: "October 5, 2026",
    review:
      "Love the minimalist black finish. It looks premium without being too flashy, and I've already worn it several times for dinners and office meetings.",
  },
  {
    id: 5,
    name: "Saad Hassan",
    initials: "SH",
    product: "Intense Oud Fragrance",
    rating: 4,
    date: "October 2, 2026",
    review:
      "A rich fragrance with a bold character. I prefer wearing it in the evening because it feels more suited to special occasions. Nicely presented as well.",
  },
  {
    id: 6,
    name: "Zain Raza",
    initials: "ZR",
    product: "Urban White Sneakers",
    rating: 5,
    date: "September 28, 2026",
    review:
      "These sneakers are easy to style with jeans and chinos. The design is simple, the colour goes with almost everything, and they feel comfortable for everyday wear.",
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-heading">
        <span className="reviews-eyebrow">THE VANTOUR EXPERIENCE</span>

        <h2>
          What People <span>Say</span>
        </h2>

        <p>
          Discover what makes a great first impression last.
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <article
            className="review-card"
            key={review.id}
            style={{ "--review-index": index }}
          >
            <div className="review-card-top">
              <div className="review-avatar">
                {review.initials}
              </div>

              <div className="review-customer">
                <h3>{review.name}</h3>
                <span className="review-date">{review.date}</span>
              </div>

              <span className="review-quote" aria-hidden="true">
                “
              </span>
            </div>

            <div
              className="review-stars"
              aria-label={`${review.rating} out of 5 stars`}
            >
              {"★".repeat(review.rating)}
              <span className="empty-stars">
                {"★".repeat(5 - review.rating)}
              </span>
            </div>

            <p className="review-text">{review.review}</p>

            <div className="review-card-bottom">
              <span className="review-product">
                {review.product}
              </span>

              <span className="review-badge">
                Sample Review
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="reviews-footer">
        <span className="reviews-footer-line"></span>
        <p>STYLE IS PERSONAL. QUALITY SPEAKS.</p>
        <span className="reviews-footer-line"></span>
      </div>
    </section>
  );
};

export default Reviews;

