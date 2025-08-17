import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import backend_icon from './backend-icon.png';
import web_icon_dark from './web-icon-dark.png';
import mobile_icon_dark from './mobile-icon-dark.png';
import ui_icon_dark from './ui-icon-dark.png';
import backend_icon_dark from './backend-icon-dark.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import chatgpt from './chatgpt.png';
import aws from './aws.png';
import netlify from './netlify.png';
import postman from './postman.png';
import photoshop from './photoshop.png';
import illustrator from './illustrator.png';
import mysql from './mysql.png';
import stripe from './stripe.png';
import android_studio from './android_studio.png';
import paypal from './paypal.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    backend_icon,
    web_icon_dark,
    mobile_icon_dark,
    ui_icon_dark,
    backend_icon_dark,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    chatgpt,
    aws,
    netlify,
    postman,
    photoshop,
    illustrator,
    mysql,
    stripe,
    android_studio,
    paypal
};


export const workData = [
  {
    key: 'blog',
    bgImage: '/work-educativa-web.jpg',
    link: 'https://cuentame-un-poquito.com/'
  },
  {
    key: 'agenda',
    bgImage: '/work-agenda-nutriologia.jpg',
    link: 'https://nutriologadalid.com/'
  },
  {
    key: 'ecommerce',
    bgImage: '/work-tienda-3d.jpg',
    link: '#'
  },
  {
    key: 'diccionario',
    bgImage: '/work-diccionario-app.jpg',
    link: 'https://gentilicios.netlify.app/'
  }




//   {
//     title: 'Portal de registro',
//     description: 'Sistema para registrar y gestionar participantes en eventos. Incluye inscripción en línea, gestión de asistentes, recordatorios automáticos y reportes de asistencia.',
//     bgImage: '/work-eventos.png',
//     link: '#'
//   },
];






export const serviceData = [
  { icon: assets.web_icon, iconDark: assets.web_icon_dark, titleKey: "web.title", descriptionKey: "web.description", link: '' },
  { icon: assets.mobile_icon, iconDark: assets.mobile_icon_dark, titleKey: "mobile.title", descriptionKey: "mobile.description", link: '' },
  { icon: assets.backend_icon, iconDark: assets.backend_icon_dark, titleKey: "automation.title", descriptionKey: "automation.description", link: '' },
  { icon: assets.ui_icon, iconDark: assets.ui_icon_dark, titleKey: "uiux.title", descriptionKey: "uiux.description", link: '' }
];


export const infoList = [
  { icon: assets.code_icon, iconDark: assets.code_icon_dark, titleKey: "languages.title", listKey: "languages.list" },
  { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, titleKey: "education.title", listKey: "education.list" },
  { icon: assets.project_icon, iconDark: assets.project_icon_dark, titleKey: "projects.title", listKey: "projects.list" }
];


export const toolsData = [
  { icon: assets.vscode, name: "VS Code" },
  { icon: assets.firebase, name: "Firebase" },
  { icon: assets.mongodb, name: "MongoDB" },
  { icon: assets.git, name: "Git" },
  { icon: assets.chatgpt, name: "IA" },
  { icon: assets.aws, name: "AWS" },
  { icon: assets.netlify, name: "Netlify" },
  { icon: assets.postman, name: "Postman" },
  { icon: assets.mysql, name: "MySQL" },
  { icon: assets.stripe, name: "Stripe" },
  { icon: assets.android_studio, name: "Android Studio" },
  { icon: assets.paypal, name: "PayPal" },
];
