import "animate.css/animate.min.css";

const EnrollSection = () => {
  return (
    <div className="enroll-section bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-8 text-center animate__animated animate__fadeInUp">
            Enroll Now
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center animate__animated animate__fadeInUp animate__delay-1s">
            Join our sports academy and unlock your potential!
          </p>
          <button className="btn btn-primary py-3 px-6 rounded-full text-white font-bold text-xl animate__animated animate__fadeInUp animate__delay-2s">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrollSection;
