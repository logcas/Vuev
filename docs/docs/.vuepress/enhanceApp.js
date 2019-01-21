import Vuev from '@everlastlucas/vuev';
import '@everlastlucas/vuev/dist/vuev.css';

export default ({
    Vue
}) => {
    console.log('enhance');
    Vue.use(Vuev);
}