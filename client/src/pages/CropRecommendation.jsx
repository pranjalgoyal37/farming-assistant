import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sprout, ArrowLeft, Loader2, Leaf } from "lucide-react";
import toast from "react-hot-toast";

/* ---------------- UTILS (cn) ---------------- */
function cn(...classes) {
      return classes.filter(Boolean).join(" ");
}

/* ---------------- CARD COMPONENTS ---------------- */
const Card = ({ className, children }) => (
      <div className={cn("rounded-lg border shadow-sm bg-white", className)}>
            {children}
      </div>
);

const CardHeader = ({ className, children }) => (
      <div className={cn("flex flex-col space-y-1.5 p-6", className)}>
            {children}
      </div>
);

const CardTitle = ({ className, children }) => (
      <h3
            className={cn(
                  "text-xl font-semibold leading-none tracking-tight",
                  className
            )}
      >
            {children}
      </h3>
);

const CardContent = ({ className, children }) => (
      <div className={cn("p-6 pt-0", className)}>{children}</div>
);

/* ---------------- HEADER ---------------- */
const Header = () => (
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                  <h1 className="text-xl font-bold">FarmAssist</h1>
                  <nav className="flex gap-6">
                        <Link to="/dashboard" className="text-gray-700 hover:text-black">
                              Dashboard
                        </Link>
                        <Link
                              to="/crop-recommendation"
                              className="text-black font-semibold"
                        >
                              Crops
                        </Link>
                        <Link to="/weather" className="text-gray-700 hover:text-black">
                              Weather
                        </Link>
                  </nav>
            </div>
      </header>
);

const CropRecommendation = () => {
      const [formData, setFormData] = useState({
            N: "",
            P: "",
            K: "",
            temperature: "",
            humidity: "",
            ph: "",
            rainfall: "",
      });
      const [loading, setLoading] = useState(false);
      const [prediction, setPrediction] = useState(null);

      const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);
            setPrediction(null);

            try {
                  const response = await fetch("http://localhost:8000/api/crop/predict", {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                  });

                  if (!response.ok) {
                        throw new Error("Failed to get prediction");
                  }

                  const data = await response.json();
                  setPrediction(data.recommended_crop);
                  toast.success("Prediction successful!");
            } catch (error) {
                  console.error("Error:", error);
                  toast.error("Failed to get recommendation. Please try again.");
            } finally {
                  setLoading(false);
            }
      };

      return (
            <div className="min-h-screen flex flex-col bg-gray-50">
                  <Header />

                  <main className="flex-1 pt-24 pb-12">
                        <div className="container mx-auto px-4 max-w-4xl">
                              <Link
                                    to="/dashboard"
                                    className="inline-flex items-center text-gray-600 hover:text-black mb-6"
                              >
                                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                              </Link>

                              <div className="grid md:grid-cols-3 gap-8">
                                    {/* Form Section */}
                                    <div className="md:col-span-2">
                                          <Card>
                                                <CardHeader>
                                                      <CardTitle className="flex items-center gap-2">
                                                            <Sprout className="w-6 h-6 text-green-600" />
                                                            Crop Recommendation
                                                      </CardTitle>
                                                      <p className="text-sm text-gray-500">
                                                            Enter soil and weather details to get AI-powered suggestions
                                                      </p>
                                                </CardHeader>
                                                <CardContent>
                                                      <form onSubmit={handleSubmit} className="space-y-4">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                  <div className="space-y-2">
                                                                        <label className="text-sm font-medium">Nitrogen (N)</label>
                                                                        <input
                                                                              type="number"
                                                                              name="N"
                                                                              value={formData.N}
                                                                              onChange={handleChange}
                                                                              required
                                                                              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                                                              placeholder="e.g. 90"
                                                                        />
                                                                  </div>
                                                                  <div className="space-y-2">
                                                                        <label className="text-sm font-medium">Phosphorus (P)</label>
                                                                        <input
                                                                              type="number"
                                                                              name="P"
                                                                              value={formData.P}
                                                                              onChange={handleChange}
                                                                              required
                                                                              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                                                              placeholder="e.g. 42"
                                                                        />
                                                                  </div>
                                                                  <div className="space-y-2">
                                                                        <label className="text-sm font-medium">Potassium (K)</label>
                                                                        <input
                                                                              type="number"
                                                                              name="K"
                                                                              value={formData.K}
                                                                              onChange={handleChange}
                                                                              required
                                                                              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                                                              placeholder="e.g. 43"
                                                                        />
                                                                  </div>
                                                                  <div className="space-y-2">
                                                                        <label className="text-sm font-medium">Temperature (°C)</label>
                                                                        <input
                                                                              type="number"
                                                                              name="temperature"
                                                                              value={formData.temperature}
                                                                              onChange={handleChange}
                                                                              required
                                                                              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                                                              placeholder="e.g. 20.8"
                                                                        />
                                                                  </div>
                                                                  <div className="space-y-2">
                                                                        <label className="text-sm font-medium">Humidity (%)</label>
                                                                        <input
                                                                              type="number"
                                                                              name="humidity"
                                                                              value={formData.humidity}
                                                                              onChange={handleChange}
                                                                              required
                                                                              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                                                              placeholder="e.g. 82"
                                                                        />
                                                                  </div>
                                                                  <div className="space-y-2">
                                                                        <label className="text-sm font-medium">pH Level</label>
                                                                        <input
                                                                              type="number"
                                                                              name="ph"
                                                                              value={formData.ph}
                                                                              onChange={handleChange}
                                                                              required
                                                                              step="0.1"
                                                                              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                                                              placeholder="e.g. 6.5"
                                                                        />
                                                                  </div>
                                                                  <div className="space-y-2 col-span-2">
                                                                        <label className="text-sm font-medium">Rainfall (mm)</label>
                                                                        <input
                                                                              type="number"
                                                                              name="rainfall"
                                                                              value={formData.rainfall}
                                                                              onChange={handleChange}
                                                                              required
                                                                              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                                                                              placeholder="e.g. 202.9"
                                                                        />
                                                                  </div>
                                                            </div>

                                                            <button
                                                                  type="submit"
                                                                  disabled={loading}
                                                                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition flex items-center justify-center gap-2"
                                                            >
                                                                  {loading ? (
                                                                        <>
                                                                              <Loader2 className="w-4 h-4 animate-spin" /> Analyzing...
                                                                        </>
                                                                  ) : (
                                                                        "Get Recommendation"
                                                                  )}
                                                            </button>
                                                      </form>
                                                </CardContent>
                                          </Card>
                                    </div>

                                    {/* Result Section */}
                                    <div>
                                          <Card className="h-full bg-gradient-to-b from-green-50 to-white border-green-100">
                                                <CardHeader>
                                                      <CardTitle className="text-green-800">Result</CardTitle>
                                                </CardHeader>
                                                <CardContent className="flex flex-col items-center justify-center text-center h-[300px]">
                                                      {prediction ? (
                                                            <div className="animate-in fade-in zoom-in duration-500">
                                                                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                                        <Leaf className="w-10 h-10 text-green-600" />
                                                                  </div>
                                                                  <h3 className="text-lg font-medium text-gray-600 mb-1">
                                                                        Recommended Crop
                                                                  </h3>
                                                                  <p className="text-4xl font-bold text-green-700 capitalize">
                                                                        {prediction}
                                                                  </p>
                                                                  <p className="text-sm text-gray-500 mt-4">
                                                                        Based on your soil and weather conditions
                                                                  </p>
                                                            </div>
                                                      ) : (
                                                            <div className="text-gray-400">
                                                                  <Sprout className="w-16 h-16 mx-auto mb-4 opacity-20" />
                                                                  <p>Fill the form to get a recommendation</p>
                                                            </div>
                                                      )}
                                                </CardContent>
                                          </Card>
                                    </div>
                              </div>
                        </div>
                  </main>
            </div>
      );
};

export default CropRecommendation;
