import { useState } from "react";

export function useFormState() {
  const [CBOFormData, setCBOFormData] = useState({
    cboName: '',
    legalStatus: '',
    registrationNumber: '',
    missionStatement: '',
    yearEstablished: '',
    contactPersonName: '',
    position: '',
    email: '',
    phone: '',
    mailingAddress: '',
    website: '',
    serviceArea: '',
    beneficiariesServed: '',
    servicesDescription: '',
    targetDemographic: [],
    otherDemographic: '',
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
    postalCode: '',
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
  });  

  const handleChange = (e, typeuser) => {
    const { name, value } = e.target;

    console.log(name + value);
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

  return { CBOFormData, partnerFormData, handleChange };
}
