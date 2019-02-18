//Components Import for Routes
import EventTable from './components/table/EventTable.vue';
import Calendar from './components/calendar/Calendar.vue';
import Contacts from './components/contacts/Contacts.vue';


//Routes
export const routes = [
  {path:'/', component: EventTable},
  {path:'/calendar', component: Calendar},
  {path:'/contacts', component: Contacts}
];
