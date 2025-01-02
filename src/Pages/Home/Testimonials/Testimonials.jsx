import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    rating: 4,
    text: "Various version have evolved over the years...",
    name: "JANE DOE",
  },
  {
    id: 2,
    rating: 5,
    text: "It is a long established fact that a reader...",
    name: "JOHN SMITH",
  },
  {
    id: 3,
    rating: 3,
    text: "Lorem ipsum dolor sit amet, consectetur...",
    name: "ALICE JOHNSON",
  },
  {
    id: 4,
    rating: 4,
    text: "Sed ut perspiciatis unde omnis iste natus...",
    name: "ROBERT BROWN",
  },
  {
    id: 5,
    rating: 5,
    text: "At vero eos et accusamus et iusto odio...",
    name: "MARY WILLIAMS",
  },
  {
    id: 6,
    rating: 4,
    text: "Similique sunt in culpa qui officia...",
    name: "DAVID MILLER",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-yellow-500 text-sm sm:text-md mt-4 sm:mt-6">
          ---What Our Clients Say---
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-2">
          TESTIMONIALS
        </h2>
        <div className="relative flex items-center justify-center overflow-hidden">
          <button
            onClick={handlePrev}
            className="absolute left-0 bg-transparent border-none text-2xl cursor-pointer text-gray-700 hover:text-gray-900"
          >
            &lt;
          </button>
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full p-20">
                  <div className="bg-white p-20 rounded-2xl shadow-lg">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((star, index) => (
                        <svg
                          key={index}
                          className="w-6 h-6 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927C9.335 2.005 10.665 2.005 10.951 2.927l1.014 3.106a1 1 0 00.95.69h3.275c1.028 0 1.466 1.318.641 1.946l-2.657 1.93a1 1 0 00-.364 1.118l1.014 3.106c.286 1.027-.855 1.884-1.74 1.318l-2.657-1.93a1 1 0 00-1.175 0l-2.657 1.93c-.885.566-2.026-.291-1.74-1.318l1.014-3.106a1 1 0 00-.364-1.118L2.774 8.669c-.825-.628-.387-1.946.641-1.946h3.275a1 1 0 00.95-.69L9.049 2.927z" />
                        </svg>
                      ))}
                      {[...Array(5 - testimonial.rating)].map((star, index) => (
                        <svg
                          key={index}
                          className="w-6 h-6 text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927C9.335 2.005 10.665 2.005 10.951 2.927l1.014 3.106a1 1 0 00.95.69h3.275c1.028 0 1.466 1.318.641 1.946l-2.657 1.93a1 1 0 00-.364 1.118l1.014 3.106c.286 1.027-.855 1.884-1.74 1.318l-2.657-1.93a1 1 0 00-1.175 0l-2.657 1.93c-.885.566-2.026-.291-1.74-1.318l1.014-3.106a1 1 0 00-.364-1.118L2.774 8.669c-.825-.628-.387-1.946.641-1.946h3.275a1 1 0 00.95-.69L9.049 2.927z" />
                        </svg>
                      ))}
                    </div>
                    <p className="italic mb-4">"{testimonial.text}"</p>
                    <h5 className="font-bold text-lg">{testimonial.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 bg-transparent border-none text-2xl cursor-pointer text-gray-700 hover:text-gray-900"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
