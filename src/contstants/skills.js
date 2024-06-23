const frontendSkills = [
    {
        name: 'HTML',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
        `,
        level: 'Experienced',
    },
    {
        name: 'CSS',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
        `,
        level: 'Experienced',
    },
    {
        name: 'JavaScript',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
        `,
        level: 'Experienced',
    },
    {
        name: 'Tailwind',
        icon: `
        <svg class="w-[50px] h-[50px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
        <path d="M9.782.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231C14.488 3.365 13.551.6 9.782.72ZM4.8 6.979A4.772 4.772 0 0 0 0 11.151a3.43 3.43 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231C9.51 9.623 8.573 6.853 4.8 6.979Z"/>
      </svg>
        `,
        level: 'Experienced',
    },
    {
        name: 'React',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
        `,
        level: 'Intermediate',
    },
    {
        name: 'Vue',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>
        `,
        level: 'Experienced',
    },
    {
        name: 'Node JS',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>
        `,
        level: 'Intermediate',
    },
    {
        name: 'Figma',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"/></svg>
        `,
        level: 'Experienced',
    },
  ];

  const otherSkills = [
    {
        name: 'SQL',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>
        `,
        level: 'Intermediate',
    },
    {
        name: 'Laravel',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z"/></svg>
        `,
        level: 'Intermediate',
    },
    {
        name: 'PHP',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"/></svg>
        `,
        level: 'Intermediate',
    },
    {
        name: 'Illustrator',
        icon: `
        <svg id='Adobe_Illustrator_24' width='50' height='50' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>
        <g transform="matrix(0.91 0 0 0.91 12 12)" >
        <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" translate(-15, -15)" d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 19.660156 9.2480469 C 20.282156 9.2480469 20.707031 9.6445469 20.707031 10.185547 C 20.707031 10.726547 20.282156 11.123047 19.660156 11.123047 C 19.045156 11.123047 18.615234 10.726547 18.615234 10.185547 C 18.615234 9.6445469 19.045156 9.2480469 19.660156 9.2480469 z M 11.792969 9.953125 L 13.775391 9.953125 L 17.28125 19.818359 L 15.388672 19.818359 L 14.554688 17.296875 L 10.925781 17.296875 L 10.076172 19.818359 L 8.2929688 19.818359 L 11.792969 9.953125 z M 12.6875 11.832031 L 11.335938 15.900391 L 14.144531 15.900391 L 12.804688 11.832031 L 12.6875 11.832031 z M 18.820312 12.339844 L 20.507812 12.339844 L 20.507812 19.818359 L 18.820312 19.818359 L 18.820312 12.339844 z" stroke-linecap="round" />
        </g>
        </svg>        `,
        level: 'Intermediate',
    },
    {
        name: 'Photoshop',
        icon: `
        <svg id='Adobe_Photoshop_24' width='50' height='50' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>
        <g transform="matrix(0.77 0 0 0.77 12 12)" >
        <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" translate(-13, -13)" d="M 11.546875 9.46875 C 11.632813 9.699219 11.675781 9.984375 11.675781 10.320313 C 11.675781 10.722656 11.628906 11.054688 11.539063 11.3125 C 11.449219 11.5625 11.328125 11.761719 11.179688 11.902344 C 11.027344 12.042969 10.855469 12.144531 10.660156 12.199219 C 10.460938 12.261719 10.246094 12.292969 10.023438 12.292969 C 9.964844 12.292969 9.847656 12.285156 9.675781 12.269531 C 9.5625 12.257813 9.484375 12.246094 9.429688 12.238281 L 9.429688 8.613281 C 9.617188 8.574219 9.851563 8.558594 10.121094 8.558594 C 10.328125 8.558594 10.53125 8.585938 10.722656 8.648438 C 10.90625 8.707031 11.070313 8.800781 11.210938 8.929688 C 11.351563 9.0625 11.464844 9.242188 11.546875 9.46875 Z M 26 4.875 L 26 21.125 C 26 23.816406 23.816406 26 21.125 26 L 4.875 26 C 2.183594 26 0 23.816406 0 21.125 L 0 4.875 C 0 2.183594 2.183594 0 4.875 0 L 21.125 0 C 23.816406 0 26 2.183594 26 4.875 Z M 13.730469 12.175781 C 13.933594 11.671875 14.035156 11.054688 14.035156 10.335938 C 14.035156 9.542969 13.914063 8.886719 13.671875 8.386719 C 13.429688 7.886719 13.109375 7.488281 12.71875 7.210938 C 12.332031 6.933594 11.886719 6.746094 11.398438 6.652344 C 10.46875 6.476563 9.503906 6.484375 8.539063 6.589844 C 8.082031 6.636719 7.652344 6.703125 7.261719 6.789063 C 7.203125 6.804688 7.164063 6.855469 7.164063 6.910156 L 7.164063 18 C 7.164063 18.070313 7.21875 18.125 7.289063 18.125 L 9.304688 18.125 C 9.371094 18.125 9.429688 18.070313 9.429688 18 L 9.429688 14.289063 C 9.453125 14.292969 9.480469 14.296875 9.507813 14.300781 C 9.609375 14.3125 9.714844 14.320313 9.824219 14.324219 C 9.933594 14.328125 10.039063 14.332031 10.136719 14.332031 L 10.34375 14.332031 C 10.8125 14.332031 11.277344 14.261719 11.71875 14.117188 C 12.167969 13.976563 12.566406 13.738281 12.910156 13.417969 C 13.253906 13.097656 13.527344 12.679688 13.730469 12.175781 Z M 19.234375 15.761719 C 19.234375 15.304688 19.160156 14.914063 19.007813 14.601563 C 18.855469 14.289063 18.660156 14.023438 18.429688 13.804688 C 18.195313 13.589844 17.949219 13.410156 17.691406 13.265625 C 17.441406 13.128906 17.203125 12.996094 16.980469 12.867188 C 16.765625 12.746094 16.585938 12.617188 16.453125 12.492188 C 16.335938 12.382813 16.277344 12.25 16.277344 12.082031 C 16.277344 11.835938 16.351563 11.550781 16.933594 11.550781 C 17.199219 11.550781 17.472656 11.589844 17.75 11.664063 C 18.027344 11.742188 18.269531 11.824219 18.46875 11.90625 C 18.503906 11.921875 18.539063 11.921875 18.570313 11.90625 C 18.605469 11.890625 18.628906 11.863281 18.636719 11.828125 L 19.085938 10.355469 C 19.101563 10.300781 19.082031 10.242188 19.03125 10.214844 C 18.777344 10.058594 18.429688 9.925781 18.003906 9.824219 C 17.582031 9.71875 17.125 9.667969 16.648438 9.667969 C 15.828125 9.667969 15.195313 9.882813 14.765625 10.3125 C 14.339844 10.738281 14.121094 11.351563 14.121094 12.128906 C 14.121094 12.582031 14.199219 12.96875 14.351563 13.273438 C 14.5 13.574219 14.695313 13.832031 14.929688 14.046875 C 15.164063 14.253906 15.410156 14.433594 15.664063 14.574219 C 15.914063 14.710938 16.152344 14.847656 16.375 14.980469 C 16.589844 15.105469 16.765625 15.246094 16.898438 15.386719 C 17.023438 15.519531 17.082031 15.679688 17.082031 15.871094 C 17.082031 16.074219 17.019531 16.21875 16.894531 16.304688 C 16.757813 16.402344 16.574219 16.449219 16.359375 16.449219 C 16.050781 16.449219 15.753906 16.402344 15.476563 16.3125 C 15.195313 16.21875 14.941406 16.109375 14.722656 15.988281 C 14.691406 15.96875 14.652344 15.964844 14.617188 15.976563 C 14.582031 15.992188 14.554688 16.019531 14.542969 16.054688 L 14.015625 17.589844 C 13.996094 17.644531 14.019531 17.703125 14.066406 17.734375 C 14.332031 17.914063 14.6875 18.058594 15.121094 18.167969 C 15.550781 18.277344 15.996094 18.332031 16.4375 18.332031 C 17.355469 18.332031 18.058594 18.09375 18.527344 17.625 C 18.996094 17.152344 19.234375 16.527344 19.234375 15.761719 Z" stroke-linecap="round" />
        </g>
        </svg>
        `,
        level: 'Intermediate',
    },
    {
        name: 'WordPress',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"/></svg>
        `,
        level: 'Intermediate',
    },
    {
        name: 'Jasmine',
        icon: `
        <svg id='Jasmine_24' width='50' height='50' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>
        <g transform="matrix(0.83 0 0 0.83 12 12)" >
        <g style="" >
        <g transform="matrix(1 0 0 1 0 0)" >
        <circle style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" cx="0" cy="0" r="11.5" />
        </g>
        <g transform="matrix(1 0 0 1 0 -5.25)" >
        <line style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="0" y1="-2.25" x2="0" y2="2.25" />
        </g>
        <g transform="matrix(1 0 0 1 -4.99 -1.62)" >
        <line style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="-2.14" y1="-0.6955" x2="2.14" y2="0.6955" />
        </g>
        <g transform="matrix(1 0 0 1 -3.09 4.25)" >
        <line style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="-1.3225000000000002" y1="1.820500000000001" x2="1.3225000000000002" y2="-1.820500000000001" />
        </g>
        <g transform="matrix(1 0 0 1 3.09 4.25)" >
        <line style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="1.3225000000000007" y1="1.820500000000001" x2="-1.3225000000000007" y2="-1.820500000000001" />
        </g>
        <g transform="matrix(1 0 0 1 4.99 -1.62)" >
        <line style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="2.1399999999999997" y1="-0.6955" x2="-2.1399999999999997" y2="0.6955" />
        </g>
        <g transform="matrix(1 0 0 1 0 6.75)" >
        <line style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="0" y1="0.75" x2="0" y2="-0.75" />
        </g>
        <g transform="matrix(1 0 0 1 6.42 2.09)" >
        <line style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="0.7134999999999998" y1="0.2320000000000002" x2="-0.7134999999999998" y2="-0.2320000000000002" />
        </g>
        <g transform="matrix(1 0 0 1 3.97 -5.46)" >
        <line style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="0.440500000000001" y1="-0.6069999999999998" x2="-0.440500000000001" y2="0.6069999999999998" />
        </g>
        <g transform="matrix(1 0 0 1 -3.97 -5.46)" >
        <line style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="-0.44050000000000056" y1="-0.6069999999999998" x2="0.44050000000000056" y2="0.6069999999999998" />
        </g>
        <g transform="matrix(1 0 0 1 -6.42 2.09)" >
        <line style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="-0.7134999999999998" y1="0.2320000000000002" x2="0.7134999999999998" y2="-0.2320000000000002" />
        </g>
        </g>
        </g>
        </svg>
        `,
        level: 'Basic',
    },
    {
        name: 'Canvas',
        icon: `
        <svg id='Canvas_Student_24' width='50' height='50' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>
        <g transform="matrix(0.35 0 0 0.35 12 12)" >
        <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" translate(-32, -32.01)" d="M 52.220703 3.4921875 C 51.966578 3.5240625 51.723687 3.6525938 51.554688 3.8710938 L 50.328125 5.4511719 C 49.989125 5.8861719 50.066906 6.5145156 50.503906 6.8535156 C 50.685906 6.9955156 50.903188 7.0644531 51.117188 7.0644531 C 51.415188 7.0644531 51.70925 6.9327344 51.90625 6.6777344 L 53.134766 5.0976562 C 53.473766 4.6626562 53.394031 4.0343125 52.957031 3.6953125 C 52.739531 3.5263125 52.474828 3.4603125 52.220703 3.4921875 z M 32 4 C 19.653789 4 9.1703728 12.013428 5.4511719 23.115234 C 5.4499047 23.115029 5.448533 23.11544 5.4472656 23.115234 L 5.4433594 23.134766 C 4.5118978 25.922175 4 28.901181 4 32 C 4 47.452415 16.547585 60 32 60 C 47.452415 60 60 47.452415 60 32 C 60 27.492834 58.92504 23.236496 57.029297 19.462891 C 57.035573 19.458658 57.042564 19.45542 57.048828 19.451172 L 56.951172 19.306641 C 52.318593 10.227411 42.883027 4 32 4 z M 32 6 C 34.214241 6 36.362551 6.2792581 38.414062 6.7988281 C 37.335529 9.2684203 34.878376 11 32 11 C 29.121784 11 26.680689 9.2630316 25.601562 6.7949219 C 27.648376 6.2778957 29.791361 6 32 6 z M 56.15625 6.84375 C 55.9005 6.84375 55.644719 6.9412187 55.449219 7.1367188 L 54.035156 8.5507812 C 53.644156 8.9417812 53.644156 9.5738437 54.035156 9.9648438 C 54.230156 10.159844 54.486187 10.257812 54.742188 10.257812 C 54.998187 10.257812 55.253219 10.159844 55.449219 9.9648438 L 56.863281 8.5507812 C 57.254281 8.1597813 57.254281 7.5277188 56.863281 7.1367188 C 56.667781 6.9412188 56.412 6.84375 56.15625 6.84375 z M 40.339844 7.3710938 C 41.470055 7.7530823 42.564834 8.2092959 43.619141 8.7363281 C 43.223897 9.750518 43 10.849908 43 12 C 43 16.958516 47.041484 21 52 21 C 53.149514 21 54.242215 20.762031 55.255859 20.367188 C 55.848399 21.550737 56.354905 22.78409 56.763672 24.0625 C 53.927727 25.579607 52 28.569967 52 32 C 52 35.42794 53.936402 38.402338 56.769531 39.919922 C 56.361118 41.200398 55.854451 42.435658 55.261719 43.621094 C 54.247468 43.226553 53.149246 43 52 43 C 47.041484 43 43 47.041484 43 52 C 43 53.149008 43.226055 54.247757 43.621094 55.261719 C 42.441114 55.851723 41.211686 56.356255 39.9375 56.763672 C 38.420403 53.928459 35.430356 52 32 52 C 28.570828 52 25.598123 53.936081 24.080078 56.769531 C 22.799602 56.361118 21.564342 55.854451 20.378906 55.261719 C 20.773577 54.248082 21 53.149608 21 52 C 21 47.041484 16.958516 43 12 43 C 10.850815 43 9.7523728 43.226308 8.7382812 43.621094 C 8.2104809 42.565519 7.7534858 41.469563 7.3710938 40.337891 C 10.670258 39.000583 13 35.767511 13 32 C 13 28.232384 10.669514 25.001929 7.3710938 23.664062 C 7.7523765 22.535406 8.2064918 21.441663 8.7324219 20.388672 C 9.7462099 20.783622 10.849823 21 12 21 C 16.958516 21 21 16.958516 21 12 C 21 10.849607 20.784059 9.7467796 20.388672 8.7324219 C 21.439298 8.2076727 22.530284 7.7538109 23.65625 7.3730469 C 24.992661 10.674622 28.230802 13 32 13 C 35.768734 13 39.003295 10.672358 40.339844 7.3710938 z M 18.605469 9.7089844 C 18.854851 10.427163 19 11.193987 19 12 C 19 15.877484 15.877484 19 12 19 C 11.192608 19 10.425357 18.855087 9.7070312 18.605469 C 11.899799 14.960459 14.960547 11.901884 18.605469 9.7089844 z M 45.396484 9.7089844 C 49.040009 11.901366 52.098634 14.959991 54.291016 18.603516 C 53.572672 18.852921 52.806558 19 52 19 C 48.122516 19 45 15.877484 45 12 C 45 11.193124 45.147129 10.4268 45.396484 9.7089844 z M 59.640625 10.664062 C 59.386625 10.632063 59.120344 10.695734 58.902344 10.865234 L 57.322266 12.09375 C 56.886266 12.43275 56.806531 13.059094 57.144531 13.496094 C 57.342531 13.750094 57.637547 13.882812 57.935547 13.882812 C 58.149547 13.882812 58.366828 13.814828 58.548828 13.673828 L 60.128906 12.445312 C 60.564906 12.106312 60.642688 11.479969 60.304688 11.042969 C 60.135688 10.824469 59.894625 10.696062 59.640625 10.664062 z M 32.25 15 C 31.166667 15 30.226892 15.442256 29.626953 16.117188 C 29.027014 16.792119 28.75 17.652778 28.75 18.5 C 28.75 19.347222 29.027014 20.207881 29.626953 20.882812 C 30.226892 21.557744 31.166667 22 32.25 22 C 33.333333 22 34.273108 21.557744 34.873047 20.882812 C 35.472986 20.207881 35.75 19.347222 35.75 18.5 C 35.75 17.652778 35.472986 16.792119 34.873047 16.117188 C 34.273108 15.442256 33.333333 15 32.25 15 z M 32.25 17 C 32.833333 17 33.143559 17.182744 33.376953 17.445312 C 33.610347 17.707881 33.75 18.097222 33.75 18.5 C 33.75 18.902778 33.610347 19.292119 33.376953 19.554688 C 33.143559 19.817256 32.833333 20 32.25 20 C 31.666667 20 31.356441 19.817256 31.123047 19.554688 C 30.889653 19.292119 30.75 18.902778 30.75 18.5 C 30.75 18.097222 30.889653 17.707881 31.123047 17.445312 C 31.356441 17.182744 31.666667 17 32.25 17 z M 22.5 19 C 21.416667 19 20.476892 19.442256 19.876953 20.117188 C 19.277014 20.792119 19 21.652778 19 22.5 C 19 23.347222 19.277014 24.207882 19.876953 24.882812 C 20.476892 25.557744 21.416667 26 22.5 26 C 23.583333 26 24.523108 25.557744 25.123047 24.882812 C 25.722986 24.207881 26 23.347222 26 22.5 C 26 21.652778 25.722986 20.792118 25.123047 20.117188 C 24.523108 19.442256 23.583333 19 22.5 19 z M 41.5 19 C 40.416667 19 39.476892 19.442256 38.876953 20.117188 C 38.277014 20.792119 38 21.652778 38 22.5 C 38 23.347222 38.277014 24.207882 38.876953 24.882812 C 39.476892 25.557744 40.416667 26 41.5 26 C 42.583333 26 43.523108 25.557744 44.123047 24.882812 C 44.722986 24.207881 45 23.347222 45 22.5 C 45 21.652778 44.722986 20.792118 44.123047 20.117188 C 43.523108 19.442256 42.583333 19 41.5 19 z M 22.5 21 C 23.083333 21 23.393559 21.182744 23.626953 21.445312 C 23.860347 21.707881 24 22.097222 24 22.5 C 24 22.902778 23.860347 23.292118 23.626953 23.554688 C 23.393559 23.817256 23.083333 24 22.5 24 C 21.916667 24 21.606441 23.817256 21.373047 23.554688 C 21.139653 23.292119 21 22.902778 21 22.5 C 21 22.097222 21.139653 21.707882 21.373047 21.445312 C 21.606441 21.182744 21.916667 21 22.5 21 z M 41.5 21 C 42.083333 21 42.393559 21.182744 42.626953 21.445312 C 42.860347 21.707881 43 22.097222 43 22.5 C 43 22.902778 42.860347 23.292118 42.626953 23.554688 C 42.393559 23.817256 42.083333 24 41.5 24 C 40.916667 24 40.606441 23.817256 40.373047 23.554688 C 40.139653 23.292119 40 22.902778 40 22.5 C 40 22.097222 40.139653 21.707882 40.373047 21.445312 C 40.606441 21.182744 40.916667 21 41.5 21 z M 6.7988281 25.585938 C 9.2702897 26.663823 11 29.120563 11 32 C 11 34.878724 9.2699636 37.336316 6.7988281 38.414062 C 6.2792581 36.362551 6 34.214241 6 32 C 6 29.785759 6.2792581 27.637449 6.7988281 25.585938 z M 57.314453 26.068359 C 57.758424 27.97399 58 29.958142 58 32 C 58 34.046798 57.756607 36.035464 57.310547 37.945312 C 55.326046 36.711678 54 34.517842 54 32 C 54 29.483725 55.332224 27.301712 57.314453 26.068359 z M 18.5 28.5 C 17.416667 28.5 16.476892 28.942256 15.876953 29.617188 C 15.277014 30.292119 15 31.152778 15 32 C 15 32.847222 15.277014 33.707881 15.876953 34.382812 C 16.476892 35.057744 17.416667 35.5 18.5 35.5 C 19.583333 35.5 20.523108 35.057744 21.123047 34.382812 C 21.722986 33.707881 22 32.847222 22 32 C 22 31.152778 21.722986 30.292118 21.123047 29.617188 C 20.523108 28.942256 19.583333 28.5 18.5 28.5 z M 46.5 29 C 45.416667 29 44.476892 29.442256 43.876953 30.117188 C 43.277014 30.792119 43 31.652778 43 32.5 C 43 33.347222 43.277014 34.207881 43.876953 34.882812 C 44.476892 35.557744 45.416667 36 46.5 36 C 47.583333 36 48.523108 35.557744 49.123047 34.882812 C 49.722986 34.207881 50 33.347222 50 32.5 C 50 31.652778 49.722986 30.792118 49.123047 30.117188 C 48.523108 29.442256 47.583333 29 46.5 29 z M 18.5 30.5 C 19.083333 30.5 19.393559 30.682744 19.626953 30.945312 C 19.860347 31.207881 20 31.597222 20 32 C 20 32.402778 19.860347 32.792119 19.626953 33.054688 C 19.393559 33.317256 19.083333 33.5 18.5 33.5 C 17.916667 33.5 17.606441 33.317256 17.373047 33.054688 C 17.139653 32.792119 17 32.402778 17 32 C 17 31.597222 17.139653 31.207882 17.373047 30.945312 C 17.606441 30.682744 17.916667 30.5 18.5 30.5 z M 46.5 31 C 47.083333 31 47.393559 31.182744 47.626953 31.445312 C 47.860347 31.707881 48 32.097222 48 32.5 C 48 32.902778 47.860347 33.292119 47.626953 33.554688 C 47.393559 33.817256 47.083333 34 46.5 34 C 45.916667 34 45.606441 33.817256 45.373047 33.554688 C 45.139653 33.292119 45 32.902778 45 32.5 C 45 32.097222 45.139653 31.707881 45.373047 31.445312 C 45.606441 31.182744 45.916667 31 46.5 31 z M 22.5 38 C 21.416667 38 20.476892 38.442256 19.876953 39.117188 C 19.277014 39.792119 19 40.652778 19 41.5 C 19 42.347222 19.277014 43.207881 19.876953 43.882812 C 20.476892 44.557744 21.416667 45 22.5 45 C 23.583333 45 24.523108 44.557745 25.123047 43.882812 C 25.722986 43.207881 26 42.347222 26 41.5 C 26 40.652778 25.722986 39.792119 25.123047 39.117188 C 24.523108 38.442256 23.583333 38 22.5 38 z M 41.5 38 C 40.416667 38 39.476892 38.442256 38.876953 39.117188 C 38.277014 39.792119 38 40.652778 38 41.5 C 38 42.347222 38.277014 43.207881 38.876953 43.882812 C 39.476892 44.557744 40.416667 45 41.5 45 C 42.583333 45 43.523108 44.557745 44.123047 43.882812 C 44.722986 43.207881 45 42.347222 45 41.5 C 45 40.652778 44.722986 39.792119 44.123047 39.117188 C 43.523108 38.442256 42.583333 38 41.5 38 z M 22.5 40 C 23.083333 40 23.393559 40.182744 23.626953 40.445312 C 23.860347 40.707881 24 41.097222 24 41.5 C 24 41.902778 23.860347 42.292119 23.626953 42.554688 C 23.393559 42.817256 23.083333 43 22.5 43 C 21.916667 43 21.606441 42.817255 21.373047 42.554688 C 21.139653 42.292119 21 41.902778 21 41.5 C 21 41.097222 21.139653 40.707881 21.373047 40.445312 C 21.606441 40.182744 21.916667 40 22.5 40 z M 41.5 40 C 42.083333 40 42.393559 40.182744 42.626953 40.445312 C 42.860347 40.707881 43 41.097222 43 41.5 C 43 41.902778 42.860347 42.292119 42.626953 42.554688 C 42.393559 42.817256 42.083333 43 41.5 43 C 40.916667 43 40.606441 42.817255 40.373047 42.554688 C 40.139653 42.292119 40 41.902778 40 41.5 C 40 41.097222 40.139653 40.707881 40.373047 40.445312 C 40.606441 40.182744 40.916667 40 41.5 40 z M 32.25 43 C 31.166667 43 30.226892 43.442255 29.626953 44.117188 C 29.027014 44.792119 28.75 45.652778 28.75 46.5 C 28.75 47.347222 29.027014 48.207881 29.626953 48.882812 C 30.226892 49.557744 31.166667 50 32.25 50 C 33.333333 50 34.273108 49.557745 34.873047 48.882812 C 35.472986 48.207881 35.75 47.347222 35.75 46.5 C 35.75 45.652778 35.472986 44.792119 34.873047 44.117188 C 34.273108 43.442256 33.333333 43 32.25 43 z M 12 45 C 15.877484 45 19 48.122516 19 52 C 19 52.806995 18.861 53.576568 18.611328 54.294922 C 14.96176 52.100568 11.897346 49.038329 9.703125 45.388672 C 10.42192 45.138687 11.192742 45 12 45 z M 32.25 45 C 32.833333 45 33.143559 45.182745 33.376953 45.445312 C 33.610347 45.707881 33.75 46.097222 33.75 46.5 C 33.75 46.902778 33.610347 47.292119 33.376953 47.554688 C 33.143559 47.817256 32.833333 48 32.25 48 C 31.666667 48 31.356441 47.817255 31.123047 47.554688 C 30.889653 47.292119 30.75 46.902778 30.75 46.5 C 30.75 46.097222 30.889653 45.707881 31.123047 45.445312 C 31.356441 45.182744 31.666667 45 32.25 45 z M 52 45 C 52.807123 45 53.578031 45.136949 54.296875 45.386719 C 52.102594 49.037013 49.038723 52.100278 45.388672 54.294922 C 45.139252 53.576593 45 52.806483 45 52 C 45 48.122516 48.122516 45 52 45 z M 6.1894531 50.142578 C 5.9354531 50.110703 5.6691719 50.17475 5.4511719 50.34375 L 3.8710938 51.570312 C 3.4350937 51.909313 3.3573125 52.537609 3.6953125 52.974609 C 3.8933125 53.228609 4.1883281 53.361328 4.4863281 53.361328 C 4.7003281 53.361328 4.9166562 53.292391 5.0976562 53.150391 L 6.6777344 51.923828 C 7.1137344 51.584828 7.1934688 50.958484 6.8554688 50.521484 C 6.6864688 50.302984 6.4434531 50.174453 6.1894531 50.142578 z M 9.2578125 53.759766 C 9.0020625 53.759766 8.7462812 53.857234 8.5507812 54.052734 L 7.1367188 55.466797 C 6.7457188 55.857797 6.7457187 56.489859 7.1367188 56.880859 C 7.3317188 57.075859 7.58775 57.173828 7.84375 57.173828 C 8.09975 57.173828 8.3557812 57.075859 8.5507812 56.880859 L 9.9648438 55.466797 C 10.355844 55.075797 10.355844 54.443734 9.9648438 54.052734 C 9.7693438 53.857234 9.5135625 53.759766 9.2578125 53.759766 z M 32 54 C 34.516109 54 36.699881 55.331163 37.933594 57.3125 C 36.027267 57.756816 34.042673 58 32 58 C 29.951878 58 27.96176 57.757168 26.050781 57.310547 C 27.284432 55.324488 29.480237 54 32 54 z M 12.757812 56.958984 C 12.503938 56.990984 12.261297 57.121344 12.091797 57.339844 L 10.865234 58.919922 C 10.527234 59.355922 10.606969 59.983266 11.042969 60.322266 C 11.225969 60.464266 11.440297 60.53125 11.654297 60.53125 C 11.953297 60.53125 12.249313 60.398531 12.445312 60.144531 L 13.671875 58.564453 C 14.009875 58.128453 13.930141 57.501109 13.494141 57.162109 C 13.276141 56.992609 13.011687 56.926984 12.757812 56.958984 z" stroke-linecap="round" />
        </g>
        </svg>
        `,
        level: 'Basic',
    },
  ];
  
  export {
    frontendSkills,
    otherSkills  
} 