import { useState } from "react";

export const [CBOFormData, setCBOFormData] = useState({
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
    complianceConfirmation: false,
    additionalComments: '',
    optInPreferences: [],
    termsAgreement: false,
  });

  export const [partnerFormData, setPartnerFormData] = useState({

  });

  export function handleChange (e, typeuser) {
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