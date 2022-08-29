// components/survey/content/index.tsx
export const questionsForED = {
  title: "Emergency Department Patient-Reported Experience Measure (ED PREM)",
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "html",
          name: "Preamble",
          title: "Preamble ",
          hideNumber: true,
          html: '<strong>NOTE</strong>\n<div>\n        Please consider <strong style={{fontSize:"20px",fontStyle:"italic"}}>ONLY</strong> your single most recent experience in the Emergency\n        Department.\n      </div>\n      <br/>\n      <div>\n        Please <strong style={{fontSize:"20px",fontStyle:"italic"}}>put one tick in a box for each item</strong> to indicate the response that\n        best represents your single most recent experience in the Emergency\n        Department.\n      </div><br/>\n<div>An ED care provider is anyone that provided care to you in the Emergency Department. This may include any combination of doctors, nurses, physiotherapists, orthopaedic surgeons etc.</div>',
        },
      ],
      readOnly: true,
    },
    {
      name: "page2",
      elements: [
        {
          type: "rating",
          name: "question1",
          title: "ED care providers were compassionate.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question3",
          title: "ED care providers were reassuring.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question2",
          title: "ED care providers listened to me.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question4",
          title: "ED care providers took me seriously.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question5",
          title:
            "ED care providers supported my decision to present to the ED.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question6",
          title:
            "ED care providers made me feel like I was no trouble to them.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question7",
          title: "ED care providers gave me the opportunity to talk.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question8",
          title:
            "ED care providers treated me like a person ,not a medical condition.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question9",
          title: "ED care providers treated me with respect.",
          hideNumber: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question10",
          title: "ED care providers were kind in how they treated me.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
      ],
      title:
        "Person-centred relationships between patients and ED care providers",
    },
    {
      name: "page3",
      elements: [
        {
          type: "rating",
          name: "question11",
          title:
            "ED care providers were experienced and knew what they were doing.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question12",
          title:
            "ED care providers were time efficient in how they cared for me.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question13",
          title: "ED care providers were thorough in how they cared for me.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question14",
          title:
            "ED care providers gave me consistent information throughout my ED journey.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question15",
          title: "ED care providers worked well together.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question16",
          title: "I was trusting of ED care providers.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question17",
          title: "I felt safe in the hands of ED care providers.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
      ],
      title: "Patient confidence in ED care providers",
    },
    {
      name: "page4",
      elements: [
        {
          type: "rating",
          name: "question18",
          title: "ED care providers discussed my care with me.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question19",
          title: "ED care providers spoke to me in a way I could understand.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question20",
          title: "ED care providers encouraged me to ask questions.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question21",
          title: "ED care providers informed me of my treatment options.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question22",
          title:
            "ED care providers involved me in decisions about my treatment as much as I wanted.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question23",
          title: "ED care providers kept me informed throughout my ED journey.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
      ],
      title: "Patient engagement in ED care",
    },
    {
      name: "page5",
      elements: [
        {
          type: "rating",
          name: "question24",
          title: "I felt physically safe in the ED environment.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question25",
          title:
            "I felt comfortable in the ED environment (both physically and emotionally).",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question26",
          title:
            "I had access to the things I needed (e.g.,toilets, wheelchairs, food and drinks).",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question27",
          title: "The ED was clean.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question28",
          title: "The temperature in the ED was comfortable.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question29",
          title:
            "ED care providers discussed my personal details in a private manner.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question30",
          title:
            "ED care providers did all they could to make my treatment space private.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
      ],
      title: "Safety, comfort, and privacy in the ED",
    },
    {
      name: "page6",
      elements: [
        {
          type: "rating",
          name: "question31",
          title:
            "I was informed about how long I might have to wait when I first arrived to the ED.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question32",
          title: "I was advised about why I needed to wait to receive care.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question33",
          title:
            "I received care in good time considering the nature of my condition.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question34",
          title:
            "ED care providers updated me throughout my ED journey about why I was waiting.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
        {
          type: "rating",
          name: "question35",
          title:
            "My ED journey progressed in good time considering the nature of my condition.",
          hideNumber: true,
          isRequired: true,
          minRateDescription: "Never",
          maxRateDescription: "Always",
        },
      ],
      title: "Receiving timely care",
    },
  ],
};
export const questionsForAQol_4D = {
    "title": "AQoL-4D",
    "description": "Tick the box that best describes your situation as it has been over the past week",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "Do you need any help looking after yourself? (For example: dressing, bathing, eating)",
        "choices": [
         {
          "value": "item1",
          "text": "I need no help at all."
         },
         {
          "value": "item2",
          "text": "Occasionally I need some help with personal care tasks."
         },
         {
          "value": "item3",
          "text": "I need help with the more difficult personal care tasks."
         },
         {
          "value": "item4",
          "text": "I need daily help with most or all personal care tasks."
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question2",
        "title": "When doing household tasks: (For example: cooking, cleaning the house, washing)",
        "choices": [
         {
          "value": "item1",
          "text": "I need no help at all."
         },
         {
          "value": "item2",
          "text": "Occasionally I need some help with household tasks."
         },
         {
          "value": "item3",
          "text": "I need help with the more difficult household tasks."
         },
         {
          "value": "item4",
          "text": "I need daily help with most or all household tasks."
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question3",
        "title": "Thinking about how easily you can get around your home and community:",
        "choices": [
         {
          "value": "item1",
          "text": "I get around my home and community by myself without any difficulty."
         },
         {
          "value": "item2",
          "text": "I find it difficult to get around my home and community by myself. "
         },
         {
          "value": "item3",
          "text": "I cannot get around the community by myself, but I can get around my home with some difficulty. "
         },
         {
          "value": "item4",
          "text": "I cannot get around either the community or my home by myself."
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question4",
        "title": "Because of your health, your relationships (for example: with your friends, partner or parents) generally:",
        "choices": [
         {
          "value": "item1",
          "text": "Are very close and warm."
         },
         {
          "value": "item2",
          "text": "Are sometimes close and warm. "
         },
         {
          "value": "item3",
          "text": "Are seldom close and warm. "
         },
         {
          "value": "item4",
          "text": "I have no close and warm relationships."
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question5",
        "title": "Thinking about your relationship with other people:",
        "choices": [
         {
          "value": "item1",
          "text": "I have plenty of friends, and am never lonely."
         },
         {
          "value": "item2",
          "text": "Although I have friends, I am occasionally lonely. "
         },
         {
          "value": "item3",
          "text": "I have some friends, but am often lonely for company. "
         },
         {
          "value": "item4",
          "text": "I am socially isolated and feel lonely."
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question6",
        "title": "Thinking about your health and your relationship with your family:",
        "choices": [
         {
          "value": "item1",
          "text": "My role in the family is unaffected by my health. "
         },
         {
          "value": "item2",
          "text": "There are some parts of my family role I cannot carry out. "
         },
         {
          "value": "item3",
          "text": "There are many parts of my family role I cannot carry out. "
         },
         {
          "value": "item4",
          "text": "I cannot carry out any part of my family role"
         }
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question7",
        "title": "Thinking about your vision, including when using your glasses or contact lenses if needed:",
        "choices": [
         {
          "value": "item1",
          "text": "I see normally "
         },
         {
          "value": "item2",
          "text": "I have some difficulty focusing on things, or I do not see them sharply. For example: small print, a newspaper or seeing objects in the distance. "
         },
         {
          "value": "item3",
          "text": "I have a lot of difficulty seeing things. My vision is blurred. For example: I can see just enough to get by with. "
         },
         {
          "value": "item4",
          "text": "I only see general shapes, or am blind. For example: I need a guide to move around."
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question8",
        "title": "Thinking about your hearing, including using your hearing aid if needed:",
        "choices": [
         {
          "value": "item1",
          "text": "I hear normally ."
         },
         {
          "value": "item2",
          "text": "I have some difficulty hearing or I do not hear clearly. For example: I ask people to speak up, or turn up the TV or radio volume."
         },
         {
          "value": "item3",
          "text": "I have difficulty hearing things clearly. For example: Often I do not understand what is said. I usually do not take part in conversations because I cannot hear what is said. "
         },
         {
          "value": "item4",
          "text": "I hear very little indeed. For example: I cannot fully understand loud voices speaking directly to me."
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question9",
        "title": "When you communicate with others: (For example: by talking, listening, writing or signing.)9",
        "choices": [
         {
          "value": "item1",
          "text": "I have no trouble speaking to them or understanding what they are saying ."
         },
         {
          "value": "item2",
          "text": "I have some difficulty being understood by people who do not know me. I have no trouble understanding what others are saying to me. "
         },
         {
          "value": "item3",
          "text": "I am only understood by people who know me well. I have great trouble understanding what others are saying to me. "
         },
         {
          "value": "item4",
          "text": "I cannot adequately communicate with others."
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question10",
        "title": "Thinking about how you sleep:",
        "choices": [
         {
          "value": "item1",
          "text": "I am able to sleep without difficulty most of the time. "
         },
         {
          "value": "item2",
          "text": "My sleep is interrupted some of the time, but I am usually able to go back to sleep without difficulty. "
         },
         {
          "value": "item3",
          "text": "My sleep is interrupted most nights, but I am usually able to go back to sleep without difficulty. "
         },
         {
          "value": "item4",
          "text": "I sleep in short bursts only. I am awake most of the night."
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question11",
        "title": "Thinking about how you generally feel:",
        "choices": [
         {
          "value": "item1",
          "text": "I do not feel anxious, worried or depressed."
         },
         {
          "value": "item2",
          "text": "I am slightly anxious, worried or depressed. "
         },
         {
          "value": "item3",
          "text": "I feel moderately anxious, worried or depressed. "
         },
         {
          "value": "item4",
          "text": "I am extremely anxious, worried or depressed."
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question12",
        "title": "How much pain or discomfort do you experience:",
        "choices": [
         {
          "value": "item1",
          "text": "None at all."
         },
         {
          "value": "item2",
          "text": "I have moderate pain."
         },
         {
          "value": "item3",
          "text": "I suffer from severe pain."
         },
         {
          "value": "item4",
          "text": "I suffer unbearable pain."
         }
        ]
       }
      ]
     }
    ]
   }