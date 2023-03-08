import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faMagnifyingGlass,
  faCirclePlus,
  faMusic,
  faComment,
  faPenNib,
  faTag,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faUser,
  faCommentDots,
  faEnvelopeOpen,
  faBell,
  faCalendar,
} from '@fortawesome/free-regular-svg-icons';
library.add(
  faMagnifyingGlass,
  faCirclePlus,
  faMusic,
  faComment,
  faPenNib,
  faTag,
  faBookmark,
  faUser,
  faCommentDots,
  faEnvelopeOpen,
  faBell,
  faCalendar
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
