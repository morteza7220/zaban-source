import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestView from '../views/TestView.vue';
import Splash   from  '../components/Splash.vue';
import ZabanIndex from  '../components/zaban/ZabanIndex.vue';
import ArticleIndex from  '../components/ArticleIndex.vue';
import challengeIndex from  '../components/challenge/challengeIndex.vue';
import Bodykeep from  '../components/articles/Bodykeep.vue';
import Autism  from  '../components/articles/Autism.vue';
import challengeHome from '../components/challenge/challengeHome.vue';
import EricFroom from '../components/articles/EricFroom.vue';
import beting from '../components/articles/beting.vue';
import login from '../components/auth/login.vue';
import IntroBook from '../components/blog/IntroBook.vue';
import BlogIndex from '../components/blog/BlogIndex.vue';
import startIndex from '../components/match/startIndex.vue';

import hafezIndex from '../components/hafez/index.vue';

import Paye7Index from    '../components/zaban/paye7/Paye7Index.vue';
    import Paye70Index from   '../components/zaban/paye7/dars0/Paye70Index.vue';
    import Paye70Word from    '../components/zaban/paye7/dars0/Paye70Words.vue';


    import Paye71Index from   '../components/zaban/paye7/dars1/Paye71Index.vue';
    import Paye71Word from    '../components/zaban/paye7/dars1/Paye71Words.vue';
    import Paye71Context from '../components/zaban/paye7/dars1/Paye71Context.vue';


    import Paye72Index from   '../components/zaban/paye7/dars2/Paye72Index.vue';
    import Paye72Word from    '../components/zaban/paye7/dars2/Paye72Words.vue';
    import Paye72Context from '../components/zaban/paye7/dars2/Paye72Context.vue';

    import Paye73Index from   '../components/zaban/paye7/dars3/Paye73Index.vue';
    import Paye73Word from    '../components/zaban/paye7/dars3/Paye73Words.vue';
    import Paye73Context from '../components/zaban/paye7/dars3/Paye73Context.vue';


    import Paye74Index from   '../components/zaban/paye7/dars4/Paye74Index.vue';
    import Paye74Word from    '../components/zaban/paye7/dars4/Paye74Words.vue';
    import Paye74Context from '../components/zaban/paye7/dars4/Paye74Context.vue';


    import Paye75Index from   '../components/zaban/paye7/dars5/Paye75Index.vue';
    import Paye75Word from    '../components/zaban/paye7/dars5/Paye75Words.vue';
    import Paye75Context from '../components/zaban/paye7/dars5/Paye75Context.vue';


    import Paye76Index from   '../components/zaban/paye7/dars6/Paye76Index.vue';
    import Paye76Word from    '../components/zaban/paye7/dars6/Paye76Words.vue';
    import Paye76Context from '../components/zaban/paye7/dars6/Paye76Context.vue';


    import Paye77Index from   '../components/zaban/paye7/dars7/Paye77Index.vue';
    import Paye77Word from    '../components/zaban/paye7/dars7/Paye77Words.vue';
    import Paye77Context from '../components/zaban/paye7/dars7/Paye77Context.vue';


    import Paye78Index from   '../components/zaban/paye7/dars8/Paye78Index.vue';
    import Paye78Word from    '../components/zaban/paye7/dars8/Paye78Words.vue';
    import Paye78Context from '../components/zaban/paye7/dars8/Paye78Context.vue';


import Paye8Index from    '../components/zaban/paye8/Paye8Index.vue';
    import Paye81Index from   '../components/zaban/paye8/dars1/Paye81Index.vue';
    import Paye81Word from    '../components/zaban/paye8/dars1/Paye81Words.vue';
    import Paye81Context from '../components/zaban/paye8/dars1/Paye81Context.vue';

    import Paye82Index from   '../components/zaban/paye8/dars2/Paye82Index.vue';
    import Paye82Word from    '../components/zaban/paye8/dars2/Paye82Words.vue';
    import Paye82Context from '../components/zaban/paye8/dars2/Paye82Context.vue';

    import Paye83Index from   '../components/zaban/paye8/dars3/Paye83Index.vue';
    import Paye83Word from    '../components/zaban/paye8/dars3/Paye83Words.vue';
    import Paye83Context from '../components/zaban/paye8/dars3/Paye83Context.vue';

    import Paye84Index from   '../components/zaban/paye8/dars4/Paye84Index.vue';
    import Paye84Word from    '../components/zaban/paye8/dars4/Paye84Words.vue';
    import Paye84Context from '../components/zaban/paye8/dars4/Paye84Context.vue';

    import Paye85Index from   '../components/zaban/paye8/dars5/Paye85Index.vue';
    import Paye85Word from    '../components/zaban/paye8/dars5/Paye85Words.vue';
    import Paye85Context from '../components/zaban/paye8/dars5/Paye85Context.vue';


    import Paye86Index from   '../components/zaban/paye8/dars6/Paye86Index.vue';
    import Paye86Word from    '../components/zaban/paye8/dars6/Paye86Words.vue';
    import Paye86Context from '../components/zaban/paye8/dars6/Paye86Context.vue';


    import Paye87Index from   '../components/zaban/paye8/dars7/Paye87Index.vue';
    import Paye87Word from    '../components/zaban/paye8/dars7/Paye87Words.vue';
    import Paye87Context from '../components/zaban/paye8/dars7/Paye87Context.vue';






import Paye9Index from    '../components/zaban/paye9/Paye9Index.vue';
    import Paye91Index from   '../components/zaban/paye9/dars1/Paye91Index.vue';
    import Paye91Word from    '../components/zaban/paye9/dars1/Paye91Words.vue';
    import Paye91Context from '../components/zaban/paye9/dars1/Paye91Context.vue';

    import Paye92Index from   '../components/zaban/paye9/dars2/Paye92Index.vue';
    import Paye92Word from    '../components/zaban/paye9/dars2/Paye92Words.vue';
    import Paye92Context from '../components/zaban/paye9/dars2/Paye92Context.vue';

    import Paye93Index from   '../components/zaban/paye9/dars3/Paye93Index.vue';
    import Paye93Word from    '../components/zaban/paye9/dars3/Paye93Words.vue';
    import Paye93Context from '../components/zaban/paye9/dars3/Paye93Context.vue';

    import Paye94Index from   '../components/zaban/paye9/dars4/Paye94Index.vue';
    import Paye94Word from    '../components/zaban/paye9/dars4/Paye94Words.vue';
    import Paye94Context from '../components/zaban/paye9/dars4/Paye94Context.vue';

    import Paye95Index from   '../components/zaban/paye9/dars5/Paye95Index.vue';
    import Paye95Word from    '../components/zaban/paye9/dars5/Paye95Words.vue';
    import Paye95Context from '../components/zaban/paye9/dars5/Paye95Context.vue';


    import Paye96Index from   '../components/zaban/paye9/dars6/Paye96Index.vue';
    import Paye96Word from    '../components/zaban/paye9/dars6/Paye96Words.vue';
    import Paye96Context from '../components/zaban/paye9/dars6/Paye96Context.vue';







import Paye10Index from    '../components/zaban/paye10/Paye10Index.vue';
    import Paye101Index from   '../components/zaban/paye10/dars1/Paye101Index.vue';
    import Paye101Word from    '../components/zaban/paye10/dars1/Paye101Words.vue';
    import Paye101Context from '../components/zaban/paye10/dars1/Paye101Context.vue';

    import Paye102Index from   '../components/zaban/paye10/dars2/Paye102Index.vue';
    import Paye102Word from    '../components/zaban/paye10/dars2/Paye102Words.vue';
    import Paye102Context from '../components/zaban/paye10/dars2/Paye102Context.vue';

    import Paye103Index from   '../components/zaban/paye10/dars3/Paye103Index.vue';
    import Paye103Word from    '../components/zaban/paye10/dars3/Paye103Words.vue';
    import Paye103Context from '../components/zaban/paye10/dars3/Paye103Context.vue';

    import Paye104Index from   '../components/zaban/paye10/dars4/Paye104Index.vue';
    import Paye104Word from    '../components/zaban/paye10/dars4/Paye104Words.vue';
    import Paye104Context from '../components/zaban/paye10/dars4/Paye104Context.vue';



import Paye11Index from    '../components/zaban/paye11/Paye11Index.vue';

    import Paye111Index from   '../components/zaban/paye11/dars1/Paye111Index.vue';
    import Paye111Word from    '../components/zaban/paye11/dars1/Paye111Words.vue';
    import Paye111Context from '../components/zaban/paye11/dars1/Paye111Context.vue';

    import Paye112Index from   '../components/zaban/paye11/dars2/Paye112Index.vue';
    import Paye112Word from    '../components/zaban/paye11/dars2/Paye112Words.vue';
    import Paye112Context from '../components/zaban/paye11/dars2/Paye112Context.vue';

    import Paye113Index from   '../components/zaban/paye11/dars3/Paye113Index.vue';
    import Paye113Word from    '../components/zaban/paye11/dars3/Paye113Words.vue';
    import Paye113Context from '../components/zaban/paye11/dars3/Paye113Context.vue';



import Paye12Index from    '../components/zaban/paye12/Paye12Index.vue';

    import Paye121Index from   '../components/zaban/paye12/dars1/Paye121Index.vue';
    import Paye121Word from    '../components/zaban/paye12/dars1/Paye121Words.vue';
    import Paye121Context from '../components/zaban/paye12/dars1/Paye121Context.vue';

    import Paye122Index from   '../components/zaban/paye12/dars2/Paye122Index.vue';
    import Paye122Word from    '../components/zaban/paye12/dars2/Paye122Words.vue';
    import Paye122Context from '../components/zaban/paye12/dars2/Paye122Context.vue';

    import Paye123Index from   '../components/zaban/paye12/dars3/Paye123Index.vue';
    import Paye123Word from    '../components/zaban/paye12/dars3/Paye123Words.vue';
    import Paye123Context from '../components/zaban/paye12/dars3/Paye123Context.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {path: '/',name: 'splash',component: Splash},
     {path: '/homeview',name: 'homeview',component: HomeView},
     {path: '/testview',name: 'testview',component: TestView},
     {path: '/zabanindex',name: 'zabanindex',component: ZabanIndex},
     {path: '/articleindex',name: 'articleindex',component: ArticleIndex},
     {path: '/bodykeep',name: 'bodykeep',component: Bodykeep},
     {path: '/autism',name: 'autism',component: Autism },


     {path: '/paye7index',name: 'paye7index',component: Paye7Index},

         {path: '/paye70index',name: 'paye70index',component: Paye70Index},
         {path: '/paye70word',name: 'paye70Word',component: Paye70Word},

         {path: '/paye71index',name: 'paye71index',component: Paye71Index},
         {path: '/paye71context',name: 'paye71context',component: Paye71Context},
         {path: '/paye71word',name: 'paye71Word',component: Paye71Word},

         {path: '/paye72index',name: 'paye72index',component: Paye72Index},
         {path: '/paye72context',name: 'paye72context',component: Paye72Context},
         {path: '/paye72word',name: 'paye72Word',component: Paye72Word},

         {path: '/paye73index',name: 'paye73index',component: Paye73Index},
         {path: '/paye73context',name: 'paye73context',component: Paye73Context},
         {path: '/paye73word',name: 'paye73Word',component: Paye73Word},

         {path: '/paye74index',name: 'paye74index',component: Paye74Index},
         {path: '/paye74context',name: 'paye74context',component: Paye74Context},
         {path: '/paye74word',name: 'paye74Word',component: Paye74Word},

         {path: '/paye75index',name: 'paye75index',component: Paye75Index},
         {path: '/paye75context',name: 'paye75context',component: Paye75Context},
         {path: '/paye75word',name: 'paye75Word',component: Paye75Word},

         {path: '/paye76index',name: 'paye76index',component: Paye76Index},
         {path: '/paye76context',name: 'paye76context',component: Paye76Context},
         {path: '/paye76word',name: 'paye76Word',component: Paye76Word},

         {path: '/paye77index',name: 'paye77index',component: Paye77Index},
         {path: '/paye77context',name: 'paye77context',component: Paye77Context},
         {path: '/paye77word',name: 'paye77Word',component: Paye77Word},

         {path: '/paye78index',name: 'paye78index',component: Paye78Index},
         {path: '/paye78context',name: 'paye78context',component: Paye78Context},
         {path: '/paye78word',name: 'paye78Word',component: Paye78Word},



     {path: '/paye8index',name: 'paye8index',component: Paye8Index},

         {path: '/paye81index',name: 'paye81index',component: Paye81Index},
         {path: '/paye81context',name: 'Paye81context',component: Paye81Context},
         {path: '/paye81word',name: 'Paye81Word',component: Paye81Word},

         {path: '/paye82index',name: 'paye82index',component: Paye82Index},
         {path: '/paye82context',name: 'Paye82context',component: Paye82Context},
         {path: '/paye82word',name: 'Paye82Word',component: Paye82Word},

         {path: '/paye83index',name: 'paye83index',component: Paye83Index},
         {path: '/paye83context',name: 'Paye83context',component: Paye83Context},
         {path: '/paye83word',name: 'Paye83Word',component: Paye83Word},
         
         {path: '/paye84index',name: 'paye84index',component: Paye84Index},
         {path: '/paye84context',name: 'Paye84context',component: Paye84Context},
         {path: '/paye84word',name: 'Paye84Word',component: Paye84Word},
         
         {path: '/paye85index',name: 'paye85index',component: Paye85Index},
         {path: '/paye85context',name: 'Paye85context',component: Paye85Context},
         {path: '/paye85word',name: 'Paye85Word',component: Paye85Word},
         
         {path: '/paye86index',name: 'paye86index',component: Paye86Index},
         {path: '/paye86context',name: 'Paye86context',component: Paye86Context},
         {path: '/paye86word',name: 'Paye86Word',component: Paye86Word},
         
         {path: '/paye87index',name: 'paye87index',component: Paye87Index},
         {path: '/paye87context',name: 'Paye87context',component: Paye87Context},
         {path: '/paye87word',name: 'Paye87Word',component: Paye87Word},




     {path: '/paye9index',name: 'paye9index',component: Paye9Index},

         {path: '/paye91index',name: 'paye91index',component: Paye91Index},
         {path: '/paye91context',name: 'Paye91context',component: Paye91Context},
         {path: '/paye91word',name: 'Paye91Word',component: Paye91Word},

         {path: '/paye92index',name: 'paye92index',component: Paye92Index},
         {path: '/paye92context',name: 'Paye92context',component: Paye92Context},
         {path: '/paye92word',name: 'Paye92Word',component: Paye92Word},

         {path: '/paye93index',name: 'paye93index',component: Paye93Index},
         {path: '/paye93context',name: 'Paye93context',component: Paye93Context},
         {path: '/paye93word',name: 'Paye93Word',component: Paye93Word},

         {path: '/paye94index',name: 'paye94index',component: Paye94Index},
         {path: '/paye94context',name: 'Paye94context',component: Paye94Context},
         {path: '/paye94word',name: 'Paye94Word',component: Paye94Word},

         {path: '/paye95index',name: 'paye95index',component: Paye95Index},
         {path: '/paye95context',name: 'Paye95context',component: Paye95Context},
         {path: '/paye95word',name: 'Paye95Word',component: Paye95Word},

         {path: '/paye96index',name: 'paye96index',component: Paye96Index},
         {path: '/paye96context',name: 'Paye96context',component: Paye96Context},
         {path: '/paye96word',name: 'Paye96Word',component: Paye96Word},
         


     {path: '/paye10index',name: 'paye10index',component: Paye10Index},

         {path: '/paye101index',name: 'paye101index',component: Paye101Index},
         {path: '/paye101context',name: 'Paye101context',component: Paye101Context},
         {path: '/paye101word',name: 'Paye101Word',component: Paye101Word},

         {path: '/paye102index',name: 'paye102index',component: Paye102Index},
         {path: '/paye102context',name: 'Paye102context',component: Paye102Context},
         {path: '/paye102word',name: 'Paye102Word',component: Paye102Word},

         {path: '/paye103index',name: 'paye103index',component: Paye103Index},
         {path: '/paye103context',name: 'Paye103context',component: Paye103Context},
         {path: '/paye103word',name: 'Paye103Word',component: Paye103Word},

         {path: '/paye104index',name: 'paye104index',component: Paye104Index},
         {path: '/paye104context',name: 'Paye104context',component: Paye104Context},
         {path: '/paye104word',name: 'Paye104Word',component: Paye104Word},


     {path: '/paye11index',name: 'paye11index',component: Paye11Index},

         {path: '/paye111index',name: 'paye111index',component: Paye111Index},
         {path: '/paye111context',name: 'paye111context',component: Paye111Context},
         {path: '/paye111word',name: 'paye111Word',component: Paye111Word},

         {path: '/paye112index',name: 'paye112index',component: Paye112Index},
         {path: '/paye112context',name: 'paye112context',component: Paye112Context},
         {path: '/paye112word',name: 'paye112Word',component: Paye112Word},

     {path: '/paye113index',name: 'paye113index',component: Paye113Index},
         {path: '/paye113context',name: 'paye113context',component: Paye113Context},
         {path: '/paye113word',name: 'paye113Word',component: Paye113Word},
         {path: '/paye12index',name: 'paye12index',component: Paye12Index},

         {path: '/paye121index',name: 'paye121index',component: Paye121Index},
         {path: '/paye121context',name: 'paye121context',component: Paye121Context},
         {path: '/paye121word',name: 'paye121Word',component: Paye121Word},

         {path: '/paye122index',name: 'paye122index',component: Paye122Index},
         {path: '/paye122context',name: 'paye122context',component: Paye122Context},
         {path: '/paye122word',name: 'paye122Word',component: Paye122Word},
         {path: '/paye123index',name: 'paye123index',component: Paye123Index},
{path: '/ericfroom',name: 'ericfroom', component: EricFroom },
         {path: '/paye123context',name: 'paye123context',component: Paye123Context},
{path: '/beting',name: 'beting', component: beting },
         {path: '/paye123word',name: 'paye123Word',component: Paye123Word},


{path: '/login',name: 'login', component: login },
{path: '/hafezIndex',name: 'hafezIndex', component: hafezIndex },
{path: '/challengehome',name: 'challengehome', component: challengeHome },
{path: '/challengeindex',name: 'challengeindex', component: challengeIndex },
{path: '/IntroBook',name: 'IntroBook', component: IntroBook },
{path: '/BlogIndex',name: 'BlogIndex', component: BlogIndex },
{path: '/startIndex',name: 'startIndex', component: startIndex },
    //   component: () => import('../components/zaban/paye7/dars1/Paye71Word.vue')
  ]
})

export default router
