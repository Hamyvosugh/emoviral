import React from 'react';
import Image from 'next/image';
import { ArrowRight, Calendar, Building2, Mail } from 'lucide-react';

const ThankYouPage = ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const name = searchParams.name as string || '';
  const appointmentDate = searchParams.appointmentDate as string || '';
  const projectDetails = searchParams.projectDetails as string || '';
  const companyName = searchParams.companyName as string || '';

  // Format the date nicely
  const formattedDate = appointmentDate ? new Date(appointmentDate).toLocaleString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }) : '';

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            {name ? `Vielen Dank ${name}!` : 'Vielen Dank!'}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 mb-8">
            Wir haben Ihre Anfrage erfolgreich erhalten und freuen uns darauf, mit Ihnen zusammenzuarbeiten.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Ihre Projektdetails
          </h2>
          
          <div className="space-y-6">
            {appointmentDate && (
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Gewünschter Termin</h3>
                  <p className="text-gray-600">{formattedDate}</p>
                </div>
              </div>
            )}

            {companyName && (
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Unternehmen</h3>
                  <p className="text-gray-600">{companyName}</p>
                </div>
              </div>
            )}

            {projectDetails && (
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <ArrowRight className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Projektbeschreibung</h3>
                  <p className="text-gray-600">{projectDetails}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-center space-x-3 mb-4">
            <Mail className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-medium text-gray-800">Nächste Schritte</h3>
          </div>
          <p className="text-gray-700">
            Unser Team wird sich innerhalb der nächsten 24 Stunden mit Ihnen in Verbindung setzen, 
            um die Details Ihres Projekts zu besprechen. In der Zwischenzeit können Sie uns bei 
            Fragen jederzeit unter <a href="mailto:hi@emoviral.com" className="text-blue-600 hover:underline">hi@emoviral.com</a> erreichen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;