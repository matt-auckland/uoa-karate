export const TRAINING_STATUS = {
  ACTIVE: 'ACTIVE',
  HIDDEN: 'HIDDEN',
  POSTPONED: 'POSTPONED'
}

export default {
  "bannerText": {
    "text": "Our 'O-Week' social event is on Wednesday 4th March 6pm-8pm at the Combat Sports Studio in the Rec Center."
  },
  "schedule": [
    {
      "index": 1,
      "day": "Tuesday",
      "startTime": "6pm",
      "finishTime": "7.30pm",
      "location": "Rec Centre (Hiwa) Mind and Body Studio. 2nd floor, University of Auckland",
      "notes": "",
      "status": TRAINING_STATUS.HIDDEN,
    },
    {
      "index": 2,
      "day": "Wednesday",
      "startTime": "6.00pm",
      "finishTime": "8.00pm",
      "location": "Rec Centre (Hiwa) Combat Sports Studio. 2nd floor, University of Auckland",
      "notes": "Training is 6-8pm March 4th and will be back to 6-7.30pm from March 11th. Attendees should meet in the Rec Centre lobby before training starts",
      "status": TRAINING_STATUS.ACTIVE,
      "tempNotes": "Wednesday training is currently postponed until January 14th."
    },
    {
      "index": 3,
      "day": "Friday",
      "startTime": "6.00pm",
      "finishTime": "7.30pm",
      "location": "Room 155, Building 303, University of Auckland, 38 Princes Street",
      "notes": "For graded members, 9th kyu (Blue belt) and above only.",
      "tempNotes": "Friday training is currently postponed until further notice.",
      "tempLocation": "Location to be confirmed",
      "status": TRAINING_STATUS.POSTPONED
    },
    {
      "index": 4,
      "day": "Sunday",
      "startTime": "10am",
      "finishTime": "12pm",
      "location": "Rec Centre (Hiwa) Combat Sports Studio. 1st floor, University of Auckland",
      "notes": "Attendees should meet in the Rec Centre lobby before training starts",
      "status": TRAINING_STATUS.POSTPONED,
      "tempNotes": "Sunday training is currently postponed until March 15th, there is no training on March 8th"
    }
  ]
}
