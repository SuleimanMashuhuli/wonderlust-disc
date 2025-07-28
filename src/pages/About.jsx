import { companyInfo } from '../data/tours';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      
      <div className="pt-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Hiazoo Safaris</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are passionate about creating unforgettable safari experiences that connect travelers with Africa's wild beauty while promoting conservation and sustainable tourism.
            </p>
          </div>

          {/* Company Story */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, Hiazoo Safaris began with a simple mission: to share the incredible beauty and diversity of Africa with the world. What started as a small family operation has grown into one of East Africa's most trusted safari companies.
                </p>
                <p className="text-gray-600 mb-4">
                  Our founder, John Hiazoo, grew up in the shadow of Mount Kenya, spending his childhood exploring the vast landscapes and learning about wildlife from local Maasai guides. This deep connection to the land and its people inspired him to create safari experiences that go beyond simple tourism.
                </p>
                <p className="text-gray-600">
                  Today, we work with over 50 experienced guides and partner with the finest lodges and camps across Kenya and Tanzania. Our commitment to sustainable tourism means that every safari we operate contributes to local conservation efforts and community development.
                </p>
              </div>
              <div>
                <img 
                  src="/elephant.jpg" 
                  alt="African Elephant" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission & Values</h2>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h3>
              <p className="text-gray-600 text-lg">{companyInfo.mission}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyInfo.values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="/lioness.jpg" 
                  alt="John Hiazoo" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Suleiman Ali</h3>
                <p className="text-red-500 font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years of experience in wildlife tourism, Suleiman leads our company with passion and expertise.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="/rhino.webp" 
                  alt="Sarah Mwangi" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Athman Mwaporojo</h3>
                <p className="text-red-500 font-medium mb-2">Head of Operations</p>
                <p className="text-gray-600 text-sm">
                  Mwaporojo ensures every safari runs smoothly, managing our guides and coordinating with our lodge partners.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="/many.jpg" 
                  alt="David Ochieng" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Juma Salim</h3>
                <p className="text-red-500 font-medium mb-2">Senior Safari Guide</p>
                <p className="text-gray-600 text-sm">
                  David's deep knowledge of wildlife and local culture makes him one of our most requested guides.
                </p>
              </div>
            </div>
          </div>

          {/* Conservation Commitment */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Conservation Commitment</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  We believe that responsible tourism is the key to preserving Africa's wildlife and wild places for future generations. That's why we've made conservation a cornerstone of our business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Wildlife Protection</h4>
                      <p className="text-gray-600 text-sm">We support anti-poaching initiatives and wildlife research programs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Community Development</h4>
                      <p className="text-gray-600 text-sm">We invest in local communities through education and employment opportunities.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Sustainable Practices</h4>
                      <p className="text-gray-600 text-sm">We minimize our environmental impact through eco-friendly operations.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/cheetah.jpg" 
                  alt="Conservation" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Awards & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">🏆</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Best Safari Operator 2023</h4>
                <p className="text-gray-600 text-sm">Kenya Tourism Awards</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Eco-Tourism Excellence</h4>
                <p className="text-gray-600 text-sm">East Africa Conservation Awards</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">⭐</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">5-Star Service Rating</h4>
                <p className="text-gray-600 text-sm">TripAdvisor Travelers' Choice</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
} 