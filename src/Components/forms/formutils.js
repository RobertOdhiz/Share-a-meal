import { useState } from "react";

export function useFormState() {
  const [CBOFormData, setCBOFormData] = useState({
    cboName: '',
    legalStatus: '',
    registrationNumber: '',
    yearEstablished: '',
    contactPersonName: '',
    position: '',
    email: '',
    phone: '',
    mailingAddress: '',
    website: '',
    serviceArea: '',
    servicesDescription: '',
    targetDemographic: [],
    daysAndHours: [],
    distributionFrequency: '',
    foodDonationRequirements: '',
    staffVolunteers: '',
    facilitiesCapacity: '',
    transportationAvailability: [],
    partnerships: '',
    previousExperience: '',
    documents: [],
    additionalComments: '',
    optInPreferences: [],
    termsAgreement: false,
    Role: 'CBO'
  });

  const [partnerFormData, setPartnerFormData] = useState({
    partnerType: '',
    companyName: '',
    contactPersonName: '',
    position: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    website: '',
    products: [],
    capacity: '',
    transportationAvailability: [],
    partnerships: '',
    previousExperience: '',
    documents: [],
    complianceConfirmation: false,
    additionalComments: '',
    optInPreferences: [],
    termsAgreement: false,
    weekdayHours: [],
    weekendHours: [],
    Role: 'Partner'
  });  

  const handleFileChange = (e, typeuser) => {
    const { name } = e.target;

    const files = Array.from(e.target.files);

    if (typeuser === 'CBO') {
        setCBOFormData(prevValues => ({
            ...prevValues,
            [name]: [...prevValues.documents, ...files], 
        }));
    } else if (typeuser === 'Partner') {
        setPartnerFormData(prevValues => ({
            ...prevValues,
            [name]: [...prevValues.documents, ...files],
        }));
    }
};

  const handleChange = (e, typeuser) => {
    const { name, value } = e.target;

    if (typeuser === 'CBO') {
        setCBOFormData(prevValues => ({
            ...prevValues,
            [name]: value,
        }))
    } else if (typeuser === 'Partner') {
        setPartnerFormData(prevValues => ({
            ...prevValues,
            [name]: value,
        }))
    }
  };

  return { CBOFormData, partnerFormData, handleChange, handleFileChange };
}
