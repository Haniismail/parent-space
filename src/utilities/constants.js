import Im_Accueil from '../assets/img/icons/home.svg';
import Im_Facebook from '../assets/img/icons/facebook.svg';
import Im_Instagram from '../assets/img/icons/instagram.svg';
import Im_Youtube from '../assets/img/icons/youtube.svg';
import Bullets from '../assets/img/icons/Bullets.svg';
import Card from '../assets/img/icons/Card.svg';
import Video from '../assets/img/icons/Video.svg';
import File from '../assets/img/icons/File.svg';
import profileImg1 from '../assets/img/icons/avatar-male.png';
import profileImg2 from '../assets/img/icons/avatar-female.png';
import Svt from '../assets/img/svt.svg';
import anglais from '../assets/img/anglais.svg';
import arabic from '../assets/img/arabic.svg';
import aides from '../assets/img/aides.svg';
import maths from '../assets/img/maths.svg';
import history from '../assets/img/history.png';
import physique from '../assets/img/physique.svg';
import geo from '../assets/img/geo.png';
import francais from '../assets/img/francais.svg';
import chimie from '../assets/img/chimie.jpg';
import informatique from '../assets/img/informatique.jpg';
export default {
  HEADERS_API: {
    'Content-Type': 'application/json',

    'Accept': 'application/json',
  },

  DRAWER_WIDTH: 280,

  SIDEBAR_LIST: [
    {
      id: 1,

      icon: Im_Accueil,

      name: 'Accueil',

      url: '/',

      type: 'route',

      permission: false,
    },

    {
      id: 2,

      icon: Video,

      name: 'En direct',

      url: '/endirect',

      type: 'route',

      permission: false,
    },

    {
      id: 3,

      icon: Bullets,

      name: 'Travail en direct',

      url: '/travailAFaire',

      type: 'route',

      permission: false,
    },
    {
      id: 4,

      icon: File,

      name: 'Examens',

      url: '/examens',

      type: 'route',

      permission: false,
    },

    {
      id: 5,

      icon: Card,

      name: 'Porte monnaie',

      url: '/porte-monnaie',

      type: 'route',

      permission: false,
    },
  ],

  SOCIALS_LIST: [
    {
      name: 'Facebook',

      img: Im_Facebook,

      url: 'https://www.facebook.com/takiacademy',
    },

    {
      name: 'Instagram',

      img: Im_Instagram,

      url: 'https://www.instagram.com/takiacademy',
    },

    {
      name: 'Youtube',

      img: Im_Youtube,

      url: 'https://www.youtube.com/takiacademy',
    },
  ],

  STUDENTS_DATA: [
    {
      name: 'enfant1',
      id: 1001001,
      isAdded: true,
      email: 'enfant1@gmail.com',
      classes: '7ème de base',
      SubjectOption: 'Italien',
      files: 'file.pdf',
      image: profileImg1,
      sessions: [
        {
          date: '28/01/2022 16:00',
          name: 'seance 11',
          duration: '01:55:05',
        },
        {
          date: '11/01/2022 17:00',
          name: 'seance 22',
          duration: 'Absent',
        },
        {
          date: '08/01/2022 08:00',
          name: 'seance 33',
          duration: '01:55:05',
        },
      ],
      enregistrement: [
        {
          date: "Aujourd'hui 13:00",
          prof: 'amine',
          matiere: 'Math',
        },
        {
          date: "Aujourd'hui 15:00",
          prof: 'fares',
          matiere: 'svt',
        },
        {
          date: "Aujourd'hui 20:00",
          prof: 'hani',
          matiere: 'anglais',
        },
      ],
      progression: [
        {
          'image': Svt,
          percentage: 89,
          matiere: 'SVT',
        },
        {
          'image': maths,
          percentage: 69,
          matiere: 'Maths',
        },
        {
          'image': physique,
          percentage: 74,
          matiere: 'Physique',
        },
        {
          'image': chimie,
          percentage: 23,
          matiere: 'Chimie',
        },
        {
          'image': informatique,
          percentage: 23,
          matiere: 'Informatique(Pascal)',
        },

        {
          'image': informatique,
          percentage: 66,
          matiere: 'Informatique(Python)',
        },
        {
          'image': francais,
          percentage: 20,
          matiere: 'Francais',
        },
        {
          'image': anglais,
          percentage: 12,
          matiere: 'Anglais',
        },
        {
          'image': arabic,
          percentage: 59,
          matiere: 'عربية',
        },

        {
          'image': history,
          percentage: 100,
          matiere: 'فلسفة',
        },
        {
          'image': geo,
          percentage: 100,
          matiere: 'Espanyol',
        },
        {
          'image': aides,
          percentage: 91,
          matiere: 'نصائح و توجيه',
        },
      ],
      examens: [
        {
          // id: 1,
          numeroExamen: 'Examen 1',
          dateFin: '30/11/2021 20:30',
          dateExam: '28/05/2022',
          Prof: 'Mondher Kbaier',
          session: 'Séance 1',
          subject: 'Matière',
          mark: '15,5',
        },
        {
          numeroExamen: 'Examen 2',
          dateFin: '30/11/2021 21:30',
          dateExam: '28/01/2022',
          Prof: 'Ons Jabeur ',
          session: 'Séance 2',
          subject: 'Matière',
          mark: '',
          examen: 'Fichier 1',
          correction: 'Fichier 1',
        },
        {
          numeroExamen: 'Examen 3',
          dateFin: '30/11/2021 19:30',
          dateExam: '10/02/2022',
          Prof: 'Lakhder berich',
          session: 'Séance 3',
          subject: 'Matière',
          mark: '17',
          examen: '',
          correction: '',
        },
        {
          numeroExamen: 'Examen 4',
          dateFin: '30/11/2021 18:30',
          dateExam: '14/01/2022',
          Prof: 'Tarek Dhiab',
          session: 'Séance 1',
          subject: 'Matière',
          mark: '20',
          examen: 'Fichier 1',
          correction: 'Fichier 1',
        },
      ],
    },
    {
      name: 'enfant2',
      isAdded: true,
      id: 1001002,
      email: 'enfant2@gmail.com',
      classes: '7ème de base',
      SubjectOption: 'Italien',
      files: 'file.pdf',
      image: profileImg2,
      enregistrement: [
        {
          date: "Aujourd'hui 14:00",
          prof: 'Ghassen',
          matiere: 'Informatique',
        },
        {
          date: "Aujourd'hui 15:00",
          prof: 'Dali',
          matiere: 'Philosophie',
        },
        {
          date: "Aujourd'hui 20:00",
          prof: 'Hani',
          matiere: 'Francais',
        },
      ],

      sessions: [
        {
          date: '28/02/2022 16:00',
          name: 'seance1',
          duration: '02:55:05',
        },
        {
          date: '28/02/2022 16:00',
          name: 'seance2',
          duration: '02:55:05',
        },
        {
          date: '28/02/2022 16:00',
          name: 'seance2',
          duration: '',
        },
        {
          date: '28/02/2022 16:00',
          name: 'seance2',
          duration: '02:55:05',
        },
      ],
      examens: [
        {
          numeroExamen: 'Examen n 1',
          dateFin: '30/11/2021 20:30',
          dateExam: '28/01/2022',
          Prof: 'Hani Ismail',
          session: 'Séance 1',
          subject: 'Matière',
          mark: '15.5',
          examen: 'Fichier 1',
          correction: 'Fichier 1',
        },
        {
          numeroExamen: 'Examen n 2',
          dateFin: '30/11/2021 20:30',
          dateExam: '28/01/2022',
          Prof: 'Achref ben Mohammed',
          session: 'Séance 1',
          subject: 'Matière',
          mark: '15.5',
          examen: 'Fichier 1',
          correction: 'Fichier 1',
        },
        {
          numeroExamen: 'Examen n 3',
          dateFin: '30/11/2021 20:30',
          dateExam: '28/01/2022',
          Prof: 'Mohamed ali ben Romdhan',
          session: 'Séance 1',
          subject: 'Matière',
          mark: '15.5',
          examen: 'Fichier 1',
          correction: 'Fichier 1',
        },
        {
          numeroExamen: 'Examen n 4',
          dateFin: '30/11/2021 20:30',
          dateExam: '28/01/2022',
          Prof: 'Ghassen Yaakoubi',
          session: 'Séance 1',
          subject: 'Matière',
          mark: '15.5',
          examen: 'Fichier 1',
          correction: 'Fichier 1',
        },
      ],
      progression: [
        {
          'image': Svt,
          percentage: 0,
          matiere: 'SVT',
        },
        {
          'image': maths,
          percentage: 0,
          matiere: 'Maths',
        },
        {
          'image': physique,
          percentage: 0,
          matiere: 'Physique',
        },
        {
          'image': chimie,
          percentage: 0,
          matiere: 'Chimie',
        },
        {
          'image': informatique,
          percentage: 0,
          matiere: 'Informatique(Pascal)',
        },

        {
          'image': informatique,
          percentage: 0,
          matiere: 'Informatique(Python)',
        },
        {
          'image': francais,
          percentage: 0,
          matiere: 'Francais',
        },
        {
          'image': anglais,
          percentage: 0,
          matiere: 'Anglais',
        },
        {
          'image': arabic,
          percentage: 0,
          matiere: 'عربية',
        },

        {
          'image': history,
          percentage: 0,
          matiere: 'فلسفة',
        },
        {
          'image': geo,
          percentage: 0,
          matiere: 'Espanyol',
        },
        {
          'image': aides,
          percentage: 0,
          matiere: 'نصائح و توجيه',
        },
      ],
    },
    {
      name: 'enfant3',
      isAdded: true,
      id: 1001003,
      email: 'enfant3@gmail.com',
      classes: '7ème de base',
      SubjectOption: 'Allmend',
      files: 'file.pdf',
      image: profileImg1,
      sessions: [],
      enregistrement: [
        {
          date: "Aujourd'hui 12:00",
          prof: 'Karbia',
          matiere: 'Math',
        },
        {
          date: "Aujourd'hui 15:30",
          prof: 'Achref',
          matiere: 'Informatique',
        },
        {
          date: "Aujourd'hui 21:00",
          prof: 'Ghassen',
          matiere: 'Arab',
        },
      ],
      examens: [
        {
          numeroExamen: 'examen 1',
          dateFin: '30/11/2021 20:30',
          dateExam: '30/12/2020',
          Prof: 'Farouk ben Mustpha',
          session: 'Séance 1',
          subject: 'Matière',
          mark: '15.5',
          examen: '',
          correction: '',
        },
        {
          numeroExamen: 'examen 2',
          dateFin: '30/11/2021 20:30',
          dateExam: '28/03/2022',
          Prof: 'Ghassen yaakoubi',
          session: 'Séance 1',
          subject: 'Matière',
          mark: '15.5',
          examen: '',
          correction: '',
        },
        {
          numeroExamen: 'examen 3',
          dateFin: '30/11/2021 20:30',
          dateExam: '28/03/2022',
          Prof: 'Montasar Talbi',
          session: 'Séance 1',
          subject: 'Matière',
          mark: '15.5',
          examen: '',
          correction: '',
        },
      ],
      progression: [
        {
          'image': Svt,
          percentage: 60,
          matiere: 'SVT',
        },
        {
          'image': maths,
          percentage: 60,
          matiere: 'Maths',
        },
        {
          'image': physique,
          percentage: 22,
          matiere: 'Physique',
        },
        {
          'image': chimie,
          percentage: 22,
          matiere: 'Chimie',
        },
        {
          'image': informatique,
          percentage: 55,
          matiere: 'Informatique(Pascal)',
        },

        {
          'image': informatique,
          percentage: 55,
          matiere: 'Informatique(Python)',
        },
        {
          'image': francais,
          percentage: 69,
          matiere: 'Francais',
        },
        {
          'image': anglais,
          percentage: 69,
          matiere: 'Anglais',
        },
        {
          'image': arabic,
          percentage: 69,
          matiere: 'عربية',
        },

        {
          'image': history,
          percentage: 42,
          matiere: 'فلسفة',
        },
        {
          'image': geo,
          percentage: 0,
          matiere: 'Espanyol',
        },
        {
          'image': aides,
          percentage: 1,
          matiere: 'نصائح و توجيه',
        },
      ],
    },
    {
      name: 'enfant4',
      isAdded: true,
      id: 12141141,
      email: 'enfant4@gmail.com',
      classes: '7ème de base',
      SubjectOption: 'Italien',
      files: 'file.pdf',
      image: profileImg2,
      sessions: [],
      enregistrement: [
        {
          date: "Aujourd'hui 13:00",
          prof: 'amine',
          matiere: 'Math',
        },
        {
          date: "Aujourd'hui 15:00",
          prof: 'fares',
          matiere: 'svt',
        },
        {
          date: "Aujourd'hui 20:00",
          prof: 'hani',
          matiere: 'anglais',
        },
      ],
      examens: [
        {
          numeroExamen: 'examen 1',
          dateFin: '30/11/2021 20:30',
          dateExam: '28/01/2022',
          Prof: 'Amina karkni',
          session: 'Séance 1',
          subject: 'Matière',
          mark: '15.5',
          examen: '',
          correction: '',
        },
        {
          numeroExamen: 'examen 2',
          dateFin: '30/11/2021 20:30',
          dateExam: '28/01/2022',
          Prof: 'Aymen Balbouli',
          session: 'Séance 1',
          subject: 'Matière',
          mark: '15.5',
          examen: '',
          correction: '',
        },
      ],

      progression: [
        {
          'image': Svt,
          percentage: 55,
          matiere: 'SVT',
        },
        {
          'image': maths,
          percentage: 55,
          matiere: 'Maths',
        },
        {
          'image': physique,
          percentage: 55,
          matiere: 'Physique',
        },
        {
          'image': chimie,
          percentage: 55,
          matiere: 'Chimie',
        },
        {
          'image': informatique,
          percentage: 55,
          matiere: 'Informatique(Pascal)',
        },

        {
          'image': informatique,
          percentage: 55,
          matiere: 'Informatique(Python)',
        },
        {
          'image': francais,
          percentage: 55,
          matiere: 'Francais',
        },
        {
          'image': anglais,
          percentage: 55,
          matiere: 'Anglais',
        },
        {
          'image': arabic,
          percentage: 55,
          matiere: 'عربية',
        },

        {
          'image': history,
          percentage: 55,
          matiere: 'فلسفة',
        },
        {
          'image': geo,
          percentage: 55,
          matiere: 'Espanyol',
        },
        {
          'image': aides,
          percentage: 55,
          matiere: 'نصائح و توجيه',
        },
      ],
    },
  ],
};
