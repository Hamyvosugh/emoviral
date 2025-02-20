import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectDetails: string;
  appointmentDate: string;
  companyName: string;
  companySize: string;
  industry: string;
};

const KontaktFormular = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
    appointmentDate: '',
    companyName: '',
    companySize: '',
    industry: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = (step: number): boolean => {
    setError('');
    switch (step) {
      case 1:
        if (!formData.name || !formData.email || !formData.phone) {
          setError('Bitte füllen Sie alle Pflichtfelder aus.');
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
          return false;
        }
        break;
      case 2:
        if (!formData.projectDetails || !formData.appointmentDate) {
          setError('Bitte beschreiben Sie Ihr Projekt und wählen Sie einen Termin.');
          return false;
        }
        break;
      case 3:
        if (!formData.companyName || !formData.industry) {
          setError('Bitte geben Sie Ihre Unternehmensdetails ein.');
          return false;
        }
        break;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Übermittlung fehlgeschlagen');
      
      router.push('/danke');
    } catch (err) {
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-1" id="kontakt">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-6">
          <div className="mb-6">
            <div className="flex justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full ${
                    step <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div className="space-y-4">
                <h2 className="text-2xl text-black font-bold mb-4">Persönliche Informationen</h2>
                <input
                  name="name"
                  placeholder="Vollständiger Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="E-Mail-Adresse"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  name="phone"
                  placeholder="Telefonnummer"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4 text-black">Projektdetails</h2>
                <textarea
                  name="projectDetails"
                  placeholder="Beschreiben Sie Ihr Projekt"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  className="w-full h-32 px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <input
                  name="appointmentDate"
                  type="datetime-local"
                  placeholder="Wunschtermin"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bordert text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4 text-black">Unternehmensdetails</h2>
                <input
                  name="companyName"
                  placeholder="Unternehmensname"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  name="industry"
                  placeholder="Branche"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  name="companySize"
                  placeholder="Unternehmensgröße"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4 text-black">Zusammenfassung</h2>
                <div className="space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>E-Mail:</strong> {formData.email}</p>
                  <p><strong>Telefon:</strong> {formData.phone}</p>
                  <p><strong>Projekt:</strong> {formData.projectDetails}</p>
                  <p><strong>Wunschtermin:</strong> {formData.appointmentDate}</p>
                  <p><strong>Unternehmen:</strong> {formData.companyName}</p>
                  <p><strong>Branche:</strong> {formData.industry}</p>
                  <p><strong>Unternehmensgröße:</strong> {formData.companySize}</p>
                </div>
              </div>
            )}

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
                {error}
              </div>
            )}

            <div className="flex justify-between mt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-2 border text-black border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Zurück
                </button>
              )}
              
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={() => {
                    if (validateStep(currentStep)) {
                      setCurrentStep(currentStep + 1);
                    }
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-auto"
                >
                  Weiter
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Senden...' : 'Absenden'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KontaktFormular;



