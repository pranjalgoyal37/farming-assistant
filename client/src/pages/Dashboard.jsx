import React from "react";
import { Link } from "react-router-dom";
import {
  Sprout,
  Droplets,
  Bug,
  CloudRain,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Sun,
  Activity,
} from "lucide-react";

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

const CardDescription = ({ className, children }) => (
  <p className={cn("text-sm text-gray-500", className)}>{children}</p>
);

const CardContent = ({ className, children }) => (
  <div className={cn("p-6 pt-0", className)}>{children}</div>
);

const CardFooter = ({ className, children }) => (
  <div className={cn("p-6 pt-0 flex items-center", className)}>{children}</div>
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
          className="text-gray-700 hover:text-black"
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

/* ---------------- FOOTER ---------------- */
const Footer = () => (
  <footer className="mt-12 py-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} FarmAssist. All rights reserved.
  </footer>
);

/* ---------------- DASHBOARD PAGE ---------------- */
const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Welcome Banner */}
          <div className="mb-8 bg-green-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Welcome back, Farmer!</h2>
            <p className="text-lg opacity-90">
              Here's what's happening with your farm today
            </p>
          </div>

          {/* Weather Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-yellow-500" />
                Today's Weather
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold">28°C</p>
                  <p className="text-gray-500 text-sm">Temperature</p>
                </div>

                <div>
                  <p className="text-3xl font-bold">65%</p>
                  <p className="text-gray-500 text-sm">Humidity</p>
                </div>

                <div>
                  <p className="text-3xl font-bold">12 km/h</p>
                  <p className="text-gray-500 text-sm">Wind Speed</p>
                </div>

                <div>
                  <p className="text-3xl font-bold">15%</p>
                  <p className="text-gray-500 text-sm">Rain Chance</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Tools */}
          <h2 className="text-2xl font-bold mb-6">Quick Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Crop Recommendation */}
            <Link to="/crop-recommendation">
              <Card className="p-6 cursor-pointer hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Sprout className="w-6 h-6 text-green-600" />
                  </div>
                  <ArrowRight className="text-gray-400" />
                </div>
                <h3 className="font-semibold mb-1">Crop Recommendation</h3>
                <p className="text-sm text-gray-500">
                  AI-powered crop suggestions
                </p>
              </Card>
            </Link>

            {/* Fertilizer */}
            <Link to="/fertilizer">
              <Card className="p-6 cursor-pointer hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                  <ArrowRight className="text-gray-400" />
                </div>
                <h3 className="font-semibold mb-1">Fertilizer Suggestion</h3>
                <p className="text-sm text-gray-500">
                  Best fertilizer for soil health
                </p>
              </Card>
            </Link>

            {/* Disease Detection */}
            <Link to="/disease-detection">
              <Card className="p-6 cursor-pointer hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <Bug className="w-6 h-6 text-red-600" />
                  </div>
                  <ArrowRight className="text-gray-400" />
                </div>
                <h3 className="font-semibold mb-1">Disease Detection</h3>
                <p className="text-sm text-gray-500">Upload leaf images</p>
              </Card>
            </Link>

            {/* Weather */}
            <Link to="/weather">
              <Card className="p-6 cursor-pointer hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                    <CloudRain className="w-6 h-6 text-purple-600" />
                  </div>
                  <ArrowRight className="text-gray-400" />
                </div>
                <h3 className="font-semibold mb-1">Weather Forecast</h3>
                <p className="text-sm text-gray-500">7-day forecast</p>
              </Card>
            </Link>

            {/* Chatbot */}
            <Link to="/chatbot">
              <Card className="p-6 cursor-pointer hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-orange-600" />
                  </div>
                  <ArrowRight className="text-gray-400" />
                </div>
                <h3 className="font-semibold mb-1">AI Chatbot</h3>
                <p className="text-sm text-gray-500">
                  Ask anything (Hindi/English)
                </p>
              </Card>
            </Link>

            {/* Analytics */}
            <Card className="p-6 cursor-pointer hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-yellow-600" />
                </div>
                <ArrowRight className="text-gray-400" />
              </div>
              <h3 className="font-semibold mb-1">Farm Analytics</h3>
              <p className="text-sm text-gray-500">
                Insights & performance tracking
              </p>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="mt-10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Recent Activity
              </CardTitle>
              <CardDescription>Your recent farming updates</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Crop Recommendation Completed</p>
                  <p className="text-sm text-gray-500">
                    Wheat is best for your soil
                  </p>
                </div>
                <span className="text-sm text-gray-400">2h ago</span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <CloudRain className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Weather Alert</p>
                  <p className="text-sm text-gray-500">
                    Rain expected in 3 days
                  </p>
                </div>
                <span className="text-sm text-gray-400">1d ago</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
